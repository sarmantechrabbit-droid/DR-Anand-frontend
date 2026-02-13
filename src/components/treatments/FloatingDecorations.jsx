import { motion } from 'framer-motion'
import { HeartPulse, Stethoscope, Activity } from 'lucide-react'

export default function FloatingDecorations() {
  return (
    <>
      <motion.div
        className="absolute top-20 left-[8%] opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartPulse size={70} className="text-[#58c8ca]" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[12%] opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={65} className="text-[#4ab4b6]" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[15%] opacity-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity size={60} className="text-[#58c8ca]" />
      </motion.div>
    </>
  )
}
