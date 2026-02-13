import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Clock, HeartPulse, Award } from "lucide-react";
import AppointmentModal from '../AppointmentModal'

const stats = [
  { value: "13+", label: "Years Experience", icon: Award },
  { value: "1000+", label: "Patients Recovered", icon: HeartPulse },
  { value: "98%", label: "Patient Satisfaction", icon: Shield },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F9FF] via-white to-[#E0F2FE]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0B1E3F 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-sky-100/80 text-[#0284C7] px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-pulse" />
              Welcome to Dr. Anand Patel's Clinic
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0B1E3F] leading-[1.15] mb-6"
            >
              Best Gastro &{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">
                  Obesity Surgeon
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-200/50 -z-0 rounded" />
              </span>{" "}
              in Ahmedabad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Experience exceptional surgical care led by Dr. Anand Patel — a
              pioneer Gastrointestinal and Obesity Surgeon, transforming lives
              through advanced medical procedures and a patient-centric approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white text-[#0B1E3F] px-7 py-3.5 rounded-xl font-semibold border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 shadow-sm transition-all hover:-translate-y-0.5"
              >
                Know More
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center text-[#0EA5E9] shadow-sm">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-[#0B1E3F]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-200/40 to-blue-200/30 rounded-[2rem] blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] rounded-[2rem] p-8 aspect-[4/5] flex items-end justify-center overflow-hidden">
                {/* Abstract medical illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-72 h-72">
                    <div className="absolute inset-0 border-[3px] border-dashed border-sky-300/40 rounded-full animate-[spin_40s_linear_infinite]" />
                    <div className="absolute inset-6 border-[3px] border-dashed border-sky-400/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                    <div className="absolute inset-12 border-[3px] border-dashed border-sky-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/80 backdrop-blur rounded-2xl shadow-lg flex items-center justify-center">
                        <HeartPulse size={36} className="text-[#0EA5E9]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Silhouette Placeholder */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-64 bg-gradient-to-t from-[#0B1E3F]/20 to-transparent rounded-t-full mx-auto" />
                </div>
              </div>
            </div>

            {/* Floating Card - Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                <Shield size={22} />
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1E3F] text-lg">
                  Trusted Care
                </div>
                <div className="text-xs text-slate-500">
                  1000+ Successful Surgeries
                </div>
              </div>
            </motion.div>

            {/* Floating Card - 24/7 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 bottom-24 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-xl flex items-center justify-center text-white">
                <Clock size={22} />
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1E3F] text-lg">
                  24/7 Support
                </div>
                <div className="text-xs text-slate-500">
                  Round-the-clock care
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;