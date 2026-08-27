'use client';

import { useState } from 'react';

// ข้อมูลจำลองสินค้า
const mockProducts = [
  {
    id: 1,
    title: 'หนังสือเรียน Calculus II สภาพดี',
    price: 180,
    category: 'หนังสือเรียน',
    seller: 'พี่นก (วิศวะ ปี 3)',
    location: 'ตึกวิศวะ',
    time: '10 นาทีที่แล้ว',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    description: 'หนังสือแคลคูลัส 2 สภาพดีมาก ไม่มีรอยขีดเขียน มีสรุปสูตรสำคัญแถมให้ในเล่ม',
    isHot: true,
  },
  {
    id: 2,
    title: 'เสื้อกาวน์หมอ/เภสัช Size M',
    price: 250,
    category: 'เสื้อผ้า/ยูนิฟอร์ม',
    seller: 'ฟ้า สดใส',
    location: 'ตึกวิทยาศาสตร์',
    time: '30 นาทีที่แล้ว',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400',
    description: 'เสื้อกาวน์เนื้อผ้าดี ไม่ร้อน สภาพ 95% ซักอบเรียบร้อยแล้วพร้อมใช้งาน',
    isHot: false,
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 p-4 pb-20 max-w-md mx-auto space-y-5">
      
      {/* Header */}
      <header className="bg-[#0f172a] border border-slate-800 p-4 rounded-2xl flex justify-between items-center">
        <div>
          <span className="text-[10px] text-cyan-400 font-bold uppercase block">NEXT-GEN MARKET</span>
          <h1 className="text-lg font-black text-white">CAMPUS NEXUS</h1>
        </div>
        <span className="text-xs bg-cyan-500/10 text-cyan-400 font-bold px-3 py-1 rounded-full border border-cyan-500/20">
          {mockProducts.length} ITEMS
        </span>
      </header>

      {/* Grid รายการสินค้า */}
      <div className="grid grid-cols-2 gap-3">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="cursor-pointer bg-[#0f172a] border border-slate-800 rounded-2xl p-2.5 hover:border-cyan-500/50 transition"
          >
            <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-900">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              {item.isHot && (
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-md">
                  HOT
                </span>
              )}
            </div>

            <div className="mt-2 space-y-1">
              <div className="text-base font-black text-cyan-400">฿{item.price}</div>
              <div className="text-xs text-slate-200 line-clamp-1">{item.title}</div>
              <div className="text-[10px] text-slate-500 flex justify-between">
                <span>{item.location}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up รายละเอียดสินค้า (Modal) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-sm bg-[#0d1424] text-white rounded-3xl p-5 border border-slate-800 space-y-4">
            
            {/* ปุ่มปิด */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-44 object-cover rounded-2xl" />

            <div>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded-full font-semibold">
                {selectedProduct.category}
              </span>
              <h2 className="text-lg font-bold mt-2">{selectedProduct.title}</h2>
              <p className="text-2xl font-black text-cyan-400 mt-1">฿{selectedProduct.price}</p>
            </div>

            <div className="bg-[#131d33] p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
              {selectedProduct.description}
            </div>

            <div className="bg-[#131d33] p-3 rounded-xl border border-slate-800 text-xs flex justify-between">
              <span className="text-slate-400">ผู้ขาย: {selectedProduct.seller}</span>
              <span className="text-emerald-400 font-semibold">● ออนไลน์</span>
            </div>

            <div className="flex gap-2 pt-1">
              <button 
                onClick={() => alert(`สนใจซื้อ ${selectedProduct.title}`)}
                className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm rounded-xl text-white shadow-lg"
              >
                🛒 สั่งซื้อ / นัดรับ
              </button>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-3 bg-slate-800 text-xs text-slate-300 font-semibold rounded-xl"
              >
                ปิด
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}