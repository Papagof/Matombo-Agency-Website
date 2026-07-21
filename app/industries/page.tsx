import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { industries } from "@/frontend/content";
import { Button } from "@/frontend/components/ui/button";
import { PageHero } from "@/frontend/components/page-hero";
import { Reveal } from "@/frontend/components/reveal";
import { CtaBanner } from "@/frontend/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Matombo Agency goes deep on three hospitality verticals: hotels & shortlets, restaurants & lounges, and real estate.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we focus"
        title="Three worlds we know intimately"
        description="We don’t market everything to everyone. Here’s exactly what we do for each of the hospitality verticals we serve."
      />

      <section className="container py-16 md:py-24">
        <div className="space-y-20 md:space-y-28">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={industry.slug}
                id={industry.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 scroll-mt-24"
              >
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div className={flip ? "lg:order-1" : ""}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl font-semibold md:text-4xl">
                    {industry.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {industry.blurb}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {industry.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-8">
                    <Link href="/contact">
                      Grow this business <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
