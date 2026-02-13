import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage = 1, totalPages = 3 }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#3b9dd9] hover:text-[#3b9dd9] transition disabled:opacity-50 disabled:cursor-not-allowed">
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg font-semibold transition ${
              currentPage === page
                ? 'bg-[#256c79] text-white'
                : 'border border-gray-200 hover:border-[#256c79] hover:text-[#256c79]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#3b9dd9] hover:text-[#3b9dd9] transition">
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
