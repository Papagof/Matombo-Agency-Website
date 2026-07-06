import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Matombo Agency. Tell us about your hotel, shortlet, restaurant, lounge, or development and we’ll show you where your next 20% of revenue is hiding.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="Book a strategy call"
        description="Tell us about your property. We’ll come back within one business day with a clear, no-obligation read on your biggest growth opportunity."
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              Prefer to reach us directly?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We work with hospitality brands across Nigeria, from our base in
              Lagos. However you like to talk, we’re listening.
            </p>

            <ul className="mt-8 space-y-6">
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone">
                <span className="flex flex-col gap-0.5">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="text-foreground/80 hover:text-foreground"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </ContactRow>
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Office">
                <span className="text-foreground/80">{siteConfig.address}</span>
              </ContactRow>
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6">
              <p className="font-serif text-lg font-semibold">
                What happens next?
              </p>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. We review your details and current funnel.</li>
                <li>2. We send a short, tailored opportunity read.</li>
                <li>3. We book a 30-minute call — no pressure, no pitch deck.</li>
              </ol>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5">{children}</p>
      </div>
    </li>
  );
}
