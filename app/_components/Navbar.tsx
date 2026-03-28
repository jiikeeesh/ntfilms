"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#videos", label: "Videos" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Highlight active nav link
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[rgba(255,255,255,0.06)] py-4"
            : "py-6 bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-white no-underline group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-serif text-2xl font-light tracking-[0.15em] text-[#f5f0e8] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
              NT
            </span>
            <span className="font-serif text-2xl font-light tracking-[0.15em] text-[var(--accent-gold)] ml-1">
              FILMS
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 cursor-pointer bg-transparent border-none relative pb-1 ${
                    activeSection === href.slice(1)
                      ? "text-[var(--accent-gold)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent-gold)]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Book a Session
            </button>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[var(--text-primary)] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--text-primary)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--text-primary)] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map(({ href, label }, i) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="font-serif text-4xl font-light text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-300 cursor-pointer bg-transparent border-none"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-primary mt-4"
          >
            Book a Session
          </button>
        </div>
      </div>
    </>
  );
}
