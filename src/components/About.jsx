import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react'
import siteData from '../data/siteData.json'
import about_img from '../assets/images/Home/about_img.webp'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={about_img}
              alt="Dr. Anand"
              className="rounded-2xl bg-[#dbe0e2] shadow-xl w-full h-[700px] object-cover"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-[#58c8ca] text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div> */}
          </div>


          

          <div>
            <div className="inline-block bg-[#c6f0f1] text-[#58c8ca] px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              About Doctor
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {siteData.about.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteData.about.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {siteData.about.qualifications.map((qual, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#58c8ca] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{qual}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#e8f9fa] rounded-xl">
                <Award className="text-[#58c8ca] mx-auto mb-2" size={28} />
                <div className="text-sm font-semibold text-gray-900">Certified</div>
              </div>
              <div className="text-center p-4 bg-[#e8f9fa] rounded-xl">
                <Users className="text-[#58c8ca] mx-auto mb-2" size={28} />
                <div className="text-sm font-semibold text-gray-900">Trusted</div>
              </div>
              <div className="text-center p-4 bg-[#e8f9fa] rounded-xl">
                <TrendingUp className="text-[#58c8ca] mx-auto mb-2" size={28} />
                <div className="text-sm font-semibold text-gray-900">Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
