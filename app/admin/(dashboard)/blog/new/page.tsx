import { createPost } from "../actions";
import { PostForm } from "../post-form";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-semibold">New Post</h1>
      <PostForm action={createPost} submitLabel="Publish" />
    </div>
  );
}
