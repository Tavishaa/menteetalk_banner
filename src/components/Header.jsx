import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-99">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-xl">MenteeTalk</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Become a Mentor
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;