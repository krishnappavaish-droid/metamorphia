import React from 'react';

const services = [
  {
    title: "Stress & Anxiety Relief",
    description: "Guided subconscious relaxation techniques to ease overwhelming thoughts and restore inner calm.",
    icon: "🌿"
  },
  {
    title: "Sleep Improvement",
    description: "Hypnotic conditioning to restore natural sleep cycles, reduce insomnia, and wake up refreshed.",
    icon: "🌙"
  },
  {
    title: "Emotional Healing",
    description: "Deep emotional release and trauma-focused hypnotherapy for long-term balance and peace.",
    icon: "💧"
  },
  {
    title: "Habit Breaking",
    description: "Rewiring subconscious patterns to overcome unwanted habits like smoking, nail biting, or overeating.",
    icon: "🔄"
  },
  {
    title: "Confidence Boosting",
    description: "Empowering sessions focused on self-belief, inner strength, and building a positive identity.",
    icon: "✨"
  },
  {
    title: "Performance Focus",
    description: "Enhance concentration and performance for sports, exams, or public speaking.",
    icon: "🎯"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-text mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our core offerings designed to support your emotional and mental wellness through the power of the subconscious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-background w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
