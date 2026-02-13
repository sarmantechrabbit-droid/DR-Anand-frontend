import { motion } from 'framer-motion'

export default function MapSection({ mapData }) {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">{mapData.title}</h2>
          <p className="mt-2 text-slate-600">{mapData.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
          >
            <iframe
              src={mapData.iframeSrc}
              className="h-[300px] sm:h-[380px] lg:h-[460px] w-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map 1"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465584.6709040187!2d72.18475!3d24.263446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cbcfeef81c421%3A0xfffda4b4ae2f2f7a!2sDR.%20C.K.%20PATEL%2C%20ANAND%20HOSPITAL!5e0!3m2!1sen!2sus!4v1770891923362!5m2!1sen!2sus"
              className="h-[300px] sm:h-[380px] lg:h-[460px] w-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map 2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
