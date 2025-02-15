import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneFrame = ({ activeIndex }) => {
  const mentorImages = [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80"
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-[300px] h-[600px] sticky top-24"
    >
      <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 mt-3 bg-gray-800 rounded-full" />
        <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={mentorImages[activeIndex]}
              alt="Active Mentor"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneFrame;