import { motion } from 'framer-motion';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-[#2a2a2a] border border-gray-600 hover:border-[#007bff] transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-[#007bff] text-sm font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
