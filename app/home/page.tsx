'use client';

import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle'; // <-- นำปุ่มมาใส่ตรงนี้

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Campus Marketplace
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/product"
            className="px-4 py-1.5 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Sell
          </Link>

          {/* ปุ่มสลับธีม ขาว - ดำ */}
          <ThemeToggle />
        </div>
      </header>
      
      {/* โค้ดส่วนอื่นๆ ของหน้า Home... */}
    </div>
  );
}