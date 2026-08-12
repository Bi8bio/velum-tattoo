import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-component="src/pages/ContactPage.tsx" className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Contact Us</h1>
          <p className="font-body text-base text-secondary-foreground max-w-xl mx-auto">
            {`Ready to start your next piece? We'd love to hear from you.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 font-body text-sm">
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-medium">Phone</span>
              <p className="text-foreground text-lg font-semibold mt-1">{site.phone}</p>
            </div>
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-medium">Email</span>
              <p className="text-foreground mt-1">{site.email}</p>
            </div>
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-medium">Address</span>
              <p className="text-foreground mt-1">
                {site.address}<br />{site.city}, {site.state} {site.zip}
              </p>
            </div>
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-medium">Hours</span>
              <p className="text-foreground mt-1 whitespace-pre-line">{site.hours}</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-secondary p-8 rounded-2xl text-center space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">{`Thanks for Reaching Out`}</h3>
              <p className="font-body text-secondary-foreground">{`We'll get back to you within 24 hours.`}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-secondary p-8 rounded-2xl">
              <div>
                <label htmlFor="contact-name" className="block font-body text-xs tracking-widest uppercase text-secondary-foreground mb-2">Name</label>
                <input
                  id="contact-name" type="text" placeholder="Your full name" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-body text-xs tracking-widest uppercase text-secondary-foreground mb-2">Email</label>
                <input
                  id="contact-email" type="email" placeholder="you@email.com" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-body text-xs tracking-widest uppercase text-secondary-foreground mb-2">Your Idea</label>
                <textarea
                  id="contact-message" rows={4} required
                  placeholder={`Tell us about the piece you're envisioning \u2014 style, size, placement, budget...`}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-primary border-2 border-primary text-primary-foreground font-bold font-body text-sm tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
