
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const shapes = heroRef.current.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
          const htmlShape = shape as HTMLElement;
          const speed = index * 0.05;
          
          const translateX = (x - 0.5) * speed * 100;
          const translateY = (y - 0.5) * speed * 100;
          
          htmlShape.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden" ref={heroRef}>
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Shape 1 */}
        <div className="shape absolute top-20 right-1/4 w-72 h-72 rounded-full bg-brand-purple/10 animate-float" style={{ animationDelay: '0s' }}></div>
        {/* Shape 2 */}
        <div className="shape absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-brand-lightPurple animate-float" style={{ animationDelay: '0.5s' }}></div>
        {/* Shape 3 */}
        <div className="shape absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-blue-100 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText 
            text="Transform Your Web Presence" 
            className="text-4xl md:text-6xl font-bold text-brand-blue mb-6"
          />
          
          <AnimatedText 
            text="Expert website creation with stunning design and seamless functionality."
            className="text-xl md:text-2xl text-brand-gray mb-10" 
            delay={200}
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
            <a href="#services" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.5V21M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5M12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5M12 7.5V3M21 12H16.5M7.5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
            <p className="text-brand-gray">Tailored websites that capture your brand's essence and create memorable user experiences.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.5V2M5.5 5.5H4M14 3.5V2M17.5 5.5H19M5.5 14H4M14 19.5V21M9 19.5V21M17.5 14H19M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-brand-gray">Optimized code and efficient loading for lightning-fast websites that keep users engaged.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L12 9L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-brand-gray">Perfectly adapted for all devices from desktop to mobile for a seamless user experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
