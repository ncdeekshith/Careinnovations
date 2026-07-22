import { PageHero, PageShell, TeamCards } from "../company-pages";

export default function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Team"
        title="Specialist minds strengthening the Care Innovations growth desk."
        text="The strategist network brings enterprise technology leadership, market access, sales execution and institutional relationship depth to client mandates."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section">
          <TeamCards />
        </div>
      </section>
    </PageShell>
  );
}
