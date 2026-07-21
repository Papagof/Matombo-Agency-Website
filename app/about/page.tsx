import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { stats, processSteps } from "@/frontend/content";
import { Button } from "@/frontend/components/ui/button";
import { PageHero } from "@/frontend/components/page-hero";
import { AnimatedCounter } from "@/frontend/components/animated-counter";
import { Reveal, StaggerGroup, StaggerItem } from "@/frontend/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Matombo Agency is a hospitality-only growth studio. We measure our work in occupancy, covers, and units sold — not clicks.",
};

const values = [
  {
    title: "Hospitality first",
    body: "We only work in hospitality. That focus means we speak your language — RevPAR, OTAs, covers, absorption rates — from day one.",
  },
  {
    title: "Revenue, not vanity",
    body: "Reach is easy to buy and easy to fake. We tie every campaign to bookings, reservations, and sales you can bank.",
  },
  {
    title: "Craft in everything",
    body: "Your brand is an experience. Our creative, our sites, and our campaigns are held to the standard of your best suite.",
  },
  {
    title: "Partners, not vendors",
    body: "We sit on your side of the table, share our data openly, and treat your P&L like our own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A growth studio built only for hospitality"
        description="Matombo Agency exists because hospitality brands were being handed generic marketing playbooks that ignored how the business actually works. We fill rooms, seats, and units — nothing else."
      />

      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                alt="The Matombo team collaborating in a warm studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                We started in the industry, not in an agency
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Our founders came up running revenue for boutique hotels and
                  independent restaurants. We felt, first-hand, how much margin
                  quietly leaks to the OTAs and how hard it is to fill a
                  midweek dining room.
                </p>
                <p>
                  So we built the agency we wished we’d had — one that
                  understands seasonality, booking engines, and what a
                  five-star review is really worth. Today, from our base in
                  Lagos, we partner with operators across Nigeria to grow
                  direct revenue.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-serif text-4xl font-semibold text-gold md:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold md:text-4xl">
            What we stand for
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h3 className="font-serif text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-semibold md:text-4xl">
              How an engagement runs
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-serif text-3xl font-semibold text-gold">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
