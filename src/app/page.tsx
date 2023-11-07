import ContactSection from "@/components/Sections/HomePage/ContactSection";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/Sections/HomePage/HeroSection"),
);
const AboutMeSection = dynamic(
  () => import("@/components/Sections/HomePage/AboutMeSection"),
);
const ServicesSection = dynamic(
  () => import("@/components/Sections/HomePage/ServicesSection"),
);
const SummarySection = dynamic(
  () => import("@/components/Sections/HomePage/SummarySection"),
);
const PortfolioSection = dynamic(
  () => import("@/components/Sections/HomePage/PortfolioSection"),
);
const TestimonialSection = dynamic(
  () => import("@/components/Sections/HomePage/TestimonialSection"),
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <SummarySection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
