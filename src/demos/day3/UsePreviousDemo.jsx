import { useState } from 'react';
import { usePrevious } from '../../hooks/usePrevious';

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const prevCount = usePrevious(count);
  const prevName = usePrevious(name);

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Custom usePrevious Hook</h3>
        <p className="text-sm text-gray-600 mb-4">
          Tracks the previous value of a state variable. Useful for comparing current vs previous values.
        </p>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded border border-amber-200">
            <h4 className="text-md font-semibold text-amber-800 mb-3">Counter Example</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Current</div>
                <div className="text-4xl font-bold text-amber-700">{count}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Previous</div>
                <div className="text-4xl font-bold text-gray-500">
                  {prevCount !== undefined ? prevCount : '—'}
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Decrement
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Increment
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded border border-amber-200">
            <h4 className="text-md font-semibold text-amber-800 mb-3">Input Example</h4>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Current</div>
                <div className="font-semibold text-amber-700">{name || '(empty)'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Previous</div>
                <div className="font-semibold text-gray-500">
                  {prevName !== undefined ? (prevName || '(empty)') : '—'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


