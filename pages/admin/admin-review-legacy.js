// pages/admin/visit-review.js
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function VisitReview() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      const { data, error } = await supabase
        .from('visits')
        .select('*');

      if (error) {
        console.error('Failed to fetch visits:', error.message);
      } else {
        setVisits(data);
      }
      setLoading(false);
    };

    fetchVisits();
  }, []);

  const updateChecklist = async (visitId, updatedChecklist) => {
    const { error } = await supabase
      .from('visits')
      .update({ checklist: updatedChecklist })
      .eq('id', visitId);
    if (error) {
      console.error('Failed to update checklist:', error.message);
    } else {
      setVisits(prev =>
        prev.map(v => v.id === visitId ? { ...v, checklist: updatedChecklist } : v)
      );
    }
  };

  const handleReview = (visit, index, updates) => {
    const checklist = [...visit.checklist];
    checklist[index] = {
      ...checklist[index],
      ...updates,
      reviewed: true,
    };
    updateChecklist(visit.id, checklist);
    setVisits(prev =>
      prev.map(v => {
        if (v.id !== visit.id) return v;
        return { ...v, checklist };
      })
    );
  };

  const handleInputChange = (visitId, index, field, value) => {
    setVisits(prev =>
      prev.map(v => {
        if (v.id !== visitId) return v;
        const checklist = [...v.checklist];
        checklist[index] = { ...checklist[index], [field]: value };
        return { ...v, checklist };
      })
    );
  };

  if (loading) return <p className="p-6 text-gray-500">Loading visits...</p>;

  const reviewableVisits = visits.filter(v => (v.checklist || []).some(item => item.addedBy === 'homeowner'));

  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Visit Review Dashboard</h1>
        {reviewableVisits.length === 0 ? (
          <p>No visits with homeowner-added tasks.</p>
        ) : (
          reviewableVisits.map(visit => (
            <div key={visit.id} className="mb-8 p-6 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Visit on {new Date(visit.scheduled_date).toLocaleDateString()}</h2>
              <p className="mb-4 text-sm text-gray-600">Location: {visit.location}</p>

              <ul className="space-y-4">
                {visit.checklist.map((item, index) => (
                  item.addedBy === 'homeowner' && (
                    <li key={index} className="border p-4 rounded bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="w-full">
                          <p className="font-medium">{item.label}</p>
                          {item.reviewed ? (
                            <p className="text-sm text-gray-600 mt-1">
                              {item.billable ? `💲 Billable - $${item.price || 0}` : '✅ Included in plan'}
                            </p>
                          ) : (
                            <p className="text-xs text-gray-500 mt-1">Mark as billable?</p>
                          )}

                          {!item.reviewed && (
                            <div className="flex gap-2 mt-2">
                              <button
                                className="text-sm text-green-700 border border-green-600 px-2 py-1 rounded hover:bg-green-50"
                                onClick={() => handleReview(visit, index, { billable: true, price: item.price || 85 })}
                              >
                                Yes
                              </button>
                              <button
                                className="text-sm text-gray-700 border border-gray-500 px-2 py-1 rounded hover:bg-gray-100"
                                onClick={() => handleReview(visit, index, { billable: false })}
                              >
                                No
                              </button>
                            </div>
                          )}

                          {item.billable && !item.reviewed && (
                            <div className="mt-3">
                              <label className="text-sm font-medium">Price ($)</label>
                              <input
                                type="number"
                                className="ml-2 border px-2 py-1 rounded text-sm w-24"
                                value={item.price || 85}
                                onChange={(e) => handleInputChange(visit.id, index, 'price', parseFloat(e.target.value))}
                              />
                            </div>
                          )}

                          <div className="mt-3">
                            <label className="text-sm font-medium">Admin Note</label>
                            <textarea
                              rows={2}
                              className="mt-1 w-full border px-2 py-1 rounded text-sm"
                              value={item.admin_note || ''}
                              onChange={(e) => handleInputChange(visit.id, index, 'admin_note', e.target.value)}
                              placeholder="Optional context (e.g. covers extra work under deck)"
                            />
                          </div>
                        </div>

                        {item.reviewed && (
  <div className="ml-4 mt-1">
    <button
      onClick={() => {
        if (!window.confirm('Are you sure you want to reopen this task for editing?')) return;
        const checklist = [...visit.checklist];
        checklist[index] = {
          ...checklist[index],
          reviewed: false,
        };
        updateChecklist(visit.id, checklist);
        setVisits(prev =>
          prev.map(v => v.id === visit.id ? { ...v, checklist } : v)
        );
      }}
      className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
    >
      Reopen
    </button>
  </div>
)}
                      </div>
                    </li>
                  )
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </main>
  );
}