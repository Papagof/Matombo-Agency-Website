import { notFound } from "next/navigation";

import { getPostById } from "@/backend/services/blog";
import { updatePost } from "@/backend/actions/blog";
import { PostForm, type PostFormValues } from "@/frontend/components/admin/post-form";

export default async function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: post } = await getPostById(params.id);

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
