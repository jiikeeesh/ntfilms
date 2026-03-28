"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = ["All", "Weddings", "Portraits", "Events", "Pre-Wedding", "Drone", "Commercial"];

const items = [
  { id: 1, src: "/images/wedding.png", alt: "Wedding in the Himalayas", category: "Weddings", size: "tall" },
  { id: 2, src: "/images/portrait.png", alt: "Traditional Nepali Portrait", category: "Portraits", size: "normal" },
  { id: 3, src: "/images/drone.png", alt: "Aerial Rice Terraces Nepal", category: "Drone", size: "wide" },
  { id: 4, src: "/images/event.png", alt: "Indra Jatra Festival", category: "Events", size: "normal" },
  { id: 5, src: "/images/prewedding.png", alt: "Pre-wedding Pokhara Lake", category: "Pre-Wedding", size: "tall" },
  { id: 6, src: "/images/commercial.png", alt: "Commercial Product Photography", category: "Commercial", size: "normal" },
  { id: 7, src: "/images/wedding.png", alt: "Golden Hour Wedding", category: "Weddings", size: "normal" },
  { id: 8, src: "/images/portrait.png", alt: "Temple Portrait Session", category: "Portraits", size: "wide" },
  { id: 9, src: "/images/drone.png", alt: "Himalayan Sunrise Drone", category: "Drone", size: "normal" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label justify-center mb-4 flex">
            Portfolio
          </span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            Selected <em className="italic text-gradient-gold">Work</em>
          </h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer ${
                active === cat
                  ? "bg-[var(--accent-gold)] border-[var(--accent-gold)] text-black font-semibold"
                  : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`animate-on-scroll delay-${Math.min(i * 100, 500)} break-inside-avoid group relative overflow-hidden cursor-pointer`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.size === "tall" ? "aspect-[3/4]" : item.size === "wide" ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs tracking-[0.2em] uppercase text-[var(--accent-gold)] mb-1 block">
                    {item.category}
                  </span>
                  <p className="font-serif text-lg text-white font-light">{item.alt}</p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-[var(--text-muted)] text-sm mb-6">
            These are just a few highlights. Every project tells a unique story.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
          >
            Commission a Project
          </button>
        </div>
      </div>
    </section>
  );
}
