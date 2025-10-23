import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import PricingSection from '@/components/sections/PricingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <PricingSection />
        <ProcessSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
