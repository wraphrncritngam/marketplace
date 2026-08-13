'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  sellerName: string;
  sellerAvatar?: string;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Calc Textbooks',
    price: 50,
    category: 'Books',
    sellerName: 'S',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
  },
  {
    id: 2,
    title: 'MacBook Air',
    price: 450,
    category: 'Electronics',
    sellerName: 'M',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
  },
  {
    id: 3,
    title: 'City Bike',
    price: 100,
    category: 'Other',
    sellerName: 'John',
    sellerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400',
  },
  {
    id: 4,
    title: 'Coffee Maker',
    price: 100,
    category: 'Dorm Decor',
    sellerName: 'Sarah',
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebd02f2a888?w=400',
  },
  {
    id: 5,
    title: 'Desk Lamp',
    price: 100,
    category: 'Dorm Decor',
    sellerName: 'Alex',
    sellerAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
  },
];

const categories = [
  { name: 'Books', icon: '📖' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Dorm Decor', icon: '🛋️' },
  { name: 'Clothing', icon: '👕' },
  { name: 'Services', icon: '🛠️' },
  { name: 'Other', icon: '💬' },
];

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800'} transition-colors duration-200 pb-20`}>
      {/* Header / Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="text-xl font-bold text-blue-500">
          Campus Marketplace
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/product"
            className="px-4 py-1.5 border border-slate-300 dark:border-slate-700 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Sell
          </Link>

          {/* Light / Dark Toggle */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>⚙️</span>
            <button
              onClick={toggleTheme}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                isDarkMode ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform" />
            </button>
            <span className="text-xs">{isDarkMode ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-6">
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            🔍
          </div>
          <input
            type="text"
            placeholder="Search campus items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition border-none"
          />
        </div>

        {/* Category Icons Grid */}
        <div className="grid grid-cols-6 gap-4 mb-10 text-center">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center justify-center group focus:outline-none"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-xl mb-2 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition">
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h2 className="text-lg font-bold mb-4">Recently Added</h2>

        {/* Product List Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              {/* Image Container */}
              <div className="h-32 bg-amber-50 dark:bg-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {product.title}
                  </h3>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                    ${product.price}
                  </div>
                </div>

                {/* Seller Avatar / Name */}
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                  {product.sellerAvatar ? (
                    <img
                      src={product.sellerAvatar}
                      alt={product.sellerName}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">
                      {product.sellerName}
                    </div>
                  )}
                  <span className="text-[11px] text-slate-400 truncate">
                    Seller's avatar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-6">
          <Link
            href="/product"
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition text-sm"
          >
            <span>+</span> Add New Listing
          </Link>
        </div>
      </main>
    </div>
  );
}