"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, display.length + 1);
          setDisplay(next);
          if (next === current) {
            setDeleting(true);
          }
        } else {
          const next = current.slice(0, display.length - 1);
          setDisplay(next);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((value) => value + 1);
          }
        }
      },
      deleting ? 50 : display === current ? 1200 : 85
    );

    return () => clearTimeout(timeout);
  }, [deleting, display, index, words]);

  return (
    <div className="flex items-center gap-2 font-mono text-lg text-[#ff7aa6] sm:text-xl">
      <span>{display}</span>
      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
        |
      </motion.span>
    </div>
  );
}

