'use client';

import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';
import Card3D from '../../components/Card3D';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  seller: string;
  image: string;
  badge?: string;
}

const mockProducts: Product[] = [
  { id: 1, title: 'หนังสือเรียน Calculus II สภาพดี', price: 180, category: 'หนังสือ', seller: 'พี่ปอนด์ ปี 3', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400', badge: 'ยอดนิยม' },
  { id: 2, title: 'เมาส์ไร้สาย Logitech Silent', price: 350, category: 'ไอที', seller: 'กิ๊ฟ วิศวะ', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400' },
  { id: 3, title: 'เสื้อกาวน์หมอ/เภสัช Size M', price: 200, category: 'เสื้อผ้า', seller: 'ฟ้า สดใส', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400' },
  { id: 4, title: 'พัดลมตั้งโต๊ะ USB ตัวเล็ก', price: 120, category: 'เครื่องใช้ไฟฟ้า', seller: 'ไมค์ หอ 8', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400', badge: 'ลดราคา' },
  { id: 5, title: 'iPad Gen 9 64GB Wi-Fi สภาพ 95%', price: 7900, category: 'ไอที', seller: 'แอน บริหาร', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/15" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-600/15" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20">
            C
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Campus Marketplace
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/product"
            className="text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            + ลงขายสินค้า
          </Link>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-lg mx-auto">
        <div className="my-6 space-y-1">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            EXPLORE ITEMS
          </span>
          <h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
            สินค้ามาใหม่ <span className="animate-bounce">🔥</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            ตลาดนัดมือสองออนไลน์สำหรับนิสิตนักศึกษา
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {mockProducts.map((product) => (
            <Card3D key={product.id}>
              <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-400/40 flex transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400';
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-md shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-3.5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold mt-1.5 text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      {product.seller}
                    </p>
                  </div>

                  <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-xs text-slate-400">ราคา</span>
                    <div className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                      ฿{product.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </main>
    </div>
  );
}