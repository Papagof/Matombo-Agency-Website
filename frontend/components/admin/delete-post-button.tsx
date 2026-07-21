"use client";

import * as React from "react";
import { Trash2, Loader2 } from "lucide-react";

import { deletePost } from "@/backend/actions/blog";

export function DeletePostButton({ id, title }: { id: string; title: string }) {
  const [pending, startTransition] = React.useTransition();

  function onClick() {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;
    startTransition(() => {
      deletePost(id);
    });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="inline-flex items-center gap-1.5 text-sm text-destructive transition-colors hover:text-destructive/80 disabled:opacity-60"
    >
      {pending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Trash2 className="h-3.5 w-3.5" />
      )}
      Delete
    </button>
  );
}
