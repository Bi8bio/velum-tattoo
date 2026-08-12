import { Link } from 'react-router-dom';
import { galleryPieces } from '@/data/site';
import { Img } from '@/components/ui/Img';

const featured = galleryPieces.slice(0, 6);

export default function FeaturedTattoos() {
  return (
    <section data-component="src/components/FeaturedTattoos.tsx" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 space-y-4">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80">Featured Work</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Curated Pieces</h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl">
            Each tattoo is a one-of-a-kind collaboration. Browse our collection and purchase directly via secure payment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((piece) => (
            <Link key={piece.id} to={`/gallery/${piece.slug}`} className="group block space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Img
                  src={piece.image}
                  fallbackSeed={`ft-${piece.slug}`}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/80">{piece.category}</p>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">{piece.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground">${piece.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-bold font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
          >
            View All 40 Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
