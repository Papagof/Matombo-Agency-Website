import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { caseStudies } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [study.image],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <article>
        <div className="container pt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
        </div>

        <header className="container pt-8">
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="gold">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{study.client}</p>
        </header>

        <div className="container mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container mt-12 grid gap-12 pb-8 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div className="prose-editorial max-w-none space-y-5 text-lg leading-relaxed text-foreground/90">
            <p className="text-xl font-medium text-foreground">
              {study.summary}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              The challenge
            </h2>
            <p className="text-muted-foreground">
              Like so many hospitality operators, {study.client} was leaving
              revenue on the table — leaning on channels that eroded margin and
              a funnel that quietly lost prospects on the way to conversion.
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              What we did
            </h2>
            <p className="text-muted-foreground">
              We ran our Discover → Strategy → Launch → Optimize process:
              auditing the funnel, rebuilding the path to conversion, and
              deploying campaigns tuned to real revenue. Every week we read the
              data and reinvested into what worked.
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              The result
            </h2>
            <p className="text-muted-foreground">
              Within the engagement, {study.client} achieved{" "}
              <span className="font-semibold text-foreground">
                {study.metric} {study.metricLabel}
              </span>{" "}
              — compounding results that continue to pay back well beyond the
              campaign window.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <p className="font-serif text-5xl font-semibold text-primary">
                {study.metric}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {study.metricLabel}
              </p>
              <div className="mt-6 border-t border-border pt-6 text-left text-sm">
                <p className="text-muted-foreground">Client</p>
                <p className="font-medium">{study.client}</p>
                <p className="mt-3 text-muted-foreground">Sector</p>
                <p className="font-medium">{study.category}</p>
              </div>
              <Button asChild variant="gold" className="mt-6 w-full">
                <Link href="/contact">Get results like these</Link>
              </Button>
            </div>
          </aside>
        </div>
      </article>

      <section className="container border-t border-border py-16">
        <h2 className="font-serif text-2xl font-semibold">More work</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/work/${o.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div>
                <p className="font-serif text-lg font-semibold">{o.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {o.metric} {o.metricLabel}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
