'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  seller: string;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, title: 'หนังสือเรียน Calculus II สภาพดี', price: 180, category: 'หนังสือ', seller: 'พี่ปอนด์ ปี 3', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400' },
  { id: 2, title: 'เมาส์ไร้สาย Logitech Silent', price: 350, category: 'ไอที', seller: 'กิ๊ฟ วิศวะ', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400' },
  { id: 3, title: 'เสื้อกาวน์หมอ/เภสัช Size M', price: 200, category: 'เสื้อผ้า', seller: 'ฟ้า สดใส', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400' },
  // 🟢 แก้ไข URL รูปพัดลมเป็นรูปใหม่ที่ใช้งานได้แน่ๆ
  { id: 4, title: 'พัดลมตั้งโต๊ะ USB ตัวเล็ก', price: 120, category: 'เครื่องใช้ไฟฟ้า', seller: 'ไมค์ หอ 8', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400' },
  { id: 5, title: 'iPad Gen 9 64GB Wi-Fi สภาพ 95%', price: 7900, category: 'ไอที', seller: 'แอน บริหาร', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // ฟังก์ชันสลับธีม
  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-12 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header / Navbar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
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

      {/* เนื้อหาหลัก */}
      <main className="p-4 max-w-md mx-auto">
        <div className="my-4">
          <h2 className="text-xl font-bold">สินค้ามาใหม่ 🔥</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            รายการประกาศขายล่าสุดจากเพื่อนในมหาลัย
          </p>
        </div>

        {/* รายการสินค้าตัวอย่าง 5 รายการ */}
        <div className="grid grid-cols-1 gap-4">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden border shadow-sm flex transition-colors duration-300 ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-28 h-28 object-cover flex-shrink-0"
                onError={(e) => {
                  // 🟢 ถ้าลิงก์รูปมีปัญหา จะเปลี่ยนเป็นรูป Placeholder สำรองอัตโนมัติ
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400';
                }}
              />
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {product.category}
                  </span>
                  <h3 className="text-sm font-semibold mt-1 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ผู้ขาย: {product.seller}
                  </p>
                </div>
                <div className="text-blue-500 font-bold text-sm">
                  ฿{product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}