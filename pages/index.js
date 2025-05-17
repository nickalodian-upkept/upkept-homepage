import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white min-h-screen px-6 sm:px-8 lg:px-12 py-10 text-gray-800 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center max-w-7xl mx-auto mb-16">
          <h1 className="text-2xl font-bold tracking-tight">Upkept</h1>
          <nav className="flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600">Plans</a>
            <a href="#" className="hover:text-blue-600">How It Works</a>
            <a href="#" className="text-blue-600 hover:text-blue-700">Sign Up</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight">
            Hey Ottawa—time to get proactive with your home upkeep
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our subscription keeps your home safe and maintained with thorough, scheduled visits.
          </p>
          <button className="bg-blue-600 text-white text-base sm:text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            View Plans
          </button>
        </section>

        {/* Tailwind Test Box */}
        <section className="mb-24">
          <div className="p-6 bg-yellow-100 text-lg font-medium text-center rounded-xl shadow-sm max-w-md mx-auto">
            ✅ Tailwind is working if this box is styled!
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mt-24 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2">Monthly</h4>
                <p className="text-3xl font-bold mb-6">$99<span className="text-base font-medium">/month</span></p>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>✅ Scheduled seasonal visits</li>
                  <li>✅ 10-point maintenance checklist</li>
                  <li>✅ Photo reports</li>
                </ul>
              </div>
              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Quarterly Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2">Quarterly</h4>
                <p className="text-3xl font-bold mb-6">$149<span className="text-base font-medium">/quarter</span></p>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>✅ Everything in Standard</li>
                  <li>✅ Priority scheduling</li>
                  <li>✅ Direct message access</li>
                </ul>
              </div>
              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-32 max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Schedule a visit</h4>
              <p className="text-sm text-gray-600">Choose a plan and book your first maintenance appointment.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Get reliable upkeep</h4>
              <p className="text-sm text-gray-600">Our dedicated handyman arrives on time to provide proactive maintenance with attention to detail.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Stay in control</h4>
              <p className="text-sm text-gray-600">After each visit, receive a detailed report on your home’s condition and any work completed.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}