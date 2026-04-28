import { posts, techStack, profile } from "@/data/site";
import { getAllPosts, getAllTags } from "@/lib/content";

export async function GET() {
  return Response.json({
    profile,
    techStack,
    posts: getAllPosts().map(({ content, headings, ...meta }) => meta),
    tags: getAllTags()
  });
}
