'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExperimentalRadialNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '🏠', href: '/home', tooltip: 'หน้าหลัก', angle: -140 },
    { label: '➕', href: '/product', tooltip: 'ลงขาย', angle: -100 },
    { label: '🔖', href: '#', tooltip: 'บุ๊กมาร์ก', angle: -60 },
    { label: '👤', href: '#', tooltip: 'โปรไฟล์', angle: -20 },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center justify-center">
        {menuItems.map((item, index) => {
          const rad = (item.angle * Math.PI) / 180;
          const radius = isOpen ? 85 : 0;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <Link
              key={index}
              href={item.href}
              style={{
                transform: `translate(${x}px, ${y}px) scale(${isOpen ? 1 : 0})`,
                opacity: isOpen ? 1 : 0,
                transition: `all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.04}s`,
              }}
              className="absolute w-11 h-11 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg rounded-full flex items-center justify-center text-base hover:scale-110 active:scale-95 text-slate-800 dark:text-white"
              title={item.tooltip}
            >
              {item.label}
            </Link>
          );
        })}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-13 h-13 p-3 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl flex items-center justify-center font-bold text-xl transition-transform duration-300 ${
            isOpen ? 'rotate-45 scale-105' : 'hover:scale-110'
          }`}
        >
          ✦
        </button>
      </div>
    </div>
  );
}