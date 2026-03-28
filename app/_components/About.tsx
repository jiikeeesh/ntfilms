"use client";

import Image from "next/image";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "150+", label: "Satisfied Clients" },
  { value: "12+", label: "Awards & Recognition" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-surface)] relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative animate-on-scroll">
            {/* Main image */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Nikhil Tuladhar – Photographer & Videographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 glass px-6 py-4 border-l-2"
              style={{ borderLeftColor: "var(--accent-gold)" }}
            >
              <p className="font-serif text-3xl font-light text-[var(--accent-gold)]">2019</p>
              <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mt-1">
                Est. in Nepal
              </p>
            </div>

            {/* Corner frame decoration */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[var(--accent-gold)] opacity-40" />
          </div>

          {/* Text Column */}
          <div>
            <div className="animate-on-scroll mb-2">
              <span className="section-label">About Me</span>
            </div>
            <h2
              className="section-title text-[clamp(2.5rem,4vw,3.5rem)] mt-4 mb-6 animate-on-scroll delay-100"
            >
              A Visual Storyteller<br />
              <em className="italic text-gradient-gold">From the Himalayas</em>
            </h2>

            <div className="space-y-4 animate-on-scroll delay-200">
              <p className="text-[var(--text-muted)] leading-8 text-[15px]">
                Hi, I&apos;m <strong className="text-[var(--text-primary)]">Nikhil Tuladhar</strong> — a
                professional photographer and filmmaker based in Kathmandu, Nepal. With over five
                years of experience, I have dedicated my craft to capturing the raw beauty, emotion,
                and untold stories that exist in every frame.
              </p>
              <p className="text-[var(--text-muted)] leading-8 text-[15px]">
                From the vibrant streets of Kathmandu to the serene peaks of the Himalayas, my work
                spans weddings, cultural events, cinematic films, and commercial campaigns. Each
                project is approached with a cinematic eye and a passion for authentic storytelling.
              </p>
              <p className="text-[var(--text-muted)] leading-8 text-[15px]">
                I believe that every moment is fleeting — and it is the photographer&apos;s privilege
                to make them eternal. Let&apos;s create something beautiful together.
              </p>
            </div>

            {/* Gold divider */}
            <div className="my-8 h-px bg-gradient-to-r from-[var(--accent-gold)] via-[rgba(201,168,76,0.3)] to-transparent animate-on-scroll delay-300" />

            {/* Signature */}
            <p
              className="font-serif italic text-3xl text-[var(--accent-gold)] font-light mb-10 animate-on-scroll delay-300"
            >
              Nikhil Tuladhar
            </p>

            {/* CTA */}
            <div className="animate-on-scroll delay-400">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Let&apos;s Work Together
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-20 border border-[var(--border)] bg-[var(--border)] overflow-hidden animate-on-scroll">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[var(--bg-surface)] px-8 py-8 text-center group hover:bg-[var(--bg-surface-2)] transition-colors duration-300"
            >
              <p className="font-serif text-4xl font-light text-[var(--accent-gold)] group-hover:scale-105 transition-transform duration-300 inline-block">
                {value}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
