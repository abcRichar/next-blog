import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group cyber-card overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#ff2a6d]/35" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
          <span className="cyber-tag">{formatDate(post.date)}</span>
          <span className="cyber-tag">{post.category}</span>
          <span className="cyber-tag">{post.readingTime}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#f3f3f6]">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{post.excerpt}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#f706cf]/20 bg-[#f706cf]/8 px-3 py-1 text-xs text-[#ff9eea]">
              #{tag}
            </span>
          ))}
        </div>
        <Link href={`/posts/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.22em] text-[#05d9e8] transition hover:text-[#ff6a98]">
          Read Post
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

