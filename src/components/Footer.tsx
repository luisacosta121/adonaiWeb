import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Wrench } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="bg-[#1a1a1a] border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="w-8 h-8 text-[#007bff]" />
              <span className="text-white font-bold text-lg">ADONAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fabrication of unique parts and high-precision precision-machined prototypes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#007bff] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#007bff] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#007bff] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('nosotros')} className="text-gray-400 hover:text-[#007bff] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('trabajos')} className="text-gray-400 hover:text-[#007bff] transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonios')} className="text-gray-400 hover:text-[#007bff] transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('presupuesto')} className="text-gray-400 hover:text-[#007bff] transition-colors">
                  Quote
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>CNC Machining</li>
              <li>Prototypes</li>
              <li>Automotive Parts</li>
              <li>Aerospace Components</li>
              <li>Short Runs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#007bff] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  12982 SW 132nd Ave, Miami, FL 33186<br />USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#007bff] flex-shrink-0" />
                <span className="text-gray-400">+1 (786) 554-4666</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#007bff] flex-shrink-0" />
                <span className="text-gray-400">adonaiprecisionmachining@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ADONAI PRECISION MACHINING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
