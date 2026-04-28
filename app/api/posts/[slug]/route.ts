import { getPostBySlug } from "@/lib/content";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }

  return Response.json(post);
}
