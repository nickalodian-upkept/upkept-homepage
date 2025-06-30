import { useState } from 'react';

export default function StepName({ currentValue, onNext, onSave }) {
  const [name, setName] = useState(currentValue?.full_name || '');
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (!name.trim()) return;
    setLoading(true);
    await onSave({ full_name: name.trim() });
    onNext();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">What’s your name?</h2>
      <input
        type="text"
        className="w-full border rounded px-3 py-2 mb-4"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleNext}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? 'Saving...' : 'Next'}
      </button>
    </div>
  );
}
