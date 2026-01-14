import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import adonaiLogo from '../assets/adonaiWhiteLogo.svg';

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
            <div className="flex items-center mb-4">
              <img src={adonaiLogo} alt="ADONAI Logo" className="h-20 w-auto" />
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
                <a
                  href="https://maps.google.com/?q=12982+SW+132nd+Ave,+Miami,+FL+33186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#007bff] transition-colors hover:underline"
                >
                  12982 SW 132nd Ave, Miami, FL 33186<br />USA
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#007bff] flex-shrink-0" />
                <a
                  href="https://wa.me/17865544666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#007bff] transition-colors hover:underline"
                >
                  +1 (786) 554-4666
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#007bff] flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=adonaiprecisionmachining@gmail.com&subject=Proyecto%20de%20Mecanizado%20de%20Precisi%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#007bff] transition-colors hover:underline"
                >
                  adonaiprecisionmachining@gmail.com
                </a>
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
