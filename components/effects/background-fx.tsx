"use client";

import { motion } from "framer-motion";

export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,_rgba(255,42,109,0.16),_transparent_18%),radial-gradient(circle_at_16%_22%,_rgba(5,217,232,0.1),_transparent_20%),radial-gradient(circle_at_bottom,_rgba(247,6,207,0.06),_transparent_24%),linear-gradient(180deg,#050505_0%,#070709_100%)]" />
      <motion.div
        className="absolute inset-0 opacity-[0.14]"
        animate={{ backgroundPosition: ["0px 0px", "0px 120px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      />
      <div className="scanlines absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#05d9e8]/35 shadow-[0_0_14px_rgba(5,217,232,0.24)]" />
    </div>
  );
}

