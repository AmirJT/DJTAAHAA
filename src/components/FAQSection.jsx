'use client';

import '@/app/globals.css';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { question: 'What types of events do you DJ?', answer: 'I DJ for weddings, corporate events, private parties, nightclubs, and festivals. Whether it’s an intimate gathering or a large-scale event, I’ve got you covered!' },
  { question: 'What genres of music do you play?', answer: 'I play a wide variety of genres, including EDM, hip-hop, house, Latin, pop, and more. I customize my setlist based on the crowd and client preferences.' },
  { question: 'Do you take song requests?', answer: 'Yes! I take requests and work with clients to create the perfect playlist for their event. However, I also read the crowd and adjust accordingly to keep the energy up.' },
  { question: 'Do you bring your own equipment?', answer: 'Yes! I provide high-quality sound systems, microphones, mixers, and lighting. If the venue already has equipment, I can work with that as well.' },
  { question: 'How long do you usually perform?', answer: 'Performance duration varies based on the event. I typically perform sets ranging from 2 to 6 hours, but I can accommodate longer or shorter durations as needed.' },
  { question: 'How far in advance should I book you?', answer: 'It’s best to book as early as possible, especially for weddings and high-demand weekends. I recommend booking at least 3 to 6 months in advance to secure your date.' }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-10 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase tracking-wider mb-10 border-t-2 border-b-2 border-yellow-400 py-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 bg-gray-900 text-lg md:text-xl font-semibold flex justify-between items-center hover:bg-gray-800 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown className={`transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-800 text-gray-300 text-md md:text-lg transition-all duration-500 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
