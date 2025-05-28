// pages/admin/technician-view.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

export default function TechnicianView() {
  const router = useRouter();
  const { id } = router.query; // visit_id
  const [visit, setVisit] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const handlePhotoUpload = async (taskIndex, file) => {
    const task = tasks[taskIndex];
    const filename = `${task.id}-${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('task-photos')
      .upload(filename, file);

    if (!error) {
      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/task-photos/${filename}`;
      const existing = task.proof_photo_urls || [];
      handleTaskChange(taskIndex, {
        proof_photo_urls: [...existing, url],
      });
    }
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
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(index, e.target.files[0])}
              />
              {task.proof_photo_urls?.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {task.proof_photo_urls.map((url, i) => (
                    <img key={i} src={url} alt="Uploaded proof" className="rounded border" />
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