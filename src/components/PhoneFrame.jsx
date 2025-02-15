import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentorCard from './MentorCard';

const PhoneFrame = ({ activeIndex, mentors }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-[300px] h-[600px] sticky top-24"
    >
      <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 mt-3 bg-gray-800 rounded-full" />
        <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="w-full h-full p-4 overflow-y-auto scrollbar-hide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {mentors[activeIndex] && (
                <MentorCard 
                  {...mentors[activeIndex]} 
                  isActive={true}
                  delay={0}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneFrame;