import { motion } from 'framer-motion'
import { Heart, Activity, Stethoscope, Pill, Syringe } from 'lucide-react'

export default function FloatingDecorations() {
  return (
    <>
      <motion.div
        className="absolute top-20 left-[5%] opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={80} className="text-[#58c8ca]" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[10%] opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={70} className="text-[#4ab4b6]" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[15%] opacity-10"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity size={75} className="text-[#58c8ca]" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-[20%] opacity-10"
        animate={{ y: [0, 15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Pill size={60} className="text-[#4ab4b6]" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-[5%] opacity-10"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Syringe size={65} className="text-[#58c8ca]" />
      </motion.div>
    </>
  )
}
