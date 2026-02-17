import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/Contact'
import GastroSurgeonAhmedabad from './Pages/GastroSurgeonAhmedabad'
import OurTreatments from './Pages/OurTreatments'
import BariatricSurgeonAhmedabad from './Pages/BariatricSurgeonAhmedabad'
import CancerSurgeonAhmedabad from './Pages/CancerSurgeonAhmedabad'
import AboutPage from './Pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/our-treatments' element={<OurTreatments />} />
          <Route path='/gastro-surgeon-ahmedabad' element={<GastroSurgeonAhmedabad />} />
          <Route path='/bariatric-surgeon-ahmedabad' element={<BariatricSurgeonAhmedabad />} />
          <Route path='/cancer-surgeon-ahmedabad' element={<CancerSurgeonAhmedabad />} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </div>
    </BrowserRouter>
  )
}

export default App
