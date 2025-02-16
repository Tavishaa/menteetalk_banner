import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div className="text-center py-16">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3.5 rounded-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-200 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            animate={{ 
              x: [0, 5, 0],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Sign up for free
          </motion.span>
          <motion.span 
            className="text-lg"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        </motion.a>
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3.5 rounded-lg font-medium border-2 border-purple-600 hover:bg-purple-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            animate={{ 
              x: [0, 5, 0],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Become a Mentor
          </motion.span>
          <motion.span 
            className="text-lg"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
          
        </motion.a>
      </div>
    </div>
  );
};

export default CTASection;