'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [
    '/2021_12.23_hardcore_lasvegas-6.JPG',
    '/Hakkasan.RadioJavan.SammyDean.12.22.23-2.JPG',
    '/Hakkasan.RadioJavan.SammyDean.12.22.23-5.jpg',
];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Desktop Sliding Gallery */}
      <div className="hidden md:flex relative w-full max-w-3xl h-[60vh] items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="absolute transition-opacity duration-1000"
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: index === currentIndex ? 0 : index > currentIndex ? 200 : -200,
              zIndex: index === currentIndex ? 10 : 5
            }}
            transition={{ duration: 1 }}
          >
            <Image 
              src={image} 
              alt="Gallery Image" 
              width={700} 
              height={500} 
              className="rounded-lg shadow-2xl object-cover border-[4px] border-yellow-400"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Mobile Single Image Carousel */}
      <div className="md:hidden w-full max-w-sm h-[50vh] flex items-center justify-center">
        <motion.div 
          className="relative"
          animate={{ x: [200, 0, -200] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Image 
            src={images[currentIndex]} 
            alt="Gallery Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-2xl object-cover"
          />
        </motion.div>
      </div>
      
      {/* Special "View Full Gallery" Button */}
      <div className="absolute bottom-12 flex justify-center w-full">
        <Link href="/gallery">
          <motion.button 
            className="px-8 py-3 text-lg font-bold uppercase bg-transparent border-[3px] border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default GalleryCarousel;