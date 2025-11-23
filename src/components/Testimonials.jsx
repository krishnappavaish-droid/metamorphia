import React from 'react';

const testimonials = [
  {
    name: "Sarah J.",
    text: "I was skeptical at first, but after just three sessions, my anxiety levels have dropped significantly. Dr. Trupti is amazing!",
    role: "Anxiety Relief"
  },
  {
    name: "Michael R.",
    text: "I finally quit smoking after 15 years. The hypnotherapy sessions were relaxing and incredibly effective.",
    role: "Habit Breaking"
  },
  {
    name: "Emily W.",
    text: "Metamorphia helped me regain my confidence. I feel like a new person.",
    role: "Confidence Boosting"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center text-text mb-16">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-text">{t.name}</h4>
                <span className="text-sm text-primary">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
