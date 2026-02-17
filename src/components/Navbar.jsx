import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo.png'
import TopBar from './TopBar'
import AppointmentModal from './AppointmentModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { pathname } = useLocation()

  const navClass = ({ isActive }) =>
    `font-medium transition ${isActive ? 'text-[#58c8ca]' : 'text-gray-700 hover:text-[#58c8ca]'}`
  const mobileNavClass = ({ isActive }) =>
    `block py-2 transition ${isActive ? 'text-[#58c8ca]' : 'text-gray-700 hover:text-[#58c8ca]'}`
  const isTreatmentsActive =
    pathname === '/our-treatments' ||
    pathname === '/gastro-surgeon-ahmedabad' ||
    pathname === '/bariatric-surgeon-ahmedabad' ||
    pathname === '/cancer-surgeon-ahmedabad'

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
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
              <div className="relative group">
                <NavLink
                  to="/our-treatments"
                  className={`flex items-center gap-1 font-medium transition ${
                    isTreatmentsActive ? 'text-[#58c8ca]' : 'text-gray-700 hover:text-[#58c8ca]'
                  }`}
                >
                  Treatments
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <NavLink to="/gastro-surgeon-ahmedabad" className={({ isActive }) => `block px-6 py-3 transition ${isActive ? 'bg-[#3b9dd9]/10 text-[#58c8ca]' : 'text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca]'}`}>
                      Gastro Surgeon in Ahmedabad
                    </NavLink>
                    <NavLink to="/bariatric-surgeon-ahmedabad" className={({ isActive }) => `block px-6 py-3 transition ${isActive ? 'bg-[#3b9dd9]/10 text-[#58c8ca]' : 'text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca]'}`}>
                      Bariatric surgeon in Ahmedabad
                    </NavLink>
                    <NavLink to="/cancer-surgeon-ahmedabad" className={({ isActive }) => `block px-6 py-3 transition ${isActive ? 'bg-[#3b9dd9]/10 text-[#58c8ca]' : 'text-gray-700 hover:bg-[#3b9dd9]/10 hover:text-[#58c8ca]'}`}>
                      Cancer Surgeon in Ahmedabad
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <Link to="/#testimonials" className="text-gray-700 hover:text-[#58c8ca] font-medium transition">
                Testimonials
              </Link> */}
              <NavLink to="/blog" className={navClass}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#58c8ca] text-white px-6 py-3 rounded-md hover:bg-[#4ab4b6] transition font-semibold"
              >
                Book Appointment
              </button>
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
                <NavLink to="/" end onClick={() => setIsOpen(false)} className={mobileNavClass}>
                  Home
                </NavLink>
                <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavClass}>
                  About
                </NavLink>
                <NavLink to="/our-treatments" onClick={() => setIsOpen(false)} className={mobileNavClass}>
                  Treatments
                </NavLink>
                <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-[#58c8ca]">
                  Testimonials
                </Link>
                <NavLink to="/blog" onClick={() => setIsOpen(false)} className={mobileNavClass}>
                  Blog
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavClass}>
                  Contact
                </NavLink>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    setIsModalOpen(true)
                  }}
                  className="block w-full text-center bg-[#58c8ca] text-white px-4 py-3 rounded-md mt-4"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
