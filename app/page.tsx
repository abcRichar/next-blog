import Link from "next/link";
import { PostCard } from "@/components/blog/post-card";
import { Typewriter } from "@/components/home/typewriter";
import { SectionFrame } from "@/components/ui/section-frame";
import { getAllPosts, getFeaturedPosts } from "@/lib/content";
import { profile, techStack } from "@/data/site";

export default function HomePage() {
  const allPosts = getAllPosts();
  const latestPosts = getFeaturedPosts();

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="cyber-panel relative overflow-hidden px-5 py-8 sm:px-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,42,109,0.18),_transparent_20%),radial-gradient(circle_at_22%_82%,_rgba(5,217,232,0.12),_transparent_18%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-5 sm:space-y-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#05d9e8] sm:text-xs sm:tracking-[0.4em]">Pilot Identity / Home</div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-[#f4f4f7] sm:text-5xl sm:leading-none lg:text-7xl">
              用系统化工程思维，构建有品牌感的赛博技术博客。
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base sm:leading-8 lg:text-lg">
              {profile.intro} 这套博客同时具备内容表达、交互氛围、Markdown 渲染、动画层、主题切换和后续数据库扩展能力。
            </p>
            <Typewriter words={profile.typingWords} />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/archive" className="cyber-button justify-center px-5 py-3">Browse Archive</Link>
              <Link href="/about" className="cyber-pill justify-center px-5 py-3 text-sm">Open About</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="hud-stat">
              <span>Articles</span>
              <strong>{allPosts.length}</strong>
            </div>
            <div className="hud-stat">
              <span>Core Stack</span>
              <strong>{techStack.length}</strong>
            </div>
            <div className="hud-stat">
              <span>Status</span>
              <strong>ONLINE</strong>
            </div>
          </div>
        </div>
      </section>

      <SectionFrame
        eyebrow="Stack Matrix"
        title="技术栈展示"
        description="卡片结构和数据字段已经按可扩展方式组织，后续切换数据库或 CMS 不需要推翻页面。"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {techStack.map((item) => (
            <div key={item.name} className="cyber-card p-5">
              <div className="font-mono text-xs uppercase tracking-[0.26em] text-[#05d9e8]">{item.type}</div>
              <div className="mt-3 text-xl font-semibold text-[#f3f3f6]">{item.name}</div>
              <div className="mt-4 h-1 rounded-full bg-white/8">
                <div className={`h-full w-3/4 rounded-full ${item.glow === "fuchsia" ? "bg-[#f706cf] shadow-[0_0_12px_rgba(247,6,207,0.45)]" : item.glow === "amber" ? "bg-[#ff2a6d] shadow-[0_0_12px_rgba(255,42,109,0.42)]" : "bg-[#05d9e8] shadow-[0_0_12px_rgba(5,217,232,0.42)]"}`} />
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow="Latest Logs"
        title="最新文章"
        description="文章已经从内联 mock 迁移到独立 Markdown 文件，后续接 Prisma 只需要切读取层。"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}
