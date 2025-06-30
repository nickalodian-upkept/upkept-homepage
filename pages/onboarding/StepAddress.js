import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function StepAddress({ home }) {
  const [address, setAddress] = useState(home?.address || '');

  const handleSubmit = async () => {
    if (!address) return;

    const { error } = await supabase
      .from('homes')
      .update({ address, onboarding_step: 'plan' })
      .eq('id', home.id);

    if (!error) {
      window.location.href = '/onboarding/StepPlan';
    } else {
      console.error('Error updating address:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Where’s your home?</h2>
      <p className="text-gray-600 mb-6">We’ll use this to schedule visits and help localize your service.</p>
      <input
        type="text"
        placeholder="Enter your home address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border border-gray-300 px-4 py-3 rounded-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        Continue
      </button>
    </div>
  );
}

// 🚨 This runs on the server for every request to /onboarding/StepAddress
export async function getServerSideProps({ req, res }) {
  // Get the Supabase session cookie from the request
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const user = session.user;

  const { data: home, error } = await supabase
    .from('homes')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error || !home) {
    console.error('Home not found or error:', error?.message);
    return {
      redirect: {
        destination: '/dashboard', // fallback
        permanent: false,
      },
    };
  }

  return {
    props: { home },
  };
}