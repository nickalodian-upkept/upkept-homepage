export default function StepWelcome({ onNext }) {
  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Upkept 👋</h1>
      <p className="text-gray-600 mb-6">
        Let’s get your home setup so we can keep it safe, maintained, and stress-free.
      </p>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium"
      >
        Get Started
      </button>
    </div>
  );
}