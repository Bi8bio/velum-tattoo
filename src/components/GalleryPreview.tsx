import { Link } from 'react-router-dom';
import { galleryPieces } from '@/data/site';
import { Img } from '@/components/ui/Img';

const previewPieces = galleryPieces.slice(0, 8);

export default function GalleryPreview() {
  return (
    <section data-component="src/components/GalleryPreview.tsx" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 space-y-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">Recent Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">The Gallery</h2>
          <p className="font-body text-base text-secondary-foreground max-w-xl">
            Each piece is a one-of-a-kind collaboration. Browse our collection of custom work, available for direct purchase via secure payment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewPieces.map((piece) => (
            <Link key={piece.id} to={`/gallery/${piece.slug}`} className="group block space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <Img
                  src={piece.image}
                  fallbackSeed={`gallery-${piece.slug}`}
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

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-primary border-2 border-primary text-primary-foreground font-bold font-body text-sm tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            View All 40 Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
