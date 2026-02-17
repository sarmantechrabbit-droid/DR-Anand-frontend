


import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import BlogHero from '../components/blog/BlogHero'
import BlogCard from '../components/blog/BlogCard'
import BlogSidebar from '../components/blog/BlogSidebar'
import Pagination from '../components/blog/Pagination'
import { API_BASE_URL } from '../api/api'

const BLOG_API_URL = `${API_BASE_URL}/api/blogs`
const BLOG_API_ORIGIN = new URL(BLOG_API_URL).origin
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop'

function resolveImageUrl(imageValue) {
  const image =
    typeof imageValue === 'string'
      ? imageValue
      : imageValue?.url || imageValue?.path || imageValue?.src || ''

  if (!image) return FALLBACK_IMAGE

  // Keep full URLs as-is, and convert relative API paths to absolute backend URLs.
  if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')) {
    return image
  }

  return `${BLOG_API_ORIGIN}${image.startsWith('/') ? '' : '/'}${image}`
}

function normalizeBlog(item, index) {
  const dateValue = item?.date || item?.publishedAt || item?.createdAt
  const parsedDate = dateValue ? new Date(dateValue) : null
  const isValidDate = parsedDate && !Number.isNaN(parsedDate.getTime())

  const readTimeValue = item?.readTime || item?.readingTime
  const formattedReadTime =
    typeof readTimeValue === 'number' ? `${readTimeValue} min read` : readTimeValue || '5 min read'

  return {
    id: item?._id || item?.id || item?.slug || `blog-${index + 1}`,
    title: item?.title || 'Untitled Blog',
    excerpt: item?.excerpt || item?.description || item?.content || '',
    image: item?.image || item?.imageUrl || item?.imagePath,
    date: isValidDate ? parsedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently',
    category: item?.category || 'General',
    author: item?.author || item?.authorName || 'Dr. Anand',
    readTime: formattedReadTime,
  }
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadBlogs() {
      try {
        setLoading(true)
        setError('')

        const response = await axios.get(BLOG_API_URL, {
          signal: controller.signal,
        })
        const payload = response.data
        const rawBlogs =
          Array.isArray(payload)  
            ? payload
            : payload?.blogs || payload?.data || payload?.items || []

        const mappedBlogs = Array.isArray(rawBlogs)
          ? rawBlogs.map((item, index) => normalizeBlog(item, index))
          : []

        setBlogs(mappedBlogs)
      } catch (err) {
        if (err.name === 'CanceledError' || err.name === 'AbortError') return
        setError(err.message || 'Unable to load blogs right now.')
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()

    return () => controller.abort()
  }, [])

  const categories = useMemo(() => {
    const counts = blogs.reduce((acc, blog) => {
      const category = blog.category || 'General'
      acc[category] = (acc[category] || 0) + 1
      return acc
    }, {})

    const categoryList = Object.entries(counts).map(([name, count]) => ({ name, count }))
    return [{ name: 'All', count: blogs.length }, ...categoryList]
  }, [blogs])

  return (
    <div>
      <BlogHero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg border border-blue-100/50 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#256c79] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Browse by Category</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button key={`${category.name}-${index}`} className="group relative overflow-hidden px-6 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#256c79] hover:to-[#2d8bc7] border-2 border-gray-200 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <span className="relative z-10 font-semibold text-gray-700 group-hover:text-white transition-colors">{category.name}</span>
                  <span className="ml-2 relative z-10 bg-[#3b9dd9]/10 group-hover:bg-white/20 text-[#3b9dd9] group-hover:text-white px-3 py-1 rounded-full text-sm font-bold transition-colors">{category.count}</span>
                </button>
              ))}
            </div>
          </div> */}

          {loading && (
            <div className="mb-6 rounded-xl border border-blue-100 bg-white p-4 text-sm text-gray-600 shadow-sm">
              Loading blogs...
            </div>
          )}

          {error && (
            <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                {blogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>

              {!loading && blogs.length === 0 && !error && (
                <p className="mt-4 text-sm text-gray-500">No blog posts available.</p>
              )}

              <Pagination currentPage={1} totalPages={Math.max(1, Math.ceil(blogs.length / 6))} />
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <BlogSidebar categories={categories} recentPosts={blogs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



