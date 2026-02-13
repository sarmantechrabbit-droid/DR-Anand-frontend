import { motion } from 'framer-motion'
import { Stethoscope, CheckCircle2, Syringe, Pill, Microscope } from 'lucide-react'

export default function Specializations() {
  const specializations = [
    'Laparoscopic Surgery',
    'Bariatric Surgery (Weight Loss Surgery)',
    'Gastrointestinal Surgery',
    'Hernia Repair (Inguinal, Umbilical, Incisional)',
    'Gallbladder Surgery (Cholecystectomy)',
    'Appendix Surgery (Appendectomy)',
    'Colorectal Surgery',
    'Gastric Surgery',
    'Endoscopy & Colonoscopy',
    'Minimally Invasive Surgery',
    'Obesity Management',
    'Metabolic Surgery'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2d3d] to-[#2d4555] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#58c8ca] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#58c8ca] rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="absolute top-32 left-[8%]"
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Syringe size={70} className="text-[#3b9dd9] opacity-10" />
      </motion.div>

      <motion.div
        className="absolute top-48 right-[12%]"
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Pill size={60} className="text-[#58c8ca] opacity-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[15%]"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Microscope size={65} className="text-[#3b9dd9] opacity-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">EXPERTISE</span>
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Areas of Specialization
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive surgical expertise in gastrointestinal and bariatric procedures
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specializations.map((item, index) => (
            <motion.div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-[#3b9dd9]/50 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#3b9dd9]/20 rounded-lg flex items-center justify-center group-hover:bg-[#3b9dd9] transition-colors">
                  <CheckCircle2 className="text-[#3b9dd9] group-hover:text-white transition-colors" size={20} />
                </div>
                <p className="font-semibold text-white leading-relaxed">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-6 rounded-2xl">
            <Stethoscope className="text-[#3b9dd9]" size={40} />
            <div className="text-left">
              <div className="text-2xl font-bold">15+ Years</div>
              <div className="text-gray-300">of Surgical Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
