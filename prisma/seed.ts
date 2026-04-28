import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const postsDirectory = path.join(process.cwd(), "content", "posts");

async function main() {
  const files = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith(".md"));

  for (const fileName of files) {
    const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
    const { data, content } = matter(raw);
    const tags = Array.isArray(data.tags) ? data.tags : [];

    const post = await prisma.post.upsert({
      where: { slug: data.slug },
      update: {
        title: data.title,
        excerpt: data.excerpt,
        content,
        cover: data.cover,
        date: new Date(data.date),
        readingTime: data.readingTime,
        category: data.category,
        featured: Boolean(data.featured)
      },
      create: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        content,
        cover: data.cover,
        date: new Date(data.date),
        readingTime: data.readingTime,
        category: data.category,
        featured: Boolean(data.featured)
      }
    });

    await prisma.postTag.deleteMany({ where: { postId: post.id } });

    for (const tagName of tags) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName }
      });

      await prisma.postTag.create({
        data: {
          postId: post.id,
          tagId: tag.id
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
