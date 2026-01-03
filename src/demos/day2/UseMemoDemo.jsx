import { useState, useMemo } from 'react';

// Expensive calculation function
function expensiveCalculation(n) {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += n;
  }
  return result;
}

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  // Without useMemo - recalculates on every render
  // const expensiveResult = expensiveCalculation(count);

  // With useMemo - only recalculates when count changes
  const expensiveResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="space-y-6">
      <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
        <h3 className="text-lg font-semibold text-teal-900 mb-4">Expensive Calculation Caching</h3>
        <p className="text-sm text-gray-600 mb-4">
          The expensive calculation only runs when the count changes, not when otherValue changes.
          Check the console to see when calculations occur.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded border border-teal-200">
            <div className="text-sm text-gray-600 mb-2">Count (triggers calculation)</div>
            <div className="text-3xl font-bold text-teal-700 mb-2">{count}</div>
            <div className="flex gap-2">
              <button
                onClick={() => setCount(count - 1)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
              >
                -
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-teal-200">
            <div className="text-sm text-gray-600 mb-2">Other Value (doesn't trigger)</div>
            <div className="text-3xl font-bold text-purple-700 mb-2">{otherValue}</div>
            <div className="flex gap-2">
              <button
                onClick={() => setOtherValue(otherValue - 1)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
              >
                -
              </button>
              <button
                onClick={() => setOtherValue(otherValue + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-teal-100 p-4 rounded border border-teal-300">
          <div className="text-sm text-gray-600 mb-1">Expensive Result:</div>
          <div className="text-2xl font-bold text-teal-800">{expensiveResult.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}


