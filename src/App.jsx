import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { hooksList } from './hooksList';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';

function App() {
  const [selectedHook, setSelectedHook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-select first hook if none selected
  useEffect(() => {
    if (!selectedHook && hooksList.length > 0 && hooksList[0].hooks.length > 0) {
      setSelectedHook(hooksList[0].hooks[0].id);
    }
  }, [selectedHook]);

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-64 md:w-80 flex-shrink-0">
            <Sidebar
              hooksList={hooksList}
              selectedHook={selectedHook}
              onSelectHook={setSelectedHook}
              searchQuery={searchQuery}
            />
          </div>
          <MainPanel selectedHook={selectedHook} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

