import React from 'react';
import { motion } from 'framer-motion';

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
      className="card-bg cursor-pointer h-full flex flex-col"
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h4 className="font-bold text-lg mb-2">{event.title}</h4>
      <p className="text-gray-600 flex-grow">{event.description}</p>
      <span className="mt-4 text-sm text-gray-500">{event.date}</span>
    </motion.div>
  );
}
