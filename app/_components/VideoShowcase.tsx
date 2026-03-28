"use client";

import { useState } from "react";

const videos = [
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Wedding Showreel 2024",
    subtitle: "Cinematic Wedding Films",
    duration: "3:45",
  },
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Nepal Travel & Aerial",
    subtitle: "Drone & Landscape Films",
    duration: "4:20",
  },
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Commercial Reel 2024",
    subtitle: "Brand & Event Films",
    duration: "2:30",
  },
];

export default function VideoShowcase() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section
      id="videos"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label justify-center flex mb-4">Showreels</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            Cinematic <em className="italic text-gradient-gold">Films</em>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-[var(--text-muted)] mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Each film is a journey — meticulously crafted to evoke emotion and preserve memory.
            Watch our latest work below.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${i * 100} group relative overflow-hidden cursor-pointer`}
              style={{ background: "var(--bg-surface-2)" }}
            >
              {playing === i ? (
                /* Embed iframe when playing */
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                /* Thumbnail / Poster */
                <div
                  className="aspect-video relative flex items-center justify-center"
                  onClick={() => setPlaying(i)}
                >
                  {/* Cinematic placeholder thumbnail */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)`,
                    }}
                  />

                  {/* Film strip decoration */}
                  <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 opacity-20">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-4 h-3 border border-[var(--text-dim)] rounded-sm flex-shrink-0" />
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 opacity-20">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-4 h-3 border border-[var(--text-dim)] rounded-sm flex-shrink-0" />
                    ))}
                  </div>

                  {/* Duration badge */}
                  <span
                    className="absolute top-4 right-4 text-xs font-mono text-[var(--text-muted)] z-10"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {video.duration}
                  </span>

                  {/* Play button */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 group-hover:scale-110 transition-transform duration-400">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-[var(--accent-gold)] opacity-30 group-hover:scale-125 group-hover:opacity-0"
                      style={{ transition: "all 0.6s ease", animation: "pulse-gold 2.5s infinite" }}
                    />
                    <div className="w-16 h-16 rounded-full border-2 border-[var(--accent-gold)] flex items-center justify-center bg-black/60 backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--accent-gold)] ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Info bar */}
              <div
                className="p-5 border-t border-[var(--border)] group-hover:border-[var(--border-gold)] transition-colors duration-300"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-gold)] mb-1.5">
                  {video.subtitle}
                </p>
                <h3 className="font-serif text-xl font-light text-[var(--text-primary)]">
                  {video.title}
                </h3>
              </div>

              {/* Left accent border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--accent-gold)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            </div>
          ))}
        </div>

        {/* YouTube link */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://youtube.com/@ntfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
