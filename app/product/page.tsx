'use client';

import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('โพสต์ประกาศขายสินค้าเรียบร้อย!');
    router.push('/home');
  };

  return (
    <div>
      <Navbar />
      <main className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">ลงประกาศขายสินค้า</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1">ชื่อสินค้า</label>
            <input 
              type="text" 
              required 
              placeholder="เช่น หนังสือเรียน, iPad" 
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">ราคา (บาท)</label>
            <input 
              type="number" 
              required 
              placeholder="0.00" 
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">หมวดหมู่</label>
            <select className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>หนังสือ</option>
              <option>ไอที</option>
              <option>เสื้อผ้า</option>
              <option>เครื่องใช้ไฟฟ้า</option>
              <option>อื่นๆ</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">รายละเอียดสินค้า</label>
            <textarea 
              rows={3} 
              placeholder="ระบุสภาพสินค้า สถานที่นัดรับ หรือช่องทางติดต่อ..." 
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition text-sm"
          >
            ลงประกาศขาย
          </button>
        </form>
      </main>
    </div>
  );
}