"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (mounted ? resolvedTheme : "dark") !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cyber-button px-4 py-2 text-xs"
      aria-label="切换主题"
    >
      {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
      <span>{isDark ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
