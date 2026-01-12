import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsappIcon.svg';

export default function FloatingWhatsApp() {
  const phoneNumber = '17865544666';
  const message = 'Hello, I would like to learn more about your precision machining services.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
    </motion.button>
  );
}
