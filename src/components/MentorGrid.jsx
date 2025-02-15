import React, { useRef, useEffect } from 'react';
import MentorCard from './MentorCard';
import { motion } from 'framer-motion';

export const mentors = [
  {
    name: "Dr. Apoorva Ranjan",
    role: "Co-founder of Venture Catalysts",
    expertise: ["Business Strategy", "Venture Capital", "Startup Mentoring"],
    experience: "15+ years",
    availability: "Mon-Fri",
    rating: 4.9,
    sessions: 234,
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Piyush Verma",
    role: "Tech Innovation Expert",
    expertise: ["AI/ML", "Cloud Architecture", "Tech Leadership"],
    experience: "12+ years",
    availability: "Weekends",
    rating: 4.8,
    sessions: 189,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Ritesh Agarwal",
    role: "Startup Mentor",
    expertise: ["Entrepreneurship", "Product Strategy", "Scaling"],
    experience: "10+ years",
    availability: "Flexible",
    rating: 4.9,
    sessions: 156,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Sonam Wangchuk",
    role: "Education Innovator",
    expertise: ["Education Tech", "Social Impact", "Innovation"],
    experience: "20+ years",
    availability: "Mon-Sat",
    rating: 5.0,
    sessions: 312,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Product Strategy Expert",
    expertise: ["Product Management", "UX Design", "Growth"],
    experience: "8+ years",
    availability: "Weekdays",
    rating: 4.7,
    sessions: 145,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Lead & Architect",
    expertise: ["System Design", "Engineering", "Team Building"],
    experience: "14+ years",
    availability: "Flexible",
    rating: 4.8,
    sessions: 198,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  }
];

const MentorGrid = ({ onScroll, mentors, activeIndex }) => {
  const scrollRef = useRef(null);
  const [displayMentors, setDisplayMentors] = React.useState([]);

  useEffect(() => {
    setDisplayMentors([...mentors, ...mentors, ...mentors]);
  }, [mentors]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollLeft = element.scrollLeft;
      const cardWidth = 300 + 24; // card width + gap
      const totalWidth = cardWidth * mentors.length;
      
      // Calculate current index
      const currentIndex = Math.round(scrollLeft / cardWidth) % mentors.length;
      onScroll(currentIndex);

      // Handle infinite scroll
      if (scrollLeft >= totalWidth * 2 - cardWidth) {
        element.scrollLeft = totalWidth;
      } else if (scrollLeft <= totalWidth - cardWidth) {
        element.scrollLeft = totalWidth * 2 - cardWidth;
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [onScroll, mentors.length]);

  // Set initial scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 300 + 24;
      scrollRef.current.scrollLeft = cardWidth * mentors.length;
    }
  }, [mentors.length]);

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <div className="flex space-x-6 px-[calc(50vw-350px)]">
          {displayMentors.map((mentor, index) => {
            const currentIndex = index % mentors.length;
            const isActive = currentIndex === activeIndex;

            return (
              <motion.div 
                key={`${mentor.name}-${index}`}
                className="flex-shrink-0 w-[300px] snap-center"
                animate={{ 
                  opacity: isActive ? 0 : 1,
                  scale: isActive ? 0.9 : 1,
                  filter: isActive ? 'grayscale(100%)' : 'grayscale(0%)',
                  y: isActive ? -20 : 0
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <MentorCard 
                  {...mentor} 
                  delay={currentIndex * 0.2} 
                  isActive={false}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MentorGrid;