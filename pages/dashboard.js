// Enhanced Dashboard UI with Wave and Greeting (toolbox icon removed)
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import useIdleLogout from '../hooks/useIdleLogout';
import { motion, AnimatePresence } from 'framer-motion';

function VisitCard({ visit, type, onClick }) {
  const isPast = type === 'past';
  const dateStr = new Date(visit.scheduled_date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const plan = visit.plan_type ? visit.plan_type.charAt(0).toUpperCase() + visit.plan_type.slice(1) + ' Plan' : null;

  return (
    <motion.div
      key={visit.id}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-white p-6 border border-gray-200 rounded-xl hover:shadow-sm transition-transform hover:-translate-y-1 cursor-pointer"
    >
      <p className="text-sm text-gray-500">{dateStr}</p>
      <h3 className="text-lg font-semibold text-gray-900 mt-1">{visit.notes}</h3>
      <p className="text-sm text-gray-500 mt-1">{visit.location}</p>

      {plan && (
        <span className="inline-block mt-3 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
          {plan}
        </span>
      )}

      {visit.technician && (
        <div className="flex items-center mt-4 gap-3">
          {visit.technician.avatar_url ? (
            <img
              src={visit.technician.avatar_url}
              alt="Technician"
              className="w-10 h-10 rounded-full border border-gray-200 shadow-sm"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-semibold text-sm shadow">
              {visit.technician.name?.charAt(0) || '?'}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-900">{visit.technician.name}</p>
            <p className="text-xs text-gray-500">{visit.technician.email}</p>
          </div>
        </div>
      )}

      {isPast ? (
        <div className="mt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-full">
            Completed
          </div>
          <a
            href={`/visit-report?id=${visit.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-600 underline"
          >
            View Report
          </a>
        </div>
      ) : (
        <button
          className="mt-4 text-blue-600 text-sm underline"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </button>
      )}
    </motion.div>
  );
}

export default function Dashboard() {
  useIdleLogout();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState(null);
  const [visits, setVisits] = useState([]);
  const [userId, setUserId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef();

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

      const { data: profile } = await supabase
        .from('customers')
        .select('full_name, email')
        .eq('user_id', user.id)
        .single();
      if (profile?.full_name) setUserName(profile.full_name);

      const { data: homeData } = await supabase
        .from('homes')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (homeData) {
        setHome(homeData);
        const { data: allVisits } = await supabase
          .from('visits')
          .select('*, technician:technician_id (name, email, avatar_url)')
          .eq('home_id', homeData.id)
          .order('scheduled_date', { ascending: true });
        setVisits(allVisits || []);
      }
      setLoading(false);
    };
    loadUserAndHome();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const upcomingVisits = visits.filter((v) => new Date(v.scheduled_date) > now);
  const pastVisits = visits.filter((v) => new Date(v.scheduled_date) <= now);
  const assignedTech = upcomingVisits[0]?.technician;

  const formattedNextVisit = upcomingVisits[0]?.scheduled_date
    ? new Date(upcomingVisits[0].scheduled_date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : 'TBD';

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/upkept-logo.svg" alt="Upkept logo" className="h-6" />
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=edf2f7&color=1a202c&size=32`}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-gray-200"
              />
              <div className="text-sm text-left hidden sm:block">
                <p className="text-gray-900 font-medium leading-tight">{userName || 'User'}</p>
                <p className="text-gray-400 text-xs">{userEmail}</p>
              </div>
              <motion.svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">{userName || 'User'}</p>
                    <p className="text-xs text-gray-500">{userEmail}</p>
                  </div>
                  <div className="border-t border-gray-100">
                    <button onClick={() => router.push('/settings')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</button>
                    <button onClick={() => router.push('/support')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact Support</button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Logout</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-white z-0">
          <svg
            className="absolute -top-1 left-0 w-full h-40 sm:h-56 lg:h-72"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#E0F2FE"
              d="M0,160L60,144C120,128,240,96,360,122.7C480,149,600,235,720,261.3C840,288,960,256,1080,234.7C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>

        <div className="relative z-10 px-6 py-10 max-w-6xl mx-auto">
          <section className="border border-gray-200 bg-white p-6 rounded-xl mb-10">
            <p className="text-xl font-medium mb-1">Hi {userName.split(' ')[0]} 👋</p>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Everything’s in order at <span className="text-blue-600">{home?.address || 'your home'}</span>
            </h1>
            <p className="text-sm text-gray-500 mb-6">You’re all set until your next visit. We'll handle the upkeep.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-500">Condition Score</p>
                <p className="text-gray-900 text-lg mt-1">{home?.condition_score}/10</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-500">Your Handyman</p>
                {assignedTech ? (
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={assignedTech.avatar_url}
                      alt="Handyman"
                      className="w-8 h-8 rounded-full shadow-sm"
                    />
                    <p className="text-gray-900 font-medium text-sm">{assignedTech.name}</p>
                  </div>
                ) : (
                  <p className="text-gray-500 mt-1">Assigned Soon</p>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-500">Next Visit</p>
                <p className="text-gray-900 mt-1">{formattedNextVisit}</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Visits</h2>
              <div className="space-y-4">
                {upcomingVisits.length > 0 ? upcomingVisits.map((visit) => (
                  <VisitCard key={visit.id} visit={visit} type="upcoming" onClick={() => router.push(`/visit-details?id=${visit.id}`)} />
                )) : <p className="text-gray-500">No upcoming visits yet.</p>}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Visits</h2>
              <div className="space-y-4">
                {pastVisits.length > 0 ? pastVisits.map((visit) => (
                  <VisitCard key={visit.id} visit={visit} type="past" />
                )) : <p className="text-gray-500">No past visits yet.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Dashboard.showNav = false;