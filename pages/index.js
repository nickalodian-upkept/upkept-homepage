import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import OtherServices from '../components/OtherServices';

export default function Home() {
  const cities = ['Ottawa', 'Kanata', 'Stittsville', 'Richmond', 'Barrhaven'];
  const [currentCity, setCurrentCity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity((prev) => (prev + 1) % cities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white min-h-screen px-6 sm:px-8 lg:px-12 py-10 text-gray-800 font-sans">

{/* Header */}
<header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md">
  <div className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
    {/* Logo */}
    <a href="/" className="flex items-center space-x-2">
      <img src="/upkept-logo.svg" alt="Upkept logo" className="h-10 sm:h-14 w-auto" />
    </a>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
      <a href="#plans" className="hover:text-blue-600">Plans</a>
      <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
      <span className="mx-2 text-gray-300">|</span>
      <a href="#login" className="hover:text-blue-600">Login</a>
      <a
        href="#signup"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
      >
        Sign Up
      </a>
    </nav>

    {/* Mobile CTA + Hamburger */}
    <div className="flex items-center space-x-4 md:hidden">
      <a
        href="#signup"
        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Sign Up
      </a>
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 focus:outline-none">
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

  {/* Mobile Menu Panel */}
  {menuOpen && (
    <div className="md:hidden px-6 py-4 space-y-4 bg-white border-t border-gray-100 text-sm font-medium text-gray-700">
      <a href="#plans" className="block hover:text-blue-600">Plans</a>
      <a href="#how-it-works" className="block hover:text-blue-600">How It Works</a>
      <a href="#login" className="block hover:text-blue-600">Login</a>
    </div>
  )}
</header>

        {/* Hero Section */}
        <section className="bg-gray-50 rounded-3xl px-6 sm:px-8 lg:px-12 py-20 max-w-7xl mx-auto mb-24 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-left relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight">
                <span className="block">
                  Hey{' '}
                  <span className="relative inline-block w-[10ch] align-middle text-blue-600 leading-none h-[1.2em] overflow-hidden">
                    {cities.map((city, index) => (
                      <span
                        key={city}
                        className={`absolute left-0 top-0 transition-all duration-500 ease-in-out transform ${
                          index === currentCity ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                        }`}
                      >
                        {city}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="block">let's get proactive with your home upkeep</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether it's your home or a loved one's, we make sure it stays safe, maintained, and stress-free with scheduled expert visits.
              </p>
              <button className="bg-blue-600 text-white text-base sm:text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                View Plans
              </button>
            </div>

            <div className="flex justify-center md:justify-end relative z-10">
              <img
                src="/hero-house-new.png"
                alt="Illustration of a cozy home with flower and grass"
                className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gradient-to-b from-[#E8F1FF] to-[#DDEBFB] py-24 px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
                <p className="mt-2 text-gray-600 text-base sm:text-lg">
                  We make home upkeep proactive and hassle-free. Here's how:
                </p>
              </div>
              <a href="#" className="bg-blue-600 text-white text-sm font-medium rounded-lg px-5 py-3 hover:bg-blue-700 transition inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
                <img src="/how-it-works-1.png" alt="Calendar Step 1" className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Schedule a visit</h4>
                <p className="text-sm text-gray-600">Choose a plan and book your first maintenance appointment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
                <img src="/how-it-works-2.png" alt="Calendar Step 2" className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Get reliable upkeep</h4>
                <p className="text-sm text-gray-600">Our dedicated handyman arrives on time to provide proactive maintenance with attention to detail.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
                <img src="/how-it-works-3.png" alt="Clipboard Check" className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay in control</h4>
                <p className="text-sm text-gray-600">After each visit, receive a detailed report on your home's condition and any work completed.</p>
              </div>
            </div>
          </div>
        </section>

{/* Meet Your Handyman */}
<section className="mt-32 max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image */}
  <div className="flex justify-center md:justify-start">
    <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-xl">
      <img
        src="/headshot.png"
        alt="Upkept handyman smiling"
        className="w-full object-cover"
      />
      {/* Badge row */}
      <div className="absolute bottom-0 w-full bg-white/80 px-4 py-2 flex flex-wrap gap-2 justify-center text-xs font-medium text-gray-700">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Employed by Upkept</span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Background Checked</span>
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Fully Vetted Expert</span>
      </div>
    </div>
  </div>

  {/* Text */}
  <div className="text-left">
    <h3 className="text-3xl font-bold mb-4">Meet Your Handyman</h3>
    <p className="text-base text-gray-600 mb-6">
      We hire full-time professionals—not gig workers—and match them with homeowners like you. Every Upkept handyman is background checked, vetted, and trained to provide proactive, respectful service.
    </p>
    <ul className="text-sm text-gray-700 space-y-3">
      <li className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        You’ll see the same handyman for every visit
      </li>
      <li className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Skilled, respectful, and on time—every time
      </li>
      <li className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Photo ID + detailed visit summary after each appointment
      </li>
    </ul>
  </div>
</section>

{/* Track It All in Your Dashboard */}
<section className="relative mt-32 overflow-hidden pb-24">
  {/* Soft gradient and wave background */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-white z-0">
    <svg
      className="absolute -bottom-10 left-0 w-full h-56 md:h-64 lg:h-72 xl:h-80"
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

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/dashboard-preview.png"
        alt="Upkept dashboard preview"
        className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm"
      />
    </div>

    {/* Text */}
    <div className="text-left">
      <h3 className="text-3xl font-bold mb-4">Track It All in Your Dashboard</h3>
      <p className="text-base text-gray-600 mb-6">
        Your dashboard gives you peace of mind to know upcoming visits, past tasks, and your handyman’s contact info. Get updates after each visit and keep your home running smoothly.
      </p>
      <ul className="text-sm text-gray-700 space-y-3">
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          See your upcoming tasks and photos
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Stay informed with detailed reports
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Sync anytime during each visit
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Life Stage Section */}
        <section className="mt-32 max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Tailored to Your Life Stage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="group bg-[#FCD34D] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition transform hover:scale-105 duration-300 ease-in-out">
              <img src="/life-stage-families.png" alt="Family Icon" className="w-28 sm:w-32 mb-8 drop-shadow-lg transition duration-300 ease-in-out group-hover:scale-110" />
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-lg font-semibold mb-4">For Families Supporting Aging Parents</h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Check on your parents' home safety remotely</span></li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Manage home upkeep for them</span></li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Receive photo-verified checkup reports</span></li>
                  </ul>
                </div>
                <button className="mt-6 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">Learn More</button>
              </div>
            </div>

            <div className="group bg-[#3B82F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition transform hover:scale-105 duration-300 ease-in-out">
              <img src="/life-stage-professionals.png" alt="Professional Icon" className="w-28 sm:w-32 mb-8 drop-shadow-lg transition duration-300 ease-in-out group-hover:scale-110" />
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-lg font-semibold mb-4">For Busy Professionals</h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Simplify your life with scheduled upkeep</span></li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Manage home maintenance at ease</span></li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span>Async-friendly, approve fixes by email or text</span></li>
                  </ul>
                </div>
                <button className="mt-6 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included in a Check-Up */}
        <OtherServices />

{/* Pricing Section */}
<section className="mt-12 max-w-6xl mx-auto px-4">

  {/* Section Header */}
  <div className="text-center max-w-2xl mx-auto mb-12">
    <h3 className="text-3xl font-bold mb-4">Simple Plans, Pro-Level Support</h3>
    <p className="text-base text-gray-600">
      Choose the visit frequency that fits your lifestyle. Every plan includes expert service, detailed reports, and your own dedicated dashboard.
    </p>
  </div>

  {/* Pricing Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Monthly Plan */}
    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between overflow-hidden">
      <img src="/toolbox-icon.png" alt="Toolbox icon" className="w-32 h-32 absolute top-4 right-4" />
      <div>
        <h4 className="text-xl font-semibold mb-2">Monthly</h4>
        <p className="text-3xl font-bold mb-6">$199<span className="text-base font-medium">/month</span></p>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Scheduled seasonal visits</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>10-point maintenance checklist</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Photo reports</span>
          </li>
        </ul>
      </div>
      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>

    {/* Seasonal Plan */}
    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between overflow-hidden">
      <img src="/ladder-lightbulb-icon.png" alt="Step ladder icon" className="w-32 h-32 absolute top-4 right-4" />
      <div>
        <h4 className="text-xl font-semibold mb-2">Seasonal</h4>
        <p className="text-3xl font-bold mb-6">$349<span className="text-base font-medium">/season</span></p>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Everything in Standard</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Priority scheduling</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Direct message access</span>
          </li>
        </ul>
      </div>
      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  </div>
  {/* Optional soft CTA under pricing */}
<div className="mt-12 text-center text-sm text-gray-600 max-w-md mx-auto">
  Not sure which plan is best for you?{' '}
  <a href="#book" className="text-blue-600 font-medium hover:underline">
    Book a one-time visit and go from there.
  </a>
</div>
</section>

        {/* Final CTA */}
        <section className="mt-32 mb-24 text-center bg-gray-50 py-16 px-6 rounded-2xl shadow-inner max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">It’s your home. We just help keep it running.</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Everything is in order. Nothing’s breaking down. And your only job is to just come home and enjoy it.
          </p>
          <button className="bg-blue-600 text-white text-base sm:text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow">
            Book Your First Checkup
          </button>
        </section>

        <Footer />
      </main>
    </>
  );
}
