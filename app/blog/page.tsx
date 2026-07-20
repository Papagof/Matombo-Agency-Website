import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Hospitality marketing playbooks from Matombo Agency — direct bookings, restaurant growth, and real estate pre-launch strategy.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Playbooks for filling rooms, seats & units"
        description="Practical, no-fluff marketing strategy for hotels, restaurants, lounges, and property developments."
      />

      <section className="container py-16 md:py-24">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-14 grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.cover}
                alt={featured.coverAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <Badge key={t} variant="gold">
                    {t}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formatDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {featured.readingTime}
                </span>
              </div>
            </div>
          </Link>
        )}

        <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 pt-4 text-xs text-muted-foreground">
                      <span>{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
