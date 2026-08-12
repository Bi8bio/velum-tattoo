import { Link } from 'react-router-dom';
import { galleryPieces } from '@/data/site';
import { Img } from '@/components/ui/Img';

export default function GalleryPage() {
  return (
    <div data-component="src/pages/GalleryPage.tsx" className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">40 Pieces, One Standard</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">The Gallery</h1>
          <p className="font-body text-base text-secondary-foreground max-w-xl mx-auto">
            Browse our full collection. Each piece is available for direct purchase via secure payment. Tap any piece for details and pricing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryPieces.map((piece) => (
            <Link key={piece.id} to={`/gallery/${piece.slug}`} className="group block space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <Img
                  src={piece.image}
                  fallbackSeed={`gallery-full-${piece.slug}`}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/20" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">{piece.category}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">{piece.title}</h3>
                <p className="font-body text-sm font-medium text-secondary-foreground mt-1">${piece.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
