"use client";

import Image from "next/image";

const stats = [
  { value: "5+",   label: "Years of Experience" },
  { value: "300+", label: "Projects Completed"  },
  { value: "150+", label: "Satisfied Clients"   },
  { value: "12+",  label: "Awards & Recognition"},
];

const skills = ["Wedding Films", "Drone Cinematography", "Post-Production", "Commercial Stills", "Event Coverage"];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-surface)] relative overflow-hidden noise-bg">
      {/* Ambient glow */}
      <div
        className="absolute -right-72 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -left-40 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Image Column ── */}
          <div className="relative animate-on-scroll from-left">
            {/* Outer frame decoration */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-[var(--accent-gold)] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-[var(--accent-gold)] opacity-30 pointer-events-none" />

            {/* Main image */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden img-zoom">
              <Image
                src="/images/profile.png"
                alt="Nikhil Tuladhar – Photographer & Videographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Scan lines effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.8) 3px, rgba(255,255,255,0.8) 4px)",
                }}
              />
            </div>

            {/* Floating card — bottom right */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-10 glass px-6 py-4 border-l-2 shadow-xl z-10"
              style={{ borderLeftColor: "var(--accent-gold)" }}
            >
              <p className="font-serif text-3xl font-light text-[var(--accent-gold)]">2019</p>
              <p className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] mt-1">Est. in Nepal</p>
            </div>

            {/* Floating skill chip — top right */}
            <div
              className="absolute -top-4 -right-4 lg:-right-6 glass px-4 py-2.5 z-10"
              style={{ border: "1px solid var(--border-gold)" }}
            >
              <p className="text-[10px] tracking-widest uppercase text-[var(--accent-gold)]">4K · RAW · Film</p>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className="relative z-10">
            <div className="animate-on-scroll mb-2">
              <span className="section-label">About Me</span>
            </div>
            <h2 className="section-title text-[clamp(2.5rem,4vw,3.6rem)] mt-4 mb-7 animate-on-scroll delay-100">
              A Visual Storyteller<br />
              <em className="italic text-gradient-gold">From the Himalayas</em>
            </h2>

            <div className="space-y-4 animate-on-scroll delay-200">
              <p className="text-[var(--text-muted)] leading-8 text-[15px]">
                Hi, I&apos;m <strong className="text-[var(--text-primary)]">Nikhil Tuladhar</strong> — Founder & CEO of NT Films, a
                professional photographer and filmmaker based in Kathmandu, Nepal. With over five
                years of experience, I have dedicated my craft to capturing the raw beauty, emotion,
                and untold stories that exist in every frame.
              </p>
              <p className="text-[var(--text-muted)] leading-8 text-[15px]">
                From the vibrant streets of Kathmandu to the serene peaks of the Himalayas, my work
                spans weddings, cultural events, cinematic films, and commercial campaigns. Each
                project is approached with a cinematic eye and a passion for authentic storytelling.
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-6 animate-on-scroll delay-200">
              {skills.map((s) => (
                <span
                  key={s}
                  className="badge text-[10px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Gold divider */}
            <div
              className="my-8 h-px animate-on-scroll delay-300"
              style={{ background: "linear-gradient(90deg, var(--accent-gold), rgba(201,168,76,0.2), transparent)" }}
            />

            {/* Signature + CTA aligned */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 animate-on-scroll delay-300">
              <p className="font-serif italic text-3xl text-[var(--accent-gold)] font-light leading-none">
                Nikhil Tuladhar
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary"
                >
                  Let&apos;s Work Together
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <a
                  href="https://instagram.com/ntfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-4"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-24 border border-[var(--border)] bg-[var(--border)] overflow-hidden animate-on-scroll">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="bg-[var(--bg-surface)] px-8 py-10 text-center group hover:bg-[var(--bg-surface-2)] transition-colors duration-300 relative overflow-hidden"
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <p
                className="font-serif text-[clamp(2rem,5vw,3rem)] font-light text-[var(--accent-gold)] group-hover:scale-105 transition-transform duration-300 inline-block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {value}
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
