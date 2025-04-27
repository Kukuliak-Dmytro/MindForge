"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log("Theme toggle clicked, current theme:", theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-medium flex items-center justify-center bg-primary shadow-small hover:shadow-medium transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-white-fg" />
      ) : (
        <Sun className="w-5 h-5 text-white-fg" />
      )}
    </button>
  );
} 