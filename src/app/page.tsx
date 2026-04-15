import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/Instagram";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SectionFade from "@/components/SectionFade";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionFade from="#242424" to="#1e1e1e" />
        <Services />
        <SectionFade from="#1e1e1e" to="#242424" />
        <WhyChooseUs />
        <SectionFade from="#242424" to="#1e1e1e" />
        <About />
        <SectionFade from="#1e1e1e" to="#242424" />
        <Testimonials />
        <SectionFade from="#242424" to="#1e1e1e" />
        <InstagramSection />
        <CTABanner />
        <Contact />
        <SectionFade from="#1e1e1e" to="#242424" />
        <FAQ />
        <SectionFade from="#242424" to="#161616" />
      </main>
      <Footer />
    </>
  );
}
