// pages/admin/technician-view.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabaseClient';

export default function TechnicianView() {
  const router = useRouter();
  const { id } = router.query; // visit_id
  const [visits, setVisits] = useState([]);
  const [visit, setVisit] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploadingTaskIndex, setUploadingTaskIndex] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  const TECHNICIAN_ID = 'b43809b4-a28a-4a1b-9b43-922ed6baf216'; // Replace with dynamic tech ID logic later

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  useEffect(() => {
    const syncQueuedUploads = async () => {
      const queue = JSON.parse(localStorage.getItem('uploadQueue') || '[]');
      for (const item of queue) {
        if (item.type === 'photo') {
          const blob = base64ToBlob(item.fileData);
          const file = new File([blob], item.fileName);
          const taskIndex = tasks.findIndex(t => t.id === item.taskId);
          if (taskIndex !== -1) {
            await handlePhotoUpload(taskIndex, [file]);
          }
        }
      }
      localStorage.removeItem('uploadQueue');
    };

    if (isOnline) {
      syncQueuedUploads();
    }
  }, [isOnline, tasks]);

  useEffect(() => {
    const fetchVisits = async () => {
      const { data, error } = await supabase
        .from('visits')
        .select('id, scheduled_date, location')
        .eq('technician_id', TECHNICIAN_ID)
        .gte('scheduled_date', new Date().toISOString());

      if (!error) setVisits(data);
    };

    fetchVisits();
  }, []);

  useEffect(() => {
    if (!id) return;
    const fetchVisit = async () => {
      const { data, error } = await supabase
        .from('visits')
        .select('*, technician:technician_id (name, email)')
        .eq('id', id)
        .single();
      if (!error) setVisit(data);

      const { data: visitTasks } = await supabase
        .from('visit_tasks')
        .select('*')
        .eq('visit_id', id);

      setTasks(visitTasks || []);
      setLoading(false);
    };
    fetchVisit();
  }, [id]);

  const handleTaskChange = (index, updates) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index] = { ...newTasks[index], ...updates };
      return newTasks;
    });
  };

  const handlePhotoUpload = async (taskIndex, fileList) => {
    setUploadingTaskIndex(taskIndex);
    const task = tasks[taskIndex];
    const existing = task.proof_photo_urls || [];
    const newUrls = [];

    if (!navigator.onLine) {
      const offlineQueue = JSON.parse(localStorage.getItem('uploadQueue') || '[]');
      for (const file of fileList) {
        const base64 = await fileToBase64(file);
        offlineQueue.push({
          type: 'photo',
          taskId: task.id,
          fileName: file.name,
          fileData: base64
        });
      }
      localStorage.setItem('uploadQueue', JSON.stringify(offlineQueue));
      alert('Offline: Photo(s) queued for upload.');
      setUploadingTaskIndex(null);
      return;
    }

    for (const file of fileList) {
      const filename = `${task.id}-${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from('task-photos').upload(filename, file, {
  contentType: file.type,
  upsert: false,
});
      if (!error) {
        const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/task-photos/${filename}`;
        newUrls.push(url);
      }
    }

    const updatedUrls = [...existing, ...newUrls];

    await supabase
      .from('visit_tasks')
      .update({ proof_photo_urls: updatedUrls })
      .eq('id', task.id);

    handleTaskChange(taskIndex, { proof_photo_urls: updatedUrls });
    setUploadingTaskIndex(null);
  };

  const handleRemovePhoto = async (taskIndex, urlToRemove) => {
    const path = urlToRemove.split('/task-photos/')[1];
    await supabase.storage.from('task-photos').remove([path]);

    const updatedUrls = tasks[taskIndex].proof_photo_urls.filter(url => url !== urlToRemove);
    handleTaskChange(taskIndex, { proof_photo_urls: updatedUrls });

    await supabase
      .from('visit_tasks')
      .update({ proof_photo_urls: updatedUrls })
      .eq('id', tasks[taskIndex].id);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    for (const task of tasks) {
      await supabase
        .from('visit_tasks')
        .update({
          completed: task.completed || false,
          technician_notes: task.technician_notes || '',
          proof_photo_urls: task.proof_photo_urls || [],
        })
        .eq('id', task.id);
    }
    setSubmitting(false);
    alert('Visit updated successfully.');
  };

  if (!id) {
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Upcoming Visits</h1>
        <ul className="space-y-4">
          {visits.map(v => (
            <li key={v.id} className="border p-4 rounded hover:bg-gray-50">
              <p><strong>Date:</strong> {new Date(v.scheduled_date).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {v.location}</p>
              <Link href={`/admin/technician-view?id=${v.id}`} className="text-blue-600 underline mt-2 inline-block">View Tasks</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (loading) return <p className="p-6">Loading visit...</p>;
  if (!visit) return <p className="p-6 text-red-500">Visit not found.</p>;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Technician Task View</h1>
      <p><strong>Visit Date:</strong> {new Date(visit.scheduled_date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {visit.location}</p>

      <ul className="mt-6 space-y-4">
        {tasks.map((task, index) => (
          <li key={task.id} className="border rounded p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">{task.label}</span>
              <label className="text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={task.completed || false}
                  onChange={(e) => handleTaskChange(index, { completed: e.target.checked })}
                />
                Completed
              </label>
            </div>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              rows={2}
              placeholder="Add technician notes..."
              value={task.technician_notes || ''}
              onChange={(e) => handleTaskChange(index, { technician_notes: e.target.value })}
            />
            <div className="mt-2">
              <button
                onClick={() => document.getElementById(`photo-${task.id}`).click()}
                className="mt-1 px-3 py-1 bg-gray-200 rounded text-sm"
              >
                📷 Take Photo
              </button>
              <input
                id={`photo-${task.id}`}
                type="file"
                accept="image/*"
                multiple
                capture="environment"
                onChange={(e) => handlePhotoUpload(index, e.target.files)}
                className="hidden"
              />
              {uploadingTaskIndex === index && (
                <p className="text-sm text-blue-500 mt-1">Uploading...</p>
              )}
              {task.proof_photo_urls?.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {task.proof_photo_urls.map((url, i) => (
                    <div key={i} className="relative">
                      <img src={url} alt="Uploaded proof" className="rounded border" />
                      <button
                        onClick={() => handleRemovePhoto(index, url)}
                        className="absolute top-1 right-1 text-xs bg-red-600 text-white rounded px-1"
                      >✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {submitting ? 'Saving...' : 'Submit Visit'}
      </button>
    </main>
  );
}

// Helper functions
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}

function base64ToBlob(base64) {
  const parts = base64.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const uInt8Array = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}