'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl z-50 shadow-lg border-b border-gray-800 py-4">
      <div className="flex items-center justify-between px-6 md:px-8">
        {/* Left - DJ Name */}
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide">DJ TAAHAA</h1>

        {/* Right - Menu Button */}
        <button className="text-white text-xl md:text-3xl font-bold uppercase tracking-widest transition-transform transform hover:scale-105" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={40} /> : 'Menu'}
        </button>
      </div>

      {/* Full-Screen Dropdown Menu */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-black text-white flex flex-col md:flex-row items-center justify-between transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Left Side - Navigation Links */}
        <div className="w-full md:w-2/3 h-full flex flex-col items-center md:items-start justify-center space-y-8 md:space-y-12 px-10 md:pl-20 text-center md:text-left text-3xl md:text-5xl font-bold tracking-wide">
          <Link href="/events" className="hover:text-gray-400 transition-transform transform hover:scale-105" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/services" className="hover:text-gray-400 transition-transform transform hover:scale-105" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/gallery" className="hover:text-gray-400 transition-transform transform hover:scale-105" onClick={() => setIsOpen(false)}>Gallery</Link>

          {/* Book Now Button */}
          <Link 
            href="/booking" 
            className="px-6 py-3 md:px-10 md:py-5 bg-white text-black rounded-full hover:bg-gray-300 transition transform hover:scale-110 shadow-xl" 
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>

        {/* Right Side - Image (Hidden on Mobile) */}
        <div className="hidden md:flex w-1/3 h-full items-center justify-center pr-10 md:pr-20">
          <Image src="/event2.jpg" alt="Event Image" width={400} height={400} className="rounded-2xl shadow-2xl" />
        </div>

        {/* Close Button */}
        <button className="absolute top-6 right-6 text-white text-3xl md:text-4xl" onClick={() => setIsOpen(false)}>
          <X size={40} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;