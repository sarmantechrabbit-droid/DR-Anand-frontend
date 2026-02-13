import { useState } from 'react'
import * as Icons from 'lucide-react'
import siteData from '../../data/siteData.json'
import img1 from '../../assets/images/Home/img1.png'
import img2 from '../../assets/images/Home/img.png'
import img3 from '../../assets/images/Home/about_img.webp'
import img4 from '../../assets/images/logo.png'

const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img1,
  6: img2,
  7: img3,
  8: img4,
  9: img1,
  10: img2
}

export default function AreaOfExpertise() {
  const expertiseData = siteData.areaOfExpertise
  const [selectedImage, setSelectedImage] = useState(img1)
  const [selectedLeftId, setSelectedLeftId] = useState(null)
  const [selectedRightId, setSelectedRightId] = useState(null)

  const handleLeftClick = (item) => {
    setSelectedImage(imageMap[item.id] || img1)
    setSelectedLeftId(item.id)
    setSelectedRightId(null)
  }

  const handleRightClick = (item) => {
    setSelectedImage(imageMap[item.id] || img1)
    setSelectedRightId(item.id)
    setSelectedLeftId(null)
  }

  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={24} strokeWidth={1.5} /> : <Icons.Activity size={24} strokeWidth={1.5} />
  }

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#256c79] text-white">
      <div className="absolute top-0 left-0 w-8 h-32 border-l-2 border-t-2 border-[#58c8ca]" />
      <div className="absolute top-0 right-0 w-8 h-32 border-r-2 border-t-2 border-[#58c8ca]" />
      <div className="absolute bottom-0 left-0 w-8 h-32 border-l-2 border-b-2 border-[#58c8ca]" />
      <div className="absolute bottom-0 right-0 w-8 h-32 border-r-2 border-b-2 border-[#58c8ca]" />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#58c8ca] flex items-center justify-center shadow-xl z-10">
        <div className="text-center">
          <div className="text-3xl font-bold leading-none">25</div>
          <div className="text-[10px] font-semibold leading-tight">Years of<br/>Expertise</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{expertiseData.title}</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            {expertiseData.leftProcedures.map((item) => (
              <article
                key={item.id}
                onClick={() => handleLeftClick(item)}
                className={`relative rounded-lg p-5 flex items-center justify-between gap-4 cursor-pointer transition-all ${
                  selectedLeftId === item.id 
                    ? 'border-2 border-[#ff8a00] bg-[#1a4f5a]' 
                    : 'border border-white/30 bg-transparent hover:border-[#ff8a00]/50'
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg transition-colors ${
                  selectedLeftId === item.id ? 'bg-[#ff8a00]' : 'bg-transparent'
                }`} />
                <h3 className={`text-lg sm:text-xl font-semibold leading-snug text-center flex-1 transition-colors ${
                  selectedLeftId === item.id ? 'text-[#ff8a00]' : 'text-white'
                }`}>{item.title}</h3>
                <div className="flex-shrink-0 text-white">
                  {getIcon(item.icon)}
                </div>
              </article>
            ))}
          </div>

          <div className="order-1 lg:order-2 mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative rounded-2xl border-2 border-white/40 bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-2 shadow-2xl">
              <img
                src={selectedImage}
                alt="Bariatric surgery specialist"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-xl transition-all duration-300"
              />
            </div>
          </div>

          <div className="order-3 space-y-4">
            {expertiseData.rightProcedures.map((item) => (
              <article
                key={item.id}
                onClick={() => handleRightClick(item)}
                className={`relative rounded-lg p-5 flex items-center justify-between gap-4 cursor-pointer transition-all ${
                  selectedRightId === item.id 
                    ? 'border-2 border-[#ff8a00] bg-[#1a4f5a]' 
                    : 'border border-white/30 bg-transparent hover:border-[#ff8a00]/50'
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg transition-colors ${
                  selectedRightId === item.id ? 'bg-[#ff8a00]' : 'bg-transparent'
                }`} />
                <div className="flex-shrink-0 text-white">
                  {getIcon(item.icon)}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold leading-snug text-center flex-1 transition-colors ${
                  selectedRightId === item.id ? 'text-[#ff8a00]' : 'text-white'
                }`}>
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
