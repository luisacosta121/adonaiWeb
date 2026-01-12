import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <Hero />
      <Process />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
