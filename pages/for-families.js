import Head from 'next/head';
import Image from 'next/image';

export default function ForFamilies() {
  return (
    <>
      <Head>
        <title>Support for Families | Upkept</title>
        <meta name="description" content="Support your aging parents' home with proactive, photo-verified upkeep from Upkept." />
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* Hero Section - redesigned */}
        <section className="bg-yellow-50 py-28 px-6 border-b border-yellow-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 items-center gap-10">
            <div className="md:col-span-6 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">You Can’t Be Everywhere. But You Can Still Be on Top of It.</h1>
              <p className="text-lg text-gray-700 mb-6">
                Upkept gives you a real-time view into your parents’ home upkeep, without adding more to your plate.
              </p>
              <a href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Explore Plans</a>
            </div>
            <div className="md:col-span-6 flex justify-center md:justify-end">
              <Image src="/parent-checkin.png" alt="Parent Check-In Dashboard Mockup" width={480} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Families Trust Upkept</h2>
            <p className="text-gray-600 text-lg mb-10">It’s hard to keep an eye on everything when you're not nearby. We make it easy to keep your parents’ home in great shape — and keep you in the loop.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">✓ Remote oversight</h4>
                <p>Photo-verified reports after every visit</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Safety first</h4>
                <p>Routine checks to prevent small issues from becoming big problems</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Total transparency</h4>
                <p>You and your parent see the same dashboard, so everyone’s on the same page</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">This Is What Peace of Mind Looks Like</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="bg-white rounded-2xl border p-8 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Without Upkept</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>• Constant worry about safety issues</li>
                  <li>• Coordinating random contractors from afar</li>
                  <li>• Uncertainty around what’s actually getting done</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">With Upkept</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>• Your trusted technician visits monthly</li>
                  <li>• You get photos and reports after every visit</li>
                  <li>• One dashboard for you and your parent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">What Other Families Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left text-gray-700 text-lg italic">
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                “I live in Vancouver and my mom’s in Ottawa. Upkept gives me such peace of mind — I can see her home’s condition, the visit summary, and even photos. Total game-changer.”
                <span className="block mt-4 text-sm not-italic font-semibold text-gray-600">— Sarah M.</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                “My siblings and I split the cost and we all get access to the dashboard. We finally feel like we’re on top of things — without constantly texting Mom about her furnace.”
                <span className="block mt-4 text-sm not-italic font-semibold text-gray-600">— Alex G.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 px-6 bg-[url('/bg-subtle-texture.svg')] bg-blue-50 bg-top bg-cover">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl px-8 py-12">
              <h2 className="text-3xl font-bold mb-6">Perfect for Adult Children of Aging Parents</h2>
              <p className="text-lg text-gray-600 mb-6">Whether you live across town or across the country, Upkept gives you peace of mind and practical support.</p>
              <ul className="space-y-4 text-sm text-gray-700 text-left max-w-md mx-auto">
                <li>✓ Parents who live independently but need help with upkeep</li>
                <li>✓ Siblings sharing responsibility for an aging parent’s home</li>
                <li>✓ Caregivers juggling multiple responsibilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plan Highlight */}
        <section className="bg-yellow-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Plan Families Love</h2>
            <p className="text-lg text-gray-700 mb-8">Our Monthly Plan gives your parents regular support — and gives you a complete view from wherever you are.</p>
            <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto text-left">
              <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
              <p className="text-2xl font-bold mb-4">$199<span className="text-base font-normal">/mo</span></p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ 12 proactive visits per year</li>
                <li>✓ Same trusted technician</li>
                <li>✓ Full dashboard access for family</li>
                <li>✓ Photo reports + safety alerts</li>
                <li>✓ Option to add one-time tasks</li>
              </ul>
              <a href="/pricing" className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">See Full Plan Details</a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Less Worry, More Time for What Matters</h2>
          <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto">Let us take care of the house, so you can focus on your parents — not their gutters, furnace, or light fixtures.</p>
          <a href="/signup" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Book the First Checkup</a>
        </section>
      </main>
    </>
  );
}