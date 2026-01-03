import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

export default function UseDebounceDemo() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div className="space-y-6">
      <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
        <h3 className="text-lg font-semibold text-rose-900 mb-4">Custom useDebounce Hook</h3>
        <p className="text-sm text-gray-600 mb-4">
          Debounces value changes to delay updates until the user stops typing. Useful for search inputs and API calls.
        </p>

        <div className="bg-white p-6 rounded border border-rose-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type something (updates immediately):
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Start typing..."
              className="w-full px-4 py-2 border border-rose-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <div className="mt-2 text-sm text-gray-600">
              Current: <span className="font-semibold text-rose-700">{inputValue || '(empty)'}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-rose-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Debounced value (updates after 500ms of no typing):
            </label>
            <div className="w-full px-4 py-2 bg-rose-100 border border-rose-300 rounded">
              <span className="font-semibold text-rose-800">{debouncedValue || '(empty)'}</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              This value only updates 500ms after you stop typing
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-rose-100 rounded text-xs text-rose-800">
          <p className="font-semibold">Use Cases:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Search inputs (reduce API calls)</li>
            <li>Form validation (wait for user to finish typing)</li>
            <li>Auto-save functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


