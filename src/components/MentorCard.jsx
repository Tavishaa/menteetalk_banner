import React from 'react';
import { motion } from 'framer-motion';

const MentorCard = ({ name, role, expertise, experience, availability, rating, sessions, imageUrl, colorImageUrl, isActive, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <div className="w-20 h-20 mx-auto mb-1 rounded-full overflow-hidden ring-4 ring-gray-50">
          <img 
            src={isActive ? colorImageUrl : imageUrl} 
            alt={name}
            className={`w-full h-full object-cover transition-all duration-300 ${!isActive ? 'grayscale contrast-125' : ''}`}
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <span className="bg-white text-green-500 text-xs px-3 py-0.5 rounded-full font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            {isActive ? 'Active' : 'Online'}
          </span>
        </div>
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <span className="text-yellow-300">★</span>
          {rating}
        </div>
      </div>
      <div className="text-center mb-3 mt-2">
        <h3 className="font-bold text-base text-gray-900 mb-0.5 font-display">{name}</h3>
        <p className="text-blue-600 font-medium font-sans text-xs">{role}</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-gray-600 text-xs font-medium font-sans">
          <span>{experience} experience</span>
          <span>{availability}</span>
        </div>
        <div className="text-xs text-gray-600 text-center font-medium font-sans">
          {sessions} sessions completed
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {expertise.slice(0, 2).map((skill) => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium font-sans"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;