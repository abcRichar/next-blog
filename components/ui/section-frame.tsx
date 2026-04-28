import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionFrame({
  title,
  eyebrow,
  description,
  children,
  className
}: {
  title: string;
  eyebrow: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("cyber-panel p-6 sm:p-8", className)}>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#05d9e8]">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-semibold text-[#f3f3f6] sm:text-4xl">{title}</h2>
        </div>
        {description ? <p className="max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

