'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogBio = () => {
  return (
    <motion.section 
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image 
          src="/event2.jpg" 
          alt="DJ TAAHAA" 
          width={450} 
          height={550} 
          className="rounded-lg shadow-2xl hidden md:block transform hover:scale-105 transition duration-500"
        />
        <Image 
          src="/7A8E51EE-8AC3-4DCC-8718-8E0B503F7423.jpeg" 
          alt="DJ TAAHAA" 
          width={300} 
          height={400} 
          className="rounded-lg shadow-2xl md:hidden w-3/4 transform hover:scale-105 transition duration-500"
        />
      </div>
      
      {/* Right - Bio Content */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left md:pl-10">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider text-yellow-400">About TAAHAA</h1>
        <div className="hidden md:block">
          <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-300">
            🎧 <strong>Internationally Recognized DJ & Producer</strong><br/>
            Bringing a <strong>unique blend of Persian beats, EDM, and hip-hop</strong>, DJ Taahaa has been <strong>featured in top venues worldwide</strong>.
          </p>
          <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-300">
            🔥 <strong>Unmatched Energy & Style</strong><br/>
            Whether performing at <strong>massive nightclubs, exclusive private events, or global festivals</strong>, DJ Taahaa creates a <strong>high-energy atmosphere</strong> that keeps the crowd moving.
          </p>
          <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-300">
            🌎 <strong>Global Reach, Local Experience</strong><br/>
            With a presence in <strong>Los Angeles, Dubai, Ibiza, and beyond</strong>, DJ Taahaa bridges the gap between cultures through <strong>music that resonates with all audiences</strong>.
          </p>
          <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-300">
            🚀 <strong>Next-Level Performances</strong><br/>
            Experience <strong>a fully immersive show</strong> with custom mixes, <strong>seamless track transitions</strong>, and a deep connection to the audience.
          </p>
        </div>
        
        {/* Mobile Version - Shorter Summary */}
        <p className="text-md md:hidden mt-6 leading-relaxed text-gray-300">
          DJ TAAHAA is a high-energy DJ known for his electrifying performances and seamless genre-blending. He has played at top clubs, festivals, and private events, delivering unforgettable sets that keep crowds hyped all night. His signature style fuses EDM, hip-hop, and house music, creating a unique and immersive experience. With a deep passion for sound, he knows how to read the crowd and elevate any event. Whether in an intimate setting or on a massive stage, DJ TAAHAA brings unmatched energy and musical precision. 🎧🔥
        </p>
      </div>
    </motion.section>
  );
};

export default BlogBio;
