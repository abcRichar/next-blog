"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-[#05d9e8]/25 bg-black/65 px-3 py-1 text-xs text-[#9bf5fb] opacity-0 transition group-hover:opacity-100 hover:border-[#ff2a6d]/35 hover:text-[#ffd5e3]"
      aria-label="复制代码"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

