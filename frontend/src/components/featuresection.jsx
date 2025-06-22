import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaQrcode size={32} />, title: 'QR Attendance', desc: 'Fast check-in using unique QR codes.' },
  { icon: <FaUsers size={32} />, title: 'Group Chat', desc: 'Real-time messaging in event channels.' },
  { icon: <FaChartLine size={32} />, title: 'Dynamic Reports', desc: 'Organizers get detailed analytics.' },
  { icon: <FaShieldAlt size={32} />, title: 'Privacy Control', desc: 'User data stays secure and private.' }
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card-bg text-center"
            >
              <div className="mb-4 text-primary mx-auto">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
