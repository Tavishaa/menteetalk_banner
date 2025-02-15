import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
          Sign Up for Free
        </button>
        <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors ml-4">
          Become a Mentor
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;