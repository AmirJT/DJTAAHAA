'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const UpcomingEventsPreview = () => {
  const nextEvent = {
    title: "DJ TAAHAA Live at Omnia Nightclub",
    date: "March 15, 2025",
    location: "Las Vegas, NV",
    image: "/IMG_0016.jpg"
  };

  return (
    <motion.section 
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center text-white text-center overflow-hidden px-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Left - Event Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image 
          src={nextEvent.image} 
          alt={nextEvent.title} 
          width={500} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right - Event Details */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-yellow-400 drop-shadow-lg">Upcoming Event</h2>
        <p className="text-lg md:text-2xl mt-4 font-light text-gray-300">{nextEvent.date} - {nextEvent.location}</p>
        <h3 className="text-3xl md:text-5xl font-semibold mt-4 text-white drop-shadow-lg">{nextEvent.title}</h3>
        <Link href="/events">
          <motion.button 
            className="mt-8 px-10 py-4 text-lg md:text-xl bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Events
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default UpcomingEventsPreview;