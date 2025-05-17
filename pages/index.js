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

        {/* Tailwind Test Box (optional to remove) */}
        <section className="mb-24">
          <div className="p-6 bg-yellow-100 text-lg font-medium text-center rounded-xl shadow-sm max-w-md mx-auto">
            ✅ Tailwind is working if this box is styled!
          </div>
        </section>

        {/* All other sections will follow */}
      </main>
    </>
  );
}