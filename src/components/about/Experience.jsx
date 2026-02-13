import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experience = [
    { 
      position: 'Senior Consultant - Gastrointestinal & Bariatric Surgery', 
      hospital: 'Multi-Specialty Hospital',
      period: '2018 - Present',
      description: 'Leading the department of GI and Bariatric Surgery, performing advanced laparoscopic procedures'
    },
    { 
      position: 'Consultant Surgeon - Laparoscopic Surgery', 
      hospital: 'City Medical Center',
      period: '2015 - 2018',
      description: 'Specialized in minimally invasive surgical techniques and patient care'
    },
    { 
      position: 'Senior Resident - General Surgery', 
      hospital: 'Teaching Hospital',
      period: '2012 - 2015',
      description: 'Comprehensive training in general and laparoscopic surgical procedures'
    },
    { 
      position: 'Junior Resident - Surgery', 
      hospital: 'Government Hospital',
      period: '2008 - 2012',
      description: 'Foundation training in surgical principles and patient management'
    }
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">EXPERIENCE</span>
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 15 years of dedicated service in gastrointestinal and bariatric surgery
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3b9dd9] to-[#58c8ca] hidden md:block"></div>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative md:pl-20">
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-[#3b9dd9] to-[#58c8ca] rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                  <Briefcase className="text-white" size={24} />
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3b9dd9]/30">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.position}</h3>
                      <p className="text-[#58c8ca] font-semibold text-lg">{item.hospital}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#3b9dd9]/10 px-4 py-2 rounded-full">
                      <Calendar size={16} className="text-[#58c8ca]" />
                      <span className="text-sm font-bold text-[#58c8ca]">{item.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
