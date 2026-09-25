import AboutSection from "./components/about/About";
import ContactSection from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/home/Hero";
import TestimonialsSection from "./components/testo/Testo";
import ProjectsSection from "./components/work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
