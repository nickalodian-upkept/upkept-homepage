// pages/login.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const user = session.user;

        // Attempt to upsert user into the 'customers' table
        const { error } = await supabase.from('customers').upsert(
          {
            user_id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || user.email,
          },
          { onConflict: 'user_id' }
        );

        if (error) {
          console.error('Upsert error:', error.message);
        }

        router.push('/dashboard');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/dashboard', // ✅ ensures correct redirect after login
      },
    });
    if (error) console.error('Login error:', error.message);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in to Upkept</h2>
        <button
          onClick={signInWithGoogle}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-sm transition"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}