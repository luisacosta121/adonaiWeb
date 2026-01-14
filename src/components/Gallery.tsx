import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Aerospace Component',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80',
    category: 'Aerospace'
  },
  {
    id: 2,
    title: 'Automotive Part',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Automotive'
  },
  {
    id: 3,
    title: 'CNC Machining',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Industrial'
  },
  {
    id: 4,
    title: 'Aluminum Prototype',
    image: 'https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Prototypes'
  },
  {
    id: 5,
    title: 'Precision Gear',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Industrial'
  },
  {
    id: 6,
    title: 'Measurement Component',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Instrumentation'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="trabajos" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            OUR <span className="text-[#007bff]">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Precision parts for demanding industries
          </p>
        </motion.div>

        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-[#2a2a2a] border border-gray-600">
            <div className="aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-[#007bff] text-xs sm:text-sm font-bold uppercase tracking-wider">
                      {projects[currentIndex].category}
                    </span>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mt-2">
                      {projects[currentIndex].title}
                    </h3>
                  </div>
                </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#007bff]/80 hover:bg-[#007bff] text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#007bff]/80 hover:bg-[#007bff] text-white p-3 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#007bff] w-8'
                    : 'bg-gray-600 w-3 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
