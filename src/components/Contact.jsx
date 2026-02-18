import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import axios from 'axios'
import siteData from '../data/siteData.json'
import { API_BASE_URL } from '../api/api'

const FIELD_LIMITS = {
  fullName: { min: 3, max: 20 },
  subject: { min: 5, max: 150 },
  message: { min: 10, max: 500 },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')

  const validateForm = () => {
    const nextErrors = {}
    const namePattern = /^[A-Za-z ]{2,}$/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneDigits = formData.phone.replace(/\D/g, '')
    const fullName = formData.fullName.trim()
    const subject = formData.subject.trim()
    const message = formData.message.trim()

    if (fullName.length < FIELD_LIMITS.fullName.min) {
      nextErrors.fullName = `Full Name must be at least ${FIELD_LIMITS.fullName.min} characters.`
    } else if (fullName.length > FIELD_LIMITS.fullName.max) {
      nextErrors.fullName = `Full Name cannot exceed ${FIELD_LIMITS.fullName.max} characters.`
    } else if (!namePattern.test(fullName)) {
      nextErrors.fullName = 'Enter a valid full name.'
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (phoneDigits.length !== 10) {
      nextErrors.phone = 'Enter a valid phone number (exactly 10 digits).'
    }

    if (subject.length < FIELD_LIMITS.subject.min) {
      nextErrors.subject = `Subject must be at least ${FIELD_LIMITS.subject.min} characters.`
    } else if (subject.length > FIELD_LIMITS.subject.max) {
      nextErrors.subject = `Subject cannot exceed ${FIELD_LIMITS.subject.max} characters.`
    }

    if (message.length < FIELD_LIMITS.message.min) {
      nextErrors.message = `Message must be at least ${FIELD_LIMITS.message.min} characters.`
    } else if (message.length > FIELD_LIMITS.message.max) {
      nextErrors.message = `Message cannot exceed ${FIELD_LIMITS.message.max} characters.`
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitSuccess('')

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await axios.post(
        `${API_BASE_URL}/api/inquiries`,
        {
          fullName: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        { timeout: 10000 }
      )

      setSubmitSuccess('Message sent successfully.')
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        'Unable to send message. Please try again.'
      setSubmitError(apiMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'fullName' && value.length > FIELD_LIMITS.fullName.max) {
      setErrors((prev) => ({
        ...prev,
        fullName: `Full Name cannot exceed ${FIELD_LIMITS.fullName.max} characters.`,
      }))
      return
    }

    if (name === 'subject' && value.length > FIELD_LIMITS.subject.max) {
      setErrors((prev) => ({
        ...prev,
        subject: `Subject cannot exceed ${FIELD_LIMITS.subject.max} characters.`,
      }))
      return
    }

    if (name === 'message' && value.length > FIELD_LIMITS.message.max) {
      setErrors((prev) => ({
        ...prev,
        message: `Message cannot exceed ${FIELD_LIMITS.message.max} characters.`,
      }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: siteData.site.phone, href: `tel:${siteData.site.phone}` },
    { icon: Mail, title: 'Email', value: siteData.site.email, href: `mailto:${siteData.site.email}` },
    { icon: MapPin, title: 'Address', value: siteData.site.address, href: '#' },
    { icon: Clock, title: 'Hours', value: 'Mon-Sat: 9AM-6PM', href: '#' }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#c6f0f1] text-[#58c8ca] px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your appointment or reach out for any queries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#e6e6e6]"
                >
                  <div className="bg-[#58c8ca] text-white p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <a href={item.href} className="text-gray-600 hover:text-[#58c8ca] transition-colors">
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl border border-[#e6e6e6]"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  maxLength={FIELD_LIMITS.fullName.max}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 outline-none transition-all ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-[#58c8ca] focus:border-transparent'
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 outline-none transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-[#58c8ca] focus:border-transparent'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 outline-none transition-all ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-[#58c8ca] focus:border-transparent'
                  }`}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={FIELD_LIMITS.subject.max}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 outline-none transition-all ${
                    errors.subject
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-[#58c8ca] focus:border-transparent'
                  }`}
                  placeholder="Enter subject"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  maxLength={FIELD_LIMITS.message.max}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 outline-none resize-none transition-all ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-[#58c8ca] focus:border-transparent'
                  }`}
                  placeholder="Tell us about your concern..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#58c8ca] text-white px-6 py-4 rounded-xl transition-all font-semibold disabled:opacity-70"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>

              {submitSuccess && (
                <p className="text-sm font-medium text-emerald-600">{submitSuccess}</p>
              )}
              {submitError && (
                <p className="text-sm font-medium text-red-600">{submitError}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
