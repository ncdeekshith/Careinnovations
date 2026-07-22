import { CheckItem, PageHero, PageShell, processSteps } from "../company-pages";

export default function ApproachPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Approach"
        title="A clear growth development path for institutional opportunities."
        text="The firm turns relationship intelligence into coordinated action, moving from market mapping to stakeholder engagement and execution follow-through."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, text]) => (
              <article key={title} className="premium-card">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{number}</span>
                <h2 className="mt-8 font-display text-2xl font-semibold text-navy dark:text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/62 dark:text-white/62">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <CheckItem>Opportunity identification across diverse product segments.</CheckItem>
            <CheckItem>Market requirements and tender process coordination.</CheckItem>
            <CheckItem>Supply, installation and execution oversight.</CheckItem>
            <CheckItem>Timely payment collection and long-term relationship development.</CheckItem>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
