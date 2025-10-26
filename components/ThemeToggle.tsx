"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const root = window.document.documentElement;
    const stored = window.localStorage.getItem("theme");

    if (stored === "dark" || stored === "light") {
      setIsDarkMode(stored === "dark");
      root.classList.toggle("dark", stored === "dark");
      return;
    }

    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    setIsDarkMode(prefersDark);
    root.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isClient]);

  return (
    <button
      type="button"
      onClick={() => setIsDarkMode((prev) => !prev)}
      aria-label={`Use ${isDarkMode ? "light" : "dark"} theme`}
      className="rounded-full border border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:hover:border-slate-700 dark:hover:bg-slate-700"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 drop-shadow-icon-light" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 drop-shadow-icon-dark" aria-hidden="true" />
      )}
    </button>
  );
}
