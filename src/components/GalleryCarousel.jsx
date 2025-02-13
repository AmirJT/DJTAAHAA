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
      className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Desktop 3D Rotating Gallery */}
      <div className="hidden md:flex relative w-full max-w-4xl h-[60vh] items-center justify-center">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="absolute transition-opacity duration-1000"
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.8,
              rotateY: index === currentIndex ? 0 : 30,
              zIndex: index === currentIndex ? 10 : 5,
              filter: index === currentIndex ? "brightness(1.2)" : "brightness(0.7)"
            }}
            transition={{ duration: 1 }}
          >
            <Image 
              src={image} 
              alt="Gallery Image" 
              width={700} 
              height={450} 
              className="rounded-lg shadow-lg object-cover w-full h-full border-[4px] border-yellow-400"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Mobile Single Image Carousel with Soft Glow */}
      <div className="md:hidden w-full max-w-sm h-[50vh] flex items-center justify-center">
        <motion.div 
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: ["0px 0px 20px rgba(255, 255, 0, 0.5)", "0px 0px 40px rgba(255, 255, 0, 0.8)", "0px 0px 20px rgba(255, 255, 0, 0.5)"]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Image 
            src={images[currentIndex]} 
            alt="Gallery Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </motion.div>
      </div>
      
      {/* Special "Check Out More Gallery" Button */}
      <Link 
  href="/gallery" 
  className="absolute left-1/2 transform -translate-x-1/2 bottom-[14vh] md:bottom-10"
>
  <motion.button 
    className="px-6 py-3 text-lg font-bold uppercase bg-transparent border-[3px] border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Check Out More Gallery
  </motion.button>
</Link>
    </motion.section>
  );
};

export default GalleryCarousel;