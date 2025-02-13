'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../globals.css';
import { motion } from 'framer-motion';

const galleryImages = [
    '/2021_12.23_hardcore_lasvegas-6.JPG',
    '/DSC01694-26.JPG',
    '/Hakkasan.RadioJavan.SammyDean.12.22.23-2.JPG',
    '/Hakkasan.RadioJavan.SammyDean.12.22.23-5.jpg',
    '/Hakkasan.RadioJavan.SammyDean.12.22.23-43.JPG',
    '/tahaback.jpg',
    '/1FA146C7-6EA2-4A21-AD8E-42AF62A038A9.JPG',
    '/030120_dj taha birthday_mesa-104.JPG',
    '/DSC02822.JPG',
    '/2021_12.23_hardcore_lasvegas-7.JPG',
    '/030120_dj taha birthday_mesa-108.JPG',
    '/f61af85f-3a49-4716-8a92-1c56b345b9f5.JPG',
    '/2021_12.23_hardcore_lasvegas-11.JPG',
    '/Donya RJ-82.JPG',
    '/2021_12.23_hardcore_lasvegas-12.JPG',
    '/IMG_0952.JPG',
    '/DSC01691-25.JPG',
    '/tahaback.jpg',
    '/2021_12.23_hardcore_lasvegas-14.JPG',
    '/DSC01700-28.JPG',
    '/Tao.RadioJavan.SammyDean.12.21.23-9.JPG',
    '/030120_dj taha birthday_mesa-98.JPG',
    '/DSC01703-29.JPG',
  
  ];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center">
      <div className="w-full border-t-2 border-b-2 border-yellow-400 py-4 mb-12">
        <h1 className="text-6xl font-extrabold text-center text-yellow-400 uppercase tracking-wide">Gallery</h1>
      </div>
      
      {/* Main Image with Navigation Buttons (Desktop) */}
      {!isMobile ? (
        <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
          <button 
            onClick={prevImage} 
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-md hover:bg-opacity-80"
          >
            ◀ Prev
          </button>
          <motion.div
            key={galleryImages[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={galleryImages[currentIndex]}
              alt="Selected Image"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <button 
            onClick={nextImage} 
            className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-md hover:bg-opacity-80"
          >
            Next ▶
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <Image
            src={galleryImages[currentIndex]}
            alt="Selected Image"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="mt-4 flex justify-center">
            <button onClick={prevImage} className="bg-gray-800 text-white px-4 py-2 mx-2 rounded-md">◀</button>
            <button onClick={nextImage} className="bg-gray-800 text-white px-4 py-2 mx-2 rounded-md">▶</button>
          </div>
        </div>
      )}
      
      {/* Thumbnail Row */}
      <div className="mt-8 flex gap-4 overflow-x-auto w-full max-w-4xl p-2">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="cursor-pointer w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={128}
              height={128}
              className={`w-full h-full object-cover rounded-lg shadow-md transition ${currentIndex === index ? 'border-4 border-yellow-400' : ''}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}