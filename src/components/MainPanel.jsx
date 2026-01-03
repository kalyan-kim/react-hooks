import { hooksList } from '../hooksList';

// Import all demo components
import UseStateDemo from '../demos/day1/UseStateDemo';
import UseEffectDemo from '../demos/day1/UseEffectDemo';
import UseRefDemo from '../demos/day1/UseRefDemo';
import UseIdDemo from '../demos/day1/UseIdDemo';
import UseMemoDemo from '../demos/day2/UseMemoDemo';
import UseCallbackDemo from '../demos/day2/UseCallbackDemo';
import UseContextDemo from '../demos/day2/UseContextDemo';
import UseReducerDemo from '../demos/day2/UseReducerDemo';
import UseToggleDemo from '../demos/day3/UseToggleDemo';
import UseInputDemo from '../demos/day3/UseInputDemo';
import UseDebounceDemo from '../demos/day3/UseDebounceDemo';
import UsePreviousDemo from '../demos/day3/UsePreviousDemo';

const demoComponents = {
  useState: UseStateDemo,
  useEffect: UseEffectDemo,
  useRef: UseRefDemo,
  useId: UseIdDemo,
  useMemo: UseMemoDemo,
  useCallback: UseCallbackDemo,
  useContext: UseContextDemo,
  useReducer: UseReducerDemo,
  useToggle: UseToggleDemo,
  useInput: UseInputDemo,
  useDebounce: UseDebounceDemo,
  usePrevious: UsePreviousDemo,
};

export default function MainPanel({ selectedHook }) {
  // Find the selected hook from the hooks list
  const hook = hooksList
    .flatMap(day => day.hooks)
    .find(h => h.id === selectedHook);

  const DemoComponent = selectedHook ? demoComponents[selectedHook] : null;

  if (!selectedHook || !DemoComponent) {
    return (
      <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to React Hooks Interactive Lab
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Select a hook from the sidebar to see it in action
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Day 1</h3>
                <p className="text-sm text-gray-600">Core Hooks</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Day 2</h3>
                <p className="text-sm text-gray-600">Structure & Performance</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Day 3</h3>
                <p className="text-sm text-gray-600">Custom Hooks</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{hook.name}</h2>
          <p className="text-gray-600">{hook.description}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <DemoComponent />
        </div>
      </div>
    </main>
  );
}


