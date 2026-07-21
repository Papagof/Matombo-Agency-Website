import { z } from "zod";

const postSchema = z.object({
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only"),
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  author: z.string().min(2),
  cover: z.string().url(),
  coverAlt: z.string().min(3),
  tags: z.string(),
  published: z.string().optional(),
});

export function parsePost(formData: FormData) {
  const raw = {
    slug: formData.get("slug"),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    author: formData.get("author"),
    cover: formData.get("cover"),
    coverAlt: formData.get("coverAlt"),
    tags: formData.get("tags"),
    published: formData.get("published") ?? undefined,
  };
  const parsed = postSchema.parse(raw);
  return {
    slug: parsed.slug,
    title: parsed.title,
    excerpt: parsed.excerpt,
    content: parsed.content,
    author: parsed.author,
    cover: parsed.cover,
    cover_alt: parsed.coverAlt,
    tags: parsed.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    published: parsed.published === "on",
  };
}
