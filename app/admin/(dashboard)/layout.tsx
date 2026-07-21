import Link from "next/link";
import { LogOut } from "lucide-react";

import { signOut } from "@/backend/actions/auth";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin/leads" className="font-serif text-lg font-semibold">
              Matombo Admin
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/admin/leads"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Leads
              </Link>
              <Link
                href="/admin/blog"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Blog Posts
              </Link>
            </nav>
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="container py-10">{children}</main>
    </div>
  );
}
