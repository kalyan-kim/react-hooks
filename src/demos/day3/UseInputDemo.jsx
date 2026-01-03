import { useInput } from '../../hooks/useInput';

export default function UseInputDemo() {
  const nameInput = useInput('');
  const emailInput = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${nameInput.value}\nEmail: ${emailInput.value}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
        <h3 className="text-lg font-semibold text-violet-900 mb-4">Custom useInput Hook</h3>
        <p className="text-sm text-gray-600 mb-4">
          A reusable hook that manages input state and provides onChange handler and reset function.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded border border-violet-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...nameInput}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...emailInput}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                nameInput.reset();
                emailInput.reset();
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Reset All
            </button>
          </div>
        </form>

        <div className="mt-4 p-3 bg-violet-100 rounded text-xs text-violet-800">
          <p className="font-semibold mb-1">Current Values:</p>
          <p>Name: {nameInput.value || '(empty)'}</p>
          <p>Email: {emailInput.value || '(empty)'}</p>
        </div>
      </div>
    </div>
  );
}


