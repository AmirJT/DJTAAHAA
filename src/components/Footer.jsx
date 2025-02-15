'use client';

import Link from 'next/link';
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Social Links */}
        <div className="flex space-x-6 text-2xl md:text-3xl mb-4">
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
        
        {/* Footer Text */}
        <p className="text-lg font-semibold tracking-wide text-gray-300">Bringing the music to life.</p>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} DJ TAAHAA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
