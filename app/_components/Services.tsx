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
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Event Coverage",
    description: "Corporate events, cultural festivals, product launches — fully documented with editorial precision.",
    tags: ["Corporate", "Cultural", "Sports"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Pre-Wedding Shoots",
    description: "Romantic journeys through Nepal's most stunning landscapes — lakes, mountains, and ancient temples.",
    tags: ["Outdoor", "Pokhara", "Kathmandu"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Drone Aerial Shots",
    description: "Sweeping aerial perspectives of Nepal's majestic terrain — from rice terraces to Himalayan peaks.",
    tags: ["4K Aerial", "Landscape", "Architecture"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: "Portrait Sessions",
    description: "Professional portraits that bring out your authentic self — for individuals, families, or brands.",
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
    title: "Post-Production Editing",
    description: "Cinematic colour grading, sound design, and advanced retouching — making every frame exceptional.",
    tags: ["Colour Grade", "Retouch", "Sound"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label justify-center flex mb-4">Services</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            What I <em className="italic text-gradient-gold">Offer</em>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-[var(--text-muted)] mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            From your wedding day to your brand campaign — every service is delivered with the same
            commitment to quality, creativity, and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {services.map(({ icon, title, description, tags }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${Math.min(i * 100, 500)} bg-[var(--bg-surface)] p-8 group hover:bg-[var(--bg-surface-2)] transition-all duration-400 cursor-default relative overflow-hidden`}
            >
              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {icon}
              </div>

              <h3 className="font-serif text-xl font-light text-[var(--text-primary)] mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-7 mb-5">{description}</p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest uppercase px-2 py-1 border border-[var(--border)] text-[var(--text-dim)] group-hover:border-[var(--border-gold)] group-hover:text-[var(--accent-gold)] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <p className="text-center text-[var(--text-dim)] text-xs tracking-widest mt-12 animate-on-scroll">
          Custom packages available · Inquire for pricing
        </p>
      </div>
    </section>
  );
}
