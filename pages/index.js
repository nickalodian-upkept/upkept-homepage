import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
      </Head>
      <main className="bg-white min-h-screen px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">Upkept</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700">Plans</a>
            <a href="#" className="text-gray-700">How It Works</a>
            <a href="#" className="text-blue-600 font-semibold">Sign Up</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-4">Hey Ottawa, we’ll take care of your home like it’s our own.</h2>
          <p className="text-lg mb-6 text-gray-600">Choose a plan. Get monthly checkups. Breathe easier.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            View Plans
          </button>
        </section>

        {/* Tailwind Test Box */}
        <section className="mt-12">
          <div className="p-6 bg-yellow-100 text-xl font-medium text-center rounded-xl shadow-md">
            ✅ Tailwind is working if this box is styled!
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Monthly Plan */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Monthly</h4>
              <p className="text-2xl font-bold mb-4">$99<span className="text-base font-medium">/month</span></p>
              <ul className="space-y-2 mb-6 text-gray-700 list-disc list-inside">
                <li>Scheduled seasonal visits</li>
                <li>10-point maintenance checklist</li>
                <li>Photo reports</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Quarterly Plan */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Quarterly</h4>
              <p className="text-2xl font-bold mb-4">$149<span className="text-base font-medium">/quarter</span></p>
              <ul className="space-y-2 mb-6 text-gray-700 list-disc list-inside">
                <li>Everything in Standard</li>
                <li>Priority scheduling</li>
                <li>Direct message access</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}