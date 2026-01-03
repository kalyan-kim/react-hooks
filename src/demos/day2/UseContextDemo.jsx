import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded transition ${
        theme === 'light'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
      }`}
    >
      Current Theme: {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-lg border-2 transition ${
        theme === 'light'
          ? 'bg-white border-gray-300 text-gray-900'
          : 'bg-gray-800 border-gray-600 text-white'
      }`}
    >
      <h4 className="text-lg font-semibold mb-2">Themed Card</h4>
      <p className="text-sm">
        This card's theme is controlled by context, avoiding prop drilling through multiple components.
      </p>
    </div>
  );
}

export default function UseContextDemo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="space-y-6">
      <div
        className={`p-6 rounded-lg border-2 transition ${
          theme === 'light'
            ? 'bg-blue-50 border-blue-200'
            : 'bg-gray-900 border-gray-700'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${
          theme === 'light' ? 'text-blue-900' : 'text-white'
        }`}>
          Context Theme Management
        </h3>
        <p className={`text-sm mb-4 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          useContext allows components to access context values without prop drilling.
          The theme is shared across all components using the ThemeContext.
        </p>

        <div className="space-y-4">
          <div className="flex justify-center">
            <ThemedButton />
          </div>
          <ThemedCard />
        </div>

        <div className={`mt-4 p-3 rounded text-xs ${
          theme === 'light'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-gray-800 text-gray-300'
        }`}>
          <p className="font-semibold">Current Context Value:</p>
          <p>Theme: {theme}</p>
        </div>
      </div>
    </div>
  );
}


