import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shah Kartik",
    date: "October 2023",
    rating: 5,
    text: "If you are finding the best gastro doctor, your search ends here. One of the best doctors in the industry. We had surgery for gall bladder removal and we are very satisfied. Dr. Anand is a very positive and motivational person. He explains very well whatever the illness is. Highly recommended for any gastro-related illness.",
    initials: "SK",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: 2,
    name: "Patel Utsav",
    date: "October 2023",
    rating: 5,
    text: "Thank you very much Anand sir for the best treatment with proper explanation. My uncle had a heart rate around 150 and blood in stool for 2 days. After CT scan, a 30mm tumor was found in the small intestine. Anand sir performed the surgery brilliantly — my uncle was discharged within 5 days and could eat all food after 8 days.",
    initials: "PU",
    color: "from-emerald-400 to-green-500",
  },
  {
    id: 3,
    name: "Sadam Khoja",
    date: "October 2023",
    rating: 5,
    text: "Thank you Dr. Anand who did my 2 surgeries successfully and solved all my problems. I was facing difficulty eating — food would get stuck and I couldn't breathe. The other problem was acid reflux. Dr. Anand solved both by performing my operation properly. Now I can eat properly with no acid reflux issues at all!",
    initials: "SJ",
    color: "from-violet-400 to-purple-500",
  },
  {
    id: 4,
    name: "Rajesh Varde",
    date: "October 2023",
    rating: 5,
    text: "My friend was suffering from ulcerative colitis for many years. We are very thankful to Anand sir for the right treatment and guidance. His expertise and care made a real difference in my friend's recovery journey.",
    initials: "RV",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    name: "Ashish Trivedi",
    date: "October 2023",
    rating: 5,
    text: "I had hiatus hernia and got surgery done by Dr. Anand sir. It has been 3 months and I feel very well now. The surgery was performed expertly and the recovery was smooth. Thank you Dr. Anand Sir and the entire hospital staff for the excellent care.",
    initials: "AT",
    color: "from-rose-400 to-red-500",
  },
  {
    id: 6,
    name: "Kanaksinh Rathod",
    date: "September 2023",
    rating: 5,
    text: "Dr. Anand Patel sir successfully removed a cancerous tumor from my father's intestine through laparoscopic surgery. The operation was done with great skill and precision. We are extremely grateful to sir for this successful cancer surgery. Thank you so much sir!",
    initials: "KR",
    color: "from-teal-400 to-cyan-500",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFF] to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#0EA5E9] text-sm font-semibold tracking-wide uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1E3F]">
              Reviews From Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">
                Patients
              </span>
            </h2>
          </div>
          <div className="flex gap-2 mt-6 sm:mt-0">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-50 hover:border-sky-200 hover:text-[#0EA5E9] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-50 hover:border-sky-200 hover:text-[#0EA5E9] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${current * (100 / itemsPerPage + 2)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="min-w-full lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <div className="bg-white rounded-2xl border border-slate-100 p-7 h-full hover:shadow-xl hover:shadow-slate-900/5 hover:border-sky-100 transition-all duration-300 relative">
                  {/* Quote */}
                  <Quote
                    size={40}
                    className="absolute top-6 right-6 text-sky-100"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-5">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div
                      className={`w-11 h-11 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display font-bold text-[#0B1E3F] text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-400">{t.date}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-[#0EA5E9]"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;