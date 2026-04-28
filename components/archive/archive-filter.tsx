"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostCard } from "@/components/blog/post-card";
import type { BlogPost } from "@/types/blog";

export function ArchiveFilter({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState<string>("ALL");

  const tags = useMemo(() => ["ALL", ...new Set(posts.flatMap((post) => post.tags))], [posts]);

  const filtered = useMemo(() => {
    if (activeTag === "ALL") return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={tag === activeTag ? "cyber-button px-4 py-2 text-xs" : "cyber-pill"}
          >
            {tag}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.24 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
