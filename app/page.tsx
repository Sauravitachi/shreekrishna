import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioGallery from "@/components/PortfolioGallery";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NeonCustomizer from "@/components/NeonCustomizer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioGallery />
      <NeonCustomizer />
      <ProcessSection />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
