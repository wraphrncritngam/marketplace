'use client';

import Link from 'next/link';

const sampleProducts = [
  {
    id: 1,
    title: 'หนังสือเรียน Calculus II สภาพดี',
    price: 180,
    category: 'หนังสือเรียน',
    seller: 'พี่นก (วิศวะ ปี 3)',
    location: 'ตึกวิศวะ',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
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
  },
  {
    id: 3,
    title: 'เมาส์ไร้สาย Logitech Silent',
    price: 350,
    category: 'ไอที/อุปกรณ์คอม',
    seller: 'ก๊อฟ วิศวะ',
    location: 'หอพักใน',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400',
  },
  {
    id: 4,
    title: 'พัดลมตั้งโต๊ะ USB ตัวเล็ก',
    price: 120,
    category: 'เครื่องใช้ไฟฟ้า',
    seller: 'ไมค์ หอ 8',
    location: 'โรงอาหารกลาง',
    image: 'https://images.unsplash.com/photo-1618941723628-98444a8a5f6e?w=400',
  },
  {
    id: 5,
    title: 'ไม้แบดมินตัน Yonex สภาพ 90%',
    price: 450,
    category: 'กีฬา',
    seller: 'บอล สปอร์ต',
    location: 'โรงกิมเนเซียม',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
  },
];

export default function HomePage() {
  return (
    <div className="p-4 space-y-4">
      {/* Banner + ปุ่มประกาศขาย */}
      <div className="flex justify-between items-center bg-blue-50 dark:bg-slate-900 p-4 rounded-2xl border border-blue-100 dark:border-slate-800">
        <div>
          <h2 className="font-bold text-base text-blue-900 dark:text-blue-400">มีของไม่ได้ใช้ไหม?</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">ลงขายให้เพื่อนร่วมวิทยาลัยได้ฟรี</p>
        </div>
        <Link
          href="/product"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition whitespace-nowrap"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      {/* Header หัวข้อ */}
      <div className="flex justify-between items-center pt-2">
        <h3 className="font-extrabold text-base">สินค้ามาใหม่ 🔥</h3>
        <span className="text-xs text-slate-500">5 รายการ</span>
      </div>

      {/* Product List (Mobile Grid) */}
      <div className="grid grid-cols-2 gap-3">
        {sampleProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between p-2.5 shadow-sm hover:border-blue-500 transition"
          >
            <div className="relative w-full h-32 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
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
              <h4 className="text-xs font-bold line-clamp-1">{item.title}</h4>
              <p className="text-sm font-black text-blue-600 dark:text-cyan-400">฿{item.price}</p>
              <div className="text-[10px] text-slate-400 flex justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                <span>{item.seller}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}