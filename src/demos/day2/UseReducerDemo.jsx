import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const initialState = { count: 0 };

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="space-y-6">
      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
        <h3 className="text-lg font-semibold text-pink-900 mb-4">State Machine with useReducer</h3>
        <p className="text-sm text-gray-600 mb-4">
          useReducer manages complex state with a reducer pattern, similar to Redux.
          All state updates go through the reducer function.
        </p>

        <div className="bg-white p-6 rounded border border-pink-200 mb-4">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-pink-700 mb-2">{state.count}</div>
            <div className="text-sm text-gray-600">Current Count</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => dispatch({ type: 'decrement' })}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: 'increment' })}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Increment
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => dispatch({ type: 'set', payload: 10 })}
              className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition"
            >
              Set to 10
            </button>
            <button
              onClick={() => dispatch({ type: 'set', payload: 50 })}
              className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition"
            >
              Set to 50
            </button>
            <button
              onClick={() => dispatch({ type: 'reset' })}
              className="px-3 py-2 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-pink-100 p-4 rounded border border-pink-300">
          <p className="text-xs text-pink-800 font-semibold mb-2">Available Actions:</p>
          <ul className="text-xs text-pink-700 list-disc list-inside space-y-1">
            <li><code className="bg-pink-200 px-1 rounded">increment</code> - Adds 1</li>
            <li><code className="bg-pink-200 px-1 rounded">decrement</code> - Subtracts 1</li>
            <li><code className="bg-pink-200 px-1 rounded">set</code> - Sets to a specific value</li>
            <li><code className="bg-pink-200 px-1 rounded">reset</code> - Resets to 0</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


