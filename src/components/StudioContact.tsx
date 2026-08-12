import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

export default function StudioContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section data-component="src/components/StudioContact.tsx" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80">Visit Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {`Let's Talk`}
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            {`Ready to start your next piece? Reach out by phone, email, or stop by. We're here to bring your vision to life.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {[
              { label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/-/g, '')}` },
              { label: 'Email', value: site.email, href: `mailto:${site.email}` },
              { label: 'Address', value: `${site.address}, ${site.city}, ${site.state} ${site.zip}`, href: null },
              { label: 'Hours', value: site.hours, href: null },
            ].map((item) => (
              <div key={item.label}>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary/80">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="block font-body text-sm sm:text-base text-foreground mt-1 hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-body text-sm sm:text-base text-foreground mt-1 whitespace-pre-line">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="bg-card p-8 text-center space-y-4 ring-1 ring-border/20">
              <h3 className="font-display text-2xl font-bold text-foreground">{`Thanks for Reaching Out`}</h3>
              <p className="font-body text-sm text-muted-foreground">{`We'll get back to you within 24 hours.`}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 ring-1 ring-border/20">
              <div>
                <label htmlFor="sc-name" className="block font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Name</label>
                <input
                  id="sc-name" type="text" placeholder="Your full name" required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="sc-email" className="block font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
                <input
                  id="sc-email" type="email" placeholder="you@email.com" required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="sc-message" className="block font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{`Your Idea`}</label>
                <textarea
                  id="sc-message" rows={4} required
                  placeholder={`Tell us about the piece you're envisioning \u2014 style, size, placement, budget...`}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
