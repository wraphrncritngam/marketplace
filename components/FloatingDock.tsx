'use client';

import Link from 'next/link';

export default function FloatingDock() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800/80 rounded-full shadow-2xl shadow-blue-500/10">
        <Link href="/home" className="text-xl hover:scale-125 transition-transform" title="หน้าแรก">
          🏠
        </Link>
        <Link href="/product" className="text-xl hover:scale-125 transition-transform" title="ลงขาย">
          ➕
        </Link>
        <button className="text-xl hover:scale-125 transition-transform" title="บันทึกไว้">
          🔖
        </button>
        <button className="text-xl hover:scale-125 transition-transform" title="โปรไฟล์">
          👤
        </button>
      </div>
    </div>
  );
}