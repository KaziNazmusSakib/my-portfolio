// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Switch color theme"
      className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink transition hover:border-accent hover:text-accent"
    >
      {mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}
    </button>
  );
}