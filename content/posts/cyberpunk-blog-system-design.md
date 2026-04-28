---
slug: cyberpunk-blog-system-design
title: 用 Next.js 设计一套有品牌感的赛博朋克个人博客
excerpt: 不是只做一层皮肤，而是把风格、数据结构、页面节奏和可扩展性一起设计出来。
date: 2026-04-12
readingTime: 7 min
category: 架构与设计
tags:
  - Next.js
  - Design System
  - Motion
cover: /covers/cover-grid.svg
featured: true
---

# 用 Next.js 设计一套有品牌感的赛博朋克个人博客

这个项目的重点不是把黑底和荧光色堆满，而是让 **内容、交互、视觉语言** 三层彼此匹配。

## 设计原则

- 页面信息层级要清晰，炫光不能压过正文
- 数据结构先按真实博客系统组织，后续切 Prisma + PostgreSQL 不需要推翻模型
- 动效只服务于感知，不做无意义的大面积乱动

## 页面拆分

### Home

首页承担品牌感、身份介绍、技术栈展示和最新内容入口。

### Archive

归档页负责高密度浏览，因此必须给出标签筛选、时间归类和卡片 hover 反馈。

### About

关于页需要把经历、技术路线和联系方式组织成可信的专业形象，而不是简历截图。

## 代码片段

内容系统必须支持 Markdown 和代码高亮：

```tsx
const project = {
  framework: "Next.js",
  motion: "framer-motion",
  content: "markdown"
};

console.log(project);
```

## 下一步

- 接入 Prisma + PostgreSQL
- 增加管理后台
- 增加文章搜索与 SEO 元信息生成
