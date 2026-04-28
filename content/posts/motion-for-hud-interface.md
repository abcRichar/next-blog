---
slug: motion-for-hud-interface
title: HUD 风格界面的动画，不该只是 hover 发光
excerpt: 真正高级的动效是节奏控制、状态反馈和层级过渡，而不是每个元素都在闪。
date: 2026-03-28
readingTime: 5 min
category: 交互设计
tags:
  - Framer Motion
  - UX
  - Cyberpunk
cover: /covers/cover-reactor.svg
featured: true
---

# HUD 风格界面的动画，不该只是 hover 发光

很多页面的问题不是不够炫，而是 **动画没有信息价值**。

## 应该保留的动效

- 页面切换时的轻量位移与透明度过渡
- 卡片 hover 时边框与阴影的反馈
- 拖拽组件时的位置响应与吸附反馈

## 不应该滥用的动效

- 长时间无意义的浮动
- 大面积高亮闪烁
- 影响阅读的扫描噪点

## 一个简单的按钮反馈

```tsx
<motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -2 }}>
  Launch
</motion.button>
```

动效的目标不是喧宾夺主，而是让页面更像一块正在运行的终端。
