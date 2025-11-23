import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-primary">
          Metamorphia
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-text hover:text-primary transition-colors font-medium">About</a>
          <a href="#services" className="text-text hover:text-primary transition-colors font-medium">Services</a>
          <a href="#testimonials" className="text-text hover:text-primary transition-colors font-medium">Stories</a>
          <a href="#booking" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
