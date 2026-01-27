import { motion } from 'framer-motion';
import { FileText, Calculator, Cog } from 'lucide-react';
import CountUp from './CountUp';

const steps = [
  {
    icon: FileText,
    title: 'BLUEPRINT',
    description: 'Send us your design or technical specifications'
  },
  {
    icon: Calculator,
    title: 'QUOTE',
    description: 'Detailed quote delivery'
  },
  {
    icon: Cog,
    title: 'FABRICATION',
    description: 'TEXTO PENDIENTE'
  }
];

export default function Process() {
  return (
    <section id="nosotros" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            ABOUT <span className="text-white">US</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            At Adonai Precision Machining we don't sell catalog parts.
            <span className="block mt-2">
              We specialize in custom manufacturing: from unique prototypes to short runs of high precision.
            </span>
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            OUR PROCESS
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative w-full h-full"
                >
                  <div className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] border border-gray-600 rounded-xl p-6 text-center hover:border-[#007bff] transition-all group h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#007bff]/20 rounded-full mb-4 group-hover:bg-[#007bff]/30 transition-colors mx-auto">
                      <Icon className="w-8 h-8 text-[#007bff]" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>


                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] border border-gray-600 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CountUp end={15} suffix="+" duration={2.5} />
              <p className="text-gray-400 mt-2">Years of experience</p>
            </div>
            <div>
              <CountUp end={500} suffix="+" duration={2.5} />
              <p className="text-gray-400 mt-2">Completed projects</p>
            </div>
            <div>
              <CountUp end={100} suffix="%" duration={2.5} />
              <p className="text-gray-400 mt-2">Satisfied customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
