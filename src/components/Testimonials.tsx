import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    company: 'TechAero Industries',
    comment: 'The precision and quality of the parts exceeded our expectations. They met deadlines even on urgent orders. Excellent professionalism.',
    rating: 5
  },
  {
    id: 2,
    name: 'María González',
    company: 'AutoParts Solutions',
    comment: 'We have been working with ADONAI for 3 years. Their ability to interpret complex blueprints and deliver perfect parts is unmatched.',
    rating: 5
  },
  {
    id: 3,
    name: 'Javier Martínez',
    company: 'Innovative Prototypes',
    comment: 'As a prototype company, we need reliable suppliers. ADONAI has never let us down. Premium quality and personalized attention.',
    rating: 5
  },
  {
    id: 4,
    name: 'Ana Silva',
    company: 'Southern Machinery',
    comment: 'Excellent communication and follow-up. They kept us informed at every stage of the process. The parts arrived perfectly packaged.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            WHAT OUR <span className="text-white">CUSTOMERS SAY</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trust built on quality and reliability
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] border border-gray-600 rounded-2xl p-8 sm:p-12 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#007bff] text-[#007bff]" />
                ))}
              </div>

              <p className="text-gray-300 text-lg sm:text-xl italic mb-8 text-center leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </p>

              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#007bff] font-semibold">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-[#007bff] text-white p-3 rounded-full hover:bg-[#0056b3] transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-[#007bff] text-white p-3 rounded-full hover:bg-[#0056b3] transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#007bff] w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
