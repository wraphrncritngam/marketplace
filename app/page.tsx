'use client';

import Link from 'next/link';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-between h-[85vh] p-6 text-center">
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-5xl shadow-lg shadow-blue-500/30 animate-pulse">
          🛍️
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2">
            Campus Marketplace
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            แหล่งซื้อ-ขาย แลกเปลี่ยนสิ่งของสำหรับนักศึกษาในวิทยาลัย สะดวก ปลอดภัย นัดรับได้ทันที
          </p>
        </div>
      </div>

      <Link
        href="/home"
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 hover:opacity-95 active:scale-98 transition text-center"
      >
        เข้าสู่หน้าหลัก
      </Link>
    </div>
  );
}