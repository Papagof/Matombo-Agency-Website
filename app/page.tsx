import { Hero } from "@/frontend/components/sections/hero";
import { LogoMarquee } from "@/frontend/components/sections/logo-marquee";
import { Industries } from "@/frontend/components/sections/industries";
import { Services } from "@/frontend/components/sections/services";
import { CaseStudies } from "@/frontend/components/sections/case-studies";
import { Process } from "@/frontend/components/sections/process";
import { Stats } from "@/frontend/components/sections/stats";
import { Testimonials } from "@/frontend/components/sections/testimonials";
import { Pricing } from "@/frontend/components/sections/pricing";
import { Faq } from "@/frontend/components/sections/faq";
import { CtaBanner } from "@/frontend/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Industries />
      <Services />
      <CaseStudies />
      <Process />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  );
}
