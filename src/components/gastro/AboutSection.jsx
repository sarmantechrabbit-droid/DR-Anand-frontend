import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function AboutSection({ data }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#58c8ca]/20 to-[#4ab4b6]/20 rounded-3xl -z-10"></div>
              <img
                src={data.image}
                alt="Gastro Surgery"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
                <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">{data.smallTitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {data.mainTitle}
              </h2>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {data.paragraph_1}
              </p>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {data.paragraph_2}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {data.paragraph_3}
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
