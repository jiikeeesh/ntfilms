"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya & Arjun Shrestha",
    role: "Wedding Clients · Kathmandu",
    rating: 5,
    quote:
      "Nikhil captured our wedding day so beautifully — every frame felt like a painting. We cried watching our highlight film. He is not just a photographer, he is an artist.",
    initials: "PS",
  },
  {
    name: "Rajan Maharjan",
    role: "CEO, Himalayan Brew Co.",
    rating: 5,
    quote:
      "NT Films delivered exceptional commercial photography for our new product launch. The images were so compelling that our conversion rate increased by 40%. Truly professional.",
    initials: "RM",
  },
  {
    name: "Sita Gurung",
    role: "Pre-wedding Client · Pokhara",
    rating: 5,
    quote:
      "Our pre-wedding shoot in Pokhara was a dream. Nikhil knew exactly how to direct us and the results were beyond our expectations. Every photo tells a story.",
    initials: "SG",
  },
  {
    name: "Deepak Tamang",
    role: "Event Organiser · Nepal Tourism Board",
    rating: 5,
    quote:
      "We have commissioned NT Films for three major events now. Their team is professional, punctual, and the quality of both photos and video is consistently world-class.",
    initials: "DT",
  },
  {
    name: "Anjali & Rohan Pradhan",
    role: "Wedding Clients · Bhaktapur",
    rating: 5,
    quote:
      "From the first consultation to the final delivery, working with Nikhil was seamless. He made us feel so at ease and the photos are timeless. Highly recommend!",
    initials: "AP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-[var(--accent-gold)]">
          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.873 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => { intervalRef.current = setInterval(next, 6000); };

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 font-serif text-[20rem] leading-none text-[var(--accent-gold)] opacity-[0.02] pointer-events-none select-none"
      >
        "
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label justify-center flex mb-4">Testimonials</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            What Clients <em className="italic text-gradient-gold">Say</em>
          </h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto animate-on-scroll delay-100"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div
                    className="glass p-10 md:p-14 text-center relative"
                    style={{ borderTop: "1px solid var(--border-gold)" }}
                  >
                    {/* Quote icon */}
                    <div className="text-[var(--accent-gold)] opacity-40 mb-6 flex justify-center">
                      <svg viewBox="0 0 32 32" fill="currentColor" className="w-10 h-10">
                        <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H6c0-2.206 1.794-4 4-4V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-8c0-2.206 1.794-4 4-4V8z" />
                      </svg>
                    </div>

                    <p className="font-serif italic text-[clamp(1rem,2vw,1.25rem)] text-[var(--text-primary)] leading-8 mb-8">
                      "{t.quote}"
                    </p>

                    <StarRating count={t.rating} />

                    <div className="flex items-center justify-center gap-4 mt-6">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold text-black"
                        style={{ background: "var(--accent-gold)" }}
                      >
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <p className="text-[var(--text-primary)] font-medium text-sm">{t.name}</p>
                        <p className="text-[var(--text-dim)] text-xs tracking-wide">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 cursor-pointer bg-transparent"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 cursor-pointer rounded-full border-none ${
                    i === current
                      ? "w-6 h-1.5 bg-[var(--accent-gold)]"
                      : "w-1.5 h-1.5 bg-[var(--text-dim)] hover:bg-[var(--text-muted)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 cursor-pointer bg-transparent"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
