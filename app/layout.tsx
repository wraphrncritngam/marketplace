import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Campus Marketplace',
  description: 'ตลาดนัดออนไลน์สำหรับนักศึกษาในวิทยาลัย',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="dark" suppressHydrationWarning>
      {/* สังเกตตรง body: กำหนดสีพื้นหลัง bg-slate-50 และ dark:bg-slate-950 ให้ครอบคลุมทั้งหน้าจอ */}
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <div className="w-full max-w-md md:max-w-5xl lg:max-w-6xl mx-auto min-h-screen relative flex flex-col shadow-2xl bg-white dark:bg-[#090d16] border-x border-slate-200 dark:border-slate-800">
          <header className="p-4 md:px-8 flex justify-between items-center border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-md sticky top-0 z-40 bg-white/80 dark:bg-[#090d16]/80">
            <span className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              CAMPUS MARKET
            </span>
            <ThemeToggle />
          </header>
          <main className="flex-1 pb-20 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}