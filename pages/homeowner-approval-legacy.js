// pages/visit-approval.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function VisitApproval() {
  const router = useRouter();
  const { id } = router.query;
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchVisit = async () => {
      const { data, error } = await supabase
        .from('visits')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setVisit(data);
      setLoading(false);
    };
    fetchVisit();
  }, [id]);

  const handleApprove = async (index) => {
    const updatedChecklist = [...visit.checklist];
    updatedChecklist[index].approved = true;
    setSubmitting(true);
    const { error } = await supabase
      .from('visits')
      .update({ checklist: updatedChecklist })
      .eq('id', visit.id);
    if (!error) {
      setVisit({ ...visit, checklist: updatedChecklist });
    }
    setSubmitting(false);
  };

  if (loading) return <p className="p-6 text-gray-500">Loading visit info...</p>;
  if (!visit) return <p className="p-6 text-red-500">Visit not found.</p>;

  const additionalTasksNeedingApproval = (visit.checklist || []).filter(
    t => t.addedBy === 'homeowner' && t.reviewed && t.billable && !t.approved
  );

  return (
    <main className="min-h-screen p-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Review Additional Tasks</h1>
        <p className="mb-6 text-sm text-gray-600">These tasks may fall outside your standard plan and may be billed if approved.</p>

        {additionalTasksNeedingApproval.length === 0 ? (
          <p>✅ You have no pending approvals. Everything looks good!</p>
        ) : (
          <ul className="space-y-4">
            {additionalTasksNeedingApproval.map((task, index) => (
              <li key={index} className="border rounded p-4 shadow-sm">
                <p className="font-medium text-gray-900">{task.label}</p>
                <p className="text-sm text-gray-600 mt-1">💲 ${task.price || 0} — {task.admin_note || 'No note provided'}</p>
                <button
                  onClick={() => handleApprove(index)}
                  disabled={submitting}
                  className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Approve Task
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}