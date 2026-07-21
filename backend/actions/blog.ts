"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/backend/supabase/server";
import { parsePost } from "@/backend/validation/blogPost";

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
