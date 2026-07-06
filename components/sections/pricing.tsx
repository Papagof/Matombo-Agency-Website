import Link from "next/link";
import { Check } from "lucide-react";

import { pricingTiers } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Pricing() {
  return (
    <section id="pricing" className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Engagements"
        title="Plans that scale with your calendar"
        description="Transparent monthly retainers. No long tie-ins, no commission on your revenue — ever."
      />

      <StaggerGroup className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <StaggerItem key={tier.name} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm",
                tier.popular
                  ? "border-gold ring-1 ring-gold/40 shadow-lg lg:scale-[1.03]"
                  : "border-border"
              )}
            >
              {tier.popular && (
                <Badge
                  variant="gold"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground"
                >
                  Most Popular
                </Badge>
              )}
              <h3 className="font-serif text-2xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-semibold">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={tier.popular ? "gold" : "outline"}
                className="mt-8 w-full"
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Need something bespoke for a group or portfolio?{" "}
        <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
          Let’s design a retainer.
        </Link>
      </p>
    </section>
  );
}
