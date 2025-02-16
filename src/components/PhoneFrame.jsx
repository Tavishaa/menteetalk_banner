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
      <div className="absolute inset-0 bg-black rounded-[2.5rem] shadow-xl overflow-hidden">
        <motion.div
          animate={{ 
            x: ["100%", "-100%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 mt-2 bg-gray-800 rounded-full" />
        <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden">
          {/* Phone UI Header */}
          <div className="p-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-900 font-display">Hello Tavishaa!</h2>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center">
                  <span className="text-xs">🔔</span>
                </div>
                <div className="bg-black text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                  <span className="text-yellow-400">$</span>
                  <span>200</span>
                </div>
              </div>
            </div>
            <div className="relative mb-3">
              <input 
                type="text" 
                placeholder="Search mentors..."
                className="w-full px-3 py-1.5 bg-gray-50 rounded-full text-xs"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔍</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <span className="bg-gradient-to-r from-green-50 to-green-100 text-green-600 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                🏃‍♂️ Fitness
              </span>
              <span className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                📚 UPSC
              </span>
              <span className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                💡 Startup
              </span>
              <span className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                More
              </span>
            </div>
          </div>
          
          
          <div className="px-4 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-gray-900">Top Mentors</h3>
                <span className="text-green-500 text-[10px] font-medium">LIVE</span>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-gray-400 text-[10px]">28</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 h-1 rounded-full ${i === activeIndex % 3 ? 'bg-blue-600' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className="px-4 h-[340px] overflow-visible flex items-center justify-center"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ 
                duration: 0.2,
                ease: [0.32, 0.72, 0, 1]
              }}
            >
              <div className="transform scale-[0.95]">
                {mentors[activeIndex] && (
                  <MentorCard 
                    {...mentors[activeIndex]} 
                    isActive={true}
                    delay={0}
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          
          <div className="absolute bottom-[52px] left-0 right-0 bg-white border-t">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 font-display">All Mentors</h3>
                <span className="text-blue-600 text-xs font-medium">View all</span>
              </div>
            </div>
          </div>

          
          <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-2">
            <div className="flex justify-around items-center">
              <span className="p-1.5 text-sm text-blue-600">⌂</span>
              <span className="p-1.5 text-sm text-gray-400">⊢⊣</span>
              <span className="p-1.5 text-sm text-gray-400">☰</span>
              <span className="p-1.5 text-sm text-gray-400">◯</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneFrame;