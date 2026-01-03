export const hooksList = [
  {
    day: 1,
    title: 'Day 1: Core Hooks',
    hooks: [
      {
        id: 'useState',
        name: 'useState',
        description: 'Manages component state with a counter and controlled input',
        component: 'UseStateDemo'
      },
      {
        id: 'useEffect',
        name: 'useEffect',
        description: 'Handles side effects with a timer that includes cleanup',
        component: 'UseEffectDemo'
      },
      {
        id: 'useRef',
        name: 'useRef',
        description: 'Accesses DOM elements and stores previous values',
        component: 'UseRefDemo'
      },
      {
        id: 'useId',
        name: 'useId',
        description: 'Generates unique IDs for accessible form inputs',
        component: 'UseIdDemo'
      }
    ]
  },
  {
    day: 2,
    title: 'Day 2: Structure & Performance',
    hooks: [
      {
        id: 'useMemo',
        name: 'useMemo',
        description: 'Caches expensive calculations to optimize performance',
        component: 'UseMemoDemo'
      },
      {
        id: 'useCallback',
        name: 'useCallback',
        description: 'Memoizes functions to prevent unnecessary re-renders',
        component: 'UseCallbackDemo'
      },
      {
        id: 'useContext',
        name: 'useContext',
        description: 'Accesses context values to avoid prop drilling',
        component: 'UseContextDemo'
      },
      {
        id: 'useReducer',
        name: 'useReducer',
        description: 'Manages complex state with a reducer pattern',
        component: 'UseReducerDemo'
      }
    ]
  },
  {
    day: 3,
    title: 'Day 3: Custom Hooks',
    hooks: [
      {
        id: 'useToggle',
        name: 'useToggle',
        description: 'Custom hook for boolean state toggling',
        component: 'UseToggleDemo'
      },
      {
        id: 'useInput',
        name: 'useInput',
        description: 'Custom hook for managing form input state',
        component: 'UseInputDemo'
      },
      {
        id: 'useDebounce',
        name: 'useDebounce',
        description: 'Custom hook that debounces value changes',
        component: 'UseDebounceDemo'
      },
      {
        id: 'usePrevious',
        name: 'usePrevious',
        description: 'Custom hook that tracks previous values',
        component: 'UsePreviousDemo'
      }
    ]
  }
];


