"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero.png",
    label: "Nepal · Photography & Film",
    caption: "Himalayan Light",
  },
  {
    src: "/images/wedding.png",
    label: "Wedding Cinematography",
    caption: "Sacred Moments",
  },
  {
    src: "/images/drone.png",
    label: "Aerial & Landscape",
    caption: "Bird's Eye Nepal",
  },
];

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  // Auto-advance slides every 6s
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToWork = () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* ── Slideshow Background ── */}
      <div ref={overlayRef} className="absolute inset-0 scale-110">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              priority={i === 0}
              className="object-cover"
              quality={95}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      </div>

      {/* ── Slide Indicators ── */}
      <div
        className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-3 z-20"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1s" }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); clearInterval(timerRef.current); timerRef.current = setInterval(next, 6000); }}
            className="cursor-pointer bg-transparent border-none p-1 group"
            aria-label={`Slide ${i + 1}`}
          >
            <div
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === current ? "2px" : "2px",
                height: i === current ? "32px" : "12px",
                background: i === current ? "var(--accent-gold)" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Slide Caption (bottom-left) ── */}
      <div
        className="absolute bottom-24 left-8 lg:left-16 z-10 hidden sm:block"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.5s" }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-1">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
        <p
          key={current}
          className="font-serif italic text-sm text-[var(--text-muted)]"
          style={{ animation: "fadeIn 0.6s ease both" }}
        >
          {slides[current].caption}
        </p>
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease" }}
      >
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
          className="font-serif font-light text-[clamp(3.2rem,9vw,7.5rem)] leading-none tracking-tight text-[#f5f0e8] mb-5"
          style={{ animation: "fadeInUp 1s ease 0.5s both" }}
        >
          Nikhil{" "}
          <em className="italic text-gradient-gold not-italic">Tuladhar</em>
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-[clamp(1.1rem,2.2vw,1.55rem)] text-[var(--text-muted)] mb-14 leading-relaxed"
          style={{ animation: "fadeInUp 1s ease 0.7s both" }}
        >
          Capturing Moments, Creating Stories
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeInUp 1s ease 0.9s both" }}
        >
          <button onClick={scrollToWork} className="btn-primary min-w-[200px]">
            <span>View Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={scrollToContact} className="btn-outline min-w-[200px]">
            Book a Shoot
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-16 sm:mt-20 pt-8 border-t border-[var(--border)]"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          {[
            { value: "5+", label: "Years" },
            { value: "300+", label: "Projects" },
            { value: "150+", label: "Clients" },
            { value: "12+", label: "Awards" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group">
              <p className="font-serif text-[clamp(1.4rem,3vw,2rem)] font-light text-[var(--accent-gold)] group-hover:scale-110 transition-transform duration-300 inline-block">
                {value}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ animation: "fadeIn 1s ease 1.8s both" }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-[var(--text-dim)]">Scroll</span>
        <div
          className="w-px h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent"
          style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
