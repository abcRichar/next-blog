import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta, HeadingItem } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content", "posts");

type Frontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  cover: string;
  featured?: boolean;
};

function slugifyHeading(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\u4e00-\u9fa5\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string): HeadingItem[] {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^###?\s/, "").trim();
      return {
        id: slugifyHeading(text),
        text,
        level
      } satisfies HeadingItem;
    });
}

function parsePostFile(fileName: string): BlogPost {
  const fullPath = path.join(postsDirectory, fileName);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const meta = data as Frontmatter;

  return {
    ...meta,
    content,
    headings: extractHeadings(content)
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePostFile)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostMetas(): BlogPostMeta[] {
  return getAllPosts().map(({ content, headings, ...meta }) => meta);
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((post) => post.tags))].sort();
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: posts[index + 1],
    next: posts[index - 1]
  };
}
