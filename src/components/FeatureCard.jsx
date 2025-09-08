import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="p-6 bg-white rounded-2xl shadow-sm border"
    >
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-sm text-gray-600 mt-2">{desc}</div>
    </motion.div>
  );
}


