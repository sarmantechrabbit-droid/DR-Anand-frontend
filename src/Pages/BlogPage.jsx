


import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import BlogHero from '../components/blog/BlogHero'
import BlogCard from '../components/blog/BlogCard'
import BlogSidebar from '../components/blog/BlogSidebar'
import Pagination from '../components/blog/Pagination'
import BlogModal from '../components/blog/BlogModal'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const BLOGS_PER_PAGE = 6

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

        const filteredBlogs = Array.isArray(rawBlogs)
          ? rawBlogs.filter((item) => item.status === 'Published')
          : []

        const mappedBlogs = filteredBlogs.map((item, index) => normalizeBlog(item, index))


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

  const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE))
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
    return blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE)
  }, [blogs, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReadMore = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  return (
    <div>
      <BlogHero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
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
                {currentBlogs.map((blog, index) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    index={index} 
                    onReadMore={() => handleReadMore(blog)}
                  />
                ))}
              </div>

              {!loading && blogs.length === 0 && !error && (
                <p className="mt-4 text-sm text-gray-500">No blog posts available.</p>
              )}

              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange}
              />
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <BlogSidebar categories={categories} recentPosts={blogs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      <BlogModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        blog={selectedBlog} 
      />
    </div>

  )
}



