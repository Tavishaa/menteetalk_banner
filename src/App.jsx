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
      <main className="overflow-x-hidden">
        <Hero />
        <div className="relative max-w-[1400px] mx-auto px-4 -mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[50px]">
            <PhoneFrame activeIndex={activeIndex} mentors={mentors} />
          </div>
          <div className="pt-[250px] pb-24">
            <MentorGrid 
              onScroll={setActiveIndex} 
              mentors={mentors} 
              activeIndex={activeIndex}
            />
          </div>
          <div className="-mt-4">
            <CTASection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;