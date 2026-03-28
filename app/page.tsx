import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Portfolio from "./_components/Portfolio";
import About from "./_components/About";
import Services from "./_components/Services";
import VideoShowcase from "./_components/VideoShowcase";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ScrollObserver from "./_components/ScrollObserver";

export default function Home() {
  return (
    <>
      {/* Global scroll animation observer */}
      <ScrollObserver />

      {/* Fixed Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* Divider */}
        <div className="divider" />

        {/* 2. Portfolio / Gallery */}
        <Portfolio />

        {/* Divider */}
        <div className="divider" />

        {/* 3. About */}
        <About />

        {/* Divider */}
        <div className="divider" />

        {/* 4. Services */}
        <Services />

        {/* Divider */}
        <div className="divider" />

        {/* 5. Video Showcase */}
        <VideoShowcase />

        {/* Divider */}
        <div className="divider" />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* Divider */}
        <div className="divider" />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </>
  );
}
