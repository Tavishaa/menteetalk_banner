import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhoneFrame from './components/PhoneFrame';
import MentorGrid from './components/MentorGrid';
import CTASection from './components/CTASection';
import { mentors } from './components/MentorGrid';

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="relative max-w-[1400px] mx-auto px-4 py-12">
          <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[200px]">
            <PhoneFrame activeIndex={activeIndex} mentors={mentors} />
          </div>
          <div className="pt-[400px]">
            <MentorGrid 
              onScroll={setActiveIndex} 
              mentors={mentors} 
              activeIndex={activeIndex}
            />
          </div>
          <CTASection />
        </div>
      </main>
    </div>
  );
}

export default App;