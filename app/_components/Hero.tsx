"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background Image */}
      <div ref={overlayRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero.png"
          alt="Cinematic Nepal landscape"
          fill
          priority
          className="object-cover"
          quality={95}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ animation: "fadeIn 1s ease 0.3s both" }}
        >
          <span className="block w-12 h-px bg-[var(--accent-gold)] opacity-80" />
          <span className="text-xs tracking-[0.35em] uppercase text-[var(--accent-gold)] font-medium">
            Nepal · Photography & Film
          </span>
          <span className="block w-12 h-px bg-[var(--accent-gold)] opacity-80" />
        </div>

        {/* Name */}
        <h1
          className="font-serif font-light text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight text-[#f5f0e8] mb-4"
          style={{ animation: "fadeInUp 1s ease 0.5s both" }}
        >
          Nikhil{" "}
          <em className="italic text-gradient-gold not-italic">Tuladhar</em>
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-[clamp(1.1rem,2.5vw,1.6rem)] text-[var(--text-muted)] mb-12 leading-relaxed"
          style={{ animation: "fadeInUp 1s ease 0.7s both" }}
        >
          Capturing Moments, Creating Stories
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeInUp 1s ease 0.9s both" }}
        >
          <button onClick={scrollToWork} className="btn-primary min-w-[180px]">
            <span>View Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={scrollToContact} className="btn-outline min-w-[180px]">
            Contact Me
          </button>
        </div>

        {/* Stats strip */}
        <div
          className="flex items-center justify-center gap-8 mt-20 pt-8 border-t border-[var(--border)]"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          {[
            { value: "5+", label: "Years" },
            { value: "300+", label: "Projects" },
            { value: "150+", label: "Happy Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl font-light text-[var(--accent-gold)]">{value}</p>
              <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ animation: "fadeIn 1s ease 1.5s both" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-dim)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
