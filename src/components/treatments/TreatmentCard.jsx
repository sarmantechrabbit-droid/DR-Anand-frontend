import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function TreatmentCard({ treatment, index }) {
  const Icon = Icons[treatment.icon] || Icons.Activity

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.imageDescription}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#58c8ca] to-[#4ab4b6] rounded-xl flex items-center justify-center mb-6">
          <Icon size={32} className="text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {treatment.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {treatment.description}
        </p>
      </div>
    </motion.div>
  )
}
