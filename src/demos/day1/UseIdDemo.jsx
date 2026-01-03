import { useId } from 'react';

export default function UseIdDemo() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
        <h3 className="text-lg font-semibold text-indigo-900 mb-4">Accessible Form with useId</h3>
        <p className="text-sm text-gray-600 mb-4">
          useId generates unique IDs that are stable across server and client renders, perfect for accessible forms.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id={nameId}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id={emailId}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor={passwordId} className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id={passwordId}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 p-3 bg-indigo-100 rounded text-xs text-indigo-800">
          <p className="font-semibold mb-1">Generated IDs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name: {nameId}</li>
            <li>Email: {emailId}</li>
            <li>Password: {passwordId}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


