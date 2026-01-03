export default function Sidebar({ hooksList, selectedHook, onSelectHook, searchQuery }) {
  // Filter hooks based on search query
  const filteredHooksList = hooksList.map(day => ({
    ...day,
    hooks: day.hooks.filter(hook =>
      hook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(day => day.hooks.length > 0);

  return (
    <aside className="bg-gray-50 border-r border-gray-200 overflow-y-auto h-full">
      <div className="p-4">
        {filteredHooksList.map((day) => (
          <div key={day.day} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
              {day.title}
            </h2>
            <div className="space-y-1">
              {day.hooks.map((hook) => (
                <button
                  key={hook.id}
                  onClick={() => onSelectHook(hook.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedHook === hook.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{hook.name}</div>
                  <div className={`text-xs mt-1 ${
                    selectedHook === hook.id ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {hook.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

