import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const navItems = [
  ["Home", "/"],
  ["Firm", "/firm"],
  ["Services", "/services"],
  ["Clients", "/clients"],
  ["Approach", "/approach"],
  ["Team", "/team"],
  ["Contact", "/contact"]
];

export const services = [
  [Search, "Market Requirements", "Translate product segments into actionable government demand."],
  [Target, "Opportunity Development", "Identify qualified opportunities across Central and State departments."],
  [Landmark, "Institutional Liaisoning", "Facilitate corporate, department and stakeholder collaboration."],
  [BriefcaseBusiness, "Tender Management", "Support tendering, documentation, positioning and bid movement."],
  [CircleDollarSign, "Execution Support", "Coordinate supply, installation, execution and payment follow-through."],
  [TrendingUp, "Growth Advisory", "Build durable accounts, relationships and expansion plans."]
];

export const governmentClients = [
  "Department of Rural Development and Panchayat Raj, GoK",
  "Commercial Tax Department, GoK",
  "KUIDFC, GoK",
  "Directorate of Municipal Administration, GoK",
  "Mysuru Municipal Corporation",
  "Belagavi Municipal Corporation",
  "Hubli-Dharwad Municipal Corporation",
  "Gulbarga Municipal Corporation",
  "HESCOM, GoK",
  "Police Computer Wing Bengaluru, GoK"
];

export const corporateClients = [
  "Belden India Pvt. Ltd.",
  "Sintex Industries Ltd.",
  "Bajaj Auto Ltd.",
  "Bajaj Allianz",
  "EPP Ltd.",
  "RCCL"
];

export const processSteps = [
  ["01", "Understand", "Map institutional priorities, decision paths and product-market fit."],
  ["02", "Map", "Identify stakeholders, departments, urban bodies and procurement windows."],
  ["03", "Position", "Shape the opportunity, requirements and engagement strategy."],
  ["04", "Engage", "Coordinate conversations across corporate and government stakeholders."],
  ["05", "Close", "Support tender movement, commercial follow-through and execution clarity."],
  ["06", "Scale", "Turn proven relationships into repeatable account growth."]
];

export const strategists = [
  {
    name: "Vinay Murudi",
    role: "Technology & Growth Strategy Leader",
    image: `${assetBase}/images/team-vinay-murudi.jpeg`,
    summary: "A 20+ year technology and growth leader with Huawei cloud platform leadership, enterprise program depth and a strong CXO, startup and institutional network.",
    highlights: [
      "Senior Project Manager, Huawei Technologies India",
      "Led cloud platform teams across OpenStack, Docker and Kubernetes",
      "MBA, IIM Bangalore",
      "Program management, R&D, business strategy and customer engagement"
    ]
  },
  {
    name: "Shivaprasad Hiremath",
    role: "Education & Market Access Strategist",
    image: `${assetBase}/images/team-shivaprasad-hiremath.jpeg`,
    summary: "Market access operator focused on democratizing EdTech access in Bharat through networks, sales systems and micro-entrepreneurship.",
    highlights: [
      "Bharat and rural education access",
      "B2B sales and B2C sales execution",
      "Network of achievers, founders and local operators",
      "Sales, community building and micro-entrepreneur models"
    ]
  }
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-ink dark:bg-[#071528] dark:text-white">
      <header className="sticky inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#071528]/88">
        <nav className="section flex h-16 items-center justify-between sm:h-20">
          <a href="/" className="flex items-center gap-3" aria-label="Care Innovations home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-base font-semibold text-gold shadow-sm dark:bg-white dark:text-navy">
              CI
            </span>
            <span>
              <span className="block font-display text-base font-semibold leading-tight text-navy sm:text-lg dark:text-white">Care Innovations</span>
              <span className="hidden text-xs font-medium text-ink/55 min-[420px]:block dark:text-white/55">Strategic Growth Partner</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/75 p-1 shadow-sm lg:flex dark:border-white/10 dark:bg-white/8">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/65 transition hover:bg-navy hover:text-white dark:text-white/68 dark:hover:bg-white dark:hover:text-navy">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/contact" className="btn-primary hidden sm:inline-flex">Book a Call <ArrowRight size={16} /></a>
          </div>
        </nav>
        <div className="section flex gap-2 overflow-x-auto pb-3 lg:hidden">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="shrink-0 rounded-full border border-navy/10 bg-white px-3 py-2 text-xs font-semibold text-ink/65 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-white/68">
              {label}
            </a>
          ))}
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative bg-mist py-16 sm:py-20 lg:py-24 dark:bg-white/[0.04]">
      <div className="section">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="heading-lg max-w-4xl text-balance">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/68 dark:text-white/68">{text}</p>
      </div>
    </section>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={18} />
      <span className="text-sm font-semibold leading-6 text-ink/68 dark:text-white/68">{children}</span>
    </div>
  );
}

export function TeamCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {strategists.map((person) => (
        <article key={person.name} className="overflow-hidden rounded-lg border border-navy/10 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 bg-navy">
              <Image src={person.image} alt={`${person.name}, ${person.role}`} width={900} height={900} className="h-full w-full object-cover object-center" />
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{person.role}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl dark:text-white">{person.name}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65 sm:text-base sm:leading-7 dark:text-white/65">{person.summary}</p>
              <div className="mt-5 grid gap-2">
                {person.highlights.map((highlight) => <CheckItem key={highlight}>{highlight}</CheckItem>)}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white py-10 dark:border-white/10 dark:bg-[#071528]">
      <div className="section grid gap-8 lg:grid-cols-[1.15fr_auto_auto_1fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-sm font-semibold text-gold dark:bg-white dark:text-navy">CI</span>
            <span>
              <span className="block font-display text-lg font-semibold leading-tight text-navy dark:text-white">Care Innovations</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold">Protection Perpetuated</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/60 dark:text-white/58">Independent marketing and liaisoning consultancy for sustainable institutional growth.</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/42 dark:text-white/42">GSTIN: 29ALNPP5107B2Z3</p>
        </div>
        <div className="hidden sm:block">
          <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Pages</h3>
          <div className="space-y-2 text-sm text-ink/60 dark:text-white/58">
            {navItems.slice(1).map(([label, href]) => <a key={label} href={href} className="block hover:text-gold">{label}</a>)}
          </div>
        </div>
        <div className="hidden sm:block">
          <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Services</h3>
          <div className="space-y-2 text-sm text-ink/60 dark:text-white/58">
            {services.slice(1, 4).map(([, title]) => <a key={title as string} href="/services" className="block hover:text-gold">{title as string}</a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Contact</h3>
          <a href="mailto:care.aravind@gmail.com" className="block text-sm text-ink/60 hover:text-gold dark:text-white/58">care.aravind@gmail.com</a>
          <a href="tel:+919845268789" className="mt-2 block text-sm text-ink/60 hover:text-gold dark:text-white/58">9845268789</a>
          <a href="tel:+918050323560" className="mt-1 block text-sm text-ink/60 hover:text-gold dark:text-white/58">8050323560</a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink/60 dark:text-white/58">No. 23/6, First Floor, JSM Complex, D Rajgopal Road, Sanjay Nagar, Bangalore - 560094</p>
        </div>
      </div>
      <div className="section mt-9 border-t border-navy/10 pt-6 text-sm text-ink/50 dark:border-white/10 dark:text-white/45">
        Copyright © 2026 Care Innovations. All rights reserved.
      </div>
    </footer>
  );
}

export { ArrowRight, BriefcaseBusiness, CheckCircle2, Landmark, Mail, MapPin, Phone, ShieldCheck, TrendingUp };
