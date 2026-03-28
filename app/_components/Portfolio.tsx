"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const categories = ["All", "Weddings", "Portraits", "Events", "Pre-Wedding", "Drone", "Commercial"];

const items = [
  { id: 1, src: "/images/wedding.png",     alt: "Wedding in the Himalayas",    category: "Weddings",    aspect: "aspect-[3/4]",   span: "row-span-2" },
  { id: 2, src: "/images/portrait.png",    alt: "Traditional Nepali Portrait",  category: "Portraits",   aspect: "aspect-square",  span: "" },
  { id: 3, src: "/images/event.png",       alt: "Indra Jatra Festival",         category: "Events",      aspect: "aspect-square",  span: "" },
  { id: 4, src: "/images/prewedding.png",  alt: "Pre-wedding at Pokhara Lake",  category: "Pre-Wedding", aspect: "aspect-[3/4]",   span: "row-span-2" },
  { id: 5, src: "/images/commercial.png",  alt: "Commercial Product Campaign",  category: "Commercial",  aspect: "aspect-[4/3]",   span: "" },
  { id: 6, src: "/images/drone.png",       alt: "Aerial Rice Terraces Nepal",   category: "Drone",       aspect: "aspect-[4/3]",   span: "" },
  { id: 7, src: "/images/wedding.png",     alt: "Golden Hour Wedding",          category: "Weddings",    aspect: "aspect-square",  span: "" },
  { id: 8, src: "/images/portrait.png",    alt: "Temple Portrait Session",      category: "Portraits",   aspect: "aspect-[3/4]",   span: "row-span-2" },
  { id: 9, src: "/images/drone.png",       alt: "Himalayan Sunrise Aerial",     category: "Drone",       aspect: "aspect-square",  span: "" },
  { id: 10, src: "/images/event.png",      alt: "Cultural Dance Performance",   category: "Events",      aspect: "aspect-[4/3]",   span: "" },
  { id: 11, src: "/images/prewedding.png", alt: "Mountain Pre-Wedding Film",    category: "Pre-Wedding", aspect: "aspect-square",  span: "" },
  { id: 12, src: "/images/commercial.png", alt: "Brand Identity Shoot",         category: "Commercial",  aspect: "aspect-[4/3]",   span: "" },
];

interface LightboxProps {
  item: typeof items[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
}

function Lightbox({ item, onClose, onPrev, onNext, index, total }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal aria-label="Image lightbox">
      {/* Close */}
      <button
        className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors z-10 bg-transparent border-none cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-6 text-[11px] tracking-widest text-white/40 uppercase font-mono z-10">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/15 text-white/50 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/15 text-white/50 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <div className="relative max-w-[85vw] max-h-[82vh]" style={{ minWidth: 280 }}>
          <Image
            src={item.src}
            alt={item.alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-auto mx-auto"
            style={{ maxWidth: "85vw" }}
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-1">
              {item.category}
            </span>
            <p className="font-serif text-sm text-white/90">{item.alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(6);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const visibleItems = filtered.slice(0, visible);

  // Re-observe when filter changes
  useEffect(() => {
    setVisible(6);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.08 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    }
    return () => obs.disconnect();
  }, [active]);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % visibleItems.length);
  }, [lightboxIndex, visibleItems.length]);
  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + visibleItems.length) % visibleItems.length);
  }, [lightboxIndex, visibleItems.length]);

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 animate-on-scroll">
          <div>
            <span className="section-label mb-4 flex">Portfolio</span>
            <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
              Selected <em className="italic text-gradient-gold">Work</em>
            </h2>
            <span className="gold-line" />
          </div>
          <p className="text-[var(--text-muted)] text-sm leading-7 max-w-sm md:text-right">
            A curated selection from 300+ projects across Nepal and beyond.
          </p>
        </div>

        {/* Filter Tabs — scrollable on mobile */}
        <div className="scroll-strip flex gap-2 mb-12 pb-1 animate-on-scroll delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                active === cat
                  ? "bg-[var(--accent-gold)] border-[var(--accent-gold)] text-black font-bold"
                  : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute inset-0 bg-white/10" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {visibleItems.map((item, i) => (
            <div
              key={`${item.id}-${active}`}
              className="animate-on-scroll break-inside-avoid group relative overflow-hidden cursor-zoom-in img-zoom"
              style={{ transitionDelay: `${Math.min(i * 0.08, 0.5)}s` }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
              aria-label={`Open ${item.alt}`}
            >
              <div className={`relative w-full overflow-hidden ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Hover overlay — gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-gold)] mb-1 block">
                    {item.category}
                  </span>
                  <p className="font-serif text-base text-white font-light leading-snug">{item.alt}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent-gold)]">
                    <path d="M10 10l4 4M11.5 6.5a5 5 0 11-10 0 5 5 0 0110 0zM8.5 4.5v4M6.5 6.5h4" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Corner frames */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[var(--accent-gold)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-[4.5rem] right-3 w-5 h-5 border-b border-r border-[var(--accent-gold)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Load more / CTA */}
        <div className="text-center mt-14 animate-on-scroll">
          {visible < filtered.length ? (
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="btn-outline mr-4"
            >
              Load More
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : null}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={visible >= filtered.length ? "btn-primary" : "btn-ghost"}
          >
            Commission a Project
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={visibleItems[lightboxIndex]}
          index={lightboxIndex}
          total={visibleItems.length}
          onClose={closeLightbox}
          onNext={nextLightbox}
          onPrev={prevLightbox}
        />
      )}
    </section>
  );
}
