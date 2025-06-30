// pages/book-visit.js
import dynamic from 'next/dynamic';

// Dynamically import CalendlyEmbed with SSR disabled
const CalendlyEmbed = dynamic(
  () => import('../components/CalendlyEmbed'),
  { ssr: false }
);

export default function BookVisit() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <CalendlyEmbed />
    </main>
  );
}