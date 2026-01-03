import { useToggle } from '../../hooks/useToggle';

export default function UseToggleDemo() {
  const [isOn, toggle, setOn, setOff] = useToggle(false);

  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
        <h3 className="text-lg font-semibold text-emerald-900 mb-4">Custom useToggle Hook</h3>
        <p className="text-sm text-gray-600 mb-4">
          A reusable hook for managing boolean state with toggle, setTrue, and setFalse functions.
        </p>

        <div className="bg-white p-6 rounded border border-emerald-200">
          <div className="text-center mb-6">
            <div className={`inline-block px-6 py-3 rounded-lg text-lg font-semibold ${
              isOn
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}>
              {isOn ? 'ON' : 'OFF'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={toggle}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Toggle
            </button>
            <button
              onClick={setOn}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Set ON
            </button>
            <button
              onClick={setOff}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Set OFF
            </button>
            <button
              onClick={() => {
                setOn();
                setTimeout(() => setOff(), 2000);
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Flash (2s)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


