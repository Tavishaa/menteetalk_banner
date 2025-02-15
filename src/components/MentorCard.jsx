import React from 'react';
import { motion } from 'framer-motion';

const MentorCard = ({ name, role, expertise, experience, availability, rating, sessions, imageUrl, colorImageUrl, isActive, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={isActive ? colorImageUrl : imageUrl} 
          alt={name}
          className={`w-full h-full object-cover transition-all duration-300 ${!isActive ? 'grayscale' : ''}`}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{role}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {expertise.slice(0, 2).map((skill) => (
            <span 
              key={skill}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{experience}</span>
          <span>{availability}</span>
        </div>
        <div className="mt-3 flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-gray-600">{sessions} sessions</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;