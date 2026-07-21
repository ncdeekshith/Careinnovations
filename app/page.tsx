"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Laptop2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  X
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  ["Firm", "#about"],
  ["Services", "#services"],
  ["Impact", "#impact"],
  ["Approach", "#process"],
  ["Team", "#strategists"],
  ["Contact", "#contact"]
];

const proof = [
  ["2001", "Founded"],
  ["25+", "Years"],
  ["200+", "Partnerships"],
  ["95%", "Retention"]
];

const services = [
  [Search, "Market Requirements", "Translate product segments into actionable government demand."],
  [Target, "Opportunity Development", "Identify qualified opportunities across Central and State departments."],
  [Handshake, "Institutional Liaisoning", "Facilitate corporate, department and stakeholder collaboration."],
  [BriefcaseBusiness, "Tender Management", "Support tendering, documentation, positioning and bid movement."],
  [CircleDollarSign, "Execution Support", "Coordinate supply, installation, execution and payment follow-through."],
  [TrendingUp, "Growth Advisory", "Build durable accounts, relationships and expansion plans."]
];

const industries = [
  [HeartPulse, "Healthcare"],
  [Laptop2, "Technology"],
  [Factory, "Manufacturing"],
  [GraduationCap, "Education"],
  [Landmark, "Professional Services"],
  [Rocket, "Startups"],
  [Building2, "SMEs"],
  [Network, "Enterprises"]
];

const processSteps = [
  ["01", "Understand"],
  ["02", "Map"],
  ["03", "Position"],
  ["04", "Engage"],
  ["05", "Close"],
  ["06", "Scale"]
];

const outcomes = [
  ["Qualified Pipeline", "Better-fit accounts and conversations."],
  ["Relationship Depth", "Trust built before the decision point."],
  ["Execution Rhythm", "Consistent follow-through across pursuits."],
  ["Strategic Clarity", "Clearer priorities for growth teams."]
];

const lifecycle = [
  [Search, "Identify", "Opportunities across product segments and government departments."],
  [Target, "Shape", "Market requirements, account priorities and pursuit strategy."],
  [BriefcaseBusiness, "Tender", "Bid support, liaisoning and process coordination."],
  [CheckCircle2, "Execute", "Supply, installation, execution and payment collection follow-through."]
];

const partners = [
  "Belden India Pvt. Ltd.",
  "Sintex Industries Ltd.",
  "Bajaj Auto Ltd.",
  "Bajaj Allianz",
  "EPP Ltd.",
  "RCCL"
];

const metroWins = [
  ["Gujarat Metro", "Networking solution breakthrough"],
  ["Chennai Metro", "Public infrastructure opportunity"],
  ["Bengaluru Metro", "Institutional relationship momentum"]
];

const caseStudies = [
  ["25+ Years", "Independent marketing and liaisoning consultancy"],
  ["Pan India", "Business development consulting for Belden India"],
  ["3 Metros", "Gujarat, Chennai and Bengaluru breakthroughs"],
  ["End-to-End", "Opportunity, tender, execution and collection support"]
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const strategists = [
  {
    name: "Vinay Murudi",
    role: "Startup & Growth Strategist",
    image: `${assetBase}/images/team-vinay-murudi.jpeg`,
    summary: "Entrepreneur, EdTech CEO and IIM Bangalore MBA with deep experience in startup strategy, fundraising and scalable B2B2C growth models.",
    highlights: [
      "Co-Founder & CEO, Arivu Learning / myPAL",
      "MBA, IIM Bangalore",
      "Raised 8Cr+ and drove 4Cr+ revenue",
      "Startup strategy, sales and emerging-market growth"
    ]
  },
  {
    name: "Shivaprasad Hiremath",
    role: "Education & Market Access Strategist",
    image: `${assetBase}/images/team-shivaprasad-hiremath.jpeg`,
    summary: "Co-founder and operator focused on democratizing EdTech access in Bharat through networks, sales systems and micro-entrepreneurship.",
    highlights: [
      "Co-Founder, myPAL",
      "Bharat and rural education access",
      "Network of achievers, founders and local operators",
      "Sales, community building and micro-entrepreneur models"
    ]
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-white text-ink dark:bg-[#071528] dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/86 backdrop-blur-xl dark:border-white/10 dark:bg-[#071528]/84">
        <nav className="section flex h-16 items-center justify-between sm:h-20">
          <a href="#home" className="flex items-center gap-3" aria-label="Care Innovations home">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-base font-semibold text-gold shadow-sm sm:h-11 sm:w-11 sm:text-lg dark:bg-white dark:text-navy">
              CI
            </span>
            <span>
              <span className="block font-display text-base font-semibold leading-tight text-navy sm:text-lg dark:text-white">
                Care Innovations
              </span>
              <span className="hidden text-xs font-medium text-ink/55 min-[380px]:block dark:text-white/55">
                Strategic Growth Partner
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/75 p-1 shadow-sm lg:flex dark:border-white/10 dark:bg-white/8">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink/65 transition hover:bg-navy hover:text-white dark:text-white/68 dark:hover:bg-white dark:hover:text-navy"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Book a Call <ArrowRight size={16} />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white/80 text-navy lg:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="section pb-5 lg:hidden">
            <div className="rounded-lg border border-navy/10 bg-white p-3 shadow-premium dark:border-white/10 dark:bg-[#0B1F3A]">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-semibold text-ink/75 hover:bg-mist dark:text-white/75 dark:hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative pt-24 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#F8F9FA_0%,#FFFFFF_50%,#F8F9FA_100%)] dark:bg-[linear-gradient(180deg,#071528_0%,#0B1F3A_58%,#071528_100%)]" />
        <div className="section grid items-center gap-8 pb-10 sm:gap-12 sm:pb-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white/80 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy/70 shadow-sm sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.2em] dark:border-white/10 dark:bg-white/8 dark:text-white/70">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Bengaluru | Since 2001
            </div>
            <h1 className="heading-xl max-w-5xl text-balance">
              Growth opportunities, developed strategically.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink/68 sm:mt-7 sm:text-xl sm:leading-8 dark:text-white/68">
              Care Innovations helps companies find the right opportunities, build the right relationships, and move deals forward.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Book a Strategy Call <ArrowRight size={17} />
              </a>
              <a href="#services" className="btn-secondary">
                View Capabilities
              </a>
            </div>

            <div className="mt-7 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-3">
              {proof.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-navy/10 bg-white/80 p-2 text-center shadow-sm sm:p-4 dark:border-white/10 dark:bg-white/8">
                  <div className="font-display text-xl font-semibold text-navy sm:text-3xl dark:text-white">{value}</div>
                  <div className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-ink/45 sm:text-xs sm:tracking-[0.14em] dark:text-white/45">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="executive-visual">
              <Image
                src={`${assetBase}/images/care-innovations-growth-visual.png`}
                alt="Abstract strategic growth visualization with connected opportunity nodes"
                width={1536}
                height={1024}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute left-5 top-5 rounded-lg border border-white/40 bg-white/82 p-3 shadow-soft backdrop-blur dark:border-white/15 dark:bg-[#071528]/72 sm:p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/48 dark:text-white/48 sm:text-xs">Opportunity Pipeline</p>
                <p className="mt-2 font-display text-2xl font-semibold text-navy dark:text-white sm:text-3xl">Qualified</p>
              </div>
              <div className="absolute bottom-5 right-5 w-56 rounded-lg border border-navy/10 bg-navy p-4 text-white shadow-premium dark:border-white/10 sm:w-64 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Growth System</p>
                  <TrendingUp className="text-gold" size={22} />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                  {["Insight", "Trust", "Close"].map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-2 py-2 text-white/72">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="section">
          <Reveal className="grid grid-cols-2 gap-2 rounded-lg border border-navy/10 bg-white p-2 shadow-soft sm:grid-cols-3 sm:gap-3 sm:p-3 lg:grid-cols-6 dark:border-white/10 dark:bg-white/[0.06]">
            {["Identify", "Qualify", "Position", "Engage", "Negotiate", "Scale"].map((item) => (
              <div key={item} className="rounded-md bg-mist px-3 py-3 text-center text-xs font-semibold text-navy/62 sm:px-4 sm:py-4 sm:text-sm dark:bg-white/8 dark:text-white/62">
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 lg:py-24">
        <div className="section grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">The Firm</p>
            <h2 className="heading-lg text-balance">Independent marketing and liaisoning consultants for complex public-sector growth.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68 dark:text-white/68">
              Care Innovations facilitates collaboration between corporate organizations and Central and State Government departments, carrying opportunities from early market signal to commercial closure.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="visual-map">
              {[
                ["Government Departments", Landmark],
                ["Corporate Organizations", Building2],
                ["Tendering Process", BriefcaseBusiness],
                ["Execution Closure", CheckCircle2]
              ].map(([label, Icon], index) => (
                <div key={label as string} className={`visual-node visual-node-${index + 1}`}>
                  <Icon size={24} />
                  <span>{label as string}</span>
                </div>
              ))}
              <div className="visual-center">
                <span>Care Innovations</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="section">
          <Reveal className="grid overflow-hidden rounded-lg border border-navy/10 bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr] dark:border-white/10 dark:bg-white/[0.06]">
            <div className="bg-navy p-6 text-white sm:p-10">
              <p className="eyebrow mb-4">Project Lifecycle</p>
              <h2 className="font-display text-2xl font-semibold tracking-normal sm:text-4xl">From opportunity discovery to payment collection.</h2>
              <p className="mt-5 text-base leading-7 text-white/68">
                The work spans market requirements, tender coordination, supply and installation oversight, execution support and timely collection.
              </p>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
              {lifecycle.map(([Icon, title, text], index) => (
                <Reveal key={title as string} delay={index * 0.035} className="lifecycle-card">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/15 text-gold">
                      <Icon size={22} />
                    </div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-16 dark:bg-white/[0.04]">
        <div className="section grid gap-5 md:grid-cols-2">
          {[
            ["Mission", "Strategic consulting that creates lasting partnerships and sustainable growth."],
            ["Vision", "A trusted growth partner for relationship-driven business development."]
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04} className="premium-card flex min-h-44 flex-col justify-between p-5 sm:min-h-48 sm:p-7">
              <ShieldCheck className="text-gold" size={36} />
              <div>
                <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl dark:text-white">{title}</h2>
                <p className="mt-3 text-base leading-7 text-ink/65 sm:mt-4 sm:text-lg dark:text-white/65">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="heading-lg text-balance">From opportunity signal to commercial movement.</h2>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, title, text], index) => (
              <Reveal key={title as string} delay={index * 0.03} className="premium-card group min-h-0 p-5 sm:min-h-64 sm:p-6">
                <div className="mb-5 flex items-center justify-between sm:mb-8">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy sm:h-12 sm:w-12 dark:bg-white dark:text-navy">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35 dark:text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl dark:text-white">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62 sm:mt-4 sm:text-base sm:leading-7 dark:text-white/62">{text as string}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="section">
          <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Industries</p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Built around B2B trust, across sectors.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map(([Icon, label]) => (
                <div key={label as string} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-center">
                  <Icon className="mx-auto text-gold" size={24} />
                  <p className="mt-3 text-sm font-semibold text-white/72">{label as string}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="impact" className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Partnerships</p>
              <h2 className="heading-lg text-balance">Trusted by leading organizations across industrial, mobility, insurance and networking segments.</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="brand-tile">
                  {partner}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 overflow-hidden rounded-lg border border-navy/10 bg-white shadow-premium sm:mt-14 lg:grid lg:grid-cols-[1fr_1.25fr] dark:border-white/10 dark:bg-white/[0.06]">
            <div className="bg-mist p-6 sm:p-10 dark:bg-white/[0.04]">
              <p className="eyebrow mb-4">Belden India</p>
              <h3 className="font-display text-2xl font-semibold tracking-normal text-navy sm:text-4xl dark:text-white">
                Pan-India business development for a networking major.
              </h3>
              <p className="mt-5 text-base leading-7 text-ink/66 dark:text-white/66">
                Over the last three years, Care Innovations has helped create significant breakthroughs for Belden networking solutions across major metro infrastructure opportunities.
              </p>
            </div>
            <div className="metro-grid grid gap-3 p-3 sm:grid-cols-3 sm:p-5">
              {metroWins.map(([title, text], index) => (
                <div key={title} className="metro-card">
                  <MapPin size={22} />
                  <span>0{index + 1}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Outcomes</p>
            <h2 className="heading-lg text-balance">What improves when strategy and execution work together.</h2>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-4">
            {outcomes.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04} className="premium-card text-center">
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-sm font-bold text-gold">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60 dark:text-white/60">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-mist py-14 sm:py-16 dark:bg-white/[0.04]">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Approach</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy sm:text-4xl lg:text-5xl dark:text-white">A clear growth development path.</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 rounded-lg border border-navy/10 bg-white p-3 shadow-soft sm:mt-10 sm:p-4 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="process-line">
              {processSteps.map(([number, title]) => (
                <div key={title} className="process-step">
                  <span>{number}</span>
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="founder" className="py-16 sm:py-20 lg:py-24">
        <div className="section grid gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="founder-card">
              <Image
                src={`${assetBase}/images/aravind-gouda-patil-ceo.jpeg`}
                alt="Aravind Gouda Patil, Founder and CEO of Care Innovations"
                width={600}
                height={760}
                className="founder-photo"
              />
              <div className="founder-caption">
                <p>Founder & CEO</p>
                <h2>Aravind Gouda Patil</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="heading-lg text-balance">25+ years of institutional access, tendering knowledge and execution discipline.</h2>
            <div className="leadership-points mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {[
                "Independent marketing and liaisoning consultancy",
                "Corporate and government collaboration",
                "Tendering, supply and installation oversight",
                "Payment collection follow-through"
              ].map((item) => (
                <div key={item} className="leadership-point flex items-center gap-3 rounded-lg border border-navy/10 p-3 sm:p-4 dark:border-white/10">
                  <CheckCircle2 className="shrink-0 text-gold" size={19} />
                  <span className="text-sm font-semibold text-ink/70 dark:text-white/70">{item}</span>
                </div>
              ))}
            </div>
            <blockquote className="mt-7 border-l-4 border-gold pl-5 font-display text-xl font-medium leading-snug text-navy sm:mt-8 sm:pl-6 sm:text-2xl dark:text-white">
              &quot;Growth happens when opportunities meet the right relationships and strategic execution.&quot;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section id="strategists" className="bg-mist py-16 sm:py-20 dark:bg-white/[0.04]">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Strategists</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy sm:text-4xl lg:text-5xl dark:text-white">
              Specialist minds strengthening the growth desk.
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            {strategists.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.06} className="overflow-hidden rounded-lg border border-navy/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-64 overflow-hidden bg-navy sm:min-h-80">
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role}`}
                      width={900}
                      height={900}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(11,31,58,0.58)_100%)]" />
                  </div>
                  <div className="flex flex-col justify-between p-5 sm:p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{person.role}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl dark:text-white">{person.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink/65 sm:mt-4 sm:text-base sm:leading-7 dark:text-white/65">{person.summary}</p>
                    </div>
                    <div className="mt-5 grid gap-2 sm:mt-7 sm:gap-3">
                      {person.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 rounded-lg bg-mist p-3 dark:bg-white/8">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={17} />
                          <span className="text-sm font-semibold leading-6 text-ink/68 dark:text-white/68">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="section grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
              <BarChart3 className="mb-8 text-gold" />
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/50">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <Reveal className="grid overflow-hidden rounded-lg border border-navy/10 bg-white shadow-premium lg:grid-cols-[0.85fr_1.15fr] dark:border-white/10 dark:bg-white/[0.06]">
            <div className="bg-navy p-6 text-white sm:p-12">
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="font-display text-3xl font-semibold sm:text-5xl">Start a growth conversation.</h2>
              <div className="mt-7 space-y-4 text-sm leading-6 text-white/72 sm:mt-10 sm:text-base">
                <p className="flex items-center gap-3"><Mail className="text-gold" size={20} /> <span className="break-all">care.aravind@gmail.com</span></p>
                <p className="flex items-center gap-3"><Phone className="text-gold" size={20} /> Strategy call by appointment</p>
                <p className="flex items-start gap-3"><MapPin className="mt-1 text-gold" size={20} /> No. 23/6, First Floor, JSM Complex, D Rajgopal Road, Sanjay Nagar, Bangalore - 560094</p>
              </div>
            </div>
            <form className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8">
              {["Name", "Company", "Email", "Phone"].map((field) => (
                <label key={field} className="space-y-2 text-sm font-semibold text-navy dark:text-white">
                  <span>{field}</span>
                  <input
                    type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                    className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white"
                  />
                </label>
              ))}
              <label className="space-y-2 text-sm font-semibold text-navy sm:col-span-2 dark:text-white">
                <span>Service Required</span>
                <select className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white">
                  {services.map(([, title]) => (
                    <option key={title as string}>{title as string}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-semibold text-navy sm:col-span-2 dark:text-white">
                <span>Message</span>
                <textarea rows={4} className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">
                Submit Inquiry <ArrowRight size={17} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

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
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink/60 dark:text-white/58">
              Independent marketing and liaisoning consultancy for sustainable institutional growth.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/42 dark:text-white/42">
              GSTIN: 29ALNPP5107B2Z3
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Quick Links</h3>
            <div className="space-y-2 text-sm text-ink/60 dark:text-white/58">
              {navItems.slice(0, 5).map(([label, href]) => <a key={label} href={href} className="block hover:text-gold">{label}</a>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Services</h3>
            <div className="space-y-2 text-sm text-ink/60 dark:text-white/58">
              <a href="#services" className="block hover:text-gold">Opportunity Development</a>
              <a href="#services" className="block hover:text-gold">Growth Advisory</a>
              <a href="#services" className="block hover:text-gold">Sales Support</a>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-navy dark:text-white">Contact</h3>
            <a href="mailto:care.aravind@gmail.com" className="block text-sm text-ink/60 hover:text-gold dark:text-white/58">care.aravind@gmail.com</a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-ink/60 dark:text-white/58">
              No. 23/6, First Floor, JSM Complex, D Rajgopal Road, Sanjay Nagar, Bangalore - 560094
            </p>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy hover:border-gold hover:text-gold dark:border-white/10 dark:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="section mt-9 border-t border-navy/10 pt-6 text-sm text-ink/50 dark:border-white/10 dark:text-white/45">
          Copyright © 2026 Care Innovations. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
