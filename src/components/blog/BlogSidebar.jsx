import { Search, Tag, Clock, TrendingUp } from 'lucide-react'
import { API_BASE_URL } from '../../api/api'

const API_BASE = API_BASE_URL
const API_ORIGIN = new URL(API_BASE).origin
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop'

function resolveImageUrl(imageValue) {
  const image =
    typeof imageValue === 'string'
      ? imageValue
      : imageValue?.url || imageValue?.path || imageValue?.src || ''

  if (!image) return FALLBACK_IMAGE

  if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')) {
    return image
  }

  if (image.startsWith('/uploads/')) {
    return `${API_ORIGIN}${image}`
  }

  if (image.startsWith('/')) {
    return `${API_ORIGIN}${image}`
  }

  return `${API_ORIGIN}/uploads/${image}`
}

export default function BlogSidebar({
  categories,
  recentPosts,
  searchTerm,
  onSearchChange,
  searchWarning,
}) {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(event) => onSearchChange?.(event.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b9dd9] transition"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {searchWarning && (
          <p className="mt-2 text-xs font-medium text-amber-700">{searchWarning}</p>
        )}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="text-[#3b9dd9]" size={24} />
          <h3 className="text-xl font-bold text-gray-900">Recent Posts</h3>
        </div>
        <ul className="space-y-4">
          {recentPosts.slice(0, 4).map((post, index) => (
            <li key={index} className="group cursor-pointer">
              <div className="flex gap-4">
                <img
                  src={resolveImageUrl(post.image)}
                  alt={post.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  onError={(event) => {
                    event.currentTarget.src = FALLBACK_IMAGE
                  }}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-[#58c8ca] transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-[#256c79] to-[#2d8bc7] rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Subscribe Newsletter</h3>
        <p className="text-sm opacity-90 mb-4">
          Get the latest health tips and medical updates directly to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-lg mb-3 border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
        />
        <button className="w-full bg-white text-[#256c79] py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
          Subscribe
        </button>
      </div>
    </aside>
  )
}
