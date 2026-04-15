import Link from 'next/link';

const librarySections = [
  {
    title: 'Real estate definitions',
    intro: 'Plain-English explanations for the words investors hear all the time.',
    items: ['ARV', 'assignment fee', 'EMD', 'double close', 'cap rate', 'cash-on-cash return', 'wholesale fee', 'days on market'],
  },
  {
    title: 'Free tools and templates',
    intro: 'Starter resources people can use right away before they move into deeper support.',
    items: ['deal screening checklist', 'buy box worksheet', 'simple rehab scope template', 'seller conversation prompts', 'basic due diligence checklist'],
  },
  {
    title: 'CRM and workflow basics',
    intro: 'A simple starting point for staying organized when leads and deals start stacking up.',
    items: ['how investors use CRMs', 'follow-up stages', 'lead status ideas', 'daily pipeline habits', 'what to track on every opportunity'],
  },
  {
    title: 'Investor fundamentals',
    intro: 'Useful guides for people who want clarity before they pay for higher-touch help.',
    items: ['how to think about a buy box', 'how to spot skinny deals', 'what to verify before making an offer', 'how to compare two deals quickly', 'what beginners usually miss'],
  },
];

export default function FreeLibraryPage() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Free Library</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Free investor education that helps people get oriented before they need deeper support.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              This library is built to give investors a cleaner foundation with definitions, tools, templates, CRM basics, and practical guidance. It is useful on purpose, but still lighter than the deeper breakdowns and applied decision support inside the premium library.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/services/deal-breakdown-vault" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
                Explore premium library
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="grid md:grid-cols-2 gap-8">
            {librarySections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
                <p className="mt-3 text-navy/65 leading-relaxed">{section.intro}</p>
                <div className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-navy/75">
                      <span className="text-orange font-bold mt-0.5">•</span>
                      <span className="capitalize">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-t border-navy/10">
        <div className="site-shell">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">When free stops being enough</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">The premium library is for deeper judgment, not just more information.</h2>
              <p className="mt-3 text-navy/65 leading-relaxed">
                The free library helps people understand the language and basic workflow. The premium library is where we go deeper into real deal thinking, stronger analysis, and clearer decision-making when actual money and execution are involved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/services/deal-breakdown-vault" className="inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                See premium library
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                Request a topic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
