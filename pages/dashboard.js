// pages/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import useIdleLogout from '../hooks/useIdleLogout';

export default function Dashboard() {
  useIdleLogout();

  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState(null);
  const [visits, setVisits] = useState([]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadUserAndHome = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;

      if (!user) {
        setUserEmail('Guest');
        setLoading(false);
        return;
      }

      setUserEmail(user.email);
      setUserId(user.id);

      const { data: homeData, error: homeError } = await supabase
        .from('homes')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (homeError) {
        console.error('Failed to fetch home:', homeError.message);
      } else {
        setHome(homeData);

        const { data: allVisits, error: visitsError } = await supabase
          .from('visits')
          .select('*, technician:technician_id (name, email, avatar_url)')
          .eq('home_id', homeData.id)
          .order('scheduled_date', { ascending: true });

        if (visitsError) {
          console.error('Error fetching visits:', visitsError.message);
        } else {
          setVisits(allVisits);
        }
      }

      setLoading(false);
    };

    loadUserAndHome();
  }, []);

  const addDummyVisit = async () => {
    if (!home || !userId) return;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const scheduledDate = tomorrow.toISOString();

    const { data: techData, error: techError } = await supabase
      .from('technicians')
      .select('id')
      .limit(1)
      .single();

    if (techError || !techData) {
      console.error('Technician fetch failed:', techError);
      return;
    }

    const { data: newVisit, error: visitError } = await supabase
      .from('visits')
      .insert([
        {
          home_id: home.id,
          user_id: userId,
          technician_id: techData.id,
          scheduled_date: scheduledDate,
          location: home.address,
          notes: 'Auto-generated dummy visit for testing.',
          plan_type: 'monthly'
        }
      ])
      .select()
      .single();

    if (visitError) {
      console.error('Failed to insert dummy visit:', visitError.message);
      return;
    }

    const { error: rpcError } = await supabase.rpc('insert_core_tasks', {
      visit_id: newVisit.id
    });

    if (rpcError) {
      console.error('Failed to insert core tasks:', rpcError.message);
    } else {
      window.location.reload();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcomingVisits = visits.filter(v => new Date(v.scheduled_date) > now);
  const pastVisits = visits.filter(v => new Date(v.scheduled_date) <= now);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-800 relative">
      <div className="absolute top-6 right-6">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-sm">☰</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-32">
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </details>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-xl text-center max-w-6xl w-full">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="text-lg mb-4">Logged in as: <strong>{userEmail}</strong></p>

        {home ? (
          <div className="text-left mb-6">
            <h2 className="text-xl font-semibold mb-2">🏡 Home Info</h2>
            <p><strong>Address:</strong> {home.address}</p>
            <p><strong>Condition Score:</strong> {home.condition_score}/10</p>
            <p><strong>Notes:</strong> {home.notes || 'No notes yet.'}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={addDummyVisit}
            >
              ➕ Add Dummy Visit
            </button>
          </div>
        ) : (
          <p className="text-red-500">No home found for this user.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">📅 Upcoming Visits</h2>
            {upcomingVisits.length > 0 ? (
              upcomingVisits.map(visit => (
                <div key={visit.id} className="border rounded-md p-4 mb-4">
                  <p><strong>Date:</strong> {new Date(visit.scheduled_date).toLocaleDateString()}</p>
                  <p><strong>Location:</strong> {visit.location}</p>
                  <p><strong>Notes:</strong> {visit.notes || 'No notes yet.'}</p>
                  {visit.technician && (
                    <div className="flex items-center gap-3 mt-2">
                      {visit.technician.avatar_url && (
                        <img src={visit.technician.avatar_url} alt="Technician" className="w-8 h-8 rounded-full" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{visit.technician.name}</p>
                        <p className="text-xs text-gray-500">{visit.technician.email}</p>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => router.push(`/visit-details?id=${visit.id}`)}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              ))
            ) : (
              <p>No upcoming visits yet.</p>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">🕓 Past Visits</h2>
            {pastVisits.length > 0 ? (
              pastVisits.map(visit => (
                <div key={visit.id} className="border rounded-md p-4 mb-4">
                  <p><strong>Date:</strong> {new Date(visit.scheduled_date).toLocaleDateString()}</p>
                  <p><strong>Location:</strong> {visit.location}</p>
                  <p><strong>Notes:</strong> {visit.notes || 'No notes yet.'}</p>
                  {visit.technician && (
                    <div className="flex items-center gap-3 mt-2">
                      {visit.technician.avatar_url && (
                        <img src={visit.technician.avatar_url} alt="Technician" className="w-8 h-8 rounded-full" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{visit.technician.name}</p>
                        <p className="text-xs text-gray-500">{visit.technician.email}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mt-1">✅ Completed</p>
                </div>
              ))
            ) : (
              <p>No past visits yet.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}