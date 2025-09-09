import React from "react";
import { motion } from "framer-motion";
import { btnMotion } from "../components/motionPresets.js";
import ThemeToggle from "../components/ThemeToggle.jsx";

export default function HeaderSticky() {
  const NavItem = ({ label, href, active }) => (
    <motion.a
      {...btnMotion}
      href={href}
      className="relative px-1 py-1 hover:opacity-80 transition"
    >
      <span className="align-middle">{label}</span>
      {active && <span className="ml-2 inline-block w-2 h-2 rounded-full bg-black align-middle" />}
    </motion.a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center">
        {/* Left: Logo + wordmark */}
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" stroke="#111" strokeWidth="2"/>
            <path d="M16 20l8-6 8 6v8l-8 6-8-6v-8z" stroke="#111" strokeWidth="2" fill="none"/>
          </svg>
          <span className="text-xl font-semibold tracking-tight">Leo9</span>
        </a>

        {/* Center: Nav */}
        <nav className="hidden md:flex mx-auto items-center gap-8 text-base">
          <NavItem label="Work" href="#hero" />
          <NavItem label="Services" href="#services" active />
          <NavItem label="Clients" href="#case-studies" />
          <NavItem label="About" href="#about" active={false} />
          <NavItem label="Knowledge" href="#knowledge" />
        </nav>

        {/* Right: Theme + CTA */}
        <div className="ml-auto hidden md:flex items-center gap-5">
          <ThemeToggle />
          <motion.a
            {...btnMotion}
            href="#contact"
            className="px-5 py-2 rounded-md bg-black text-white font-semibold shadow-sm"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile: simplified */}
        <div className="md:hidden ml-auto flex items-center gap-3">
          <ThemeToggle />
          <motion.a {...btnMotion} href="#contact" className="px-4 py-2 rounded-md bg-black text-white font-semibold">Contact</motion.a>
        </div>
      </div>
    </header>
  );
}


