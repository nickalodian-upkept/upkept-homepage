import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const body = document.body;
    let scrollListener = null;
    let timeoutId = null;

    const closeMenu = () => {
      setMenuOpen(false);
      body.classList.remove('overflow-hidden');
    };

    if (menuOpen) {
      body.classList.add('overflow-hidden');

      timeoutId = setTimeout(() => {
        scrollListener = () => closeMenu();
        window.addEventListener('scroll', scrollListener, { once: true });
      }, 300);

      router.events.on('routeChangeStart', closeMenu);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollListener);
      router.events.off('routeChangeStart', closeMenu);
      body.classList.remove('overflow-hidden');
    };
  }, [menuOpen, router.events]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <Link
          href="/"
          aria-label="Upkept Home"
          className="group flex items-center transition duration-300"
        >
          <img
            src="/upkept-logo.svg"
            alt="Upkept logo"
            className="h-10 sm:h-14 w-auto transition duration-300 transform group-hover:scale-105 group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
          <Link href="/pricing" className="hover:text-blue-600">Plans</Link>
          <Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link
            href="/signup"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="text-gray-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden animate-slide-down px-6 py-8 bg-white border-t border-gray-100 shadow-md">
          <div className="flex flex-col items-center space-y-6 text-base font-medium text-gray-700">
            <Link href="/pricing" className="hover:text-blue-600" onClick={closeMenu}>Plans</Link>
            <Link href="/how-it-works" className="hover:text-blue-600" onClick={closeMenu}>How It Works</Link>
            <Link href="/login" className="hover:text-blue-600" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}