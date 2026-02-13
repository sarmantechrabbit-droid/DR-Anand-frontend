import { motion } from 'framer-motion'

export default function ExperienceMessage({ message }) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#58c8ca]/10 to-[#4ab4b6]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed">
            {message}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
