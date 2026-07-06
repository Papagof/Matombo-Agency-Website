import Image from "next/image";
import { Check } from "lucide-react";

import { industries } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Industries() {
  return (
    <section id="industries" className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Where we focus"
        title="Three worlds we know intimately"
        description="We don’t market everything to everyone. We go deep on the hospitality verticals where experience compounds."
      />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <StaggerItem key={industry.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-white">
                    {industry.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-muted-foreground">{industry.blurb}</p>
                  <ul className="mt-5 space-y-2.5">
                    {industry.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
