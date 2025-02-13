'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tracks = [
  { title: "Yalda Mix 2024", link: "https://play.radiojavan.com/podcast/yalda-mix-2024-dj-taahaa", image: "/yalda.jpg" },
  { title: "Time Lapse 16", link: "https://play.radiojavan.com/podcast/time-lapse-16", image: "/16.jpg" },
  { title: "Time Lapse 15", link: "https://play.radiojavan.com/podcast/time-lapse-15", image: "/15.JPG" },
  { title: "Summer Mix 2024", link: "https://play.radiojavan.com/podcast/summer-mix-2024-dj-taahaa", image: "/summer.JPG" },
  { title: "Time Lapse 14", link: "https://play.radiojavan.com/podcast/time-lapse-14", image: "/14.JPG" },
  { title: "13 Bedar Mix 1403", link: "https://play.radiojavan.com/podcast/13-bedar-mix-1403-dj-taahaa", image: "/13be.jpg" },
  { title: "Time Lapse 13", link: "https://play.radiojavan.com/podcast/time-lapse-13", image: "/13.JPG" },
  { title: "Time Lapse 12", link: "https://play.radiojavan.com/podcast/time-lapse-12", image: "/12.JPG" },
  { title: "Time Lapse 11", link: "https://play.radiojavan.com/podcast/time-lapse-11", image: "/11.JPG" },
  { title: "Time Lapse 10", link: "https://play.radiojavan.com/podcast/time-lapse-10", image: "/10.JPG" },
  { title: "Time Lapse 9", link: "https://play.radiojavan.com/podcast/time-lapse-9", image: "/9.JPG" },
  { title: "Time Lapse 8", link: "https://play.radiojavan.com/podcast/time-lapse-8", image: "/8.JPG" },
  { title: "Time Lapse 7", link: "https://play.radiojavan.com/podcast/time-lapse-7", image: "/7.jpg" },
  { title: "Time Lapse 6", link: "https://play.radiojavan.com/podcast/time-lapse-6", image: "/6.jpg" },
  { title: "Time Lapse 5", link: "https://play.radiojavan.com/podcast/time-lapse-5", image: "/5.jpg" },
  { title: "Time Lapse 4", link: "https://play.radiojavan.com/podcast/time-lapse-4", image: "/4.jpg" }
];

const MusicGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const tracksPerPage = 4;

  const nextTracks = () => {
    setStartIndex((prev) => (prev + tracksPerPage) % tracks.length);
  };

  const prevTracks = () => {
    setStartIndex((prev) => (prev - tracksPerPage + tracks.length) % tracks.length);
  };

  return (
    <motion.section 
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6 
                 bg-[radial-gradient(circle, rgba(15,15,30,1) 20%, rgba(0,0,0,1) 100%)]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide mb-10 text-center text-neon-blue 
        drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
        Music Gallery
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Radio Javan Section */}
        <motion.div 
          className="bg-[#121212] p-6 rounded-xl shadow-lg border border-neon-blue hover:shadow-neon-pink transition flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center text-neon-pink">Radio Javan Mixes</h3>
          <div className="grid grid-cols-2 gap-4">
            {tracks.slice(startIndex, startIndex + tracksPerPage).map((track, index) => (
              <Link key={index} href={track.link} target="_blank">
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image src={track.image} alt={track.title} width={200} height={200} className="rounded-lg shadow-neon-blue" />
                  <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center text-sm font-bold py-1 text-neon-blue">
                    {track.title}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            <button onClick={prevTracks} className="px-4 py-2 bg-neon-blue text-black font-bold rounded-full 
              hover:bg-neon-pink transition ease-in-out duration-300 shadow-[0px_0px_10px_rgba(0,255,255,0.8)]">
              Prev
            </button>
            <button onClick={nextTracks} className="px-4 py-2 bg-neon-blue text-black font-bold rounded-full 
              hover:bg-neon-pink transition ease-in-out duration-300 shadow-[0px_0px_10px_rgba(0,255,255,0.8)]">
              Next
            </button>
          </div>
        </motion.div>

        {/* SoundCloud Section */}
        <motion.div 
          className="bg-[#121212] p-6 rounded-xl shadow-lg border border-neon-pink hover:shadow-neon-blue transition flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-center text-neon-blue">SoundCloud</h3>
          <div className="w-full">
            <iframe 
              width="100%" 
              height="400" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djtaahaa&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <Link href="https://soundcloud.com/djtaahaa" target="_blank">
            <button className="mt-4 px-6 py-2 bg-neon-pink text-black font-bold rounded-full 
              hover:bg-neon-blue transition ease-in-out duration-300 shadow-[0px_0px_10px_rgba(255,0,255,0.8)]">
              Visit SoundCloud
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MusicGallery;