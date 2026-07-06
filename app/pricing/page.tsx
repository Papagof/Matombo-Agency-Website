import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly retainers for hospitality growth. No long tie-ins, no commission on your revenue. Starter, Growth, and bespoke Retainer plans.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagements"
        title="Simple pricing, serious growth"
        description="Choose the level of firepower your property needs. Every plan is a flat monthly retainer — we never take a cut of the revenue we help you earn."
      />
      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  );
}
