"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya & Arjun Shrestha",
    role: "Wedding · Kathmandu",
    tag: "Wedding Film",
    rating: 5,
    quote:
      "Nikhil captured our wedding day so beautifully — every frame felt like a painting. We cried watching our highlight film. He is not just a photographer, he is a true artist.",
    avatar: "/images/avatar-wedding.png",
    initials: "PS",
    color: "#3b82f6",
  },
  {
    name: "Rajan Maharjan",
    role: "CEO · Himalayan Brew Co.",
    tag: "Commercial",
    rating: 5,
    quote:
      "NT Films delivered exceptional commercial photography for our new product launch. The images were so compelling that our conversion rate increased by 40%. Truly professional.",
    avatar: "/images/avatar-ceo.png",
    initials: "RM",
    color: "#a87c3e",
  },
  {
    name: "Sita Gurung",
    role: "Pre-Wedding · Pokhara",
    tag: "Pre-Wedding Shoot",
    rating: 5,
    quote:
      "Our pre-wedding shoot in Pokhara was a dream. Nikhil knew exactly how to direct us and the results were beyond our expectations. Every photo tells a story.",
    avatar: "/images/avatar-woman.png",
    initials: "SG",
    color: "#3b82f6",
  },
  {
    name: "Deepak Tamang",
    role: "Nepal Tourism Board",
    tag: "Event Coverage",
    rating: 5,
    quote:
      "We have commissioned NT Films for three major events now. Their team is professional, punctual, and the quality of both photos and video is consistently world-class.",
    avatar: "/images/avatar-ceo.png",
    initials: "DT",
    color: "#a87c3e",
  },
  {
    name: "Anjali & Rohan Pradhan",
    role: "Wedding · Bhaktapur",
    tag: "Wedding Film",
    rating: 5,
    quote:
      "From first consultation to final delivery, working with Nikhil was seamless. He made us feel so at ease and the photos are timeless. Highly recommend to every couple!",
    avatar: "/images/avatar-wedding.png",
    initials: "AP",
    color: "#3b82f6",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < count ? 0 : 1}
          className={`w-4 h-4 ${i < count ? "text-[var(--accent-gold)]" : "text-[var(--text-dim)]"}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const touchStartX = useRef<number>(0);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => { intervalRef.current = setInterval(next, 6000); };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-surface) 50%, var(--bg-primary) 100%)",
        padding: "120px 0",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-gold), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-gold), transparent)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)" }}
      />

      {/* Giant decorative quote */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none font-serif"
        style={{
          fontSize: "clamp(16rem, 25vw, 28rem)",
          lineHeight: 1,
          color: "var(--accent-gold)",
          opacity: 0.015,
          fontWeight: 700,
        }}
      >
        "
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="section-label justify-center flex mb-4">Client Stories</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            Voices of <em className="italic text-gradient-gold">Trust</em>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-[var(--text-muted)] text-sm mt-5 max-w-md mx-auto leading-relaxed">
            Real stories from real people. Every testimonial is a moment I&apos;m proud to have captured.
          </p>
        </div>

        {/* Main testimonial display */}
        <div
          className="animate-on-scroll delay-100"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid lg:grid-cols-5 gap-0 max-w-6xl mx-auto overflow-hidden border border-[var(--border)]"
            style={{ background: "var(--bg-surface)" }}>

            {/* Left: Avatar + info panel */}
            <div
              className="lg:col-span-2 relative flex flex-col items-center justify-center p-10 lg:p-14 text-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface) 100%)" }}
            >
              {/* Gold border right (desktop) */}
              <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px"
                style={{ background: "linear-gradient(180deg, transparent, var(--border-gold), transparent)" }}
              />

              {/* Tag badge */}
              <div
                key={`tag-${current}`}
                className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 border text-[10px] tracking-[0.25em] uppercase"
                style={{
                  borderColor: "var(--border-gold)",
                  color: "var(--accent-gold)",
                  animation: "fadeIn 0.5s ease both",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)] inline-block" />
                {t.tag}
              </div>

              {/* Avatar */}
              <div
                key={`avatar-${current}`}
                className="relative mb-6"
                style={{ animation: "scaleIn 0.5s ease both" }}
              >
                <div
                  className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "var(--accent-gold)" }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gold ring pulse */}
                <div
                  className="absolute inset-0 rounded-full border border-[var(--accent-gold)] opacity-30"
                  style={{ animation: "pulse-gold 3s infinite", margin: "-6px" }}
                />
              </div>

              {/* Name & role */}
              <div key={`name-${current}`} style={{ animation: "fadeInUp 0.5s ease 0.1s both" }}>
                <h3 className="font-serif text-xl font-light text-[var(--text-primary)] mb-1">
                  {t.name}
                </h3>
                <p className="text-xs tracking-widest uppercase text-[var(--text-muted)]">{t.role}</p>
              </div>

              {/* Stars */}
              <div
                key={`stars-${current}`}
                className="flex justify-center mt-4"
                style={{ animation: "fadeIn 0.5s ease 0.2s both" }}
              >
                <Stars count={t.rating} />
              </div>

              {/* Verified badge */}
              <div
                className="mt-5 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[var(--text-dim)]"
                style={{ animation: "fadeIn 0.5s ease 0.3s both" }}
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-[var(--accent-gold)]">
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.54 5.854l-4 4.25a.75.75 0 01-1.08 0l-2-2.125a.75.75 0 011.08-1.042l1.46 1.55 3.46-3.675a.75.75 0 011.08 1.042z" />
                </svg>
                Verified Client
              </div>
            </div>

            {/* Right: Quote panel */}
            <div className="lg:col-span-3 flex flex-col justify-between p-10 lg:p-14">
              {/* Large opening quote */}
              <div className="text-[var(--accent-gold)] opacity-20 mb-6 leading-none font-serif" style={{ fontSize: "5rem", lineHeight: 0.8 }}>
                "
              </div>

              {/* Quote text */}
              <blockquote
                key={`quote-${current}`}
                className="font-serif italic text-[clamp(1.1rem,2vw,1.4rem)] text-[var(--text-primary)] leading-9 flex-1 mb-8"
                style={{ animation: "fadeInUp 0.6s ease both" }}
              >
                {t.quote}
              </blockquote>

              {/* Bottom: closing quote + navigation */}
              <div className="flex items-end justify-between flex-wrap gap-6 mt-auto">
                <div className="text-[var(--accent-gold)] opacity-20 leading-none font-serif" style={{ fontSize: "5rem", lineHeight: 0.8 }}>
                  "
                </div>

                <div className="flex items-center gap-4">
                  {/* Dot indicators */}
                  <div className="flex gap-2 items-center">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`transition-all duration-400 cursor-pointer rounded-full border-none ${
                          i === current
                            ? "w-8 h-1.5 bg-[var(--accent-gold)]"
                            : "w-1.5 h-1.5 bg-[var(--text-dim)] hover:bg-[var(--text-muted)]"
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev/Next arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold-dim)] transition-all duration-300 cursor-pointer bg-transparent"
                      aria-label="Previous"
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 border border-[var(--accent-gold)] flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 cursor-pointer bg-transparent"
                      aria-label="Next"
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom mini-cards preview */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-8 max-w-6xl mx-auto animate-on-scroll delay-200">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative p-4 text-left transition-all duration-300 cursor-pointer border group ${
                i === current
                  ? "border-[var(--accent-gold)] bg-[var(--bg-surface)]"
                  : "border-[var(--border)] bg-transparent hover:border-[rgba(201,168,76,0.4)] hover:bg-[var(--bg-surface)]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-[var(--border)]">
                  <Image src={item.avatar} alt={item.name} width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] tracking-wider truncate text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.name.split(" ")[0]}
                </span>
              </div>
              <p className="text-[10px] text-[var(--text-dim)] tracking-wide">{item.tag}</p>
              {i === current && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-gold)]" />
              )}
            </button>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-px mt-16 border border-[var(--border)] bg-[var(--border)] max-w-2xl mx-auto overflow-hidden animate-on-scroll delay-300">
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "150+", label: "Happy Clients" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[var(--bg-surface)] py-6 text-center">
              <p className="font-serif text-2xl font-light text-[var(--accent-gold)]">{value}</p>
              <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
