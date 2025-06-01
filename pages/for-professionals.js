import Head from 'next/head';
import Image from 'next/image';

export default function ForProfessionals() {
  return (
    <>
      <Head>
        <title>For Busy Professionals | Upkept</title>
        <meta name="description" content="Upkept helps busy professionals take home maintenance off their to-do list with proactive visits, photo reports, and easy task approvals." />
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-blue-50 py-28 px-6 border-b border-blue-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 items-center gap-10">
            <div className="md:col-span-6 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Home Upkeep, Off Your To-Do List
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Whether you work long hours or travel often, Upkept keeps your home in shape — with zero hassle.
              </p>
              <a href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Plans
              </a>
            </div>
            <div className="md:col-span-6 flex justify-center md:justify-end">
              <Image src="/dashboard-laptop.png" alt="Dashboard on laptop" width={480} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Why Professionals Choose Upkept */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Professionals Choose Upkept</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">✓ Less Scheduling, More Living</h4>
                <p>We show up like clockwork — no coordination needed.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Async-Friendly</h4>
                <p>Approve or defer tasks via email or text — no phone calls required.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Always in the Loop</h4>
                <p>See photos, reports, and upcoming tasks in your personal dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-blue-50 py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Getting Started Is Simple</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <Image src="/step-1-calendar.png" alt="Schedule visit" width={64} height={64} className="mb-4" />
                <h4 className="text-lg font-semibold mb-2">Schedule a Visit</h4>
                <p className="text-sm text-gray-600">Choose a plan and book your first maintenance appointment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <Image src="/step-2-handyman.png" alt="Reliable upkeep" width={64} height={64} className="mb-4" />
                <h4 className="text-lg font-semibold mb-2">Get Reliable Upkeep</h4>
                <p className="text-sm text-gray-600">Your dedicated handyman shows up proactively — no reminders needed.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <Image src="/step-3-dashboard.png" alt="Dashboard view" width={64} height={64} className="mb-4" />
                <h4 className="text-lg font-semibold mb-2">Stay in the Know</h4>
                <p className="text-sm text-gray-600">Track tasks, view reports, and approve add-ons from your dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Worry-Free Section */}
        <section className="bg-gray-50 py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/always-on-tracker.png" alt="Maintenance tracker" width={480} height={400} className="rounded-xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">What You’ll Never Worry About Again</h2>
              <p className="text-gray-600 text-lg mb-6">
                Upkept handles the annoying, the forgotten, and the “I’ll deal with it later” — so you can focus on everything else.
              </p>
              <ul className="text-gray-700 space-y-4 text-base">
                <li className="flex items-start gap-3">✓ Booking last-minute repairs or inspections</li>
                <li className="flex items-start gap-3">✓ Wondering what’s happening at home while you’re away</li>
                <li className="flex items-start gap-3">✓ Following up with contractors or chasing quotes</li>
                <li className="flex items-start gap-3">✓ Forgetting seasonal upkeep tasks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plan Highlight */}
        <section className="bg-blue-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Plan Busy Homeowners Love</h2>
            <p className="text-lg text-gray-700 mb-8">Our Monthly Plan gives you consistent support — without adding a single task to your day.</p>
            <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto text-left">
              <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
              <p className="text-2xl font-bold mb-4">$199<span className="text-base font-normal">/mo</span></p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ 12 proactive visits per year</li>
                <li>✓ Same trusted technician</li>
                <li>✓ Dashboard + async task approval</li>
                <li>✓ Photo reports + notifications</li>
              </ul>
              <a href="/pricing" className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">See Full Plan Details</a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Peace of Mind, Delivered Monthly</h2>
          <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto">
            Don’t let small things pile up. Let us take care of your home while you take care of everything else.
          </p>
          <a href="/signup" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Book the First Checkup
          </a>
        </section>
      </main>
    </>
  );
}