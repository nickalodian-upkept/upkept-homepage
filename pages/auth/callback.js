import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      const user = session?.user;

      if (!user) {
        return router.push('/login');
      }

      // Check if customer row exists
      const { data: existing } = await supabase
        .from('customers')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!existing) {
        // Create customer row
        await supabase.from('customers').insert([
          {
            user_id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || user.email,
          },
        ]);
        // You may also want to create a row in `homes` here if needed
        router.push('/onboarding');
      } else {
        router.push('/dashboard');
      }
    };

    handleAuth();
  }, [router]);

  return <p className="p-6">Redirecting...</p>;
}