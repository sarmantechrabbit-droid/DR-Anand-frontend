import { motion } from 'framer-motion'
import { Calendar, Phone, Stethoscope } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 bg-[#256c79] overflow-hidden mb-15">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#4ab4b6] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6dd5d7] rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="absolute top-20 right-[10%] opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={100} className="text-white" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Expert Gastro Surgery Care?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Schedule your consultation with Dr. Anand Patel today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#58c8ca] px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Book Appointment Now
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
