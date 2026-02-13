import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function DoctorProfileSection({ data }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.heading}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-[#58c8ca] mb-3">
                {data.name}
              </h3>
              <p className="text-lg text-gray-700 mb-6 font-semibold">
                {data.qualification}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#58c8ca]/20 to-[#4ab4b6]/20 rounded-3xl -z-10"></div>
              <img
                src={data.image}
                alt={data.name}
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
