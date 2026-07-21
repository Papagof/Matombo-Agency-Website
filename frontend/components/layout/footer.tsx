import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { siteConfig, navItems } from "@/frontend/content";
import { Logo } from "@/frontend/components/layout/logo";
import { NewsletterForm } from "@/frontend/components/forms/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink
                href={siteConfig.socials.instagram}
                label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.twitter} label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-sm">
            <h3 className="font-serif text-lg font-semibold">
              Hospitality growth, in your inbox
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monthly playbooks on direct bookings, reservations, and
              pre-launch demand. No fluff.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      {children}
    </a>
  );
}
