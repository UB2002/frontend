import React, { useState } from "react";
import { motion } from "framer-motion";
import Tag from "../components/Tag.jsx";
import { btnMotion } from "../components/motionPresets.js";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-24 -top-40 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.6 }}
          className="absolute -right-24 bottom-[-120px] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Crafting beautiful digital
            <span className="relative inline-block ml-2">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, delay: 0.45 }}
                className="origin-left inline-block bg-gradient-to-r from-indigo-500 to-pink-500 px-1 text-white rounded-sm"
              >
                experiences
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-gray-700"
          >
            We design and build product-focused digital experiences — web, mobile, and everything in between. Collaborative process, pixel-perfect results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              {...btnMotion}
              href="#services"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-medium shadow"
            >
              View our work
            </motion.a>

            <motion.a
              {...btnMotion}
              href="#case-studies"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-gray-200 text-gray-800 font-medium"
            >
              Learn more
            </motion.a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Tag icon="⚡" label="Fast delivery" />
            <Tag icon="🎯" label="Product focused" />
            <Tag icon="📐" label="Pixel perfect" />
          </div>
        </div>

        <div className="flex-1 max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative rounded-2xl p-6 shadow-2xl bg-white/60 backdrop-blur border border-gray-100"
            whileHover={{ translateY: -19 }}
          >
            <div className="rounded-xl overflow-hidden">
              <div className="h-52 sm:h-64 bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-semibold text-xl">
                Project mockup
              </div>

              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Brand redesign</div>
                    <div className="text-xs text-gray-500">Case study • UI / UX</div>
                  </div>
                  <div className="text-sm font-semibold text-indigo-600">Live</div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="ml-auto text-xs text-gray-400">3 contributors</div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 2.6, repeat: Infinity }}
              className="absolute -left-6 -top-6 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-200 to-red-200 shadow-lg opacity-90"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <div className="text-sm text-gray-500">Tip: I can add more sections or convert this to a full single-page scroll site — tell me which.</div>
      </div>
    </div>
  );
}


