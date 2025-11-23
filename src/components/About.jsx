import React from 'react';
import doctorPlaceholder from '../assets/doctor_placeholder.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 opacity-20"></div>
              {/* Placeholder for Therapist Image - using a gradient div for now if no image */}
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <div className="aspect-[3/4] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                   <img src={doctorPlaceholder} alt="Metamorphia Therapy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-heading font-bold text-text mb-6">Meet Dr. Trupti Govind</h2>
            <h3 className="text-xl text-primary font-medium mb-6">Certified Clinical Hypnotherapist</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Dr. Trupti Govind is a certified hypnotherapist with years of experience in emotional healing, 
                stress relief, and subconscious transformation. Her approach blends compassion, science-backed 
                techniques, and personalized guidance to help clients achieve deep mental and emotional well-being.
              </p>
              <p>
                She believes that every mind has the innate power to transform — and her mission through 
                Metamorphia is to guide individuals gently and effectively toward that transformation.
              </p>
              <p>
                Whether you are struggling with anxiety, sleep issues, or simply want to unlock your full potential,
                Dr. Trupti provides a safe, non-judgmental space for your journey.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-gray-500">Clients Helped</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">5+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
