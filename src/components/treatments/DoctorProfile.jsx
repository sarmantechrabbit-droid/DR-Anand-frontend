import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function DoctorProfile({ data }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
          </div>

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
                alt={data.imageDescription}
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#58c8ca] mb-3">
                {data.name}
              </h3>
              <div className="inline-block bg-[#58c8ca]/10 px-4 py-2 rounded-lg mb-6">
                <p className="text-sm font-semibold text-gray-700">
                  {data.qualification}
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.bio}
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
