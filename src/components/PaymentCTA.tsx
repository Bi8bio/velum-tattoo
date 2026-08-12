import { Link } from 'react-router-dom';

export default function PaymentCTA() {
  return (
    <section data-component="src/components/PaymentCTA.tsx" className="relative py-24 sm:py-32 overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-10">
        <div className="space-y-4">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80">Custom Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Your Idea,<br />Your Investment
          </h2>
          <p className="font-display text-xl sm:text-2xl italic text-primary/80">$1 — $5,000</p>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {`Not every piece fits a fixed price. Whether it's a tiny symbol or a full back piece, we'll work with you. Bring your idea and your budget — we'll make something timeless.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://buy.stripe.com/bJe28ken79uTe2n3748Vi0E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
          >
            Request a Custom Quote
          </a>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-10 py-4 border border-primary/40 text-primary font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/10 hover:border-primary transition-colors duration-300"
          >
            Browse &amp; Purchase Directly
          </Link>
        </div>

        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
          Secure payment via Stripe &bull; Each piece priced individually in the Gallery
        </p>
      </div>
    </section>
  );
}
