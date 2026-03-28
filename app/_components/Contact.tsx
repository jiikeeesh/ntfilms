"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const services = [
  { label: "Wedding Photography", icon: "💍" },
  { label: "Cinematic Videography", icon: "🎬" },
  { label: "Event Coverage", icon: "🎉" },
  { label: "Pre-Wedding Shoot", icon: "❤️" },
  { label: "Drone Aerial", icon: "🚁" },
  { label: "Portrait Session", icon: "🪞" },
  { label: "Commercial Work", icon: "📦" },
  { label: "Other", icon: "✦" },
];

const contactDetails = [
  {
    id: "phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.69A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15e1v.92z" />
      </svg>
    ),
    label: "Call or WhatsApp",
    value: "+977 98XXXXXXXX",
    href: "tel:+97798XXXXXXXX",
  },
  {
    id: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "hello@ntfilms.com.np",
    href: "mailto:hello@ntfilms.com.np",
  },
  {
    id: "location",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Kathmandu,Nepal",
    external: true,
  },
  {
    id: "hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Available",
    value: "Sun – Fri, 9am – 7pm",
    href: null,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/ntfilms",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    hoverColor: "#e1306c",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/ntfilms",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    hoverColor: "#1877f2",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ntfilms",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    hoverColor: "#ff0000",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@ntfilms",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.78a8.18 8.18 0 004.78 1.52V6.85a4.86 4.86 0 01-1.01-.16z" />
      </svg>
    ),
    hoverColor: "#ff0050",
  },
];

function InputField({
  id, name, type = "text", label, placeholder, value, onChange, required = false,
}: {
  id: string; name: string; type?: string; label: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder=" "
        autoComplete="off"
        className="peer w-full bg-transparent border-b-2 border-[var(--border)] text-[var(--text-primary)] px-0 pt-6 pb-2 text-sm focus:outline-none transition-all duration-300 placeholder-transparent"
        style={{
          borderBottomColor: focused ? "var(--accent-gold)" : hasValue ? "rgba(201,168,76,0.4)" : undefined,
        }}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-2 text-xs tracking-widest uppercase transition-all duration-300 pointer-events-none"
        style={{
          color: focused ? "var(--accent-gold)" : hasValue ? "rgba(201,168,76,0.6)" : "var(--text-dim)",
          fontSize: focused || hasValue ? "9px" : "11px",
          top: focused || hasValue ? "2px" : "22px",
        }}
      >
        {label}{required && " *"}
      </label>
      {/* Focus underline glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 origin-left"
        style={{
          background: "var(--accent-gold)",
          transform: focused ? "scaleX(1)" : "scaleX(0)",
          boxShadow: focused ? "0 0 8px rgba(201,168,76,0.5)" : "none",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", service: "", date: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedMsg, setFocusedMsg] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", date: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--bg-primary)", padding: "120px 0 0" }}>

      {/* ── Top CTA Band ─────────────────────────────────── */}
      <div className="container-custom mb-16 animate-on-scroll">
        <div className="text-center">
          <span className="section-label justify-center flex mb-4">Get in Touch</span>
          <h2 className="section-title text-[clamp(2.5rem,5vw,4.5rem)]">
            Let&apos;s Work{" "}
            <em className="italic text-gradient-gold">Together</em>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-[var(--text-muted)] mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            Ready to book your shoot or just have a question? Let&apos;s start a conversation.
            Every great story begins with a single message.
          </p>
        </div>
      </div>

      {/* ── Main Split Panel ──────────────────────────────── */}
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 border border-[var(--border)] overflow-hidden animate-on-scroll delay-100 mb-0">

          {/* LEFT: Info Panel with cinematic background */}
          <div className="relative overflow-hidden flex flex-col justify-between p-10 lg:p-14 min-h-[600px]">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/images/contact-bg.png"
                alt="Photography studio"
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.75) 60%, rgba(8,8,8,0.88) 100%)" }} />
              {/* Gold gradient accent */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
            </div>

            {/* Corner frame decorations */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-[var(--accent-gold)] opacity-50" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-[var(--accent-gold)] opacity-50" />

            <div className="relative z-10">
              {/* Heading */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-3">Contact Information</p>
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-white leading-tight">
                  Book Your<br />
                  <em className="italic text-gradient-gold">Dream Shoot</em>
                </h3>
                <div className="mt-4 w-12 h-px" style={{ background: "var(--accent-gold)" }} />
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                {contactDetails.map(({ id, icon, label, value, href, external }) => {
                  const content = (
                    <div key={id} className="flex items-start gap-4 group">
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.25)] text-[var(--accent-gold)] group-hover:bg-[rgba(201,168,76,0.1)] transition-all duration-300"
                        style={{ backdropFilter: "blur(8px)", background: "rgba(201,168,76,0.05)" }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--text-dim)] mb-1">{label}</p>
                        <p className="text-sm text-[rgba(245,240,232,0.9)] group-hover:text-[var(--accent-gold)] transition-colors duration-300 font-medium">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a
                      key={id}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="no-underline block"
                    >
                      {content}
                    </a>
                  ) : content;
                })}
              </div>
            </div>

            {/* Social media */}
            <div className="relative z-10 mt-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-4">Follow the Journey</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-10 h-10 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.4)] transition-all duration-300 group relative overflow-hidden"
                    style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = hoverColor;
                      (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* Availability tag */}
              <div className="flex items-center gap-2 mt-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-[rgba(245,240,232,0.5)]">Currently accepting bookings for 2025–2026</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Panel */}
          <div className="bg-[var(--bg-surface)] p-10 lg:p-14 flex flex-col">
            {status === "success" ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-[var(--accent-gold)]"
                  style={{ animation: "scaleIn 0.5s ease both" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[var(--accent-gold)]">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-light mb-3">
                  Message <em className="italic text-gradient-gold">Sent!</em>
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-2 max-w-xs">
                  Thank you for reaching out. I personally review every inquiry and will respond within 24 hours.
                </p>
                <p className="text-[var(--accent-gold)] text-xs tracking-widest uppercase mb-8">
                  — Nikhil Tuladhar
                </p>
                <button onClick={() => setStatus("idle")} className="btn-outline text-xs">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-0 h-full">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-light text-[var(--text-primary)] mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[var(--text-dim)] tracking-wide">
                    Fill in your details below and I&apos;ll reach out to you soon.
                  </p>
                </div>

                {/* Floating label fields */}
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                  <InputField
                    id="contact-name"
                    name="name"
                    label="Your Name"
                    placeholder="Nikhil Shrestha"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    id="contact-email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    label="Phone / WhatsApp"
                    placeholder="+977 98XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <InputField
                    id="contact-date"
                    name="date"
                    type="date"
                    label="Event Date (if known)"
                    placeholder=""
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                {/* Service selector – visual grid */}
                <div className="mb-8">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-3">Service Needed</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {services.map(({ label, icon }) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, service: label }))}
                        className={`px-2 py-2.5 text-[10px] tracking-wide text-center transition-all duration-200 cursor-pointer border flex flex-col items-center gap-1 ${
                          form.service === label
                            ? "border-[var(--accent-gold)] bg-[var(--accent-gold-dim)] text-[var(--accent-gold)]"
                            : "border-[var(--border)] text-[var(--text-dim)] hover:border-[rgba(201,168,76,0.3)] hover:text-[var(--text-muted)]"
                        }`}
                      >
                        <span className="text-base leading-none">{icon}</span>
                        <span className="leading-tight">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message textarea – floating label style */}
                <div className="relative mb-8 flex-1">
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedMsg(true)}
                    onBlur={() => setFocusedMsg(false)}
                    required
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-[var(--border)] text-[var(--text-primary)] px-0 pt-7 pb-2 text-sm focus:outline-none transition-all duration-300 placeholder-transparent resize-none"
                    style={{
                      borderBottomColor: focusedMsg
                        ? "var(--accent-gold)"
                        : form.message
                        ? "rgba(201,168,76,0.4)"
                        : undefined,
                    }}
                  />
                  <label
                    htmlFor="contact-message"
                    className="absolute left-0 transition-all duration-300 pointer-events-none tracking-widest uppercase"
                    style={{
                      color: focusedMsg ? "var(--accent-gold)" : form.message ? "rgba(201,168,76,0.6)" : "var(--text-dim)",
                      fontSize: focusedMsg || form.message ? "9px" : "10px",
                      top: focusedMsg || form.message ? "2px" : "26px",
                    }}
                  >
                    Your Message *
                  </label>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 origin-left"
                    style={{
                      background: "var(--accent-gold)",
                      transform: focusedMsg ? "scaleX(1)" : "scaleX(0)",
                      boxShadow: focusedMsg ? "0 0 8px rgba(201,168,76,0.5)" : "none",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs mb-4 flex items-center gap-2">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 flex-shrink-0">
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zm0 6.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center mt-auto disabled:opacity-60 disabled:cursor-not-allowed group"
                  style={{ padding: "16px 32px", fontSize: "0.75rem", letterSpacing: "0.2em" }}
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      Book Your Shoot Now
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] tracking-wide text-[var(--text-dim)] mt-3">
                  No spam. Typically responds within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom Band ───────────────────────────────────── */}
      <div
        className="mt-0 border-t border-[var(--border)]"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-xl font-light text-[var(--text-muted)]">
              "Every great story begins with a single frame."
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-widest uppercase text-[var(--text-dim)]">
                Response within
              </span>
              <span
                className="px-3 py-1 text-xs tracking-widest uppercase font-medium border"
                style={{ borderColor: "var(--accent-gold)", color: "var(--accent-gold)" }}
              >
                24 Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
