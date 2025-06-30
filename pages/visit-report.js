import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function VisitReport() {
  const router = useRouter();
  const { id } = router.query;
  const [visit, setVisit] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareLink, setShareLink] = useState('');
  const reportRef = useRef();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      const { data: visitData } = await supabase
        .from('visits')
        .select('*, technician:technician_id (name, email, avatar_url), home:home_id (address, plan_type)')
        .eq('id', id)
        .single();
      setVisit(visitData);

      const { data: taskData } = await supabase
        .from('visit_tasks')
        .select('*')
        .eq('visit_id', id)
        .eq('completed', true);
      setTasks(taskData || []);
      setLoading(false);
      setShareLink(`${window.location.origin}/visit-report?id=${id}&share=true`);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (visit) {
      import('canvas-confetti').then((module) => {
        const confetti = module.default;
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });
      });
    }
  }, [visit]);

  if (loading) return <p className="p-6 text-gray-600">Loading your personalized visit report...</p>;
  if (!visit) return <p className="p-6 text-red-500">Visit not found.</p>;

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen py-8 px-4">
      <main
        ref={reportRef}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 transition-all duration-500"
      >
        <header className="mb-8 text-center">
          <img src="/upkept-logo.svg" alt="Upkept Logo" className="h-10 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-1 text-green-700 flex items-center justify-center gap-2">
            🎉 Great news! Your visit is complete
          </h1>
          <p className="text-gray-600 text-base mb-2">
            Completed on {visit.scheduled_date ? new Date(visit.scheduled_date).toLocaleDateString() : 'Unknown Date'}
          </p>
          <p className="text-gray-700 text-lg">{visit.home?.address || 'Address not available'}</p>
          {visit.home?.plan_type && (
            <div className="inline-block mt-2 bg-blue-100 text-blue-700 font-medium text-sm px-3 py-1 rounded-full shadow-sm">
              {visit.home.plan_type.charAt(0).toUpperCase() + visit.home.plan_type.slice(1)} Plan
            </div>
          )}

          {visit.technician ? (
            <div className="flex items-center justify-center mt-4 gap-3">
              <img
                src={visit.technician.avatar_url || 'https://ui-avatars.com/api/?name=Technician'}
                alt="Tech Avatar"
                className="w-12 h-12 rounded-full border shadow-sm"
              />
              <div className="text-left">
                <p className="text-base font-semibold text-gray-900">{visit.technician.name}</p>
                <p className="text-sm text-gray-500">{visit.technician.email}</p>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-gray-500 italic">Technician not assigned yet.</p>
          )}
        </header>

        <section className="mb-10 border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold mb-4">Tasks Completed</h2>
          {tasks.length > 0 ? tasks.map(task => (
            <div key={task.id} className="mb-6 bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-green-700 font-semibold text-lg shadow-sm">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                {task.label}
              </p>
              <p className="text-gray-700 mt-2">🗨️ {task.technician_notes || 'No notes.'}</p>
              {task.proof_photo_urls?.length > 0 && (
                <div className="flex gap-3 mt-4 overflow-x-auto">
                  {task.proof_photo_urls.map((url, idx) => (
                    <img key={idx} src={url} alt="Proof" className="w-40 h-40 rounded-lg border object-cover flex-shrink-0" />
                  ))}
                </div>
              )}
            </div>
          )) : (
            <p className="text-gray-500 italic">No completed tasks recorded.</p>
          )}
        </section>

        <section className="mb-10 border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold mb-4">Technician’s Overall Notes</h2>
          <p className="text-gray-700 text-base">{visit.notes || 'No overall notes provided.'}</p>
        </section>

        <section className="mb-10 border-t border-gray-200 pt-6 flex justify-center">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-2xl p-6 shadow-md max-w-2xl text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-green-600 text-4xl">🎉</div>
              <div className="text-gray-800 text-base sm:text-lg">
                <p className="leading-relaxed">
                  Congratulations! This visit saved you
                  <span className="text-3xl font-extrabold text-green-700 mx-2">~3 hours</span>
                  of time and helped you avoid repair bills of
                  <span className="text-3xl font-extrabold text-green-700 mx-2">$600–$1,000</span>,
                  protecting your home and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 border-t border-gray-200 pt-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank You for Trusting Upkept 🙏</h2>
          <p className="text-gray-700 text-base mb-4">We're grateful for the opportunity to care for your home. Our team is always here to help you maintain a safe and comfortable space.</p>
        </section>
      </main>

      <section className="text-center mt-8">
        <button
          onClick={() => {
            navigator.clipboard.writeText(shareLink);
            alert('Share link copied to clipboard!');
          }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 mr-4 transition"
        >
          🔗 Share This Report
        </button>

        <button
          onClick={async () => {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = reportRef.current;
            html2pdf().set({
              margin: 0.5,
              filename: `VisitReport-${id}.pdf`,
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            }).from(element).save();
          }}
          className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          📝 Download PDF
        </button>
      </section>
    </div>
  );
}

VisitReport.showNav = false;
