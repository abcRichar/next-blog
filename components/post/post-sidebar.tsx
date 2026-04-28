import Link from "next/link";
import type { BlogPostMeta, HeadingItem } from "@/types/blog";

export function PostSidebar({ headings, previous, next }: { headings: HeadingItem[]; previous?: BlogPostMeta; next?: BlogPostMeta }) {
  return (
    <aside className="space-y-4 xl:sticky xl:top-28">
      {headings.length ? (
        <div className="cyber-card p-4 sm:p-5">
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#05d9e8]">Contents</div>
          <div className="mt-4 space-y-3 text-sm">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block break-words leading-6 text-[var(--muted-foreground)] transition hover:text-[#8ef4fb] ${heading.level === 3 ? "pl-3 sm:pl-4" : ""}`}
              >
                {heading.text}
              </a>
            ))}
          </div>
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
        {next ? (
          <Link href={`/posts/${next.slug}`} className="cyber-card p-4 sm:p-5 transition hover:border-[#05d9e8]/40">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff7aa6]">Next</div>
            <div className="mt-3 break-words text-sm leading-7 text-[#f3f3f6] sm:text-base">{next.title}</div>
          </Link>
        ) : null}
        {previous ? (
          <Link href={`/posts/${previous.slug}`} className="cyber-card p-4 sm:p-5 transition hover:border-[#ff2a6d]/35">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#05d9e8]">Previous</div>
            <div className="mt-3 break-words text-sm leading-7 text-[#f3f3f6] sm:text-base">{previous.title}</div>
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
