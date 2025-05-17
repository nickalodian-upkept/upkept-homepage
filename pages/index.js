import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white min-h-screen px-6 sm:px-8 lg:px-12 py-10 text-gray-800 font-sans">
        {/* Header with Logo */}
        <header className="flex justify-between items-center max-w-7xl mx-auto mb-16">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/upkept-logo.svg"
              alt="Upkept logo"
              className="h-20 w-auto block"
            />
          </a>
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

        {/* Pricing Plans */}
        <section className="mt-24 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2">Monthly</h4>
                <p className="text-3xl font-bold mb-6">
                  $99<span className="text-base font-medium">/month</span>
                </p>
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
                <p className="text-3xl font-bold mb-6">
                  $149<span className="text-base font-medium">/quarter</span>
                </p>
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
            {[
              {
                step: 1,
                title: 'Schedule a visit',
                desc: 'Choose a plan and book your first maintenance appointment.',
              },
              {
                step: 2,
                title: 'Get reliable upkeep',
                desc: 'Our dedicated handyman arrives on time to provide proactive maintenance with attention to detail.',
              },
              {
                step: 3,
                title: 'Stay in control',
                desc: 'After each visit, receive a detailed report on your home’s condition and any work completed.',
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              >
                <div className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-4">
                  {step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tailored to Your Life Stage */}
        <section className="mt-32 max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Tailored to Your Life Stage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* For Families */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🏠</div>
                <h4 className="text-lg font-semibold mb-4">
                  For Families Supporting Aging Parents
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Check on your parents’ home safety remotely</li>
                  <li>✅ Manage home upkeep for them</li>
                  <li>✅ Receive photo-verified checkup reports</li>
                </ul>
              </div>
              <button className="mt-8 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">
                Learn More
              </button>
            </div>

            {/* For Professionals */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">💼</div>
                <h4 className="text-lg font-semibold mb-4">For Busy Professionals</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Simplify your life with scheduled upkeep</li>
                  <li>✅ Manage home maintenance at ease</li>
                  <li>✅ Async-friendly, approve fixes by email or text</li>
                </ul>
              </div>
              <button className="mt-8 bg-gray-100 border text-sm text-gray-800 rounded px-4 py-2 hover:bg-gray-200 transition w-fit">
                Learn More
              </button>
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