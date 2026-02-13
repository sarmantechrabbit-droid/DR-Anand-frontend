import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function ContactInfoCard({ item, index }) {
  const Icon = Icons[item.icon] || Icons.Info

return (
  <motion.a
    href={item.href}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className="group block rounded-[28px] border border-[#edf2f7] bg-white p-10 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(15,23,42,0.10)]"
  >
    <div className="mb-6 flex items-center gap-4">
      <div className="flex items-center justify-center rounded-2xl bg-[#eef5f9] p-4 text-[#55c9cc] transition-colors duration-300 group-hover:bg-[#e6f4f7]">
        <Icon size={24} strokeWidth={2} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        {item.title}
      </h3>
    </div>

    <p className="mb-6 text-[15px] leading-relaxed text-slate-500">
      {item.description}
    </p>

    <p className="text-base font-semibold text-gray-900 break-words">
      {item.value}
    </p>
  </motion.a>
);

}
