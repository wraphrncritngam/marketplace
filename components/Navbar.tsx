'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between items-center">
      <Link href="/home" className="text-lg font-bold text-blue-600 dark:text-blue-400">
        Campus Marketplace
      </Link>
      <div className="flex items-center gap-3">
        <Link 
          href="/product" 
          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full font-semibold transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>
    </nav>
  );
}