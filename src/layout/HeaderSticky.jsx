import React from "react";
import { motion } from "framer-motion";
import { btnMotion } from "../components/motionPresets.js";
import ThemeToggle from "../components/ThemeToggle.jsx";

export default function HeaderSticky() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg">
            L9
          </div>
          <div className="hidden sm:block font-semibold">Leo9 Studio</div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <motion.a {...btnMotion} href="#hero" className="hover:underline">Home</motion.a>
          <motion.a {...btnMotion} href="#services" className="hover:underline">Services</motion.a>
          <motion.a {...btnMotion} href="#case-studies" className="hover:underline">Case Studies</motion.a>
          <motion.a
            {...btnMotion}
            href="#contact"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 text-white"
          >
            Get in touch
          </motion.a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <motion.a {...btnMotion} href="#hero" className="px-3 py-2">Menu</motion.a>
        </div>
      </div>
    </header>
  );
}


