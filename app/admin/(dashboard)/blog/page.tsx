import Link from "next/link";
import { Plus, Pencil } from "lucide-react";

import { listAdminPosts } from "@/backend/services/blog";
import { formatDate } from "@/frontend/utils";
import { Badge } from "@/frontend/components/ui/badge";
import { Button } from "@/frontend/components/ui/button";
import { DeletePostButton } from "@/frontend/components/admin/delete-post-button";

export const dynamic = "force-dynamic";

type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  author: string;
  published: boolean;
  updated_at: string;
};

export default async function AdminBlogPage() {
  const { data: posts, error } = await listAdminPosts();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl font-semibold">Blog Posts</h1>
        <Button asChild size="sm">
          <Link href="/admin/blog/new">
            <Plus className="h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>

      {error && (
        <p className="mt-6 text-sm text-destructive">
          Failed to load posts: {error.message}
        </p>
      )}

      {!error && (posts as BlogPostRow[] | null)?.length === 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          No posts yet. Create your first one.
        </p>
      )}

      {!error && posts && posts.length > 0 && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Author</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Updated</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {(posts as BlogPostRow[]).map((post) => (
                <tr key={post.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-4 align-top font-medium">{post.title}</td>
                  <td className="px-4 py-4 align-top text-muted-foreground">
                    {post.author}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <Badge variant={post.published ? "gold" : "outline"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 align-top text-muted-foreground">
                    {formatDate(post.updated_at)}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Pencil className="h-3.5 w-3.5" /> Edit
                      </Link>
                      <DeletePostButton id={post.id} title={post.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
