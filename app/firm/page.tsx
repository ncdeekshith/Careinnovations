import Image from "next/image";
import { CheckItem, PageHero, PageShell, ShieldCheck } from "../company-pages";

export default function FirmPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Firm"
        title="Independent marketing and liaisoning consultants for complex public-sector growth."
        text="Care Innovations facilitates collaboration between corporate organizations and Central and State Government departments, carrying opportunities from early market signal to commercial closure."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="founder-card">
            <Image src="/images/aravind-gouda-patil-ceo.jpeg" alt="Aravind Gouda Patil" width={600} height={760} className="founder-photo" />
            <div className="founder-caption">
              <p>Founder & CEO</p>
              <h2>Aravind Gouda Patil</h2>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="heading-lg text-balance">25+ years of institutional access, tendering knowledge and execution discipline.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <CheckItem>Independent marketing and liaisoning consultancy since 2001.</CheckItem>
              <CheckItem>Corporate and government collaboration across the full opportunity lifecycle.</CheckItem>
              <CheckItem>Tendering, supply, installation and execution oversight.</CheckItem>
              <CheckItem>Commercial follow-through through payment collection and relationship continuity.</CheckItem>
            </div>
            <div className="mt-8 rounded-lg bg-navy p-6 text-white">
              <ShieldCheck className="mb-5 text-gold" size={34} />
              <p className="font-display text-2xl font-semibold">Protection Perpetuated</p>
              <p className="mt-3 text-sm leading-6 text-white/65">A relationship-led practice built for long-term trust, disciplined execution and repeatable growth.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
