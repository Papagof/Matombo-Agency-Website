import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 font-serif text-2xl font-semibold tracking-tight md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-serif text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-5 text-lg leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-lg text-foreground/90 marker:text-gold"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-lg text-foreground/90 marker:text-gold"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: ({ href = "", ...props }) => (
    <Link
      href={href}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-gold pl-5 font-serif text-xl italic text-foreground/80"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  img: ({ src = "", alt = "" }) => (
    <span className="relative mt-8 block aspect-[16/9] overflow-hidden rounded-xl border border-border">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </span>
  ),
};

export function MdxContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
