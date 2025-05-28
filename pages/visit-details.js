// pages/visit-details.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function VisitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [visit, setVisit] = useState(null);
  const [visitTasks, setVisitTasks] = useState([]);
  const [availableTasks, setAvailableTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchVisitAndTasks = async () => {
      const { data: visitData } = await supabase
        .from('visits')
        .select('*, technician:technician_id (name, email, avatar_url)')
        .eq('id', id)
        .single();

      setVisit(visitData);

      const { data: tasksData } = await supabase
        .from('visit_tasks')
        .select('*')
        .eq('visit_id', id)
        .order('added_by', { ascending: true });

      setVisitTasks(tasksData || []);

      const { data: addableData } = await supabase
        .from('tasks')
        .select('*')
        .eq('is_addable', true);

      setAvailableTasks(addableData || []);
      if (addableData?.length > 0) {
        setActiveCategory(addableData[0].category);
      }

      setLoading(false);
    };

    fetchVisitAndTasks();
  }, [id]);

  const userTasks = visitTasks.filter(t => t.added_by === 'homeowner');
  const systemTasks = visitTasks.filter(t => t.added_by === 'system');

  const totalAddedDuration = userTasks.reduce((sum, task) => sum + (task.duration_minutes || 0), 0);
  const totalAddedPrice = userTasks.reduce((sum, task) => sum + (task.price || 0), 0);

  const taskDurationLimit = 90;
  const durationLimitReached = totalAddedDuration >= taskDurationLimit;

  const handleAddTaskFromLibrary = async (task) => {
    if (durationLimitReached) return;
    setSubmitting(true);

    const duration = task.duration_minutes || 15;

    const { error } = await supabase.from('visit_tasks').insert([
      {
        visit_id: visit.id,
        task_id: task.id,
        label: task.label,
        added_by: 'homeowner',
        billable: true,
        price: task.price || 85,
        duration_minutes: duration
      }
    ]);

    if (!error) {
      const { data: tasksData } = await supabase
        .from('visit_tasks')
        .select('*')
        .eq('visit_id', visit.id)
        .order('added_by', { ascending: true });
      setVisitTasks(tasksData || []);
    } else {
      console.error('Failed to add library task:', error.message);
    }

    setSubmitting(false);
  };

  const handleRemoveTask = async (taskId) => {
    setSubmitting(true);
    const { error } = await supabase.from('visit_tasks').delete().eq('id', taskId);
    if (!error) {
      setVisitTasks(prev => prev.filter(t => t.id !== taskId));
    } else {
      console.error('Failed to remove task:', error.message);
    }
    setSubmitting(false);
  };

  const tasksByCategory = availableTasks.reduce((acc, task) => {
    if (task.category === 'core-plan') return acc;
    if (!acc[task.category]) acc[task.category] = [];
    acc[task.category].push(task);
    return acc;
  }, {});

  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Visit Details</h1>
        <p><strong>Date:</strong> {new Date(visit?.scheduled_date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {visit?.location}</p>
        <p><strong>Homeowner Notes:</strong> {visit?.homeowner_notes || 'No notes provided.'}</p>

        {visit?.technician && (
          <div className="mt-6 flex items-center gap-4">
            <img
              src={visit.technician.avatar_url || 'https://randomuser.me/api/portraits/men/75.jpg'}
              alt="Technician Avatar"
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => (e.currentTarget.src = 'https://randomuser.me/api/portraits/lego/2.jpg')}
            />
            <div>
              <p><strong>Technician:</strong> {visit.technician.name}</p>
              <p className="text-sm text-gray-600">{visit.technician.email}</p>
            </div>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Included Tasks</h2>
          <ul className="space-y-2">
            {systemTasks.map(task => (
              <li key={task.id} className="border p-3 rounded bg-gray-50">
                <span className="font-medium">{task.label}</span>
                {task.completed && <span className="ml-2 text-green-600">✅</span>}
              </li>
            ))}
          </ul>
        </div>

        {userTasks.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Additional Requests</h2>
            <ul className="space-y-2">
              {userTasks.map(task => (
                <li key={task.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
                  <span className="font-medium">{task.label} {task.billable && <span className="text-sm text-red-500 ml-2">💲{task.price}</span>}</span>
                  <button
                    onClick={() => handleRemoveTask(task.id)}
                    className="text-xs text-gray-500 hover:text-red-600"
                    disabled={submitting}
                  >Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">➕ Add from Library</h2>

          <div className="mb-3 text-sm text-gray-600">
            <p><strong>Estimated Hours (Additional Tasks):</strong> {(totalAddedDuration / 60).toFixed(1)} hrs of 1.5 hrs max</p>
            <p><strong>Hourly Rate:</strong> $85/hr</p>
            <p><strong>Total Estimate:</strong> ${(totalAddedDuration / 60 * 85).toFixed(2)}</p>
            <p className="text-xs text-gray-400">*Estimate only — final time and cost may vary after in-person review.</p>
            {durationLimitReached && <p className="text-red-500">You've reached the maximum allowed time for add-on tasks.</p>}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(tasksByCategory).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory && tasksByCategory[activeCategory] && (
            <div className="mb-4">
              <ul className="space-y-2">
                {tasksByCategory[activeCategory].map(task => {
                  const alreadyAdded = userTasks.some(t => t.task_id === task.id);
                  return (
                    <li key={task.id} className="flex justify-between items-center border p-3 rounded bg-gray-50">
                      <span>{task.label}</span>
                      {alreadyAdded ? (
                        <span className="text-green-600 text-sm">✓ Added</span>
                      ) : (
                        <button
                          onClick={() => handleAddTaskFromLibrary(task)}
                          className="text-sm text-blue-600 border border-blue-600 px-2 py-1 rounded hover:bg-blue-50"
                          disabled={submitting || durationLimitReached}
                        >
                          Add
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}