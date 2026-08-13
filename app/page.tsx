'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // ฟังก์ชันสลับธีม
  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    
    if (nextMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-12 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header / Navbar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400">
          Campus Marketplace
        </h1>

        <div className="flex items-center gap-3">
          <Link
            href="/product"
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full font-semibold transition"
          >
            + ลงขายสินค้า
          </Link>

          {/* ปุ่มสลับ Dark / Light Mode */}
          <button
            onClick={toggleTheme}
            type="button"
            className={`relative inline-flex h-7 w-14 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
              darkMode ? 'bg-slate-700 border border-slate-600' : 'bg-slate-200 border border-slate-300'
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs shadow-md transition-transform duration-300 transform ${
                darkMode ? 'translate-x-7 bg-slate-900 text-yellow-400' : 'translate-x-0 text-amber-500'
              }`}
            >
              {darkMode ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </header>

      {/* เนื้อหาอื่นๆ */}
      <main className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold my-4">สินค้ามาใหม่ 🔥</h2>
        
        {/* Card ตัวอย่าง */}
        <div className={`p-4 rounded-xl border shadow-sm transition ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
          <h3 className="font-semibold">ตัวอย่างสินค้า</h3>
          <p className="text-xs text-slate-400">ทดสอบการเปลี่ยนสีธีม</p>
        </div>
      </main>
    </div>
  );
}