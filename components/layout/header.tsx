"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" variant="gold">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-[80vh]" : "max-h-0 border-t-transparent"
        )}
      >
        <nav
          className="container flex flex-col gap-1 py-4"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-lg font-medium text-foreground/90 transition-colors hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" size="lg" className="mt-3 w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Book a Strategy Call
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
