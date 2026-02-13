import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, GraduationCap, Stethoscope, Award, CheckCircle2 } from "lucide-react";

const qualifications = [
  "MS (General Surgery)",
  "DNB (Surgical Gastroenterology)",
  "FMBS (Bariatric & Metabolic Surgery)",
  "FMAS & FIAGES Certified",
];

const highlights = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To deliver exceptional care and high-quality treatments to every individual, ensuring a world-class healthcare experience for all patients.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional healthcare, prioritize patient well-being, and promote a healthier community through dedicated medical services.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFF] to-white" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sky-50/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#0B1E3F] to-[#1E3A5F] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Stethoscope size={32} className="text-sky-300" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Dr. Anand Patel
                  </h3>
                  <p className="text-sky-200/80 text-sm mb-6">
                    MS, DNB (Surgical Gastroenterology) | FMBS
                  </p>

                  <div className="space-y-3">
                    {qualifications.map((q, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-sky-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{q}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-display text-3xl font-bold text-sky-300">
                        13+
                      </div>
                      <div className="text-white/60 text-sm mt-1">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-sky-300">
                        1000+
                      </div>
                      <div className="text-white/60 text-sm mt-1">
                        Successful Surgeries
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <div className="font-display font-bold text-[#0B1E3F]">
                    Board Certified
                  </div>
                  <div className="text-xs text-slate-500">
                    FMAS & FIAGES
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Content */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 text-[#0EA5E9] text-sm font-semibold tracking-wide uppercase mb-4">
                <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
                About Our Expert
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1E3F] mb-6 leading-tight">
                Best Gastro Surgeon in Ahmedabad
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Dr. Anand Patel holds an MS and DNB in Surgical Gastroenterology,
                along with an FMBS in Bariatric and Metabolic Surgery. With over
                13 years of experience, he offers expert care with precision
                and compassion, transforming lives through advanced surgical
                techniques and personalized treatment plans.
              </p>
            </motion.div>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl flex items-center justify-center text-[#0EA5E9] flex-shrink-0 group-hover:from-[#0EA5E9] group-hover:to-[#0284C7] group-hover:text-white transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#0B1E3F] text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="mt-8 flex gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-sky-500/25 hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
              >
                Our Treatments
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-100 text-[#0B1E3F] px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all text-sm"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;