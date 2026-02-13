import { Search, Tag, Clock, TrendingUp } from 'lucide-react'

export default function BlogSidebar({ categories, recentPosts }) {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b9dd9] transition"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
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
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#58c8ca] transition">
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
          className="w-full px-4 py-3 rounded-lg mb-3 border border-[#e5e7eb] text-white focus:outline-none"
        />
        <button className="w-full bg-white text-[#58c8ca] py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Subscribe
        </button>
      </div>
    </aside>
  )
}
