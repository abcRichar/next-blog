---
slug: markdown-content-pipeline
title: 让 Markdown 内容系统从一开始就可扩展
excerpt: 先用 mock 数据没问题，但结构必须从第一天就对数据库友好。
date: 2026-02-16
readingTime: 6 min
category: 内容系统
tags:
  - Markdown
  - API
  - Prisma
cover: /covers/cover-command.svg
featured: false
---

# 让 Markdown 内容系统从一开始就可扩展

这类博客项目最容易犯的错误是把内容直接写死在页面组件里。

## 更稳妥的方式

- 列表页依赖统一的文章摘要结构
- 详情页读取完整正文内容
- API 输出和页面消费使用同一份字段定义

## 推荐字段

- slug
- title
- excerpt
- date
- category
- tags
- cover
- content

## 迁移思路

当你需要迁移到 Prisma + PostgreSQL 时，只需要把数据读取层从 mock 换成数据库查询，组件层基本不动。
