import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/Category";
import ProductSection from "@/components/Product";
import SizeGuide from "@/components/SizeGuide";
import FestivalSection from "@/components/FestivalSection";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonial";
import InstagramSection from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingAction";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
        <SizeGuide />
        <FestivalSection />
        <BrandStory />
        <Testimonials />
        <InstagramSection />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
