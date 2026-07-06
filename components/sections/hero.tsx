"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { hero } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % hero.images.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,hsl(var(--gold)/0.12),transparent),radial-gradient(50%_50%_at_0%_100%,hsl(var(--primary)/0.08),transparent)]"
      />
      <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" variant="gold">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>
              Rated 5.0 by 140+ hospitality operators across Nigeria
            </span>
          </motion.div>
        </div>

        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-2xl">
            {hero.images.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`object-cover transition-opacity duration-1000 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {hero.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating stat card */}
          {!reduce && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 bottom-10 hidden rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur sm:block"
            >
              <p className="font-serif text-3xl font-semibold text-primary">
                +80%
              </p>
              <p className="text-xs text-muted-foreground">
                direct bookings, on average
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
