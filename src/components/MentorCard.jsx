import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Clock, Calendar } from 'lucide-react';

const MentorCard = ({ 
  name, 
  role, 
  expertise, 
  experience, 
  availability, 
  rating, 
  sessions, 
  imageUrl, 
  colorImageUrl, 
  delay,
  isActive 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0.8, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
          <motion.div
            className="relative w-full h-full"
            initial={{ filter: 'grayscale(100%)' }}
            animate={{ filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)' }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={colorImageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
          <Star className="w-4 h-4 mr-1" />
          {rating}
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{experience} experience</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{availability}</span>
        </div>
        <div className="text-sm text-gray-600">
          {sessions} sessions completed
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill) => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Book Session
      </button>
    </motion.div>
  );
};

export default MentorCard;