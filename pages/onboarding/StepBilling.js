// pages/onboarding/StepBilling.js
import { useState } from 'react';

export default function StepBilling({ onSave, onNext }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async () => {
    if (!cardNumber || !expiry || !cvc) return alert('Please fill out all fields.');
    setProcessing(true);

    // ⚠️ This is where you’d call Stripe API in real life:
    setTimeout(() => {
      setProcessing(false);
      onSave({ billing_status: 'mock_paid' }); // Save to home or customer record if desired
      onNext();
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <p className="text-gray-600 mb-6">Enter your payment info to complete your plan signup.</p>

      <div className="space-y-4 mb-4">
        <input
          type="text"
          placeholder="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-md"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-3 rounded-md"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-3 rounded-md"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={processing}
        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
      >
        {processing ? 'Processing...' : 'Submit Payment'}
      </button>
    </div>
  );
}
