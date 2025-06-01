// SECTION: Hero Intro
import { motion } from 'framer-motion';
import { useState } from 'react';

export const HowItWorksHero = () => (
  <section id="how-it-works-hero" className="bg-blue-50 py-24 px-6 text-gray-800">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        className="flex justify-center md:justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/changing-lightbulb.png"
          alt="Upkept technician changing a light fixture"
          className="w-full max-w-sm rounded-xl shadow-xl"
        />
      </motion.div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Finally, a smarter way to maintain your home.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-md">
          What needs doing? When to do it? Who to call? We’ve already figured that out.
        </p>
        <a
          href="#task-list"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition hover:shadow-md"
        >
          View Sample Tasks <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
);

export const WhatHappensSteps = () => (
  <section id="what-happens" className="py-24 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-16">What Happens After You Sign Up</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {["step-preloaded-real.png", "step-visit.png", "step-tracked.png", "step-flexible.png"].map((image, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <img
            src={`/images/${image}`}
            alt={image.split('.')[0].replace(/-/g, ' ')}
            className="w-full max-w-[260px] h-[200px] object-cover rounded-xl shadow mb-6"
          />
          <div className="text-sm text-gray-700">
            {[
              "Your dashboard loads with a curated seasonal checklist — here’s a real preview of what June’s visit might include.",
              "A real technician comes by for the first checkup. They’ll complete your first tasks and document everything — photos included.",
              "After each visit, your dashboard updates automatically — see completed tasks, photos, and stay in control.",
              "Need to tweak your list? You’re in charge — just log in before the next visit to make changes."
            ][index]}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const TrustComparison = () => (
  <section id="not-a-gig-app" className="py-24 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-6">This Is What Peace of Mind Looks Like</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">One-Off Task Apps</h3>
        <ul className="text-sm text-gray-600 space-y-3 list-none">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>Whoever takes the job</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>Hit or miss service</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>Scramble to coordinate</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>Text threads and guesswork</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>Varies by person</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-gray-400 rounded-full"></span>You manage it</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Upkept</h3>
        <ul className="text-sm text-gray-700 space-y-3 list-none">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>Your dedicated technician</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>Vetted, full-time employee</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>Set-it-and-forget-it visits</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>Dashboard updates, not text chaos</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>Background-checked pros</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 bg-blue-500 rounded-full"></span>We manage it for you</li>
        </ul>
      </div>
    </div>
  </section>
);

export const IncludedPlan = () => {
  const [view, setView] = useState('season');
  return (
    <section id="task-list" className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">What’s Included in Your Plan</h2>
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Your home requires upkeep every month. We’ve mapped it out for you. These tasks aren’t random — they’re based on what most homes need, month after month, season after season.
      </p>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setView('season')}
          className={`px-6 py-2 text-sm font-medium border-r ${view === 'season' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
        >
          Seasonal Tasks
        </button>
        <button
          onClick={() => setView('month')}
          className={`px-6 py-2 text-sm font-medium ${view === 'month' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
        >
          Monthly Tasks
        </button>
      </div>
      {view === 'season' && (
        <ul className="text-gray-700 text-left list-disc max-w-xl mx-auto pl-6 space-y-2">
          <li><strong>Spring</strong> – Clean gutters, check sump pump</li>
          <li><strong>Summer</strong> – Power wash deck, test smoke detectors</li>
          <li><strong>Fall</strong> – Service furnace, seal window gaps</li>
          <li><strong>Winter</strong> – Check insulation, test sump battery</li>
        </ul>
      )}
      {view === 'month' && (
        <ul className="text-gray-700 text-left list-disc max-w-xl mx-auto pl-6 space-y-2">
          <li><strong>March</strong> – Clean sump pump, test GFCI outlets</li>
          <li><strong>June</strong> – Maintain lawn equipment</li>
          <li><strong>September</strong> – Service furnace, seal air leaks</li>
          <li><strong>December</strong> – Check insulation, prevent ice dams</li>
        </ul>
      )}
      <div className="mt-10">
        <a href="/pricing#features" className="text-blue-600 font-medium hover:underline">
          View the full task list →
        </a>
      </div>
    </section>
  );
};

export const AddOnServices = () => (
  <section id="add-ons" className="py-24 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-12">Need Extra Help? Just Add It.</h2>
    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
      From mounting TVs to replacing faucets, our plans let you request add-on services anytime. Pricing is upfront, and you can approve with a click.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {["TV mounting", "Replace faucet", "Hang shelves", "Drywall patching", "Install blinds", "Fix cabinet door"].map((task, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6 text-gray-800 text-sm text-center hover:shadow-md transition">
          {task}
        </div>
      ))}
    </div>
    <div className="text-center mt-12">
      <a href="/pricing#other-services" className="text-blue-600 font-medium hover:underline">
        View the list of services →
      </a>
    </div>
  </section>
);

export const FinalCTA = () => (
  <section id="final-cta" className="text-center py-24 px-6 bg-blue-50">
    <h2 className="text-3xl font-bold mb-4">Your first visit = your first win.</h2>
    <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
      Try Upkept once — and see how good it feels to have a handled home. No pressure, no long-term commitment. Just proactive care and peace of mind.
    </p>
    <a href="/signup" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
      Book Your First Checkup
    </a>
  </section>
);