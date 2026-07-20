import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { updatePost } from "../actions";
import { PostForm, type PostFormValues } from "../post-form";

export default async function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, content, author, cover, cover_alt, tags, published")
    .eq("id", params.id)
    .maybeSingle();

  if (!post) notFound();

  const initial: PostFormValues = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    cover: post.cover,
    coverAlt: post.cover_alt,
    tags: post.tags,
    published: post.published,
  };

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-semibold">Edit Post</h1>
      <PostForm action={updatePostWithId} initial={initial} submitLabel="Save changes" />
    </div>
  );
}
