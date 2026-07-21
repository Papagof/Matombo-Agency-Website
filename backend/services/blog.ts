import readingTime from "reading-time";

import { supabasePublic } from "@/backend/supabase/public";
import { createClient } from "@/backend/supabase/server";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  cover: string;
  coverAlt: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

type BlogPostRow = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  cover: string;
  cover_alt: string;
  published_at: string;
};

function toPostMeta(row: BlogPostRow): PostMeta {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: row.published_at,
    author: row.author,
    tags: row.tags,
    cover: row.cover,
    coverAlt: row.cover_alt,
    readingTime: readingTime(row.content).text,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const { data, error } = await supabasePublic
    .from("blog_posts")
    .select("slug, title, excerpt, content, author, tags, cover, cover_alt, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data.map(toPostMeta);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabasePublic
    .from("blog_posts")
    .select("slug, title, excerpt, content, author, tags, cover, cover_alt, published_at")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) return null;
  return { ...toPostMeta(data), content: data.content };
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabasePublic
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error || !data) return [];
  return data.map((row) => row.slug);
}

export async function listAdminPosts() {
  const supabase = createClient();
  return supabase
    .from("blog_posts")
    .select("id, slug, title, author, published, updated_at")
    .order("published_at", { ascending: false });
}

export async function getPostById(id: string) {
  const supabase = createClient();
  return supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, content, author, cover, cover_alt, tags, published")
    .eq("id", id)
    .maybeSingle();
}
