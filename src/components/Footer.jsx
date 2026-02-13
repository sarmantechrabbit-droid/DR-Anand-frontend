import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData.json'

export default function Footer() {
  return (
    <footer className="bg-[#265964] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteData.site.name}</h3>
            <p className="text-gray-400 mb-4">
              {siteData.site.title}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#98a0ae] hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/our-treatments" className="text-gray-400 hover:text-white transition-colors">Treatments</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#98a0ae] flex-shrink-0 mt-1" />
                <a href={`tel:${siteData.site.phone}`} className="text-gray-400 hover:text-white">
                  {siteData.site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#98a0ae] flex-shrink-0 mt-1" />
                <a href={`mailto:${siteData.site.email}`} className="text-gray-400 hover:text-white">
                  {siteData.site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#98a0ae] flex-shrink-0 mt-1" />
                <span className="text-gray-400">{siteData.site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#99a1af] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>All Rights Reserved Dr. Anand Patel, Developed By <a href="https://techrabbit.io/" target="_blank" rel="noopener noreferrer" className="text-[#58c8ca] hover:text-[#4ab4b6] transition-colors">Tech Rabbit</a></p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
