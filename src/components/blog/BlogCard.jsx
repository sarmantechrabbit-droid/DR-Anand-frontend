import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop'

export default function BlogCard({ blog, index, onReadMore }) {
  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden cursor-pointer" onClick={onReadMore}>
       <img
        src={blog.image || FALLBACK_IMAGE}
        alt={blog.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(event) => {
          event.currentTarget.src = FALLBACK_IMAGE
        }}
      />
      <div className="absolute top-4 left-4">
        <span className="bg-[#256c79] text-white px-4 py-2 rounded-full text-sm font-bold">
          {blog.category}
        </span>
      </div>
     </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#256c79] transition-colors leading-tight min-h-14">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User size={16} />
            <span>{blog.author}</span>
          </div>

          <button
            onClick={onReadMore}
            className="flex items-center gap-2 text-[#256c79] font-bold hover:gap-3 transition-all text-sm cursor-pointer"
          >
            Read More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

