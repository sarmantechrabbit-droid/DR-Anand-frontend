import { useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizonal } from 'lucide-react'

export default function ContactForm({ formContent }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Form submitted! (This is a demo)')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
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
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
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
          />
          <InputField
            label="Subject"
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#58c8ca] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-300/40 transition hover:bg-[#1D4ED8]"
        >
          <SendHorizonal size={18} />
          {formContent.buttonText}
        </motion.button>
      </form>
    </motion.div>
  )
}

function InputField({ label, type, name, placeholder, value, onChange }) {
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
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-100"
      />
    </div>
  )
}
