import { useRouter } from 'next/router';

export default function StepConfirmation({ onSave }) {
  const router = useRouter();

  const handleFinish = async () => {
    await onSave({ signup_completed: true });
    router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">All Set! 🎉</h2>
      <p className="text-gray-600 mb-6">
        Your onboarding is complete. We’ll reach out to confirm your first visit soon.
      </p>
      <button
        onClick={handleFinish}
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium"
      >
        Go to Dashboard
      </button>
    </div>
  );
}