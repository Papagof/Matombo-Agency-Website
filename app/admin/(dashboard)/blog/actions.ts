"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";

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

function parsePost(formData: FormData) {
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

export async function createPost(formData: FormData) {
  const post = parsePost(formData);
  const supabase = createClient();
  const { error } = await supabase.from("blog_posts").insert(post);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function updatePost(id: string, formData: FormData) {
  const post = parsePost(formData);
  const supabase = createClient();
  const { error } = await supabase.from("blog_posts").update(post).eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}
