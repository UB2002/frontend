import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved ? saved === "dark" : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={
        `inline-flex items-center gap-2 px-3 py-2 rounded-md border transition-colors ` +
        (isDark
          ? "bg-[#0f0f13] text-gray-200 border-gray-700"
          : "bg-white text-gray-700 border-gray-200")
      }
    >
      {isDark ? <span>🌙</span> : <span>☀️</span>}
      <span className="text-sm">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}


