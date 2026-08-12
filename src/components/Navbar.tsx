import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site, navItems } from '@/data/site';
import { cn } from '@/lib/utils';
import { Img } from '@/components/ui/Img';

const navLogo = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/e0d60d68-0dfd-4152-8301-6992fdd58143/images/1786153207553-uye2phpd9ur.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav data-component="src/components/Navbar.tsx" className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-black flex-shrink-0">
            <Img src={navLogo} fallbackSeed="nav-logo" alt={site.name} className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            {site.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border/20 px-4 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block py-3 font-body text-xs uppercase tracking-widest transition-colors',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
