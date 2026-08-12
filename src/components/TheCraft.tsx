import { Img } from '@/components/ui/Img';

const craftImage = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/e0d60d68-0dfd-4152-8301-6992fdd58143/images/1786136336835-fs3jrebk68k.png';

export default function TheCraft() {
  return (
    <section data-component="src/components/TheCraft.tsx" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Img
              src={craftImage}
              fallbackSeed="velum-craft"
              alt="Tattoo artist at work — macro close-up of needle on skin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-border/10" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80">The Craft</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Built for<br />Permanence
              </h2>
            </div>

            <div className="space-y-5 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Every line is considered. Every detail is intentional. Created for one person. Made to endure.
              </p>
              <p>
                We work in a range of disciplines — fine line, blackwork, Japanese traditional, realism, botanical, ornamental, and script — united by an obsession with clean lines, solid shading, and thoughtful composition.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { label: 'Styles', value: '8' },
                { label: 'Shop Minimum', value: '$150' },
                { label: 'Years Combined', value: '25+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
