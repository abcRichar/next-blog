import { ArchiveFilter } from "@/components/archive/archive-filter";
import { SectionFrame } from "@/components/ui/section-frame";
import { getAllPosts } from "@/lib/content";

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <SectionFrame
      eyebrow="Archive Terminal"
      title="文章归档"
      description="支持标签过滤，便于按主题快速检索内容。数据结构与 API 输出保持一致，后续很容易切到数据库查询。"
    >
      <ArchiveFilter posts={posts} />
    </SectionFrame>
  );
}
