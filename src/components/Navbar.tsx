import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import adonaiLogo from '../assets/adonaiWhiteLogo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a]/90 backdrop-blur-md border-b border-gray-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={adonaiLogo} alt="ADONAI Logo" className="h-20 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-300 hover:text-[#007bff] transition-colors">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('trabajos')} className="text-gray-300 hover:text-[#007bff] transition-colors">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-300 hover:text-[#007bff] transition-colors">
              TESTIMONIALS
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-[#007bff] transition-colors">
              CONTACT
            </button>
            <button
              onClick={() => scrollToSection('presupuesto')}
              className="bg-[#007bff] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#0056b3] transition-all transform hover:scale-105 shadow-lg shadow-[#007bff]/50"
            >
              REQUEST QUOTE
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#252525]/95 border-t border-gray-600"
        >
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-gray-300 hover:text-[#007bff] py-2">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('trabajos')} className="block w-full text-left text-gray-300 hover:text-[#007bff] py-2">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left text-gray-300 hover:text-[#007bff] py-2">
              TESTIMONIALS
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-300 hover:text-[#007bff] py-2">
              CONTACT
            </button>
            <button
              onClick={() => scrollToSection('presupuesto')}
              className="w-full bg-[#007bff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0056b3] transition-all"
            >
              REQUEST QUOTE
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
