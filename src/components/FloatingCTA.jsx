import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Calendar } from 'lucide-react'
import siteData from '../data/siteData.json'
import AppointmentModal from './AppointmentModal'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.a
              href={`tel:${siteData.site.phone}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-6 left-6 z-40 flex items-center gap-3 bg-[#2f7789] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-shadow"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone size={24} />
              </motion.div>
              <span className="font-semibold hidden sm:inline">Call Now</span>
            </motion.a>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-gradient-to-r from-[#58c8ca] to-[#4ab4b6] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-shadow"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Calendar size={24} />
              </motion.div>
              <span className="font-semibold hidden sm:inline">Book Appointment</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
