import { corporateClients, governmentClients, Landmark, PageHero, PageShell } from "../company-pages";

export default function ClientsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Clients"
        title="Trusted across government departments, urban local bodies and enterprise partners."
        text="Care Innovations has supported public-sector opportunity development and corporate growth across Karnataka government departments, municipal corporations and leading enterprise organizations."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4">Government & Urban Bodies</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {governmentClients.map((client) => (
                <div key={client} className="brand-tile flex min-h-24 items-center justify-start gap-3 text-left">
                  <Landmark className="shrink-0 text-gold" size={21} />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Corporate Partners</p>
            <div className="grid gap-3">
              {corporateClients.map((client) => (
                <div key={client} className="rounded-lg border border-navy/10 bg-white p-5 font-display text-xl font-semibold text-navy shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
