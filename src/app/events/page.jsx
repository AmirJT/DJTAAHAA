'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../globals.css';

const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    date: 'June 15, 2025',
    location: 'Los Angeles, CA',
    image: '/summer.jpg',
    link: 'https://ticketwebsite.com/event1',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Hakkasan Night Party',
    date: 'July 5, 2025',
    location: 'Las Vegas, NV',
    image: '/hakassan.jpg',
    link: 'https://ticketwebsite.com/event2',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Yalda Night Celebration',
    date: 'December 21, 2025',
    location: 'New York City, NY',
    image: '/yalda.jpg',
    link: 'https://ticketwebsite.com/event3',
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Omnia Club Takeover',
    date: 'January 10, 2025',
    location: 'San Diego, CA',
    image: '/omnia.jpg',
    status: 'completed',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="w-full border-t-2 border-b-2 border-yellow-400 py-4 mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 uppercase tracking-wide">Upcoming Events</h1>
      </div>
      <div className="flex flex-col gap-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${event.status === 'completed' ? 'grayscale opacity-75' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2 text-center p-4 md:p-6">
              <p className="text-3xl md:text-5xl font-bold text-yellow-400">{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
              <p className="text-lg md:text-2xl text-gray-300 font-semibold">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' })}</p>
              <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6 text-white">{event.title}</h2>
              <p className="text-lg md:text-2xl text-gray-400 mt-1 md:mt-2">{event.location}</p>
              {event.status === 'upcoming' ? (
                <Link href={event.link}>
                  <motion.button
                    className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white text-lg md:text-xl font-bold rounded-lg shadow-md hover:bg-blue-700 transition w-full md:w-auto"
                    whileHover={{ scale: 1.1 }}
                  >
                    Buy Tickets
                  </motion.button>
                </Link>
              ) : (
                <span className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-gray-700 text-white text-lg md:text-xl font-bold rounded-lg shadow-md w-full md:w-auto inline-block">Event Completed</span>
              )}
            </div>
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={400}
              className="w-full md:w-1/2 h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg ${event.status === 'completed' ? 'grayscale' : ''}"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
