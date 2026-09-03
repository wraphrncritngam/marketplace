'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function Product3DModel() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={0.8}>
      <mesh>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial color="#4f46e5" roughness={0.3} metalness={0.6} />
      </mesh>
    </Float>
  );
}

const sampleProducts = [
  {
    id: 1,
    title: 'หนังสือเรียน Calculus II สภาพดี',
    price: 180,
    category: 'หนังสือเรียน',
    seller: 'พี่นก (วิศวะ ปี 3)',
    location: 'ตึกวิศวะ',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    description: 'หนังสือแคลคูลัส 2 สภาพ 95% ไม่มีรอยไฮไลท์ มีสรุปสูตรแถมให้ในเล่ม นัดรับได้ทันที',
    isHot: true,
  },
  {
    id: 2,
    title: 'เสื้อกาวน์หมอ/เภสัช Size M',
    price: 250,
    category: 'เสื้อผ้า/ยูนิฟอร์ม',
    seller: 'ฟ้า สดใส',
    location: 'ตึกวิทยาศาสตร์',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400',
    description: 'เสื้อกาวน์เนื้อผ้าใส่สบาย ไม่ร้อน ซักอบเรียบร้อยแล้ว พร้อมใช้งานครับ',
    isHot: false,
  },
  {
    id: 3,
    title: 'เมาส์ไร้สาย Logitech Silent',
    price: 350,
    category: 'ไอที/อุปกรณ์คอม',
    seller: 'ก๊อฟ วิศวะ',
    location: 'หอพักใน',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400',
    description: 'เสียงคลิกเงียบมาก ไม่รบกวนคนอื่นเวลาทำงานในห้องหนังสือ แถมถ่านให้ด้วย',
    isHot: false,
  },
  {
    id: 4,
    title: 'พัดลมตั้งโต๊ะ USB ตัวเล็ก',
    price: 120,
    category: 'เครื่องใช้ไฟฟ้า',
    seller: 'ไมค์ หอ 8',
    location: 'โรงอาหารกลาง',
    // เปลี่ยน URL รูปพัดลมตรงนี้ครับ
    image: 'https://images.unsplash.com/photo-1565151443833-29bf2df5dd8d?w=400',
    description: 'พัดลมปรับระดับได้ 3 ระดับ ชาร์จผ่าน USB ปรับก้มเงยได้ ทำงานเงียบ',
    isHot: false,
  },
  {
    id: 5,
    title: 'ไม้แบดมินตัน Yonex สภาพ 90%',
    price: 450,
    category: 'กีฬา',
    seller: 'บอล สปอร์ต',
    location: 'โรงกิมเนเซียม',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
    description: 'เอ็นยังตึงพร้อมใช้งาน แถมซองใส่ไม้แบดให้ด้วย นัดรับที่โรงกิมได้เลย',
    isHot: false,
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="p-4 md:p-6 space-y-4">
      {/* Banner */}
      <div className="flex justify-between items-center bg-blue-50 dark:bg-slate-900 p-4 md:p-5 rounded-2xl border-none shadow-sm">
        <div className="pr-2">
          <h2 className="font-bold text-base md:text-lg text-blue-900 dark:text-blue-400">
            มีของไม่ได้ใช้ไหม?
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            ลงขายให้เพื่อนร่วมวิทยาลัยได้ฟรี
          </p>
        </div>
        <Link
          href="/product"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-md transition whitespace-nowrap"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      <div className="flex justify-between items-center pt-2">
        <h3 className="font-extrabold text-base md:text-lg">สินค้ามาใหม่ 🔥</h3>
        <span className="text-xs md:text-sm text-slate-500">{sampleProducts.length} รายการ</span>
      </div>

      {/* Product List Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {sampleProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between p-2.5 shadow-sm hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              {item.isHot && (
                <span className="absolute top-1.5 left-1.5 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  HOT
                </span>
              )}
            </div>

            <div className="mt-2 space-y-1">
              <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md">
                {item.category}
              </span>
              <h4 className="text-xs md:text-sm font-bold line-clamp-1">{item.title}</h4>
              <p className="text-sm md:text-base font-black text-blue-600 dark:text-cyan-400">฿{item.price}</p>
              <div className="text-[10px] text-slate-400 flex justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                <span>{item.seller}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up 3D */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-sm md:max-w-md bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-200 transition"
            >
              ✕
            </button>

            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-950 border border-slate-800">
              <span className="absolute top-2 left-3 z-10 text-[10px] bg-blue-500/80 text-white px-2 py-0.5 rounded-full backdrop-blur">
                ✨ 3D Interactive (ลากเพื่อหมุนดูได้)
              </span>
              <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <Product3DModel />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>

            <div>
              <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full font-semibold">
                {selectedProduct.category}
              </span>
              <h2 className="text-lg font-extrabold mt-2">{selectedProduct.title}</h2>
              <p className="text-xl font-black text-blue-600 dark:text-cyan-400 mt-1">
                ฿{selectedProduct.price}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#1e293b] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
              {selectedProduct.description}
            </div>

            <div className="bg-slate-50 dark:bg-[#1e293b] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs flex justify-between items-center">
              <div>
                <p className="text-[10px] text-slate-400">ผู้ขาย</p>
                <p className="font-bold">{selectedProduct.seller}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400">นัดรับที่</p>
                <p className="font-bold text-blue-600 dark:text-blue-400">{selectedProduct.location}</p>
              </div>
            </div>

            <button
              onClick={() => alert(`ส่งข้อความหาผู้ขาย (${selectedProduct.seller}) เรียบร้อยแล้ว`)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl shadow-lg transition"
            >
              💬 ทักแชทนัดรับสินค้า
            </button>
          </div>
        </div>
      )}
    </div>
  );
}