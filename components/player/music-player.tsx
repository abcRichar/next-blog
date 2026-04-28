"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { tracks } from "@/data/site";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const syncViewport = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!panelRef.current || mobile) {
        x.set(0);
        y.set(0);
        return;
      }

      const width = panelRef.current.offsetWidth;
      const height = panelRef.current.offsetHeight;
      x.set(window.innerWidth - width - 20);
      y.set(window.innerHeight - height - 20);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, [x, y]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.load();
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    }
  }, [trackIndex]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const changeTrack = (step: number) => {
    setTrackIndex((current) => (current + step + tracks.length) % tracks.length);
    setPlaying(false);
  };

  const snapToEdge = () => {
    if (!panelRef.current || isMobile) return;

    const width = panelRef.current.offsetWidth;
    const height = panelRef.current.offsetHeight;
    const currentX = x.get();
    const currentY = y.get();
    const maxX = window.innerWidth - width - 12;
    const maxY = window.innerHeight - height - 12;
    const targetX = currentX < window.innerWidth / 2 ? 12 : maxX;
    const targetY = clamp(currentY, 12, maxY);

    animate(x, targetX, { type: "spring", stiffness: 220, damping: 24 });
    animate(y, targetY, { type: "spring", stiffness: 220, damping: 24 });
  };

  return (
    <motion.aside
      ref={panelRef}
      drag={!isMobile}
      dragMomentum={false}
      dragElastic={0.08}
      onDragEnd={snapToEdge}
      style={isMobile ? undefined : { x, y }}
      className={isMobile ? "fixed inset-x-3 bottom-3 z-50" : "fixed left-0 top-0 z-50 w-[320px] max-w-[calc(100vw-20px)]"}
    >
      <audio
        ref={audioRef}
        src={tracks[trackIndex].src}
        preload="none"
        onEnded={() => changeTrack(1)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <div className="cyber-panel overflow-hidden p-4 shadow-[0_0_28px_rgba(255,42,109,0.12)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#05d9e8] sm:text-xs sm:tracking-[0.35em]">
              <Volume2 size={14} />
              Neon Player
            </div>
            <div className="mt-3 space-y-1">
              <div className="truncate text-base font-semibold text-[#f3f3f6] sm:text-lg">{tracks[trackIndex].title}</div>
              <div className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] sm:text-xs sm:tracking-[0.22em]">{tracks[trackIndex].artist}</div>
            </div>
          </div>
          <div className="flex h-8 items-end gap-1">
            {[0, 1, 2, 3, 4].map((item) => (
              <motion.span
                key={item}
                className="block w-1 rounded-full bg-gradient-to-t from-[#ff2a6d] via-[#f706cf] to-[#05d9e8]"
                animate={playing ? { height: [8, 22, 12, 26, 10] } : { height: 8 }}
                transition={{ duration: 0.9, repeat: Infinity, delay: item * 0.12 }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-2">
          <button type="button" onClick={() => changeTrack(-1)} className="cyber-icon-button" aria-label="上一首">
            <SkipBack size={16} />
          </button>
          <button type="button" onClick={togglePlay} className="cyber-icon-button h-11 w-11 sm:h-12 sm:w-12" aria-label="播放或暂停">
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button type="button" onClick={() => changeTrack(1)} className="cyber-icon-button" aria-label="下一首">
            <SkipForward size={16} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
