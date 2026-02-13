import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  "Gastro Surgeon & Laparoscopic Specialist",
  "+91 98765 43210",
  "info@anandgastrosurgeon.com"
]

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <div className="bg-[#58c8ca] text-white h-10 flex items-center justify-center overflow-hidden relative">
      {isMobile ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <p className="text-sm font-medium px-4 text-center">
              {messages[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="flex items-center justify-between gap-8 px-4">
          {messages.map((message, index) => (
            <p key={index} className="text-sm font-medium">
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
