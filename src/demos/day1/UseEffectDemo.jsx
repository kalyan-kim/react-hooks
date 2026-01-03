import { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-900 mb-4">Timer with Cleanup</h3>
        <div className="text-center mb-4">
          <div className="text-5xl font-bold text-green-700 mb-2">{count}</div>
          <p className="text-sm text-gray-600">seconds elapsed</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-2 rounded transition ${
              isRunning
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={() => {
              setCount(0);
              setIsRunning(false);
            }}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600 text-center">
          {isRunning 
            ? 'Timer is running. Cleanup will run when stopped or component unmounts.'
            : 'Timer is stopped. Click Start to begin.'}
        </p>
      </div>
    </div>
  );
}


