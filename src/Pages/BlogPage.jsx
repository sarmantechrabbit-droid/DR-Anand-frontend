







import BlogHero from '../components/blog/BlogHero'
import BlogCard from '../components/blog/BlogCard'
import BlogSidebar from '../components/blog/BlogSidebar'
import Pagination from '../components/blog/Pagination'
import blogData from '../data/blogData.json'

export default function BlogPage() {
  return (
    <div>
      <BlogHero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories at top */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg border border-blue-100/50 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#256c79] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Browse by Category</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {blogData.categories.map((category, index) => (
                <button key={index} className="group relative overflow-hidden px-6 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#256c79] hover:to-[#2d8bc7] border-2 border-gray-200 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <span className="relative z-10 font-semibold text-gray-700 group-hover:text-white transition-colors">{category.name}</span>
                  <span className="ml-2 relative z-10 bg-[#3b9dd9]/10 group-hover:bg-white/20 text-[#3b9dd9] group-hover:text-white px-3 py-1 rounded-full text-sm font-bold transition-colors">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Grid */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                {blogData.blogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>
              
              <Pagination currentPage={1} totalPages={3} />
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <BlogSidebar 
                categories={blogData.categories} 
                recentPosts={blogData.blogs}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
