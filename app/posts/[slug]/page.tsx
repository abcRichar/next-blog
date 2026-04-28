import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "@/components/blog/markdown-article";
import { PostSidebar } from "@/components/post/post-sidebar";
import { SectionFrame } from "@/components/ui/section-frame";
import { getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | NEXT-ITEM`,
    description: post.excerpt
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="space-y-6 sm:space-y-8">
      <SectionFrame eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
            <span className="cyber-tag">{formatDate(post.date)}</span>
            <span className="cyber-tag">{post.readingTime}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="cyber-tag">#{tag}</span>
            ))}
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 sm:aspect-[16/8] sm:rounded-[24px] lg:aspect-[16/7]">
            <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </SectionFrame>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start">
        <section className="cyber-panel min-w-0 p-4 sm:p-6 lg:p-8">
          <MarkdownArticle content={post.content} />
        </section>
        <PostSidebar headings={post.headings} previous={previous} next={next} />
      </div>
    </article>
  );
}
