'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Booking = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY / 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image & Animated Overlay */}
      <div className="absolute inset-0 bg-cover bg-center brightness-75 flicker-effect" style={{ backgroundImage: "url('/tahaback.jpg')" }}></div>
      <div className="absolute inset-0 gradient-overlay"></div>
      
      {/* Content Box with Light Reflection Effect */}
      <div style={{ transform: `translateY(${offsetY}px)` }} className="relative z-10 max-w-3xl bg-black bg-opacity-50 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg border border-gray-800">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-white drop-shadow-lg glitch"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Elevate Your Event
        </motion.h2>
        <motion.p 
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From electrifying club nights to exclusive private events, DJ TAHAA brings high-energy performances that transform any event into an unforgettable experience. Secure your booking now and let the music take over.
        </motion.p>
      </div>
      
      {/* Book Now Button with Glowing Hover Effect */}
      <motion.div
        className="relative z-10 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/booking">
          <button 
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white uppercase tracking-wide rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-600/50 hover:shadow-purple-400/70 transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,0,255,0.8)]"
          >
            Book Now
          </button>
        </Link>
      </motion.div>
      
      {/* Additional Promotional Boxes - Mobile Optimized */}
      <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
        <div className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-400">🔥 High-Energy Sets</h3>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">DJ TAHAA delivers electrifying performances with top-tier beats, ensuring a packed dance floor all night.</p>
        </div>
        <div className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-400">🎧 Exclusive Mixes</h3>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">Enjoy exclusive, high-quality remixes and custom DJ sets designed to match your event’s vibe.</p>
        </div>
        <div className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-pink-400">🌍 Global Experience</h3>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">With performances worldwide, DJ TAHAA brings international expertise and diverse sounds to every show.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Booking;

/* CSS Animations */
<style jsx>{`
  @keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.85; }
    100% { opacity: 1; }
  }
  .flicker-effect {
    animation: flicker 4s infinite alternate ease-in-out;
  }
  
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gradient-overlay {
    background: linear-gradient(-45deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3));
    background-size: 400% 400%;
    animation: gradientMove 6s infinite ease-in-out;
  }
  
  @keyframes glitch {
    0% { text-shadow: 2px 2px #ff00ff; }
    50% { text-shadow: -2px -2px #00ffff; }
    100% { text-shadow: 2px 2px #ff00ff; }
  }
  .glitch {
    animation: glitch 0.3s infinite alternate;
  }
`}</style>
