import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full relative">
      {/* Background soft glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.6 }}
          className="absolute -right-24 bottom-[-160px] w-[640px] h-[640px] rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-12 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: network graphic */}
        <div className="order-2 lg:order-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[520px] max-w-full"
          >
            <motion.svg
              viewBox="0 0 520 520"
              className="w-full h-auto"
              aria-hidden="true"
              animate={{ rotate: 360, scale: [1, 1.02, 1] }}
              transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
            >
              <g stroke="#111" strokeDasharray="1 8" strokeOpacity="0.8">
                <circle cx="260" cy="260" r="220" fill="none" />
                <circle cx="260" cy="260" r="160" fill="none" />
                <circle cx="260" cy="260" r="100" fill="none" />
              </g>
              {/* nodes */}
              {[
                { x: 120, y: 120, c: "#ef4444" },
                { x: 400, y: 160, c: "#6366f1" },
                { x: 180, y: 340, c: "#6366f1" },
                { x: 320, y: 360, c: "#ef4444" },
                { x: 260, y: 240, c: "#111111" },
                { x: 220, y: 200, c: "#a855f7" },
                { x: 300, y: 220, c: "#a855f7" },
                { x: 260, y: 320, c: "#111111" },
              ].map((n, i) => (
                <motion.circle
                  key={i}
                  cx={n.x}
                  cy={n.y}
                  r={6}
                  fill={n.c}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                />
              ))}
              {/* a few connecting lines */}
              <g stroke="#111" strokeOpacity="0.9">
                <line x1="120" y1="120" x2="220" y2="200" />
                <line x1="220" y1="200" x2="260" y2="240" />
                <line x1="260" y1="240" x2="300" y2="220" />
                <line x1="300" y1="220" x2="400" y2="160" />
                <line x1="260" y1="240" x2="260" y2="320" />
                <line x1="180" y1="340" x2="260" y2="320" />
                <line x1="320" y1="360" x2="260" y2="320" />
              </g>
            </motion.svg>
          </motion.div>
        </div>

        {/* Right: headline */}
        <div className="order-1 lg:order-2">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[44px] sm:text-[64px] lg:text-[96px] font-extrabold leading-[0.95] tracking-tight text-left"
          >
            <motion.span className="block" whileHover={{ rotate: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Design
            </motion.span>
            <motion.span className="block" animate={{ rotate: [0, 1.2, 0, -1.2, 0] }} transition={{ duration: 6, repeat: Infinity }} whileHover={{ rotate: 2, scale: 1.02 }}>
              Transform
            </motion.span>
            <motion.span className="block" whileHover={{ rotate: 3, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Accelerate
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 max-w-2xl text-xl sm:text-2xl text-left text-gray-700"
          >
            Redefining user experiences through Behavioural Science & AI
          </motion.p>
        </div>
      </div>
    </div>
  );
}


