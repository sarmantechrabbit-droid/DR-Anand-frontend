import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Phone, Mail, MapPin } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    city: '',
    email: '',
    recaptcha: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Appointment request submitted!')
    onClose()
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#58c8ca] to-[#4ab4b6] p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
                >
                  <X size={20} className="text-white" />
                </button>
                <div className="flex items-center gap-3 text-white">
                  <Calendar size={32} />
                  <div>
                    <h2 className="text-2xl font-bold">Book Appointment</h2>
                    <p className="text-sm text-white/90">Schedule your consultation</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#58c8ca] focus:ring-2 focus:ring-[#58c8ca]/20 outline-none transition"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#58c8ca] focus:ring-2 focus:ring-[#58c8ca]/20 outline-none transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#58c8ca] focus:ring-2 focus:ring-[#58c8ca]/20 outline-none transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#58c8ca] focus:ring-2 focus:ring-[#58c8ca]/20 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#58c8ca] focus:ring-2 focus:ring-[#58c8ca]/20 outline-none transition"
                      placeholder="Ahmedabad"
                    />
                  </div>
                </div>

                <div className="border-2 border-gray-300 rounded bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="recaptcha"
                      checked={formData.recaptcha}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-6 h-6 text-[#58c8ca] border-2 border-gray-400 rounded cursor-pointer"
                    />
                    <div className="flex-1">
                      <label className="text-sm text-gray-800 cursor-pointer">
                        I'm not a robot
                      </label>
                    </div>
                    <div className="flex flex-col items-center text-xs text-gray-500">
                      <svg className="w-8 h-8 mb-1" viewBox="0 0 256 256" fill="none">
                        <rect width="256" height="256" rx="128" fill="#4285F4"/>
                        <path d="M128 40C77.6 40 36 81.6 36 132s41.6 92 92 92 92-41.6 92-92-41.6-92-92-92zm0 168c-41.8 0-76-34.2-76-76s34.2-76 76-76 76 34.2 76 76-34.2 76-76 76z" fill="white"/>
                        <path d="M128 88c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 72c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28-12.6 28-28 28z" fill="white"/>
                      </svg>
                      <span>reCAPTCHA</span>
                      <span className="text-[10px]">Privacy - Terms</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  By submitting, you agree to our terms and conditions *
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#58c8ca] to-[#4ab4b6] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Submit Appointment
                </motion.button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
