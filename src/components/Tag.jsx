import React from "react";
import { motion } from "framer-motion";

export default function Tag({ icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 bg-white text-sm shadow-sm"
    >
      <div className="text-sm">{icon}</div>
      <div className="text-xs text-gray-700 font-medium">{label}</div>
    </motion.div>
  );
}


