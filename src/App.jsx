import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhoneFrame from './components/PhoneFrame';
import MentorGrid from './components/MentorGrid';
import CTASection from './components/CTASection';

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <PhoneFrame activeIndex={activeIndex} />
            </div>
            <div className="w-full md:w-2/3">
              <MentorGrid onScroll={setActiveIndex} />
            </div>
          </div>
          <CTASection />
        </div>
      </main>
    </div>
  );
}

export default App;