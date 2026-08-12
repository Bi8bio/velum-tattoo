import { Link } from 'react-router-dom';
import { site } from '@/data/site';
import { Img } from '@/components/ui/Img';

const heroImages = {
  main: 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/e0d60d68-0dfd-4152-8301-6992fdd58143/images/1786136337428-4wmdsx7w8el.png',
  emblem: 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/e0d60d68-0dfd-4152-8301-6992fdd58143/images/1786153207553-uye2phpd9ur.png',
};

// fig-anchor-degraded: staggered-hero-entrance -> simple-fade
export default function Hero() {
  return (
    <section
      data-component="src/components/Hero.tsx"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:block bg-background" />
          <div className="relative">
            <Img
              src={heroImages.main}
              fallbackSeed="velum-hero"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent md:from-transparent md:via-background/20 md:to-transparent" />
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="md:grid md:grid-cols-2 gap-12 items-center min-h-[80vh] flex flex-col">
          <div className="space-y-8">
            <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80">
              Monterey Park, California
            </p>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-black">
              <Img
                src={heroImages.emblem}
                fallbackSeed="velum-badge"
                alt="Velum Tattoo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05]">
                {site.name.split(' ')[0]}<br />
                {site.name.split(' ')[1]}
              </h1>
              <p className="font-display text-xl sm:text-2xl italic text-primary/90">
                {site.tagline}
              </p>
              <p className="font-body text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
                Bespoke, permanent art in the heart of Monterey Park. From fine-line elegance to Japanese traditional — every piece is a collaboration between artist and canvas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
              >
                View the Gallery
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 border border-primary/40 text-primary font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/10 hover:border-primary transition-colors duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
            &copy; {new Date().getFullYear()} {site.name} &mdash; {site.address}, {site.city}, {site.state}
          </p>
        </div>
      </div>
    </section>
  );
}
