export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  cover: string;
  featured?: boolean;
  content: string;
  headings: HeadingItem[];
};

export type BlogPostMeta = Omit<BlogPost, "content" | "headings">;

export type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type StackItem = {
  name: string;
  type: string;
  glow: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export type ProjectItem = {
  name: string;
  role: string;
  summary: string;
  stack: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type TrackItem = {
  title: string;
  artist: string;
  src: string;
};
