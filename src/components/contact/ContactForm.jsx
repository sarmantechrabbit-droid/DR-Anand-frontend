import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { SendHorizonal } from 'lucide-react'
import { API_BASE_URL } from '../../api/api'

export default function ContactForm({ formContent }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const nextErrors = {}
    const namePattern = /^[A-Za-z ]{2,}$/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneDigits = formData.phone.replace(/\D/g, '')

    if (!namePattern.test(formData.fullName.trim())) {
      nextErrors.fullName = 'Enter a valid full name.'
    }
    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number (10 to 15 digits).'
    }
    if (formData.subject.trim().length < 3) {
      nextErrors.subject = 'Subject must be at least 3 characters.'
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setSubmitSuccess('')
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      const apiBase = API_BASE_URL

      await axios.post(
        `${apiBase}/api/inquiries`,
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
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#1F2937]">{formContent.title}</h2>
      <p className="mt-2 text-slate-500">{formContent.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            label="Phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <InputField
            label="Subject"
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-700 outline-none transition ${
              errors.message
                ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                : 'border-slate-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-100'
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#58c8ca] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-300/40 transition hover:bg-[#286e76]"
        >
          <SendHorizonal size={18} />
          {isSubmitting ? 'Sending...' : formContent.buttonText}
        </motion.button>

        {submitSuccess && (
          <p className="text-sm font-medium text-emerald-600">{submitSuccess}</p>
        )}
        {submitError && (
          <p className="text-sm font-medium text-red-600">{submitError}</p>
        )}
      </form>
    </motion.div>
  )
}

function InputField({ label, type, name, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-700 outline-none transition ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
            : 'border-slate-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-100'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
