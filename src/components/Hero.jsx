import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-text mb-6 leading-tight">
          Transform Your Mind,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Heal Your Life
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience deep, lasting change through the power of clinical hypnotherapy. 
          Break free from anxiety, stress, and limiting beliefs.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#booking" className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Journey
          </a>
          <a href="#services" className="px-8 py-4 bg-white text-primary text-lg font-semibold rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
