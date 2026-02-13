import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Play } from 'lucide-react'

export default function DoctorProfile() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#3b9dd9]/20 to-[#58c8ca]/20 rounded-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop"
              alt="Dr. Anand"
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />
            <motion.div 
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#58c8ca]">15+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Exp</div>
                </motion.div>
                <motion.div 
                  className="border-x border-gray-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#58c8ca]">5000+</div>
                  <div className="text-xs text-gray-600 font-medium">Surgeries</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#58c8ca]">98%</div>
                  <div className="text-xs text-gray-600 font-medium">Success</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">ABOUT DOCTOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Dr. Anand
            </h2>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Dr. Anand is a renowned Gastrointestinal and Bariatric Surgeon with extensive experience in advanced laparoscopic and minimally invasive surgical procedures. He is dedicated to providing comprehensive care for patients with digestive disorders and obesity-related conditions.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a patient-centric approach, Dr. Anand combines cutting-edge surgical techniques with compassionate care to ensure the best possible outcomes for his patients. His expertise spans across various gastrointestinal procedures, including bariatric surgery, hernia repairs, and advanced laparoscopic surgeries.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[{ icon: Award, text: 'Board Certified' }, { icon: Users, text: 'Trusted Expert' }, { icon: TrendingUp, text: 'High Success' }].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#3b9dd9]/10 to-[#3b9dd9]/5 p-5 rounded-xl border border-[#3b9dd9]/20 hover:shadow-lg transition"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="text-[#58c8ca] mb-3" size={32} />
                  <div className="text-sm font-bold text-gray-900">{item.text}</div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="inline-flex items-center gap-3 bg-[#256c79] text-white px-8 py-4 rounded-full hover:bg-[#2a8890] transition font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} fill="white" />
              Watch Video
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
