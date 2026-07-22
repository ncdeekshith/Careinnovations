import { PageHero, PageShell, services } from "../company-pages";

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Business development services from opportunity discovery to commercial closure."
        text="Care Innovations supports organizations through market requirements, stakeholder engagement, tendering, execution coordination and payment follow-through."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, text], index) => (
            <article key={title as string} className="premium-card min-h-64">
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold dark:bg-white dark:text-navy">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35 dark:text-white/35">0{index + 1}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white">{title as string}</h2>
              <p className="mt-4 text-base leading-7 text-ink/62 dark:text-white/62">{text as string}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
