import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setSubmitted(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', description: '' });
      setFileName('');
    }, 4000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section id="presupuesto" className="py-20 bg-gradient-to-b from-[#252525] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            REQUEST YOUR <span className="text-white">QUOTE</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your project and we'll respond within 48 hours.
            <br />
            También se atienden consultas en español.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] border border-gray-600 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/50 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/50 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/50 outline-none transition-all"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    PROJECT DESCRIPTION *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                    className="w-full bg-[#1a1a1a] border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/50 outline-none transition-all resize-none"
                    placeholder="Describe your project: material, dimensions, quantity, tolerances..."
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    UPLOAD BLUEPRINT / FILE
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.png"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center w-full bg-[#1a1a1a] border-2 border-dashed border-gray-500 rounded-lg px-4 py-6 cursor-pointer hover:border-[#007bff] transition-all group"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#007bff] mx-auto mb-2 transition-colors" />
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {fileName || 'Click to select file (PDF, DWG, DXF, STEP)'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#007bff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0056b3] transition-all transform hover:scale-105 shadow-lg shadow-[#007bff]/50 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND REQUEST</span>
                </button>
              </motion.form>
              ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 5, 0] }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="absolute inset-0 bg-[#007bff] rounded-full opacity-30 blur-xl"
                    />
                    <CheckCircle className="w-24 h-24 text-[#007bff] relative z-10" />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  ¡REQUEST SENT SUCCESSFULLY!
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="space-y-2 mb-6"
                >
                  <p className="text-gray-300 text-lg">
                    Thank you for contacting us, <span className="font-semibold text-[#007bff]">{formData.name}</span>!
                  </p>
                  <p className="text-gray-400">
                    We've received your project details and will review them shortly.
                  </p>
                  <p className="text-gray-400">
                    You'll receive a response at <span className="font-semibold text-[#007bff]">{formData.email}</span> within 24-48 hours.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 2.4 }}
                  className="h-1 bg-gradient-to-r from-[#007bff] via-[#007bff] to-transparent rounded-full mb-6 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-500 text-sm"
                >
                  Redirecting in a moment...
                </motion.p>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
