"use client";

import { useState } from "react";
import Image from "next/image";

const videos = [
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Wedding Showreel 2024",
    subtitle: "Cinematic Wedding Films",
    duration: "3:45",
    poster: "/images/wedding.png",
  },
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Nepal Travel & Aerial",
    subtitle: "Drone & Landscape Films",
    duration: "4:20",
    poster: "/images/drone.png",
  },
  {
    id: "dQw4w9WgXcQ", // replace with real showreel
    title: "Commercial Reel 2024",
    subtitle: "Brand & Event Films",
    duration: "2:30",
    poster: "/images/commercial.png",
  },
];

export default function VideoShowcase() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section
      id="videos"
      className="section-padding relative overflow-hidden bg-[var(--bg-primary)] noise-bg"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-gold-dim)] blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label justify-center flex mb-4">Showreels</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)]">
            Cinematic <em className="italic text-gradient-gold">Films</em>
          </h2>
          <span className="gold-line mx-auto mb-6" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm leading-relaxed">
            Each film is a journey — meticulously crafted to evoke emotion, capture light, and preserve memory in motion.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${i * 100} group relative overflow-hidden backdrop-blur-sm border border-[var(--border)] bg-[rgba(16,16,16,0.6)] cursor-pointer card-lift rounded-sm`}
            >
              {playing === i ? (
                /* Embed iframe when playing */
                <div className="aspect-video w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                /* Thumbnail / Poster */
                <div
                  className="aspect-video relative flex items-center justify-center overflow-hidden"
                  onClick={() => setPlaying(i)}
                >
                  {/* Real poster image */}
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/40 to-black/10 opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Film strip decoration borders */}
                  <div className="absolute top-2 left-0 right-0 flex justify-between px-4 opacity-30 mix-blend-overlay">
                     {Array.from({ length: 15 }).map((_, i) => (
                       <div key={i} className="w-1.5 h-2 bg-white/50 rounded-[1px]" />
                     ))}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 opacity-30 mix-blend-overlay">
                     {Array.from({ length: 15 }).map((_, i) => (
                       <div key={i} className="w-1.5 h-2 bg-white/50 rounded-[1px]" />
                     ))}
                  </div>

                  {/* Duration badge */}
                  <span
                    className="absolute top-4 right-4 text-[10px] font-mono text-white/80 z-10 bg-black/50 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    REC • {video.duration}
                  </span>

                  {/* Play button */}
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 group-hover:scale-110 transition-transform duration-500 will-change-transform">
                    {/* Ripple rings */}
                    <div className="absolute inset-0 rounded-full border border-[var(--accent-gold)] opacity-0 group-hover:animate-[pulse-gold_2s_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-[var(--accent-gold)] opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--accent-gold)] shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow duration-300">
                      <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Info text panel */}
              <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-[var(--bg-surface-2)]">
                {/* Accent line sliding on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-[var(--border)] overflow-hidden">
                  <div className="w-full h-full bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--accent-gold)] mb-2 mt-2">
                  {video.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-light text-[var(--text-primary)] group-hover:text-white transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube link CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a
            href="https://youtube.com/@ntfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-outline inline-flex items-center gap-3 px-8 py-4 border-[var(--border)] hover:border-[#ff0000] hover:bg-[#ff0000]/10 hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff0000] group-hover:scale-110 transition-transform duration-300">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
            <span className="tracking-widest uppercase text-xs">Explore YouTube Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
}
