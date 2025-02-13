'use client';

import '../globals.css';
import Image from 'next/image';
import { useState } from 'react';

const soundServices = [
  { name: 'PA Speakers', description: 'High-quality sound projection for any venue.' },
  { name: 'Subwoofers', description: 'Deep, powerful bass for an immersive experience.' },
  { name: 'Wireless Microphones', description: '' },
  { name: 'Digital Mixing Board', description: 'Advanced audio control for a seamless performance.' },
];

const lightServices = [
  { name: 'Up Lights', description: 'Enhance the ambiance with vibrant color lighting. These are placed around the venue to create a visually appealing atmosphere that complements the event theme.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Moving Head Lights', description: 'These intelligent lights provide dynamic movement and effects, perfect for concerts, club nights, and high-energy performances.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Lasers', description: 'High-intensity laser beams designed to create a dramatic and visually stunning experience, often used in nightclubs and large-scale events.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Cold Sparks', description: 'Safe indoor spark effects that add a wow factor to any performance, making grand entrances and key moments truly spectacular.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Dry Ice / Low Fog', description: 'A beautiful low-lying fog effect that creates the illusion of walking on clouds, commonly used for first dances and special performances.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Cyro Blasters / Co2', description: 'High-powered CO2 jets that release cool fog bursts, adding excitement to the performance or crowd moments.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'LED Foam Stick', description: 'Interactive LED sticks handed out to guests, providing an immersive and fun way to engage with the music.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'Fog / Haze', description: 'Enhances the effect of lighting by making beams visible in the air, adding depth and intensity to the visuals.', image: '/61QrExhZyxL_processed.jpg' },
  { name: 'LED Screen', description: 'Large LED screens display visuals, animations, and live video feed, enhancing the audience’s experience at the event.', image: '/61QrExhZyxL_processed.jpg' },
];

const liveBandServices = [
  'Guitar', 'Violin', 'Drums', 'Percussion', 'Saxophone', 'Singer', 'Harp'
];

export default function ServicesPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-24">
      {/* Title */}
      <div className="w-full border-t border-b border-gray-700 py-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Our Services</h1>
      </div>

      {/* Sound Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white border-b pb-2 mb-8">Sound</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soundServices.map((service, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3 className="text-xl md:text-2xl font-medium text-white">{service.name}</h3>
              {service.description && <p className="text-gray-400 text-md md:text-lg mt-1">{service.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Lights Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white border-b pb-2 mb-8">Lights</h2>
        <div className="grid grid-cols-1 gap-12">
          {lightServices.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}` }>
              <Image src={service.image} alt={service.name} width={200} height={130} className="w-full md:w-1/4 rounded-lg" />
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-medium text-white">{service.name}</h3>
                <p className="text-gray-400 text-md md:text-lg mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <p className="text-lg md:text-xl text-gray-300 mb-4">For more information about any of our services, contact us:</p>
        <button
          onClick={() => setShowContact(!showContact)}
          className="px-6 py-3 bg-yellow-500 text-black text-xl font-bold rounded-md shadow-md hover:bg-yellow-600 transition"
        >
          Contact Us
        </button>
        {showContact && (
          <div className="mt-4 flex flex-col gap-4">
            <a href="tel:+123456789" className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow-md hover:bg-green-600 transition">Call DJ TAHAA</a>
            <a href="mailto:info@djtaahaa.com" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition">Email DJ TAHAA</a>
          </div>
        )}
      </div>
    </div>
  );
}