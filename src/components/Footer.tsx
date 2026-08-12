import { Link } from 'react-router-dom';
import { site } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-component="src/components/Footer.tsx" className="border-t border-border/20 py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-3">
            <p className="font-display text-lg font-bold text-foreground">{site.name}</p>
            <p className="font-body text-xs text-muted-foreground">{site.tagline}</p>
          </div>
          <div className="space-y-2">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/80">Studio</p>
            <p className="font-body text-xs text-muted-foreground">{site.address}</p>
            <p className="font-body text-xs text-muted-foreground">{site.city}, {site.state} {site.zip}</p>
          </div>
          <div className="space-y-2">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/80">Contact</p>
            <p className="font-body text-xs text-muted-foreground">{site.phone}</p>
            <p className="font-body text-xs text-muted-foreground">{site.email}</p>
          </div>
          <div className="space-y-2">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/80">Hours</p>
            <p className="font-body text-xs text-muted-foreground whitespace-pre-line">{site.hours}</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground/60">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/refund-policy" className="font-body text-[10px] text-muted-foreground/60 hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/privacy-policy" className="font-body text-[10px] text-muted-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="font-body text-[10px] text-muted-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
