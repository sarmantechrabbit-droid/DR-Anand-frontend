import { useEffect, useState } from 'react'
import axios from 'axios'
import { HelpCircle, Plus, Minus } from 'lucide-react'
import { API_BASE_URL } from '../../api/api'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchFaqs = async () => {
      try {
        setLoading(true)
        setError('')

        const endpoints = [
          `${API_BASE_URL}/api/faqs`,
        ]

        let items = null

        for (const endpoint of endpoints) {
          try {
            const response = await axios.get(endpoint, { timeout: 5000 })
            const payload = response?.data
            const parsed = Array.isArray(payload) ? payload : payload?.data

            if (Array.isArray(parsed)) {
              items = parsed
              break
            }
          } catch {
            // Try next endpoint.
          }
        }

        if (isMounted) {
          if (Array.isArray(items)) {
            setFaqs(items)
          } else {
            setFaqs([])
            setError('Failed to connect FAQ API. Check backend server and port.')
          }
        }
      } catch {
        if (isMounted) {
          setError('Failed to load FAQs')
          setFaqs([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchFaqs()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Common questions about our services and procedures. Can't find what you're looking for? Contact us directly.
            </p>
            <div className="bg-gradient-to-br from-[#58c8ca] to-[#2d8bc7] p-8 rounded-2xl text-white">
              <HelpCircle size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="mb-4 opacity-90">Our team is here to help you with any concerns.</p>
              <Link to="/contact">
                <button className="bg-white text-[#58c8ca] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {loading && (
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 text-gray-600">
                Loading FAQs...
              </div>
            )}

            {!loading && error && (
              <div className="bg-white rounded-2xl border-2 border-red-100 p-6 text-red-600">
                {error}
              </div>
            )}

            {!loading && !error && faqs.length === 0 && (
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 text-gray-600">
                No FAQs found.
              </div>
            )}

            {faqs.map((faq, index) => (
              <div 
                key={faq.id ?? faq._id ?? index}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 ${
                  openIndex === index ? 'border-[#58c8ca] shadow-lg' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold pr-4 transition-colors ${
                    openIndex === index ? 'text-[#58c8ca]' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-[#58c8ca] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
