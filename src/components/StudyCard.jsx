import React from "react";
import { motion } from "framer-motion";

export default function StudyCard({ title, tag }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="p-6 bg-white rounded-2xl shadow-sm border flex items-start gap-4"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold">{title[0]}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-500 mt-1">{tag}</div>
      </div>
    </motion.div>
  );
}


