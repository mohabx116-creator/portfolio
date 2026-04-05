import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import WhyChooseSection from './sections/WhyChooseSection'
import AboutSection from './sections/AboutSection'
import CtaSection from './sections/CtaSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import ProjectExperiencePage from './pages/ProjectExperiencePage'
import useAppSettings from './context/useAppSettings'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <AboutSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const { theme } = useAppSettings()

  return (
    <div className={`min-h-screen bg-surface text-on-surface theme-${theme}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectExperiencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
