import { stats } from "@/frontend/content";
import { AnimatedCounter } from "@/frontend/components/animated-counter";
import { StaggerGroup, StaggerItem } from "@/frontend/components/reveal";

export function Stats() {
  return (
    <section className="container py-16 md:py-20">
      <StaggerGroup className="grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-4 md:p-12">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary md:text-5xl">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
