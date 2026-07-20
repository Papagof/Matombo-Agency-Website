import {
  BedDouble,
  UtensilsCrossed,
  Building2,
  Search,
  Megaphone,
  Camera,
  CalendarCheck,
  Mail,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Matombo Agency",
  shortName: "Matombo",
  url: "https://matomboagency.com",
  description:
    "Matombo Agency is the growth partner for hospitality brands — hotels & shortlets, restaurants & lounges, and real estate. We fill rooms, seats, and units.",
  tagline: "Growth marketing for hospitality brands.",
  email: "contact@matomboagency.com",
  phones: ["+234 802 313 6685", "+234 706 592 8485"],
  address:
    "6 Peace Close, Happyland Estate, Lekki/Epe Expressway, Lagos, Nigeria",
  socials: {
    instagram: "https://instagram.com/matomboagency",
    linkedin: "https://linkedin.com/company/matomboagency",
    twitter: "https://twitter.com/matomboagency",
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Hospitality growth studio",
  title: "We fill your rooms, seats, and units.",
  subtitle:
    "Matombo Agency is the marketing partner for hotels, shortlets, restaurants, lounges, and property developers who want fewer empty nights, tables, and listings — and more revenue that lands directly. We turn attention into revenue — built specifically for hospitality and real estate brands that want to win their market.",
  primaryCta: { label: "Book a Strategy Call", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/work" },
  images: [
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      alt: "Warmly lit boutique hotel suite with a made bed and evening light",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Candlelit restaurant dining room with guests",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern real estate residence exterior at dusk",
    },
  ],
};

export const clientLogos: string[] = [
  "The Cedar House",
  "Maréa Lounge",
  "Northbank Residences",
  "Villa Serai",
  "Ember & Oak",
  "Harbour Point Hotel",
  "Casa Lumière",
  "The Reef Collection",
];

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    slug: "hotels-shortlets",
    name: "Hotels & Shortlets",
    icon: BedDouble,
    blurb:
      "We move guests off the OTAs and onto your own booking engine — protecting your margin and your brand experience from the very first search.",
    bullets: [
      "Direct-booking funnels that beat the OTAs",
      "Metasearch & Google Hotel Ads management",
      "Seasonal occupancy & rate campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Elegant hotel lobby with warm lighting",
  },
  {
    slug: "restaurants-lounges",
    name: "Restaurants & Lounges",
    icon: UtensilsCrossed,
    blurb:
      "We turn the scroll into a reservation — building crave-worthy content and local demand that keeps every seating full, midweek included.",
    bullets: [
      "Reservation-driving social & content",
      "Local search & Google Business dominance",
      "Event, launch & tasting-menu campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Stylish restaurant interior with warm ambient lighting",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    blurb:
      "We create desire before the show home is even finished — filling waitlists and closing inventory ahead of launch for developers and agencies.",
    bullets: [
      "Pre-launch waitlist & lead campaigns",
      "High-intent paid search for buyers",
      "Development brand & sales-suite content",
    ],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Contemporary luxury property exterior at twilight",
  },
];

export type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const services: Service[] = [
  {
    title: "SEO & Local Search",
    icon: Search,
    description:
      "Rank for the searches that fill your calendar — from ‘boutique hotel near me’ to ‘best rooftop lounge downtown’ — with technical SEO and Google Business dominance.",
  },
  {
    title: "Paid Social & Ads",
    icon: Megaphone,
    description:
      "Meta, TikTok, and Google campaigns tuned to bookings and reservations, not vanity reach. Every dollar is measured against revenue that lands.",
  },
  {
    title: "Content & Photography Direction",
    icon: Camera,
    description:
      "We art-direct the imagery that sells a stay, a table, or a home — shot lists, styling, reels, and editorial that make your property impossible to scroll past.",
  },
  {
    title: "Booking & Reservation Funnels",
    icon: CalendarCheck,
    description:
      "We audit and rebuild the path from click to confirmed — booking engines, reservation widgets, and abandonment recovery that reclaim lost revenue.",
  },
  {
    title: "Email & CRM Marketing",
    icon: Mail,
    description:
      "Win-back, pre-arrival, and loyalty flows that turn one stay or visit into a lifetime of repeat direct bookings — without touching a commission fee.",
  },
  {
    title: "Website & Web Design",
    icon: MonitorSmartphone,
    description:
      "Fast, beautiful, conversion-first websites with your booking engine built in — designed to feel like your best room and load like your fastest one.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: "Hotel" | "Restaurant" | "Real Estate";
  metric: string;
  metricLabel: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cedar-house-direct-bookings",
    client: "The Cedar House",
    title: "A boutique hotel that broke up with the OTAs",
    category: "Hotel",
    metric: "+80%",
    metricLabel: "direct bookings in 6 months",
    summary:
      "We rebuilt the booking funnel, launched Google Hotel Ads, and ran a pre-arrival email program that shifted guests off Booking.com and onto direct.",
    tags: ["Hotel", "Direct Bookings", "SEO"],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Boutique hotel room with a view",
  },
  {
    slug: "marea-lounge-reservations",
    client: "Maréa Lounge",
    title: "Filling midweek tables at a waterfront lounge",
    category: "Restaurant",
    metric: "+45%",
    metricLabel: "reservation rate",
    summary:
      "A crave-worthy content engine plus local search domination turned quiet Tuesdays into a two-week waitlist for the chef’s table.",
    tags: ["Restaurant", "Paid Social", "Local SEO"],
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Busy stylish restaurant with diners",
  },
  {
    slug: "northbank-residences-prelaunch",
    client: "Northbank Residences",
    title: "Sold out a development before the show home opened",
    category: "Real Estate",
    metric: "Sold out",
    metricLabel: "3 months pre-launch",
    summary:
      "A waitlist campaign and high-intent paid search built a qualified buyer pipeline that cleared inventory a full quarter ahead of schedule.",
    tags: ["Real Estate", "Pre-Launch", "Lead Gen"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern residential development exterior",
  },
  {
    slug: "villa-serai-shortlet",
    client: "Villa Serai",
    title: "A shortlet portfolio that stopped paying 18% commission",
    category: "Hotel",
    metric: "+3.1x",
    metricLabel: "return on ad spend",
    summary:
      "We gave a 12-unit shortlet collection its own brand, site, and direct-booking engine — then drove demand straight to it.",
    tags: ["Shortlet", "Web Design", "CRM"],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Designer shortlet apartment interior",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your property, your funnel, and your market — mapping where guests, diners, or buyers slip away before they convert.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We build a revenue-first plan: the channels, campaigns, and content calendar that will move occupancy, covers, or sales.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We ship the creative, the funnels, and the campaigns — fast — with tracking wired to bookings and reservations from day one.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We read the data every week and reinvest into what fills the calendar, compounding your results season after season.",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 140, suffix: "+", label: "Properties & venues served" },
  { value: 3.8, suffix: "B", prefix: "₦", label: "Direct bookings generated" },
  { value: 62, suffix: "%", label: "Average revenue lift" },
  { value: 8, suffix: "", label: "Cities across Nigeria" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  brand: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Matombo shifted more than a third of our bookings away from the OTAs in a single season. That’s margin we simply didn’t have before.",
    name: "Amara Ndlovu",
    role: "General Manager",
    brand: "The Cedar House",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Our midweek covers used to keep me up at night. Now there’s a waitlist for the chef’s table on a Tuesday. They understand hospitality.",
    name: "Kate Effiong",
    role: "Owner",
    brand: "Maréa Lounge",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We were sold out three months before the show home opened. Matombo built the demand while we were still pouring concrete.",
    name: "Ellty Lokoja",
    role: "Development Director",
    brand: "Northbank Residences",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "They rebranded our shortlet portfolio and gave us a direct-booking engine. We’ve stopped handing a fifth of our revenue to platforms.",
    name: "Daniel Osei",
    role: "Founder",
    brand: "Villa Serai",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₦450,000",
    cadence: "/ month",
    description:
      "For a single property or venue ready to own its direct channel.",
    features: [
      "1 property or venue",
      "Local SEO & Google Business management",
      "Managed paid social (1 platform)",
      "Monthly content calendar",
      "Booking funnel health checks",
      "Monthly reporting call",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "₦950,000",
    cadence: "/ month",
    description:
      "For brands scaling direct revenue across multiple channels.",
    features: [
      "Up to 3 properties or venues",
      "Full SEO & metasearch management",
      "Paid social + Google Ads (multi-platform)",
      "Content & photography direction",
      "Email & CRM automation flows",
      "Conversion-optimized landing pages",
      "Bi-weekly strategy calls",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Retainer",
    price: "Custom",
    cadence: "/ engagement",
    description:
      "For groups, portfolios, and developments that need a full growth team.",
    features: [
      "Unlimited properties or a development",
      "Dedicated strategist & creative team",
      "Pre-launch & lifecycle campaigns",
      "Custom booking & sales-suite builds",
      "Revenue management collaboration",
      "Quarterly on-site workshops",
      "Priority support & SLAs",
    ],
    cta: "Talk to us",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question:
      "Do you work with independent shortlet owners or only hotel chains?",
    answer:
      "Both. Roughly half our clients are independent operators — a single boutique hotel, a small shortlet portfolio, or an owner-run restaurant. Our Starter plan is built specifically for a single property that wants to compete with the big platforms without a big-brand budget.",
  },
  {
    question: "How is a hospitality agency different from a general one?",
    answer:
      "We measure ourselves on occupancy, covers, and units sold — not clicks. We understand OTAs and commission structures, seasonality, RevPAR, reservation systems, and the difference between a booking and a lead. That context means less time explaining your business and more time growing it.",
  },
  {
    question: "Will you help us reduce our reliance on Booking.com and OTAs?",
    answer:
      "That’s one of the most common reasons brands come to us. We rebuild your direct-booking funnel, launch metasearch and Google Hotel Ads, and set up pre-arrival and loyalty flows so guests return to you directly — protecting the margin OTAs quietly erode.",
  },
  {
    question: "Do you handle photography and content production?",
    answer:
      "We art-direct it. We build the shot lists, style the scenes, brief and manage photographers and videographers, and edit everything into reels, stills, and editorial. If you have an in-house team, we direct them; if you don’t, we bring trusted partners.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Paid campaigns and funnel fixes can move bookings within the first 30–60 days. SEO and brand-led demand compound over three to six months. We set realistic milestones in week one and report against them transparently.",
  },
  {
    question: "What markets do you cover?",
    answer:
      "We’re based in Lagos and focused on the Nigerian market — from Lagos and Abuja to Port Harcourt, Ibadan, and beyond. Campaigns, pricing, and reporting are built around Nigerian guests, diners, and buyers, and how they actually search and book.",
  },
];

export const ctaBanner = {
  title: "Let’s fill your rooms, seats, and units.",
  subtitle:
    "Tell us about your property. We’ll come back with where your next 20% of revenue is hiding.",
  cta: { label: "Book a Strategy Call", href: "/contact" },
};

export const industryOptions = [
  "Hotel / Shortlet",
  "Restaurant / Lounge",
  "Real Estate",
  "Other",
] as const;

export const budgetOptions = [
  "Under ₦500,000 / mo",
  "₦500,000 – ₦1,000,000 / mo",
  "₦1,000,000 – ₦2,500,000 / mo",
  "₦2,500,000+ / mo",
  "Not sure yet",
] as const;
