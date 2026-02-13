import { useState } from 'react'
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What types of surgeries does Dr. Anand specialize in?",
      answer: "Dr. Anand specializes in Gastrointestinal Surgery, Bariatric Surgery (Weight Loss Surgery), Laparoscopic Surgery, Hernia Repairs, Gallbladder Surgery, and other minimally invasive procedures."
    },
    {
      question: "What is Bariatric Surgery?",
      answer: "Bariatric surgery is a weight loss surgery designed for individuals with severe obesity. It helps patients lose weight by making changes to the digestive system, leading to improved health and quality of life."
    },
    {
      question: "How long is the recovery time after laparoscopic surgery?",
      answer: "Recovery time varies depending on the procedure, but laparoscopic surgery typically offers faster recovery compared to traditional open surgery. Most patients can return to normal activities within 1-2 weeks."
    },
    {
      question: "Is laparoscopic surgery safe?",
      answer: "Yes, laparoscopic surgery is considered very safe when performed by experienced surgeons like Dr. Anand. It offers benefits like smaller incisions, less pain, reduced scarring, and faster recovery."
    },
    {
      question: "What should I expect during my first consultation?",
      answer: "During your first consultation, Dr. Anand will review your medical history, discuss your symptoms or concerns, perform a physical examination, and recommend appropriate diagnostic tests or treatment options."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact our office to verify if your specific insurance is accepted and to understand your coverage details."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office directly, using the contact form on our website, or clicking the 'Book Appointment' button. Our staff will help you find a convenient time."
    },
    {
      question: "What are the risks of bariatric surgery?",
      answer: "Like any surgery, bariatric surgery carries some risks including infection, bleeding, and complications from anesthesia. However, Dr. Anand uses advanced techniques to minimize these risks and ensure patient safety."
    }
  ]

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
              <button className="bg-white text-[#58c8ca] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
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
