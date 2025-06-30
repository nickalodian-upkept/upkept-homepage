import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

import StepWelcome from './StepWelcome';
import StepName from './StepName';
import StepAddress from './StepAddress';
import StepPlan from './StepPlan';
import StepStartDate from './StepStartDate';
import StepBilling from './StepBilling';
import StepConfirmation from './StepConfirmation';

export default function Onboarding() {
  const [home, setHome] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHome = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      if (!user) return router.push('/login');

      const { data: existing } = await supabase
        .from('customers')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!existing) {
        await supabase.from('customers').insert([
          {
            user_id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || user.email,
          },
        ]);
      }

      const { data } = await supabase
        .from('homes')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setHome(data);
    };

    fetchHome();
  }, [router]);

  const updateHome = async (fields) => {
    const { data } = await supabase
      .from('homes')
      .update(fields)
      .eq('id', home.id)
      .select()
      .single();
    setHome(data);
  };

  const steps = {
    welcome: StepWelcome,
    name: StepName,
    address: StepAddress,
    plan: StepPlan,
    start_date: StepStartDate,
    billing: StepBilling,
    confirmation: StepConfirmation,
  };

  const StepComponent = steps[home?.onboarding_step || 'welcome'];

  const advanceStep = () => {
    const order = [
      'welcome',
      'name',
      'address',
      'plan',
      'start_date',
      'billing',
      'confirmation',
    ];
    const currentIndex = order.indexOf(home?.onboarding_step || 'welcome');
    const nextStep = order[currentIndex + 1] || 'confirmation';
    updateHome({ onboarding_step: nextStep });
  };

  if (!home) return <p className="p-6">Loading onboarding...</p>;

  return (
    <main className="min-h-screen bg-white p-6">
      <StepComponent
        currentValue={home}
        onNext={advanceStep}
        onSave={(updates) => updateHome(updates)}
      />
    </main>
  );
}
