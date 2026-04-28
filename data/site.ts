import type { ContactItem, ExperienceItem, ProjectItem, StackItem, TrackItem } from "@/types/blog";

export const profile = {
  name: "Aoleyun // Pilot-01",
  title: "全栈工程师 / 体验与系统设计驱动",
  intro: "我专注于把前端表现力、后端稳定性和工程可维护性压进同一套产品系统。",
  typingWords: ["Build for impact", "Design for signal", "Ship with system thinking"]
};

export const techStack: StackItem[] = [
  { name: "Next.js", type: "App Router", glow: "cyan" },
  { name: "TypeScript", type: "Typed Safety", glow: "fuchsia" },
  { name: "Tailwind CSS", type: "Design System", glow: "cyan" },
  { name: "Framer Motion", type: "Motion Layer", glow: "fuchsia" },
  { name: "Node.js", type: "Runtime", glow: "amber" },
  { name: "Prisma", type: "Data Access", glow: "cyan" },
  { name: "PostgreSQL", type: "Scalable Store", glow: "fuchsia" },
  { name: "Redis", type: "Cache / Queue", glow: "amber" }
];

export const experiences: ExperienceItem[] = [
  {
    period: "2023 - 至今",
    title: "Senior Full Stack Engineer",
    company: "数字产品团队",
    summary: "负责复杂业务系统的前后端协同、组件设计、数据建模和工程交付。"
  },
  {
    period: "2020 - 2023",
    title: "Frontend Lead",
    company: "ToB SaaS 团队",
    summary: "主导中后台系统体验升级、前端规范与性能治理，逐步覆盖 Node 服务与缓存层。"
  },
  {
    period: "2018 - 2020",
    title: "Frontend Engineer",
    company: "互联网业务团队",
    summary: "参与运营平台、活动系统和数据看板建设，积累复杂交互与工程化经验。"
  }
];

export const projects: ProjectItem[] = [
  {
    name: "企业级控制台系统",
    role: "架构设计 / 前端负责人",
    summary: "负责模块划分、权限系统、可视化工作台与组件标准化，支撑多业务线复用。",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"]
  },
  {
    name: "内容与博客平台",
    role: "全栈实现",
    summary: "搭建内容模型、渲染链路、SEO 输出和品牌化视觉，兼顾可维护性与表达力。",
    stack: ["Next.js", "Markdown", "Tailwind CSS", "Prisma"]
  }
];

export const contacts: ContactItem[] = [
  { label: "Email", value: "pilot@next-item.dev", href: "mailto:pilot@next-item.dev" },
  { label: "GitHub", value: "github.com/aoleyun", href: "https://github.com/aoleyun" },
  { label: "X / Twitter", value: "@pilot_signal", href: "https://x.com" }
];

export const tracks: TrackItem[] = [
  {
    title: "Neon Run",
    artist: "SoundHelix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Midnight Grid",
    artist: "SoundHelix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Zero Pulse",
    artist: "SoundHelix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];
