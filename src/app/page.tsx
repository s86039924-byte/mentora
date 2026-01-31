'use client'

import HeroSection from './components/sections/HeroSection'
import SpecialFeaturesSection from './components/sections/SpecialFeaturesSection'
import AboutSection from './components/sections/AboutSection'
import CoursesSection from './components/sections/CoursesSection'
import FacultySection from './components/sections/FacultySection'
import Footer from './components/layout/Footer'
import GallerySection from './components/sections/GallerySection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialFeaturesSection />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <GallerySection/>
      <Footer />

    </>
  )
}
