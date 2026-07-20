"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type PostFormValues = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  published: boolean;
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Saving…
        </>
      ) : (
        label
      )}
    </Button>
  );
}

export function PostForm({
  action,
  initial,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  initial?: PostFormValues;
  submitLabel: string;
}) {
  const [title, setTitle] = React.useState(initial?.title ?? "");
  const [slug, setSlug] = React.useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = React.useState(Boolean(initial));

  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setTitle(next);
    if (!slugTouched) setSlug(slugify(next));
  }

  return (
    <form
      action={action}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            required
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            required
            pattern="[a-z0-9]+(-[a-z0-9]+)*"
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          required
          defaultValue={initial?.excerpt}
          className="min-h-[80px]"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" required defaultValue={initial?.author} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            id="tags"
            name="tags"
            placeholder="Hotel Marketing, Direct Bookings"
            defaultValue={initial?.tags.join(", ")}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cover">Cover image URL</Label>
          <Input
            id="cover"
            name="cover"
            type="url"
            required
            defaultValue={initial?.cover}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="coverAlt">Cover image alt text</Label>
          <Input
            id="coverAlt"
            name="coverAlt"
            required
            defaultValue={initial?.coverAlt}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown / MDX)</Label>
        <Textarea
          id="content"
          name="content"
          required
          defaultValue={initial?.content}
          className="min-h-[400px] font-mono text-sm"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="published"
          name="published"
          type="checkbox"
          defaultChecked={initial?.published ?? true}
          className="h-4 w-4 rounded border-input"
        />
        <Label htmlFor="published" className="cursor-pointer">
          Published (visible on the public blog)
        </Label>
      </div>

      <SubmitButton label={submitLabel} />
    </form>
  );
}
