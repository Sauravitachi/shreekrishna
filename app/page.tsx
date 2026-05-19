import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioGallery from "@/components/PortfolioGallery";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioGallery />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
