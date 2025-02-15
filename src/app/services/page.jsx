'use client';

import '@/app/globals.css';
import Image from 'next/image';
import { useState } from 'react';

const soundServices = [
  { name: 'PA Speakers', description: 'High-quality sound projection for any venue.' },
  { name: 'Subwoofers', description: 'Deep, powerful bass for an immersive experience.' },
  { name: 'Wireless Microphones', description: '' },
  { name: 'Digital Mixing Board', description: 'Advanced audio control for a seamless performance.' },
];

const lightServices = [
  { name: 'Up Lights', description: 'Enhance the ambiance with vibrant color lighting.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Moving Head Lights', description: 'Dynamic lighting effects for a lively atmosphere.', image: '/movingheadlights_processed_processed.jpg' },
  { name: 'Lasers', description: 'High-intensity laser beams designed to create a dramatic and visually stunning experience.', image: '/laser_processed.jpg' },
  { name: 'Cold Sparks', description: 'Safe indoor spark effects that add a wow factor to any performance.', image: '/cold_processed_processed.jpg' },
  { name: 'Dry Ice / Low Fog', description: 'A beautiful low-lying fog effect for first dances and special moments.', image: '/fog_processed.jpg' },
  { name: 'Cyro Blasters / Co2', description: 'High-powered CO2 jets releasing cool fog bursts.', image: '/co2_processed.jpg' },
  { name: 'Fog / Haze', description: 'Enhances the effect of lighting by making beams visible.', image: '/fog_processed.jpg' },
];

const liveBandServices = [
  'Guitar', 'Violin', 'Drums', 'Percussion', 'Saxophone', 'Singer', 'Harp'
];

export default function ServicesPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-24">
      {/* Title */}
      <div className="w-full border-t-2 border-b-2 border-yellow-400 py-4 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 uppercase tracking-wider">Our Services</h1>
      </div>

      {/* Sound Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">Sound</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soundServices.map((service, index) => (
            <div key={index} className="border border-gray-700 bg-white text-black p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl md:text-2xl font-medium">{service.name}</h3>
              {service.description && <p className="text-gray-700 text-md md:text-lg mt-1">{service.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Lights Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">Lights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {lightServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={service.image} alt={service.name} width={100} height={80} className="rounded-lg" />
              <h3 className="text-xl md:text-2xl font-medium text-white mt-2">{service.name}</h3>
              <p className="text-gray-400 text-md md:text-lg mt-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Band Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">Live Band</h2>
        <p className="text-gray-400 mb-6">For more information about the live band, contact us.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {liveBandServices.map((instrument, index) => (
            <div key={index} className="border border-gray-700 bg-white text-black p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl md:text-2xl font-medium">{instrument}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <p className="text-lg md:text-xl text-gray-300 mb-4">For more information about any of our services, contact us:</p>
        <button
          onClick={() => setShowContact(!showContact)}
          className="px-6 py-3 bg-white text-black text-xl font-bold rounded-lg shadow-lg hover:bg-gray-300 transition"
        >
          Contact Us
        </button>
        {showContact && (
          <div className="mt-4 flex flex-col gap-2 bg-black text-white p-4 rounded-lg shadow-md border border-gray-500 animate-fadeIn max-w-xs mx-auto">
            <a href="tel:+123456789" className="px-4 py-2 bg-gray-800 text-white font-bold rounded-md shadow-sm hover:bg-gray-900 transition flex items-center justify-center">📞 Call</a>
            <a href="mailto:info@djtaahaa.com" className="px-4 py-2 bg-gray-800 text-white font-bold rounded-md shadow-sm hover:bg-gray-900 transition flex items-center justify-center">📧 Email</a>
          </div>
        )}
      </div>
    </div>
  );
}
