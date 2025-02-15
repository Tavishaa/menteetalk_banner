import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl font-bold mb-6">Talk to Anytime, Anywhere</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your life with guidance from{' '}
          <span className="text-blue-600">top educators</span>,
          <br />
          and more—all at your fingertips
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;