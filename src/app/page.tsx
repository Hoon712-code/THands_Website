import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { SmoothSnapProvider } from "@/components/layout/SmoothSnapProvider";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnvironmentSection } from "@/components/sections/EnvironmentSection";
import { CTASection } from "@/components/sections/CTASection";
import { LocationSection } from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <>
      <SmoothSnapProvider />
      <Header />
      <main id="main-content">
        <HeroSection />
        <PhilosophySection />
        <ProcessSection />
        <CurriculumSection />
        <GallerySection />
        <EnvironmentSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
