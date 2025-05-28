// pages/signup.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handlePostAuth = async (session) => {
      const user = session.user;

      const { data: existing, error: checkError } = await supabase
        .from('customers')
        .select('user_id')
        .eq('user_id', user.id)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Lookup error:', checkError.message);
      }

      if (!existing) {
        const { error: insertError } = await supabase.from('customers').insert([
          {
            user_id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || user.email,
          },
        ]);

        if (insertError) {
          console.error('Insert error:', insertError.message);
        }

        router.push('/onboarding');
      } else {
        router.push('/dashboard');
      }
    };

    const initSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      const session = data?.session;
      if (session?.user) {
        handlePostAuth(session);
      }
    };

    initSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        handlePostAuth(session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const signUpWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: 'http://localhost:3000/signup' },
    });
    if (error) console.error('Google auth error:', error.message);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { redirectTo: 'http://localhost:3000/signup' },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('Check your inbox to confirm your email.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Sign Up Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 py-12">
        <div className="max-w-md w-full mx-auto">
          <img src="/upkept-logo.svg" alt="Upkept logo" className="h-12 mb-8" />
          <h2 className="text-3xl font-bold mb-4">Create your Upkept account</h2>
          <p className="text-gray-600 mb-6">Choose your sign up method:</p>

          <button
            onClick={signUpWithGoogle}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 py-3 rounded-md font-medium text-sm transition mb-6"
          >
            <Image
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              width={18}
              height={18}
            />
            Sign in with Google
          </button>

          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md font-medium text-sm transition"
            >
              Sign up with Email
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Mock Dashboard Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-50">
        <img
          src="/mock-dashboard.png"
          alt="Mock dashboard preview"
          className="w-3/4 max-w-lg shadow-xl rounded-xl border border-gray-200"
        />
      </div>
    </main>
  );
}