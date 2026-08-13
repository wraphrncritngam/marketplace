'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2500); // แสดง Splash Screen 2.5 วินาทีแล้วไปหน้า /home

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4 text-center">
      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-lg shadow-blue-500/30 animate-bounce mb-6">
        CM
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
        Campus Marketplace
      </h1>
      <p className="text-slate-400 text-sm max-w-xs">
        แหล่งรวมสินค้าสำหรับนักศึกษา ซื้อง่าย ขายสะดวก ในรั้วมหาลัย
      </p>
    </div>
  );
}
