import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How many years of experience does Dr. Patel have?",
    answer:
      "Dr. Anand Patel has over 13 years of experience in the field of gastroenterology. With a wealth of knowledge and expertise, he is dedicated to providing exceptional care and treatment to his patients.",
  },
  {
    question: "Does Dr. Anand Patel offer minimally invasive surgery options?",
    answer:
      "Yes, Dr. Patel utilizes advanced laparoscopic techniques for many procedures, ensuring less invasive approaches and quicker recovery times.",
  },
  {
    question: "What should I expect during a consultation with Dr. Patel?",
    answer:
      "Dr. Patel will conduct a thorough examination, discuss your medical history, and provide personalized recommendations based on your unique healthcare needs.",
  },
  {
    question: "How can I schedule a consultation with Dr. Anand Patel?",
    answer:
      "You can schedule a consultation with Dr. Anand Patel by calling +91 93285 20413 or by emailing anandgastrosurgeon@gmail.com. You can also visit the contact section of this website.",
  },
  {
    question: "What post-operative care and support does Dr. Anand Patel provide?",
    answer:
      "Following surgery, Dr. Anand Patel ensures optimal recovery with comprehensive post-operative care including detailed instructions for at-home recovery, scheduled follow-up appointments to monitor progress, and ongoing support to address any concerns. Our team provides a supportive and attentive environment throughout the recovery phase.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FCFF]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0EA5E9] text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
            FAQ
            <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1E3F] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Find answers to common inquiries about treatments, consultations,
            and our services.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: i * 0.08 },
                },
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className={`w-full text-left rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white border-sky-200 shadow-lg shadow-sky-500/5"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4 px-6 py-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white"
                        : "bg-sky-50 text-[#0EA5E9]"
                    }`}
                  >
                    <HelpCircle size={18} />
                  </div>
                  <span
                    className={`flex-1 font-display font-semibold transition-colors text-sm sm:text-base ${
                      openIndex === i ? "text-[#0EA5E9]" : "text-[#0B1E3F]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? "rotate-180 text-[#0EA5E9]" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-20">
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;