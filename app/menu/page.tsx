import type { Metadata } from 'next';
import FilteredMenu from '@/components/FilteredMenu';
import MarqueeStrip from '@/components/MarqueeStrip';
import { cookies } from '@/data/cookies';

export const metadata: Metadata = {
  title: 'Menu',
  description: '14 Houston-named gourmet cookies and 5 cake pops. Classic, Premium, Baddie Box, and Cake Pop Stand. Valrhona chocolate, brown butter, zero artificial flavors.',
};

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-htx-black border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">HTX Bakehouse</p>
          <h1 className="font-display text-7xl md:text-8xl text-cream tracking-wide mb-4">THE MENU</h1>
          <p className="font-body text-cream/45 text-lg max-w-2xl leading-relaxed">
            14 cookies. 5 cake pops. Every one named for the streets, sounds, and culture of Houston.
            Valrhona chocolate. Brown butter. Maldon salt. Zero artificial flavors. Zero shortcuts.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      {/* Menu grid */}
      <section className="py-20 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <FilteredMenu cookies={cookies} />
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 bg-brown border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: '3.5oz', label: 'Every Cookie', sub: 'Levain-style weight' },
              { num: '72hr', label: 'Dough Rest', sub: 'Minimum. No exceptions.' },
              { num: '0', label: 'Artificial Flavors', sub: 'Not one. Ever.' },
            ].map(f => (
              <div key={f.num}>
                <div className="font-display text-5xl text-gold mb-1">{f.num}</div>
                <div className="font-accent text-sm font-semibold text-cream mb-1">{f.label}</div>
                <div className="font-mono text-xs text-cream/35">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen note */}
      <section className="py-10 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-cream/25 leading-relaxed">
            🌾 wheat &nbsp; 🥛 dairy &nbsp; 🥚 eggs &nbsp; 🥜 peanuts &nbsp; 🌰 tree nuts &nbsp; 🫘 soy
            &nbsp;—&nbsp; All cookies are made in a home kitchen. Cross-contact with major allergens is possible.
          </p>
        </div>
      </section>
    </>
  );
}
