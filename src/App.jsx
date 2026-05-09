import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import Footer from './sections/Footer'
import ProjectExperiencePage from './pages/ProjectExperiencePage'
import RestaurantExperiencePage from './pages/RestaurantExperiencePage'
import FashionExperiencePage from './pages/FashionExperiencePage'
import useAppSettings from './context/useAppSettings'
import ScrollToTop from './components/ScrollToTop'

const ServicesSection = lazy(() => import('./sections/ServicesSection'))
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const WhyChooseSection = lazy(() => import('./sections/WhyChooseSection'))
const BackendProofSection = lazy(() => import('./sections/BackendProofSection'))
const AboutSection = lazy(() => import('./sections/AboutSection'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'))
const CtaSection = lazy(() => import('./sections/CtaSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))

function SectionFallback() {
  return <div className="h-20" aria-hidden="true" />
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
          <ProjectsSection />
          <BackendProofSection />
          <WhyChooseSection />
          <AboutSection />
          <TestimonialsSection />
          <CtaSection />
          <ContactSection />
        </Suspense>
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
        <Route path="/experiences/restaurant-gallery" element={<RestaurantExperiencePage />} />
        <Route path="/experiences/fashion-gallery" element={<FashionExperiencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
