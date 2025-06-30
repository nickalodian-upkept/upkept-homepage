// pages/onboarding/StepStartDate.js
import { useEffect } from 'react';

export default function StepStartDate({ currentValue, onSave, onNext }) {
  useEffect(() => {
    const messageHandler = (e) => {
      if (e.origin.includes('calendly.com') && e.data.event === 'calendly.event_scheduled') {
        console.log('Calendly event scheduled:', e.data);
        const scheduledDate = new Date().toISOString();
        onSave({
          plan_start_date: scheduledDate,
          onboarding_step: 'billing',
        });
      }
    };

    window.addEventListener('message', messageHandler);
    return () => window.removeEventListener('message', messageHandler);
  }, [onSave]);

  const handleManualAdvance = () => {
    const scheduledDate = new Date().toISOString();
    onSave({
      plan_start_date: scheduledDate,
      onboarding_step: 'billing',
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Schedule Your First Visit</h2>
      <p className="text-gray-600 mb-6">
        Choose a convenient time for your first maintenance visit below.
      </p>

      <div className="w-full h-[700px] border rounded-2xl overflow-hidden shadow">
        <iframe
          src="https://calendly.com/donaldson-nickj/home-maintenance-visit?hide_gdpr_banner=1"
          title="Book Your First Visit"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Powered by Calendly. Once you book, you’ll advance automatically. If it doesn’t, you can continue manually below.
      </p>

      <button
        onClick={handleManualAdvance}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Continue to Billing
      </button>
    </div>
  );
}
