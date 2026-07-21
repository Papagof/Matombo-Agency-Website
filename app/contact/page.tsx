import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");
const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
  "Hi Matombo Agency, I'd like to book a strategy call."
)}`;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Matombo Agency. Tell us about your hotel, shortlet, restaurant, lounge, or development and we’ll show you where your next 20% of revenue is hiding.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="Book a strategy call"
        description="Tell us about your property. We’ll come back within one business day with a clear, no-obligation read on your biggest growth opportunity."
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              Prefer to reach us directly?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We work with hospitality brands across Nigeria, from our base in
              Lagos. However you like to talk, we’re listening.
            </p>

            <ul className="mt-8 space-y-6">
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone">
                <span className="flex flex-col gap-0.5">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="text-foreground/80 hover:text-foreground"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </ContactRow>
              <ContactRow icon={<WhatsAppIcon className="h-5 w-5" />} label="WhatsApp">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Chat with us on WhatsApp
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Office">
                <span className="text-foreground/80">{siteConfig.address}</span>
              </ContactRow>
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6">
              <p className="font-serif text-lg font-semibold">
                What happens next?
              </p>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. We review your details and current funnel.</li>
                <li>2. We send a short, tailored opportunity read.</li>
                <li>3. We book a 30-minute call — no pressure, no pitch deck.</li>
              </ol>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 1.995.578 3.855 1.578 5.421L2 22l4.696-1.564a9.94 9.94 0 0 0 5.308 1.528h.004c5.518 0 9.992-4.476 9.992-9.994A9.937 9.937 0 0 0 19.078 4.9 9.938 9.938 0 0 0 12.004 2zm0 18.166h-.003a8.15 8.15 0 0 1-4.156-1.14l-.298-.177-3.093 1.03 1.043-3.017-.194-.31a8.145 8.145 0 0 1-1.253-4.36c0-4.508 3.67-8.176 8.18-8.176a8.13 8.13 0 0 1 5.786 2.397 8.12 8.12 0 0 1 2.393 5.784c-.002 4.508-3.67 8.176-8.178 8.176z" />
    </svg>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5">{children}</p>
      </div>
    </li>
  );
}
