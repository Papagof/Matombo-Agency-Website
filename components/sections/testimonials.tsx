"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const count = testimonials.length;

  const go = React.useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [index, count]
  );

  React.useEffect(() => {
    const id = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(id);
  }, [index, go]);

  const t = testimonials[index];

  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="In their words"
          title="Operators who’d recommend us in a heartbeat"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
            <Quote className="h-10 w-10 text-gold/40" />
            <div className="relative min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block font-medium">{t.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {t.role}, {t.brand}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
