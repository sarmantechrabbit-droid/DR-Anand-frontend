import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#256c79] hover:text-[#256c79] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-semibold transition ${
              currentPage === page
                ? 'bg-[#256c79] text-white shadow-lg shadow-[#256c79]/30'
                : 'border border-gray-200 hover:border-[#256c79] hover:text-[#256c79]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#256c79] hover:text-[#256c79] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

