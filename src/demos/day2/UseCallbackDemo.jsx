import { useState, useCallback, memo } from 'react';

// Memoized child component
const MemoizedButton = memo(({ onClick, label, count }) => {
  console.log(`Rendering ${label} button`);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {label} (Count: {count})
    </button>
  );
});

MemoizedButton.displayName = 'MemoizedButton';

export default function UseCallbackDemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Without useCallback - new function on every render
  // const handleIncrement1 = () => setCount1(count1 + 1);

  // With useCallback - stable function reference
  const handleIncrement1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleIncrement2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
        <h3 className="text-lg font-semibold text-cyan-900 mb-4">Stable Function References</h3>
        <p className="text-sm text-gray-600 mb-4">
          useCallback memoizes functions to prevent unnecessary re-renders of memoized child components.
          Check the console to see when buttons re-render.
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-cyan-200">
            <div className="text-sm text-gray-600 mb-2">Counter 1</div>
            <div className="text-3xl font-bold text-cyan-700 mb-3">{count1}</div>
            <MemoizedButton
              onClick={handleIncrement1}
              label="Increment Counter 1"
              count={count1}
            />
          </div>

          <div className="bg-white p-4 rounded border border-cyan-200">
            <div className="text-sm text-gray-600 mb-2">Counter 2</div>
            <div className="text-3xl font-bold text-purple-700 mb-3">{count2}</div>
            <MemoizedButton
              onClick={handleIncrement2}
              label="Increment Counter 2"
              count={count2}
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-cyan-100 rounded text-xs text-cyan-800">
          <p className="font-semibold">Note:</p>
          <p>When you increment Counter 1, only the first button re-renders because useCallback keeps the function reference stable for Counter 2's button.</p>
        </div>
      </div>
    </div>
  );
}

