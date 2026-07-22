import { ArrowRight, Mail, MapPin, PageHero, PageShell, Phone, services } from "../company-pages";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Start a growth conversation with Care Innovations."
        text="For opportunity development, government liaisoning, tender management and institutional growth mandates, reach the team directly."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section grid overflow-hidden rounded-lg border border-navy/10 bg-white shadow-premium lg:grid-cols-[0.85fr_1.15fr] dark:border-white/10 dark:bg-white/[0.06]">
          <div className="bg-navy p-6 text-white sm:p-12">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">Care Innovations</h2>
            <div className="mt-8 space-y-4 text-sm leading-6 text-white/72 sm:text-base">
              <p className="flex items-center gap-3"><Mail className="text-gold" size={20} /> <span className="break-all">care.aravind@gmail.com</span></p>
              <p className="flex items-center gap-3"><Phone className="text-gold" size={20} /> <span>9845268789</span></p>
              <p className="flex items-center gap-3"><Phone className="text-gold" size={20} /> <span>8050323560</span></p>
              <p className="flex items-start gap-3"><MapPin className="mt-1 text-gold" size={20} /> No. 23/6, First Floor, JSM Complex, D Rajgopal Road, Sanjay Nagar, Bangalore - 560094</p>
            </div>
          </div>
          <form className="hidden gap-4 p-5 sm:grid sm:grid-cols-2 sm:p-8">
            {["Name", "Company", "Email", "Phone"].map((field) => (
              <label key={field} className="space-y-2 text-sm font-semibold text-navy dark:text-white">
                <span>{field}</span>
                <input type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"} className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </label>
            ))}
            <label className="space-y-2 text-sm font-semibold text-navy sm:col-span-2 dark:text-white">
              <span>Service Required</span>
              <select className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white">
                {services.map(([, title]) => <option key={title as string}>{title as string}</option>)}
              </select>
            </label>
            <label className="space-y-2 text-sm font-semibold text-navy sm:col-span-2 dark:text-white">
              <span>Message</span>
              <textarea rows={4} className="w-full rounded-lg border-navy/10 bg-mist px-4 py-3 text-ink shadow-none focus:border-gold focus:ring-gold dark:border-white/10 dark:bg-white/10 dark:text-white" />
            </label>
            <button type="submit" className="btn-primary sm:col-span-2">Submit Inquiry <ArrowRight size={17} /></button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
