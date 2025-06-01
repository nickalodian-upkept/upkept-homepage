import Head from 'next/head';
import {
  HowItWorksHero,
  WhatHappensSteps,
  TrustComparison,
  IncludedPlan,
  AddOnServices,
  FinalCTA,
} from '../components/HowItWorksSections';

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works | Upkept</title>
        <meta
          name="description"
          content="See how Upkept makes home maintenance easy and proactive with a dedicated technician, preloaded task plans, and transparent tracking."
        />
      </Head>

      <main className="bg-white text-gray-800">
        <HowItWorksHero />
        <WhatHappensSteps />
        <TrustComparison />
        <IncludedPlan />
        <AddOnServices />
        <FinalCTA />
      </main>
    </>
  );
}
