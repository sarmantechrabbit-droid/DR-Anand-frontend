import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'
import siteData from '../data/siteData.json'
import logo from '../assets/images/logo.png'
import TopBar from './TopBar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* <div className="bg-[#58c8ca] text-white py-2.5 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              <a href={`tel:${siteData.site.phone}`} className="flex items-center gap-2 hover:text-blue-100">
                <Phone size={14} />
                <span>{siteData.site.phone}</span>
              </a>
              <a href={`mailto:${siteData.site.email}`} className="flex items-center gap-2 hover:text-blue-100">
                <Mail size={14} />
                <span>{siteData.site.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div> */}
      <TopBar/>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Dr. Anand Patel"
                className="w-50 h-30 object-cover"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                About
              </Link>
              <div className="relative group">
                <Link to="/our-treatments" className="flex items-center gap-1 text-gray-700 hover:text-[#58c8ca] font-medium transition">
                  Treatments
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link to="/gastro-surgeon-ahmedabad" className="block px-6 py-3 text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca] transition">
                      Gastro Surgeon in Ahmedabad
                    </Link>
                    <Link to="/bariatric-surgeon-ahmedabad" className="block px-6 py-3 text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca] transition">
                      Bariatric surgeon in Ahmedabad
                    </Link>
                    <Link to="/cancer-surgeon-ahmedabad" className="block px-6 py-3 text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca] transition">
                      Cancer Surgeon in Ahmedabad
                    </Link>
                  </div>
                </div>
              </div>
              {/* <Link to="/#testimonials" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                Testimonials
              </Link> */}
              <Link to="/blog" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                Contact
              </Link>
              <Link to="/contact" className="bg-[#58c8ca] text-white px-6 py-3 rounded-md hover:bg-[#4ab4b6] transition font-semibold">
                Book Appointment
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>  

        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="p-2 mr-5 hover:bg-gray-100 rounded-full transition">
                  <X size={24} className="text-gray-800" />
                </button>
              </div>
              <div className="px-4 py-4 space-y-2">
                <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  About
                </Link>
                <Link to="/our-treatments" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Treatments
                </Link>
                <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Testimonials
                </Link>
                <Link to="/blog" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Blog
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Contact
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-[#58c8ca] text-white px-4 py-3 rounded-md mt-4">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
