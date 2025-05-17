import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upkept | Home Maintenance Made Easy</title>
      </Head>
      <main className="bg-white min-h-screen px-6 py-12">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">Upkept</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700">Plans</a>
            <a href="#" className="text-gray-700">How It Works</a>
            <a href="#" className="text-blue-600 font-semibold">Sign Up</a>
          </nav>
        </header>

        <section className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-4">Hey Ottawa, we’ll take care of your home like it’s our own.</h2>
          <p className="text-lg mb-6 text-gray-600">Choose a plan. Get monthly checkups. Breathe easier.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            View Plans
          </button>
        </section>

        {/* ✅ Tailwind Test Box */}
        <section className="mt-12">
          <div className="p-6 bg-yellow-100 text-xl font-medium text-center rounded-xl shadow-md">
            ✅ Tailwind is working if this box is styled!
          </div>
        </section>
      </main>
    </>
  );
}