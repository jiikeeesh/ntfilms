"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", budget: "5000", details: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Inline email validation (soft check)
    if (name === "email" && value.length > 5) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "We need a name to address you by.";
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = "A valid email is required to reach back out.";
    if (!formData.details.trim()) newErrors.details = "Please share a few details about your project.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormState("error");
      
      // Reset error state after shake animation
      setTimeout(() => setFormState("idle"), 1000);
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 2000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 bg-[#080808] text-[#f5f0e8] overflow-x-hidden">
      
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-[#c9a84c]/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-[#e8cc80]/5 rounded-full blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: The Hook & Trust Signals */}
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight font-serif">
              Let&apos;s create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8cc80] to-[#c9a84c] italic">unforgettable.</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#d4cfc5] mb-8 sm:mb-12 max-w-md">
              Got a wild idea or a strict brief? We want to hear it. Drop the details below, and we'll get back to you within 24 hours.
            </p>

            {/* Trust Signal */}
            <div className="p-5 sm:p-6 bg-[#111111]/50 backdrop-blur-sm border border-[rgba(255,255,255,0.07)] rounded-2xl">
              <p className="text-[#d4cfc5] italic mb-4 text-sm sm:text-base">
                "Working with them was the best investment we made this year. The visual storytelling perfectly captured our brand's essence."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e8cc80] to-[#c9a84c] flex items-center justify-center font-bold text-black">
                  SJ
                </div>
                <div>
                  <p className="font-medium text-sm text-[#f5f0e8]">Sarah Jenkins</p>
                  <p className="text-xs text-[#888888]">CEO, Creative Studio</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Reactive Form */}
          <motion.div 
            className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#c9a84c] mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 font-serif text-[#f5f0e8]">Got it!</h3>
                  <p className="text-[#888888]">
                    You're officially on our radar. Expect an email from our team in the next 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  animate={formState === "error" ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.07)] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group w-full"
                >
                  {/* Subtle border glow following mouse (CSS only approach for simplicity in snippet) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="space-y-4 sm:space-y-6 relative z-10">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#a0a0a0] mb-2 uppercase tracking-[0.15em]">Full Name</label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full bg-[#080808] border ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c] focus:ring-[#c9a84c]/20'} rounded-xl px-4 py-3 text-[#f5f0e8] placeholder:text-[#555555] outline-none transition-all focus:ring-2`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#a0a0a0] mb-2 uppercase tracking-[0.15em]">Work Email</label>
                      <div className="relative">
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          whileFocus={{ scale: 1.01 }}
                          className={`w-full bg-[#080808] border ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c] focus:ring-[#c9a84c]/20'} rounded-xl px-4 py-3 text-[#f5f0e8] placeholder:text-[#555555] outline-none transition-all focus:ring-2`}
                        />
                        {/* Inline Valid Check */}
                        <AnimatePresence>
                          {formData.email.length > 5 && !errors.email && (
                            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute right-3 top-3.5 text-green-500">
                              <CheckCircle2 className="w-5 h-5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#a0a0a0] mb-2 uppercase tracking-[0.15em]">Phone Number (Optional)</label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full bg-[#080808] border border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c] focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder:text-[#555555] outline-none transition-all focus:ring-2`}
                      />
                    </div>

                    {/* Budget Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="budget" className="block text-xs font-semibold text-[#a0a0a0] uppercase tracking-[0.15em]">Project Budget</label>
                        <span className="text-[#c9a84c] font-semibold text-sm">
                          {parseInt(formData.budget) >= 20000 ? "$20,000+" : `$${parseInt(formData.budget).toLocaleString()}`}
                        </span>
                      </div>
                      
                      <div className="relative pt-2 pb-2">
                        <input
                          type="range"
                          id="budget"
                          name="budget"
                          min="1000"
                          max="20000"
                          step="500"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full h-1.5 bg-[rgba(255,255,255,0.05)] rounded-lg appearance-none cursor-pointer accent-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20"
                        />
                        <div className="flex justify-between text-[10px] text-[#555555] mt-3 font-mono">
                          <span>$1k</span>
                          <span>$10k</span>
                          <span>$20k+</span>
                        </div>
                      </div>
                    </div>

                    {/* Details Textarea */}
                    <div>
                      <label htmlFor="details" className="block text-xs font-semibold text-[#a0a0a0] mb-2 uppercase tracking-[0.15em]">Project Details</label>
                      <motion.textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your goals, timeline, and any limits..."
                        rows={4}
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full bg-[#080808] border ${errors.details ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c] focus:ring-[#c9a84c]/20'} rounded-xl px-4 py-3 text-[#f5f0e8] placeholder:text-[#555555] outline-none transition-all focus:ring-2 resize-none`}
                      />
                      <AnimatePresence>
                        {errors.details && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative overflow-hidden bg-[#c9a84c] text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group uppercase tracking-widest text-[11px]"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                      
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Start the Conversation
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </motion.button>
                    
                    <p className="text-center text-xs text-[#555555] mt-4">
                      No spam, ever. Your information is safe with us.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
