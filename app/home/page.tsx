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
        <meshStandardMaterial color="#ec4899" roughness={0.3} metalness={0.6} />
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
    title: 'กระเป๋าผ้าแคนวาส',
    price: 120,
    category: 'อุปกรณ์ใส่ของ',
    seller: 'ไมค์ หอ 8',
    location: 'ทํางาน',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
    description: 'กระเป๋าผ้าความจุเยอะ ใส่ชีทเรียนและโน้ตบุ๊กได้สบาย ทนทาน ซักสะอาดแล้ว',
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
  {
    id: 6,
    title: 'หูฟังบลูทูธ ตัดเสียงรบกวน',
    price: 590,
    category: 'ไอที/อุปกรณ์คอม',
    seller: 'เอ็ม บัญชี',
    location: 'ตึกบริหาร',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'แบตเตอรี่อึด ใช้อ่านหนังสือในห้องพูลฟังเพลงเพลินๆ ตัดเสียงรอบข้างดีมาก',
    isHot: true,
  },
  {
    id: 7,
    title: 'กระติกน้ำเก็บความเย็น 1 ลิตร',
    price: 190,
    category: 'ของใช้ในหอ',
    seller: 'แพรว ศิลปศาสตร์',
    location: 'หอพักนอก',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    description: 'เก็บความเย็นได้นาน 24 ชั่วโมง สภาพดีมาก ไม่มีรอยบุบ น้ำไม่ซึม',
    isHot: false,
  },
  {
    id: 8,
    title: 'โคมไฟอ่านหนังสือ LED ปรับแสงได้',
    price: 210,
    category: 'เครื่องใช้ไฟฟ้า',
    seller: 'ตั้ม นิเทศ',
    location: 'ศูนย์เรียนรวม',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400',
    description: 'ปรับแสงได้ 3 โทน ถนอมสายตาสำหรับอ่านหนังสือสอบตอนกลางคืน ชาร์จไฟในตัว',
    isHot: false,
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // เพิ่ม State คูปอง และ ประวัติการสั่งซื้อ
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const addToCart = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ตรวจสอบคูปองส่วนลด (รองรับโค้ด RAINBOW50 และ CAMPUS100)
  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'RAINBOW50') {
      setDiscount(50);
      setCouponMsg('✅ ใช้ส่วนลด ฿50 สำเร็จ!');
    } else if (couponCode.toUpperCase() === 'CAMPUS100') {
      setDiscount(100);
      setCouponMsg('✅ ใช้ส่วนลด ฿100 สำเร็จ!');
    } else {
      setDiscount(0);
      setCouponMsg('❌ โค้ดส่วนลดไม่ถูกต้อง (ลอง RAINBOW50)');
    }
  };

  const rawTotalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalPrice = Math.max(0, rawTotalPrice - discount);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // บันทึกคำสั่งซื้อลงประวัติ
  const handleCheckout = () => {
    const newOrder = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      date: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      items: cart,
      total: finalPrice,
      discountUsed: discount,
    };
    setHistory((prev) => [newOrder, ...prev]);
    alert('🎉 สั่งซื้อสำเร็จ! บันทึกข้อมูลลงประวัติเรียบร้อยแล้ว');
    setCart([]);
    setDiscount(0);
    setCouponCode('');
    setCouponMsg('');
    setIsCartOpen(false);
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      {/* Rainbow Banner */}
      <div className="flex justify-between items-center bg-gradient-to-r from-red-500/10 via-yellow-500/10 via-green-500/10 via-blue-500/10 to-purple-500/10 p-4 md:p-5 rounded-2xl border border-pink-500/30 shadow-md backdrop-blur-sm">
        <div className="pr-2">
          <h2 className="font-extrabold text-base md:text-lg bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            มีของไม่ได้ใช้ไหม?
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            ลงขายให้เพื่อนร่วมวิทยาลัยได้ฟรี (โค้ดลด: RAINBOW50)
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="px-3.5 py-2 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs md:text-sm rounded-xl transition border border-slate-300 dark:border-slate-700"
          >
            📜 ประวัติ
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-3.5 py-2 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs md:text-sm rounded-xl transition border border-slate-300 dark:border-slate-700"
          >
            🛒 ตะกร้า
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-md">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            href="/product"
            className="px-4 py-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:opacity-90 text-white font-bold text-xs md:text-sm rounded-xl shadow-lg transition whitespace-nowrap active:scale-95"
          >
            + ลงขายสินค้า
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2">
        <h3 className="font-extrabold text-base md:text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          สินค้ามาใหม่ 🌈
        </h3>
        <span className="text-xs md:text-sm text-slate-500">{sampleProducts.length} รายการ</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {sampleProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="group cursor-pointer bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between p-2.5 shadow-sm hover:border-pink-500/60 hover:shadow-pink-500/10 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                {item.isHot && (
                  <span className="absolute top-1.5 left-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow">
                    HOT
                  </span>
                )}
              </div>

              <div className="mt-2.5 space-y-1">
                <span className="text-[10px] font-bold text-purple-600 dark:text-pink-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-800/50">
                  {item.category}
                </span>
                <h4 className="text-xs md:text-sm font-bold line-clamp-1 group-hover:text-pink-500 transition">{item.title}</h4>
                <p className="text-sm md:text-base font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  ฿{item.price}
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center">
              <div className="text-[10px] text-slate-400">
                <p>{item.seller}</p>
                <p>{item.location}</p>
              </div>
              <button
                onClick={(e) => addToCart(item, e)}
                className="px-3 py-1.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 text-white text-xs font-bold rounded-lg shadow transition active:scale-95"
              >
                + ตะกร้า
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up ตะกร้าสินค้า + คูปอง */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white rounded-3xl p-5 border border-pink-500/30 space-y-4 max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-lg font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                🛒 ตะกร้าสินค้าของคุณ
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-200 transition"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-slate-400 py-8 text-sm">ไม่มีสินค้าในตะกร้า</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.image} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-xs font-bold">{item.title}</h4>
                        <p className="text-xs font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                          ฿{item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs font-bold px-2.5 py-1 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition"
                    >
                      ลบ
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-800 pt-3 space-y-3">
                {/* ช่องกรอกคูปอง */}
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ใส่โค้ดส่วนลด (เช่น RAINBOW50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition"
                    >
                      ใช้คูปอง
                    </button>
                  </div>
                  {couponMsg && <p className="text-[10px] font-semibold">{couponMsg}</p>}
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>ราคารวม:</span>
                    <span>฿{rawTotalPrice}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500 font-bold">
                      <span>ส่วนลดคูปอง:</span>
                      <span>-฿{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center font-bold text-base pt-1 border-t border-slate-100 dark:border-slate-800">
                    <span>ราคาสุทธิ:</span>
                    <span className="text-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                      ฿{finalPrice}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:opacity-90 text-white font-bold text-sm rounded-2xl shadow-lg transition"
                >
                  ชำระเงิน / นัดรับสินค้า
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pop-up ประวัติการซื้อ */}
      {isHistoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white rounded-3xl p-5 border border-purple-500/30 space-y-4 max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-lg font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                📜 ประวัติการสั่งซื้อ
              </h2>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-200 transition"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {history.length === 0 ? (
                <p className="text-center text-slate-400 py-8 text-sm">ยังไม่มีประวัติการสั่งซื้อ</p>
              ) : (
                history.map((order) => (
                  <div
                    key={order.id}
                    className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs"
                  >
                    <div className="flex justify-between font-bold border-b border-slate-200 dark:border-slate-700/50 pb-1.5">
                      <span className="text-purple-500">{order.id}</span>
                      <span className="text-slate-400">{order.date}</span>
                    </div>
                    <div className="space-y-1">
                      {order.items.map((it: any) => (
                        <div key={it.id} className="flex justify-between text-slate-300">
                          <span>{it.title} (x{it.quantity})</span>
                          <span>฿{it.price * it.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between font-extrabold pt-1 border-t border-slate-200 dark:border-slate-700/50 text-pink-500">
                      <span>ยอดชำระจริง:</span>
                      <span>฿{order.total}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pop-up รายละเอียดสินค้า */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-sm md:max-w-md bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white rounded-3xl p-5 border border-pink-500/30 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-200 transition"
            >
              ✕
            </button>

            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-950 to-pink-950 border border-slate-800">
              <span className="absolute top-2 left-3 z-10 text-[10px] bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2.5 py-0.5 rounded-full font-bold shadow">
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
              <span className="text-[10px] bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 px-2.5 py-1 rounded-full font-bold border border-pink-200 dark:border-pink-800">
                {selectedProduct.category}
              </span>
              <h2 className="text-lg font-extrabold mt-2">{selectedProduct.title}</h2>
              <p className="text-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mt-1">
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
                <p className="font-bold text-pink-500">{selectedProduct.location}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                addToCart(selectedProduct, e);
                setSelectedProduct(null);
              }}
              className="w-full py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:opacity-90 text-white font-bold text-sm rounded-2xl shadow-lg transition"
            >
              🛒 ใส่ตะกร้าสินค้า
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
     