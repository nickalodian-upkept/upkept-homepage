// hooks/useIdleLogout.js
import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function useIdleLogout(timeout = 30 * 60 * 1000) {
  const router = useRouter();

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        await supabase.auth.signOut();
        router.push('/login');
      }, timeout);
    };

    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

    events.forEach(event => window.addEventListener(event, resetTimer));
    resetTimer(); // start timer on mount

    return () => {
      clearTimeout(timer);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [router, timeout]);
}