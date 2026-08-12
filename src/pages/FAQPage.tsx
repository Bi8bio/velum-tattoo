import { useState } from 'react';
import { faqItems, faqCategories } from '@/data/site';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? faqItems : faqItems.filter((f) => f.category === active);

  return (
    <div data-component="src/pages/FAQPage.tsx" className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">Got Questions?</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h1>
          <p className="font-body text-base text-secondary-foreground max-w-xl mx-auto">
            Everything you need to know before your visit. Can't find what you're looking for? Get in touch directly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-4 py-2 rounded-xl font-body text-sm transition-colors',
                active === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-secondary-foreground hover:bg-muted/80'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {filtered.map((faq, i) => (
            <details key={i} className="group bg-secondary rounded-xl p-6 cursor-pointer">
              <summary className="font-body font-semibold text-foreground list-none flex justify-between items-center">
                {faq.question}
                <span className="text-primary text-lg transition-transform group-open:rotate-45">&plus;</span>
              </summary>
              <p className="font-body text-sm text-secondary-foreground mt-4 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
