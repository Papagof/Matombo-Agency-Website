import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ctaBanner } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBanner() {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-16 text-center md:px-12 md:py-24">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80"
            alt="Warm hospitality interior at golden hour"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              {ctaBanner.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-primary-foreground/80">
              {ctaBanner.subtitle}
            </p>
            <Button asChild size="lg" variant="gold" className="mt-8">
              <Link href={ctaBanner.cta.href}>
                {ctaBanner.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
