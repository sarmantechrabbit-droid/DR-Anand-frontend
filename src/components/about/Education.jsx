import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const education = [
    { 
      degree: 'MBBS', 
      institution: 'Government Medical College',
      description: 'Bachelor of Medicine and Bachelor of Surgery',
      year: '2005'
    },
    { 
      degree: 'MS (General Surgery)', 
      institution: 'Prestigious Medical University',
      description: 'Master of Surgery specializing in General Surgery',
      year: '2008'
    },
    { 
      degree: 'DNB (Surgical Gastroenterology)', 
      institution: 'National Board of Examinations',
      description: 'Diplomate of National Board in Surgical Gastroenterology',
      year: '2011'
    },
    { 
      degree: 'Fellowship in Laparoscopic & Bariatric Surgery', 
      institution: 'International Institute of Advanced Surgery',
      description: 'Advanced training in minimally invasive techniques',
      year: '2013'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">QUALIFICATIONS</span>
            <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical education and specialized training in gastrointestinal and bariatric surgery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3b9dd9]/30">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#3b9dd9]/10 to-[#58c8ca]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="text-[#58c8ca]" size={28} />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-[#3b9dd9]/10 text-[#58c8ca] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                <p className="text-[#58c8ca] font-semibold mb-3">{item.institution}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#58c8ca] to-[#2d8bc7] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <Award className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Board Certified Surgeon</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Recognized by national and international medical boards for excellence in gastrointestinal and bariatric surgery
          </p>
        </div>
      </div>
    </section>
  )
}
