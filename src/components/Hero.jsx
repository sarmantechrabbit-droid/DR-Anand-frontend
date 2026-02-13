import { useState } from 'react'
import { Calendar, Phone, CheckCircle } from 'lucide-react'
import siteData from '../data/siteData.json'
import AppointmentModal from './AppointmentModal'
import img from '../assets/images/Home/img.png'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="home" className="bg-[#effcfc] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#c6f0f1] text-[#58c8ca] px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              ✓ 15+ Years of Excellence
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert <span className="text-[#58c8ca]">Gastro Surgery</span> & Laparoscopic Care
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Providing advanced surgical solutions with compassionate care. Specialized in minimally invasive procedures for faster recovery and better outcomes.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#58c8ca] flex-shrink-0" size={20} />
                <span className="text-gray-700">Board Certified Gastroenterologist</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#58c8ca] flex-shrink-0" size={20} />
                <span className="text-gray-700">5000+ Successful Surgeries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#58c8ca] flex-shrink-0" size={20} />
                <span className="text-gray-700">Advanced Laparoscopic Techniques</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#58c8ca] text-white px-8 py-4 rounded-md hover:bg-[#4ab4b6] transition text-center font-semibold inline-flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Appointment
              </button>
              <a href={`tel:${siteData.site.phone}`} className="border-2 border-[#58c8ca] text-[#58c8ca] px-8 py-4 rounded-md hover:bg-[#e8f9fa] transition text-center font-semibold inline-flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Dr. Anand"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 w-11/12 bg-white rounded-xl shadow-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#58c8ca]">15+</div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
                <div className="border-x border-gray-200">
                  <div className="text-3xl font-bold text-[#58c8ca]">5000+</div>
                  <div className="text-sm text-gray-600">Surgeries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#58c8ca]">98%</div>
                  <div className="text-sm text-gray-600">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
