
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-brand-blue">
            <span className="text-brand-purple">Web</span>Craft
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="animated-underline font-medium text-brand-blue">Services</a>
            <a href="#process" className="animated-underline font-medium text-brand-blue">Process</a>
            <a href="#portfolio" className="animated-underline font-medium text-brand-blue">Portfolio</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 focus:outline-none"
            >
              <svg 
                className="w-6 h-6 text-brand-blue" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-60 mt-4 p-4 rounded-lg opacity-100" : "max-h-0 mt-0 p-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="px-4 py-2 font-medium text-brand-blue hover:bg-brand-lightPurple rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="px-4 py-2 font-medium text-brand-blue hover:bg-brand-lightPurple rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#portfolio" 
              className="px-4 py-2 font-medium text-brand-blue hover:bg-brand-lightPurple rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 font-medium bg-brand-purple text-white rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
