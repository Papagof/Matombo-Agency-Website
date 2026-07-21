import { cn } from "@/frontend/utils";
import { Reveal } from "@/frontend/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-serif text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
