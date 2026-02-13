import React from "react";
import { motion } from "framer-motion";
import {
  Syringe,
  Scissors,
  HeartPulse,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Gastro Cancer Surgery",
    description:
      "Experience compassionate and comprehensive cancer care. Dr. Anand Patel provides advanced surgical treatment for gastrointestinal cancers with a focus on minimally invasive techniques.",
    icon: ShieldCheck,
    color: "from-red-500 to-rose-600",
    bgLight: "bg-red-50",
    textColor: "text-red-500",
  },
  {
    id: 2,
    title: "Gastrointestinal Surgery",
    description:
      "Expert gastrointestinal surgical care for a wide range of digestive conditions. Advanced laparoscopic techniques ensure faster recovery and minimal discomfort.",
    icon: Activity,
    color: "from-[#0EA5E9] to-[#0284C7]",
    bgLight: "bg-sky-50",
    textColor: "text-[#0EA5E9]",
  },
  {
    id: 3,
    title: "Acid Reflux Surgery",
    description:
      "Explore life-changing surgical solutions for chronic acid reflux and GERD. Advanced procedures for effective and long-lasting relief from persistent symptoms.",
    icon: HeartPulse,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-500",
  },
  {
    id: 4,
    title: "Obesity Surgery",
    description:
      "Specialized bariatric procedures including gastric bypass, sleeve gastrectomy, and adjustable gastric banding for effective, sustainable weight loss.",
    icon: Syringe,
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-500",
  },
  {
    id: 5,
    title: "Hernia Surgery",
    description:
      "Premier hernia care where expertise meets compassion. Advanced laparoscopic hernia repair techniques for all types of hernias with faster recovery.",
    icon: Scissors,
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F0F9FF] to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0EA5E9] text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
            Our Treatments
            <span className="w-8 h-[2px] bg-[#0EA5E9] rounded-full" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1E3F] mb-4">
            Experience Better Health &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">
              Wellness
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Dr. Anand Patel offers a comprehensive range of surgical treatments
            using the latest minimally invasive techniques for faster recovery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="group relative bg-white rounded-2xl border border-slate-100 p-7 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/8 transition-all duration-500 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.bgLight} rounded-2xl flex items-center justify-center ${service.textColor} mb-5 group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}
                >
                  <service.icon size={26} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-[#0B1E3F] text-xl mb-3 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] group-hover:text-white transition-colors duration-500">
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={5}
            variants={fadeUp}
            className="relative bg-gradient-to-br from-[#0B1E3F] to-[#1E3A5F] rounded-2xl p-7 flex flex-col justify-center text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl mb-3">
                24/7 Helpline Services
              </h3>
              <p className="text-sky-100/70 text-sm leading-relaxed mb-6">
                Our helpline ensures continuous support for your healthcare queries
                and emergencies, offering guidance around the clock.
              </p>
              <a
                href="tel:9328520413"
                className="inline-flex items-center gap-2 bg-white text-[#0B1E3F] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-sky-50 transition-colors shadow-lg"
              >
                Call: +91 93285 20413
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;