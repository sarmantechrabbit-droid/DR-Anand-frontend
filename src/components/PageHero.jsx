import { motion } from 'framer-motion'
import { Heart, Activity, Stethoscope, Pill } from 'lucide-react'

export default function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2d3d] to-[#2d4555] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3b9dd9] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#58c8ca] rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={60} className="text-[#3b9dd9] opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%]"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={50} className="text-[#58c8ca] opacity-20 " />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[20%]"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity size={55} className="text-[#3b9dd9] opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-[25%]"
        animate={{ y: [0, 15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Pill size={45} className="text-[#58c8ca] opacity-20" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">{badge}</span>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
