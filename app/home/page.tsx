'use client';

import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';
import Card3D from '../../components/Card3D';
import Product3DCanvas from '../../components/Product3DCanvas';
import ExperimentalRadialNav from '../../components/ExperimentalRadialNav';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  seller: string;
  image?: string;
  badge?: string;
  is3D?: boolean;
  themeColor?: string;
}

const mockProducts: Product[] = [
  { id: 1, title: 'NFT / 3D Asset Model 01', price: 2500, category: '3D สินค้า', seller: 'กราฟิก ปี 4', is3D: true, themeColor: '#6366f1', badge: '3D ITEM' },
  { id: 2, title: 'หนังสือเรียน Calculus II สภาพดี', price: 180, category: 'หนังสือ', seller: 'พี่ปอนด์ ปี 3', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400', badge: 'ยอดนิยม' },
  { id: 3, title: 'เมาส์ไร้สาย Logitech Silent', price: 350, category: 'ไอที', seller: 'กิ๊ฟ วิศวะ', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400' },
  { id: 4, title: 'VR Glass Interactive Object', price: 4900, category: '3D สินค้า', seller: 'แล็บ ไอที', is3D: true, themeColor: '#ec4899', badge: 'HOT' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-28">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/15" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-600/15" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm shadow-md">
            C
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Campus Marketplace
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/product"
            className="text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 text-white px-4 py-2 rounded-full font-semibold transition-all"
          >
            + ลงขายสินค้า
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-lg mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหาสินค้า, 3D โมเดล..."
            className="w-full px-4 py-2.5 pl-10 text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm">🔍</span>
        </div>

        <div className="space-y-1 pt-2">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            IMMERSIVE MARKET
          </span>
          <h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">
            สินค้ามาใหม่ & 3D Items ✨
          </h2>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 gap-4">
          {mockProducts.map((product) => (
            <Card3D key={product.id}>
              <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 flex">
                
                {/* 3D or Image Preview */}
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 p-1">
                  {product.is3D ? (
                    <Product3DCanvas color={product.themeColor} />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {product.badge && (
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-md shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-3.5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-semibold mt-1.5 text-slate-800 dark:text-slate-100 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      ผู้ขาย: {product.seller}
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

      {/* Experimental Radial Navigation Button */}
      <ExperimentalRadialNav />
    </div>
  );
}