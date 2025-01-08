import ScrollToTopButton from '@/components/ScrollToTopButton'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import ProgramsSection from '@/components/ProgramsSection'
import GallerySection from '@/components/GallerySection'
import VideoSection from '@/components/VideoSection'
import TeachersSection from '@/components/TeachersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function ElementarySchoolLanding() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <main>
        <HomeSection />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <VideoSection />
        <TeachersSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

