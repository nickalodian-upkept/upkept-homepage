import { useState } from 'react';

export default function StepAddress({ currentValue, onSave, onNext }) {
  const [address, setAddress] = useState(currentValue.address || '');

  const handleSubmit = () => {
    if (!address) return;
    onSave({ address });
    onNext();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Where’s your home?</h2>
      <p className="text-gray-600 mb-6">We’ll use this to schedule visits and help localize your service.</p>
      <input
        type="text"
        placeholder="Enter your home address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border border-gray-300 px-4 py-3 rounded-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        Continue
      </button>
    </div>
  );
}