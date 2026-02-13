import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Clock,
  Heart,
  Microscope,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "13+ Years Experience",
    description:
      "Over a decade of expertise in gastroenterology, bariatric, and cancer surgery.",
  },
  {
    icon: Microscope,
    title: "Advanced Laparoscopy",
    description:
      "Minimally invasive surgical techniques for faster recovery and less pain.",
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    description:
      "Personalized treatment plans tailored to each patient's unique health needs.",
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description:
      "Proven track record of successful outcomes across thousands of procedures.",
  },
  {
    icon: Users,
    title: "Experienced Staff",
    description:
      "Skilled professionals ensuring expert care throughout your treatment journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Full Support",
    description:
      "Round-the-clock comprehensive support for all healthcare needs and emergencies.",
  },
];

const counterData = [
  { value: "500+", label: "New Patients Every Year" },
  { value: "98%", label: "Success Rate" },
  { value: "13+", label: "Years Of Experience" },
  { value: "24/7", label: "Support Given" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3F] via-[#0F2847] to-[#0B1E3F]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sky-300 text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="w-8 h-[2px] bg-sky-400 rounded-full" />
            Why Choose Us
            <span className="w-8 h-[2px] bg-sky-400 rounded-full" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Journey to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100">
              Optimal Health
            </span>
          </h2>
          <p className="text-sky-100/60 leading-relaxed">
            Transforming lives through surgical excellence. Schedule a
            consultation to discuss your surgical needs and experience
            world-class care.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400/20 to-sky-500/10 rounded-xl flex items-center justify-center text-sky-300 mb-4 group-hover:from-sky-400/30 group-hover:to-sky-500/20 transition-all">
                <reason.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-sky-100/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {counterData.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fadeUp}
              className="text-center bg-white/[0.05] border border-white/[0.08] rounded-2xl py-8 px-4"
            >
              <div className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-2">
                {item.value}
              </div>
              <div className="text-sky-100/50 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;