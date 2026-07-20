"use client";

import * as React from "react";

import { updateLeadStatus } from "./actions";

const STATUSES = ["new", "contacted", "qualified", "won", "lost"] as const;

const STATUS_STYLES: Record<string, string> = {
  new: "bg-primary/10 text-primary",
  contacted: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  qualified: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  won: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  lost: "bg-muted text-muted-foreground",
};

export function LeadStatusSelect({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const [value, setValue] = React.useState(status);
  const [pending, startTransition] = React.useTransition();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    setValue(next);
    startTransition(() => {
      updateLeadStatus(id, next);
    });
  }

  return (
    <select
      value={value}
      onChange={onChange}
      disabled={pending}
      className={`rounded-full border-0 px-3 py-1 text-xs font-medium capitalize outline-none disabled:opacity-60 ${STATUS_STYLES[value] ?? ""}`}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
