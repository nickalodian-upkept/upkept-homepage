
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

const Check = () => (
  <svg className="w-5 h-5 text-green-600 mx-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('seasonal')

  const plans = [
    {
      name: 'Try Once',
      price: '$199',
      description: ['Give Upkept a try'],
      visits: '1 visit',
      bg: 'bg-white',
      features: [true, true, true, false, false, false],
    },
    {
      name: 'Seasonal',
      price: '$349',
      description: ['Most popular plan', 'for busy professionals'],
      visits: '4 visits',
      bg: 'bg-yellow-50',
      features: [true, true, true, true, true, true],
    },
    {
      name: 'Monthly',
      price: '$199',
      description: ['Most popular plan', 'for aging parents'],
      visits: '12 visits',
      bg: 'bg-blue-50',
      features: [true, true, true, true, true, true],
    },
  ]

  const features = [
    'Minor fixes on the spot',
    'Photo summary after visit',
    'Online dashboard access',
    'Same trusted technician',
    'Seasonal maintenance tasks',
  ]

  const seasonalTasks = {
    Spring: ['Clean gutters and downspouts', 'Check sump pump operation', 'Inspect exterior drainage', 'Clean window screens'],
    Summer: ['Power wash deck or patio', 'Lubricate garage door', 'Test smoke and CO detectors', 'Inspect irrigation system'],
    Fall: ['Service furnace or boiler', 'Clean dryer vent', 'Seal gaps around doors/windows', 'Store garden hoses and shut off taps'],
    Winter: ['Check attic insulation', 'Inspect pipe insulation', 'Test sump pump backup battery', 'Inspect roof for ice damming'],
  }

  const monthlyTasks = {
    January: ['Inspect and clean range hood filter', 'Clean and test smoke detectors', 'Inspect attic insulation'],
    February: ['Clean HVAC vents', 'Check water heater', 'Inspect sump pump'],
    March: ['Clean sump pump', 'Inspect exterior drainage', 'Test GFCI outlets'],
    April: ['Clean gutters', 'Check roof', 'Service A/C', 'Inspect irrigation'],
    May: ['Clean windows/screens', 'Check foundation', 'Clean dryer vent'],
    June: ['Maintain lawn equipment', 'Check fence', 'Seal stone surfaces'],
    July: ['Test CO detectors', 'Check plumbing', 'Inspect deck'],
    August: ['Inspect roof', 'Trim vegetation', 'Flush water heater'],
    September: ['Service furnace', 'Inspect driveway', 'Seal air leaks'],
    October: ['Clean gutters', 'Test heating system', 'Store hoses'],
    November: ['Check attic insulation', 'Test sump pump battery'],
    December: ['Check for ice dams', 'Inspect pipe insulation'],
  }

  return (
    <>
      <Head>
        <title>Upkept | Pricing</title>
      </Head>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {/* Hero */}
        <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
          <p className="text-sm uppercase text-blue-600 tracking-wide mb-2">Subscription-based Upkeep</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Peace of Mind for Every Homeowner</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">From check-ins to seasonal tune-ups, we’ve got your home covered.</p>
          <div className="flex justify-center gap-4">
            <a href="#plans" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">Get Started</a>
            <a href="#features" className="px-6 py-3 bg-white text-blue-600 border border-blue-100 font-medium rounded-lg hover:bg-blue-50 transition">See What’s Included</a>
          </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Compare Our Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 text-gray-500 text-sm">Features</th>
                  {plans.map((plan, i) => (
                    <th key={i} className="text-center px-6 align-top">
                      <div className={`rounded-xl p-4 ${plan.bg} dark:bg-gray-800`}>
                        <div className="text-sm font-semibold">{plan.name}</div>
                        <div className="text-2xl font-bold">{plan.price}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {plan.description.map((line, idx) => (
                            <div key={idx}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left px-4 py-3 font-medium">Visit Frequency</td>
                  {plans.map((plan, i) => (
                    <td key={i} className="text-center font-medium">{plan.visits}</td>
                  ))}
                </tr>
                {features.map((label, idx) => (
                  <tr key={idx}>
                    <td className="text-left px-4 py-3 font-medium">{label}</td>
                    {plans.map((plan, i) => (
                      <td key={i} className="text-center">{plan.features[idx] ? <Check /> : ''}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td></td>
                  {plans.map((_, i) => (
                    <td key={i} className="text-center">
                      <a href="#" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Get Started
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500 italic dark:text-gray-400">Cancel anytime</p>
        </section>

        {/* Tabs + Accordion Section */}
        <section id="features" className="py-20 px-6 sm:px-12 text-center bg-blue-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-10">What’s Included in Your Plan</h2>
          <div className="inline-flex border border-gray-300 dark:border-gray-600 rounded-full overflow-hidden shadow mb-12">
            <button
              onClick={() => setActiveTab('seasonal')}
              className={activeTab === 'seasonal'
                ? 'bg-blue-600 text-white px-6 py-2 text-sm sm:text-base font-medium transition'
                : 'bg-white dark:bg-gray-700 text-blue-600 hover:bg-blue-100 px-6 py-2 text-sm sm:text-base font-medium transition'}
            >
              Seasonal Tasks
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={activeTab === 'monthly'
                ? 'bg-blue-600 text-white px-6 py-2 text-sm sm:text-base font-medium transition'
                : 'bg-white dark:bg-gray-700 text-blue-600 hover:bg-blue-100 px-6 py-2 text-sm sm:text-base font-medium transition'}
            >
              Monthly Tasks
            </button>
          </div>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'seasonal' && (
                <motion.div
                  key="seasonal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {Object.entries(seasonalTasks).map(([season, tasks]) => (
                    <details key={season} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 group">
                      <summary className="cursor-pointer font-semibold text-lg text-blue-700 flex justify-between items-center hover:text-blue-900">
                        <span>{season}</span>
                        <svg className="w-5 h-5 text-blue-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <ul className="mt-4 list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-1">
                        {tasks.map((task, i) => <li key={i}>{task}</li>)}
                      </ul>
                    </details>
                  ))}
                </motion.div>
              )}

              {activeTab === 'monthly' && (
                <motion.div
                  key="monthly"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {Object.entries(monthlyTasks).map(([month, tasks]) => (
                    <details key={month} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 group">
                      <summary className="cursor-pointer font-semibold text-lg text-blue-700 flex justify-between items-center hover:text-blue-900">
                        <span>{month}</span>
                        <svg className="w-5 h-5 text-blue-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <ul className="mt-4 list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-1">
                        {tasks.map((task, i) => <li key={i}>{task}</li>)}
                      </ul>
                    </details>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section id="other-services" className="bg-gray-50 dark:bg-gray-800 py-20 px-6 sm:px-12">
  <h2 className="text-3xl font-bold text-center mb-12">Other Services We Can Help With</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Interior Services */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Common Interior Services</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          'Hang pictures, shelves or TVs',
          'Product assembly',
          'Faucet replacement',
          'Drywall repairs',
          'Minor plumbing repairs',
          'Replace light bulbs',
          'Adjust cabinet hardware',
          'Unclog drains',
          'Paint & caulk touch-up',
          'Seal stone counters, tile & grout',
          'Dusting in hard-to-reach areas',
          'Vacation check-ins'
        ].map((item, i) => (
          <li key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 text-sm text-left text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Exterior Services */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Common Exterior Services</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          'Paint touch-up',
          'Cobweb removal',
          'Minor auto maintenance (wipers, bulbs, etc.)',
          'Garage cleaning',
          'Mailbox replacement',
          'Fence repairs',
          'Power washing deck/patio/furniture',
          'Tree wrapping',
          'Outdoor furniture storage',
          'Lawn care referral',
          'Snow removal referral',
          'Gutter cleaning coordination'
        ].map((item, i) => (
          <li key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 text-sm text-left text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

<Footer />
      
</main>
    </>
  )
}