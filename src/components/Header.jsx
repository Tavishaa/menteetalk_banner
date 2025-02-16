import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-99">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-blue-600 text-2xl">📚</span>
          <span className="font-bold text-xl text-gray-900">Mentee<span className="text-blue-600">Talk</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
          <a href="#" className="text-blue-600 font-medium text-sm px-4 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Become a Mentor
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;