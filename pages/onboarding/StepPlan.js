import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function StepPlan({ home }) {
  const [selected, setSelected] = useState(home?.plan_type || '');

  const handleSelect = async (type) => {
    setSelected(type);

    const { error } = await supabase
      .from('homes')
      .update({ plan_type: type, onboarding_step: 'start_date' })
      .eq('id', home.id);

    if (!error) {
      window.location.href = '/onboarding/StepStartDate';
    } else {
      console.error('Error updating plan_type:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
      <div className="space-y-4">
        {['monthly', 'seasonal', 'try-once'].map((type) => (
          <button
            key={type}
            className={`w-full py-3 px-4 rounded-lg border ${
              selected === type
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300'
            }`}
            onClick={() => handleSelect(type)}
          >
            {type === 'monthly' && 'Monthly – Full Peace of Mind'}
            {type === 'seasonal' && 'Quarterly – Seasonal Essentials'}
            {type === 'try-once' && 'Try Once – One-Time Visit'}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    console.error('No session:', sessionError?.message);
    return {
      redirect: { destination: '/login', permanent: false },
    };
  }

  const { data: home, error } = await supabase
    .from('homes')
    .select('*')
    .eq('user_id', session.user.id)
    .single();

  if (error || !home) {
    console.error('Home fetch error:', error?.message);
    return {
      redirect: { destination: '/dashboard', permanent: false },
    };
  }

  return {
    props: { home },
  };
}