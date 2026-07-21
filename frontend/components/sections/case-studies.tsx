import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/frontend/content";
import { Badge } from "@/frontend/components/ui/badge";
import { SectionHeading } from "@/frontend/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/frontend/components/reveal";

export function CaseStudies() {
  return (
    <section id="work" className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Results that book out calendars"
        description="A few of the properties, venues, and developments we’ve helped fill — with the numbers that mattered to them."
      />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/90 text-foreground backdrop-blur"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl font-semibold text-primary">
                    {study.metric}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {study.metricLabel}
                  </span>
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-3 font-serif text-xl font-semibold">
                  <span>{study.title}</span>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">
                    {study.client}
                  </span>{" "}
                  — {study.summary}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
