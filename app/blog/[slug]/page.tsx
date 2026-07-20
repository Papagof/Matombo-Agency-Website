import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MdxContent } from "@/components/mdx-content";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="pb-8">
      <div className="container pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the Journal
        </Link>
      </div>

      <header className="container mx-auto max-w-3xl pt-8 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {post.tags.map((t) => (
            <Badge key={t} variant="gold">
              {t}
            </Badge>
          ))}
        </div>
        <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {post.readingTime}
          </span>
        </div>
      </header>

      <div className="container mt-10">
        <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border border-border shadow-lg">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto mt-12 max-w-2xl">
        <MdxContent source={post.content} />
      </div>

      {related.length > 0 && (
        <div className="container mx-auto mt-16 max-w-2xl border-t border-border pt-10">
          <h2 className="font-serif text-2xl font-semibold">Keep reading</h2>
          <div className="mt-6 space-y-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={r.cover}
                    alt={r.coverAlt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-serif font-semibold">
                    {r.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {r.readingTime}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
