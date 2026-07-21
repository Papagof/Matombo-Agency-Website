import { Reveal } from "@/frontend/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
