import Navbar from '@/components/Navbar';

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
  { id: 4, title: 'พัดลมตั้งโต๊ะ USB ตัวเล็ก', price: 120, category: 'เครื่องใช้ไฟฟ้า', seller: 'ไมค์ หอ 8', image: 'https://images.unsplash.com/photo-1618941723615-3303d8d6f51c?w=400' },
  { id: 5, title: 'iPad Gen 9 64GB Wi-Fi สภาพ 95%', price: 7900, category: 'ไอที', seller: 'แอน บริหาร', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
];

export default function HomePage() {
  return (
    <div className="pb-12">
      <Navbar />

      <main className="p-4 max-w-md mx-auto">
        <header className="my-4">
          <h1 className="text-xl font-bold">สินค้ามาใหม่ 🔥</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">รายการประกาศขายล่าสุดจากเพื่อนในมหาลัย</p>
        </header>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {mockProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm flex"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-28 h-28 object-cover flex-shrink-0"
              />
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <h2 className="text-sm font-semibold mt-1 line-clamp-1">{product.title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">ผู้ขาย: {product.seller}</p>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">
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