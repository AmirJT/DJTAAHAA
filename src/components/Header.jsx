'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/IMG_0879.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-lg"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <p className="mb-2 text-sm md:text-base">Scroll Down</p>
        <div className="w-4 h-4 border-l-2 border-b-2 border-white transform rotate-45 animate-bounce"></div>
      </motion.div>
    </motion.header>
  );
};

export default Header;