'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Logo */}
        <Image src="/logo.png" alt="Logo" width={150} height={50}  className="hidden md:block mb-5" />
        
        {/* Social Links */}
        <div className="flex space-x-8 text-3xl">
          <a href="https://www.instagram.com/djtaahaa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaInstagram />
          </a>
          <a href="https://open.spotify.com/artist/3Ka1Gc2aXxO0uoCGPc4Rep" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaSpotify />
          </a>
          <a href="https://www.youtube.com/@djtaahaa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaYoutube />
          </a>
          <a href="https://soundcloud.com/djtaahaa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaSoundcloud />
          </a>
          <a href="mailto:taha_727@icloud.com" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaEnvelope />
          </a>
          <a href="tel:+19499458231" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaPhone />
          </a>
        </div>

        {/* Right Logo */}
        <Image src="/logo.png" alt="Logo" width={150} height={150} className="hidden md:block mb-4" />
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} DJ TAAHAA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
