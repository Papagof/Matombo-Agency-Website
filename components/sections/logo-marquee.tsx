import { clientLogos } from "@/lib/content";

export function LogoMarquee() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="container">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading hospitality brands
        </p>
      </div>
      <div className="group relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-serif text-xl font-medium text-foreground/45 transition-colors hover:text-foreground/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
