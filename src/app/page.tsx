import Image from "next/image";
import HeroSection from "@/components/Sections/HomePage/HeroSection";
import AboutMeSection from "@/components/Sections/HomePage/AboutMeSection";
import ServicesSection from "@/components/Sections/HomePage/ServicesSection";
import SummarySection from "@/components/Sections/HomePage/SummarySection";
import PortfolioSection from "@/components/Sections/HomePage/PortfolioSection";
import TestimonialSection from "@/components/Sections/HomePage/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <SummarySection />
      <PortfolioSection />
      <TestimonialSection />
    </>
  );
}
