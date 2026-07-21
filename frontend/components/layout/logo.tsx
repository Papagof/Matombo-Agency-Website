import Link from "next/link";
import { cn } from "@/frontend/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-serif text-xl font-semibold tracking-tight",
        className
      )}
      aria-label="Matombo Agency home"
    >
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold transition-transform group-hover:scale-105"
      >
        MA
      </span>
      <span>
        Matombo Agency<span className="text-gold">.</span>
      </span>
    </Link>
  );
}
