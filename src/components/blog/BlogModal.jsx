import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Clock, Tag } from 'lucide-react'

export default function BlogModal({ isOpen, onClose, blog }) {
  if (!blog) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-100"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] pointer-events-auto overflow-hidden flex flex-col"
            >
              {/* Header with Background Image */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all group z-10"
                >
                  <X size={20} className="text-white group-hover:rotate-90 transition-transform" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-[#256c79] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm font-medium opacity-90">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight line-clamp-2">
                    {blog.title}
                  </h2>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <div className="flex flex-wrap items-center gap-6 mb-8 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User size={20} className="text-[#256c79]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Author</p>
                      <p className="text-sm font-bold text-gray-900">{blog.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 border-l border-gray-100 pl-6">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock size={20} className="text-[#256c79]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Read Time</p>
                      <p className="text-sm font-bold text-gray-900">{blog.readTime}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  {/* Since we don't have full HTML content, we use excerpt for now. 
                      In a real app, this would be blog.content */}
                  {blog.excerpt.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                  
                  {/* Decorative text for dummy content if excerpt is short */}
                  {blog.excerpt.length < 200 && (
                    <p className="italic text-gray-400 mt-8 border-t pt-8">
                      Full article content would appear here. This blog post provides in-depth analysis and expert medical insights from Dr. Anand.
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
