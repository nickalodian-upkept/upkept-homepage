import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const cities = ['Ottawa', 'Kanata', 'Richmond', 'Barrhaven'];
  const [currentCity, setCurrentCity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity((prev) => (prev + 1) % cities.length);
    }, 2000); // Rotate every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white min-h-screen px-6 sm:px-8 lg:px-12 py-10 text-gray-800 font-sans">
        {/* Header with Logo */}
<header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md">
  <div className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
    <a href="/" className="flex items-center space-x-2">
      <img
        src="/upkept-logo-new.svg"
        alt="Upkept logo"
        className="h-14 sm:h-16 w-auto"
      />
    </a>
    <nav className="flex items-center space-x-6 text-sm font-medium text-gray-600">
      <a href="#" className="hover:text-blue-600">Plans</a>
      <a href="#" className="hover:text-blue-600">How It Works</a>
      <span className="mx-2 text-gray-300">|</span>
      <a href="#" className="hover:text-blue-600">Login</a>
      <a
        href="#"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
      >
        Sign Up
      </a>
    </nav>
  </div>
</header>

{/* Hero */}
<section className="bg-gray-50 rounded-3xl px-6 sm:px-8 lg:px-12 py-20 max-w-7xl mx-auto mb-24 shadow-sm">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* Left Side: Headline & CTA */}
    <div className="text-left relative z-10">
    <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight">
      <span className="block">
        Hey{' '}
        <span className="relative inline-block w-[10ch] align-middle text-blue-600 leading-none">
          {cities.map((city, index) => (
            <span
              key={city}
              className={`absolute left-0 top-0 transition-opacity duration-500 ${
                index === currentCity ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {city}
            </span>
          ))}
        </span>
      </span>
      <span className="block">time to get proactive with your home upkeep</span>
    </h2>
      <p className="text-lg text-gray-600 mb-6">
        Our subscription keeps your home safe and maintained with thorough, scheduled visits.
      </p>
      <button className="bg-blue-600 text-white text-base sm:text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        View Plans
      </button>
    </div>

    {/* Right Side: Hero Image */}
    <div className="flex justify-center md:justify-end relative z-10">
      <img
        src="/hero-house-new.png"
        alt="Illustration of a cozy home with flower and grass"
        className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem]"
      />
    </div>
  </div>
</section>

{/* Pricing Plans */}
<section className="mt-24 max-w-6xl mx-auto px-4">
  <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Monthly Plan */}
    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between overflow-hidden">
      {/* Top-right Icon */}
      <img
        src="/toolbox-icon.png"
        alt="Toolbox icon"
        className="w-32 h-32 absolute top-4 right-4"
      />
      <div>
        <h4 className="text-xl font-semibold mb-2">Monthly</h4>
        <p className="text-3xl font-bold mb-6">
          $99<span className="text-base font-medium">/month</span>
        </p>
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

    {/* Quarterly Plan */}
    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between overflow-hidden">
      {/* Top-right Icon */}
      <img
        src="/ladder-lightbulb-icon.png"
        alt="Step ladder icon"
        className="w-32 h-32 absolute top-4 right-4"
      />
      <div>
        <h4 className="text-xl font-semibold mb-2">Quarterly</h4>
        <p className="text-3xl font-bold mb-6">
          $149<span className="text-base font-medium">/quarter</span>
        </p>
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
</section>

{/* How It Works Section */}
<div className="mt-24">
  <section className="bg-gradient-to-b from-[#E8F1FF] to-[#DDEBFB] py-24 px-6 sm:px-12 lg:px-20">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">We make home upkeep proactive and hassle-free. Here's how:</p>
        </div>
        <a
          href="#"
          className="bg-blue-600 text-white text-sm font-medium rounded-lg px-5 py-3 hover:bg-blue-700 transition inline-flex items-center gap-2"
        >
          How it works
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
          <img
            src="/how-it-works-1.png"
            alt="Calendar Step 1"
            className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform"
          />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Schedule a visit</h4>
          <p className="text-sm text-gray-600">
            Choose a plan and book your first maintenance appointment.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
          <img
            src="/how-it-works-2.png"
            alt="Calendar Step 2"
            className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform"
          />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Get reliable upkeep</h4>
          <p className="text-sm text-gray-600">
            Our dedicated handyman arrives on time to provide proactive maintenance with attention to detail.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition group">
          <img
            src="/how-it-works-3.png"
            alt="Clipboard Check"
            className="mx-auto w-20 sm:w-24 mb-6 group-hover:scale-105 transition-transform"
          />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay in control</h4>
          <p className="text-sm text-gray-600">
            After each visit, receive a detailed report on your home's condition and any work completed.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

{/* Tailored to Your Life Stage */}
<section className="mt-32 max-w-6xl mx-auto px-4 text-center">
  <h3 className="text-3xl font-bold mb-12">Tailored to Your Life Stage</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    
    {/* For Families */}
    <div className="group bg-[#FCD34D] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition transform hover:scale-105 duration-300 ease-in-out">
      <img
        src="/life-stage-families.png"
        alt="Family Icon"
        className="w-28 sm:w-32 mb-8 drop-shadow-lg transition duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-lg font-semibold mb-4">For Families Supporting Aging Parents</h4>
          <ul className="space-y-3 text-gray-700 text-sm">
            {[
              "Check on your parents' home safety remotely",
              "Manage home upkeep for them",
              "Receive photo-verified checkup reports"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">
          Learn More
        </button>
      </div>
    </div>

    {/* For Professionals */}
    <div className="group bg-[#3B82F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition transform hover:scale-105 duration-300 ease-in-out">
      <img
        src="/life-stage-professionals.png"
        alt="Professional Icon"
        className="w-28 sm:w-32 mb-8 drop-shadow-lg transition duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-lg font-semibold mb-4">For Busy Professionals</h4>
          <ul className="space-y-3 text-gray-700 text-sm">
            {[
              "Simplify your life with scheduled upkeep",
              "Manage home maintenance at ease",
              "Async-friendly, approve fixes by email or text"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">
          Learn More
        </button>
      </div>
    </div>

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
      </main>
    </>
  );
}