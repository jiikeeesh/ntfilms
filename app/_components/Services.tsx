const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "Wedding Photography",
    description: "Timeless storytelling for your most special day. Capturing every emotion, every glance, every tear of joy.",
    tags: ["Ceremony", "Reception", "Portraits"],
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.88V15.12a1 1 0 01-1.447.949L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "Cinematic Videography",
    description: "Breathtaking films with cinematic colour grades, aerial sequences, and narrative storytelling.",
    tags: ["Films", "Showreels", "Highlights"],
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Event Coverage",
    description: "Corporate events, cultural festivals, product launches — documented with editorial precision.",
    tags: ["Corporate", "Cultural", "Sports"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Pre-Wedding Shoots",
    description: "Romantic journeys through Nepal's stunning landscapes — lakes, mountains, and temples.",
    tags: ["Outdoor", "Pokhara", "Kathmandu"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Drone Aerial Shots",
    description: "Sweeping aerial perspectives of Nepal's majestic terrain — from rice terraces to peaks.",
    tags: ["4K Aerial", "Landscape", "Architecture"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: "Portrait Sessions",
    description: "Professional portraits that bring out your authentic self — for individuals or families.",
    tags: ["Studio", "Outdoor", "Family"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Commercial Work",
    description: "Product photography and brand films that elevate your visual identity and convert audiences.",
    tags: ["Products", "Brand", "Advertising"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Post-Production",
    description: "Cinematic colour grading, sound design, and advanced retouching — making it exceptional.",
    tags: ["Colour Grade", "Retouch", "Sound"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none noise-bg"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />
      
      {/* Upper gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-gold)] to-transparent opacity-50" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <span className="section-label justify-start flex mb-4">Expertise</span>
            <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
              What I <em className="italic text-gradient-gold">Offer</em>
            </h2>
            <span className="gold-line" />
          </div>
          <p className="text-[var(--text-muted)] text-sm leading-7 max-w-sm md:text-right">
            From your wedding day to your brand campaign — every service is delivered with the same
            commitment to quality, creativity, and cinematic care.
          </p>
        </div>

        {/* Services Grid (Featured + Standard) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(({ icon, title, description, tags, featured }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${Math.min(i * 100, 500)} p-8 group transition-all duration-500 cursor-default relative overflow-hidden glass mix-blend-lighten flex flex-col h-full card-lift ${
                featured ? "md:col-span-2 lg:col-span-2 bg-[var(--bg-surface-2)] border-[var(--border-gold)] shadow-[var(--shadow-gold)]" : "bg-[var(--bg-surface)] border-[var(--border)]"
              }`}
            >
              {/* Highlight strip on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
              
              {/* Glow Behind Icon for featured */}
              {featured && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-gold-glow)] blur-[50px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              )}

              <div className="text-[var(--accent-gold)] mb-6 group-hover:-translate-y-2 transition-transform duration-500 will-change-transform inline-block relative z-10 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[var(--accent-gold-dim)] bg-[rgba(201,168,76,0.02)]">
                {icon}
              </div>

              <h3 className={`font-serif font-light text-[${featured ? '1.75rem' : '1.25rem'}] text-[var(--text-primary)] mb-3 leading-snug relative z-10 group-hover:text-[var(--accent-gold)] transition-colors duration-300`}>
                {title}
              </h3>
              
              <p className="text-[var(--text-muted)] text-[13px] leading-relaxed mb-6 flex-grow relative z-10">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 text-[var(--text-dim)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-full group-hover:border-[var(--border-gold)] group-hover:text-[var(--accent-gold)] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative cross on bottom right */}
              <div className="absolute bottom-4 right-4 text-[var(--accent-gold)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform rotate-45 group-hover:rotate-90">
                +
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-4 px-6 py-3 border border-[var(--border-gold)] bg-[var(--accent-gold-dim)] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            <p className="text-[var(--text-primary)] text-xs tracking-[0.15em] uppercase">
              Custom packages available for 2025/2026 bookings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
