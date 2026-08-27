'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: 'หนังสือเรียน',
    location: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ลงประกาศขายสินค้าเรียบร้อยแล้ว!');
    router.push('/home');
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Link href="/home" className="text-sm font-bold text-blue-600 dark:text-blue-400">
          ← กลับ
        </Link>
        <h2 className="text-base font-extrabold">ลงประกาศขายสินค้า</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold mb-1">ชื่อสินค้า *</label>
          <input
            type="text"
            required
            placeholder="เช่น หนังสือเรียน Calculus II"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">ราคา (บาท) *</label>
            <input
              type="number"
              required
              placeholder="180"
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">หมวดหมู่ *</label>
            <select
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option>หนังสือเรียน</option>
              <option>เสื้อผ้า/ยูนิฟอร์ม</option>
              <option>ไอที/อุปกรณ์คอม</option>
              <option>เครื่องใช้ไฟฟ้า</option>
              <option>กีฬา</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">สถานที่นัดรับ *</label>
          <input
            type="text"
            required
            placeholder="เช่น ตึกวิศวะ, โรงอาหารกลาง"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea
            rows={3}
            placeholder="สภาพสินค้า, ตำหนิ หรือช่องทางติดต่อเพิ่มเติม..."
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-md hover:opacity-95 transition text-sm"
        >
          ยืนยันการลงประกาศ
        </button>
      </form>
    </div>
  );
}