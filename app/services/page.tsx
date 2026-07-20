import type { Metadata } from "next";

import { services } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything Matombo Agency does to turn attention into confirmed bookings, reservations, and sales — SEO, paid social, content, funnels, CRM, and web design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="A full growth team for your property"
        description="Everything you need to turn attention into confirmed bookings, reservations, and sales — under one roof."
      />

      <section className="container py-16 md:py-24">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-serif text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <CtaBanner />
    </>
  );
}
