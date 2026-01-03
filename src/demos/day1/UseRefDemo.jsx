import { useState, useRef, useEffect } from 'react';

export default function UseRefDemo() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Focus Input with useRef</h3>
        <div className="flex gap-3 items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="This input can be focused"
            className="flex-1 px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={focusInput}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Focus Input
          </button>
        </div>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
        <h3 className="text-lg font-semibold text-orange-900 mb-2">Previous Value Tracking</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Decrement
            </button>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-700">{count}</div>
              <div className="text-xs text-gray-600">Current</div>
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Increment
            </button>
          </div>
          {prevCount !== undefined && (
            <div className="text-center pt-2 border-t border-orange-200">
              <div className="text-xl font-semibold text-gray-600">{prevCount}</div>
              <div className="text-xs text-gray-500">Previous</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


