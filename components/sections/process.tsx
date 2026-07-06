import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Process() {
  return (
    <section id="process" className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from empty to booked"
          description="No mystery, no month-long onboarding black holes. Four steps, run on a weekly rhythm."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
        />

        <StaggerGroup className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/20 md:block"
          />
          {processSteps.map((step) => (
            <StaggerItem key={step.number} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary font-serif text-lg font-semibold text-gold">
                {step.number}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
