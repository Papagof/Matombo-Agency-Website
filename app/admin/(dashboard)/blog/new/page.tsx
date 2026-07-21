import { createPost } from "@/backend/actions/blog";
import { PostForm } from "@/frontend/components/admin/post-form";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-semibold">New Post</h1>
      <PostForm action={createPost} submitLabel="Publish" />
    </div>
  );
}
