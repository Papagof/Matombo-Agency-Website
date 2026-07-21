import { faqs } from "@/frontend/content";
import { SectionHeading } from "@/frontend/components/section-heading";
import { Reveal } from "@/frontend/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/frontend/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Questions"
          title="The things operators ask us first"
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
