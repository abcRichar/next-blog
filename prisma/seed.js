const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const technologies = [
  { name: "Next.js", category: "Frontend", level: "核心生产力", sortOrder: 1 },
  { name: "React", category: "Frontend", level: "核心生产力", sortOrder: 2 },
  { name: "Node.js", category: "Backend", level: "服务端主力", sortOrder: 3 },
  { name: "Prisma", category: "Backend", level: "数据访问层", sortOrder: 4 },
  { name: "SQLite", category: "Database", level: "本地轻量存储", sortOrder: 5 },
  { name: "PostgreSQL", category: "Database", level: "线上迁移目标", sortOrder: 6 },
  { name: "Redis", category: "Middleware", level: "缓存与会话", sortOrder: 7 },
  { name: "GSAP", category: "Interaction", level: "动画与缓动", sortOrder: 8 },
  { name: "TypeScript", category: "Engineering", level: "建议升级", sortOrder: 9 }
];

const posts = [
  {
    title: "用 Next.js + Prisma 搭一个真正能扩展的个人博客",
    slug: "next-prisma-engineering-blog",
    excerpt: "不只是把页面做出来，而是把数据层、页面结构和后续扩展路径一起打通。",
    category: "架构实践",
    coverImage: "/posts/cover-command.svg",
    coverAlt: "蓝色机甲终端风格的博客控制台封面图",
    readingTime: 6,
    publishedAt: new Date("2026-03-14T08:00:00.000Z"),
    technologies: ["Next.js", "Prisma", "SQLite", "Node.js"],
    content: `很多个人博客只做了静态页面，一旦要接后台、标签、搜索、统计，就会发现基础结构不够。\n\n## 为什么这套结构适合个人博客\n\n页面使用 App Router，天然支持服务端渲染和按路由组织模块。数据层使用 Prisma，对 SQLite 足够轻量，对后续切 PostgreSQL 也友好。\n\n## 实战建议\n\n- 页面层和数据层分离，避免组件里直接堆 SQL 或复杂查询\n- 文章、技术栈、个人介绍拆成独立模型，后续扩展成本更低\n- API 路由保留对外能力，后面接管理后台时不用重构`
  },
  {
    title: "机甲风 UI 不是加几条发光边框就够了",
    slug: "mecha-ui-system-design",
    excerpt: "真正的机甲感来自结构线、层级、信息密度与材质控制，而不是简单霓虹效果。",
    category: "设计系统",
    coverImage: "/posts/cover-reactor.svg",
    coverAlt: "橙红色反应炉与终端面板组合的赛博机甲封面图",
    readingTime: 5,
    publishedAt: new Date("2026-02-08T08:00:00.000Z"),
    technologies: ["Next.js", "React", "GSAP"],
    content: `做技术博客时，UI 既要有辨识度，也不能影响阅读效率。\n\n## 机甲风的关键组成\n\n大背景采用深色金属舱体感，辅以网格、雷达扫描式高光和切角面板。色彩上控制主辅色数量，避免页面变成杂乱的赛博贴纸。\n\n## 页面层面的处理方式\n\n- 首页使用大标题和状态面板，形成指挥台感受\n- 卡片采用切角和边框层，强化装备仓的结构感\n- 文本区域保持高可读性，避免过多动态和低对比度`
  },
  {
    title: "个人站的技术栈展示，应该服务于业务判断",
    slug: "portfolio-tech-stack-business-value",
    excerpt: "技术栈展示不是堆图标墙，应该让别人一眼判断你解决问题的边界和深度。",
    category: "个人品牌",
    coverImage: "/posts/cover-grid.svg",
    coverAlt: "带有扫描网格和技术模块的机甲终端封面图",
    readingTime: 4,
    publishedAt: new Date("2025-12-21T08:00:00.000Z"),
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    content: `如果技术展示只是一排 Logo，很难体现你的工程判断力。\n\n## 更合理的展示方式\n\n按前端、后端、数据库、工程化分层，让访问者知道你在哪些环节能独立负责，哪些是长期主战场。\n\n## 推荐输出结构\n\n- 技术名称 + 分类，而不是只有图标\n- 当前定位，例如核心生产力、可扩展迁移目标、缓存能力\n- 和博客内容联动，让文章证明能力，而不是页面自说自话`
  }
];

async function main() {
  for (const tech of technologies) {
    await prisma.technology.upsert({
      where: { name: tech.name },
      update: tech,
      create: tech
    });
  }

  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: {
      name: "Aoleyun / Pilot-01",
      headline: "资深全栈工程师，偏架构实践，关注前端体验、服务稳定性和真实业务交付。",
      bio: "长期处理从界面交互到后端服务、数据库建模、工程化部署的完整链路。这个博客不是展示模板，而是面向真实项目的个人技术基地，内容围绕 Next.js、Node.js、数据库设计、性能优化与系统演进展开。"
    },
    create: {
      id: 1,
      name: "Aoleyun / Pilot-01",
      headline: "资深全栈工程师，偏架构实践，关注前端体验、服务稳定性和真实业务交付。",
      bio: "长期处理从界面交互到后端服务、数据库建模、工程化部署的完整链路。这个博客不是展示模板，而是面向真实项目的个人技术基地，内容围绕 Next.js、Node.js、数据库设计、性能优化与系统演进展开。"
    }
  });

  await prisma.profileFocus.deleteMany({ where: { profileId: profile.id } });

  const focusTechNames = ["Next.js", "Node.js", "Prisma", "PostgreSQL", "GSAP"];
  for (const name of focusTechNames) {
    const technology = await prisma.technology.findUnique({ where: { name } });
    await prisma.profileFocus.create({
      data: {
        profileId: profile.id,
        technologyId: technology.id
      }
    });
  }

  for (const post of posts) {
    const savedPost = await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        coverImage: post.coverImage,
        coverAlt: post.coverAlt,
        readingTime: post.readingTime,
        publishedAt: post.publishedAt,
        published: true
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        coverImage: post.coverImage,
        coverAlt: post.coverAlt,
        readingTime: post.readingTime,
        publishedAt: post.publishedAt,
        published: true
      }
    });

    await prisma.postTech.deleteMany({ where: { postId: savedPost.id } });

    for (const name of post.technologies) {
      const technology = await prisma.technology.findUnique({ where: { name } });
      await prisma.postTech.create({
        data: {
          postId: savedPost.id,
          technologyId: technology.id
        }
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
