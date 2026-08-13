'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex h-7 w-14 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
        darkMode ? 'bg-slate-700 border border-slate-600' : 'bg-slate-200 border border-slate-300'
      }`}
      aria-label="Toggle Theme"
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs shadow-md transition-transform duration-300 transform ${
          darkMode ? 'translate-x-7 bg-slate-900 text-yellow-400' : 'translate-x-0 text-amber-500'
        }`}
      >
        {darkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
}