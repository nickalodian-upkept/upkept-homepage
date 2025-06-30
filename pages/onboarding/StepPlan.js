export default function StepPlan({ currentValue, onNext, onSave }) {
  const selected = currentValue.plan_type;

  const handleSelect = (type) => {
    onSave({ plan_type: type });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
      <div className="space-y-4">
        {['monthly', 'seasonal', 'try-once'].map((type) => (
          <button
            key={type}
            className={`w-full py-3 px-4 rounded-lg border ${
              selected === type
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300'
            }`}
            onClick={() => handleSelect(type)}
          >
            {type === 'monthly' && 'Monthly – Full Peace of Mind'}
            {type === 'seasonal' && 'Quarterly – Seasonal Essentials'}
            {type === 'try-once' && 'Try Once – One-Time Visit'}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md"
      >
        Continue
      </button>
    </div>
  );
}