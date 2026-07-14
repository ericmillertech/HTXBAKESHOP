import Link from 'next/link';
import MarqueeStrip from '@/components/MarqueeStrip';
import FilteredMenu from '@/components/FilteredMenu';
import StatsCounter from '@/components/StatsCounter';
import ComparisonTable from '@/components/ComparisonTable';
import { cookies } from '@/data/cookies';

function CookieSVG() {
  return (
    <svg viewBox="0 0 280 280" className="w-full h-full animate-float" aria-hidden>
      <ellipse cx="140" cy="264" rx="88" ry="9" fill="#000" opacity="0.3" />
      <circle cx="140" cy="136" r="122" fill="#5c2d12" />
      <circle cx="140" cy="136" r="118" fill="#7a3e1e" />
      <circle cx="140" cy="136" r="118" fill="none" stroke="#8a4a25" strokeWidth="4" strokeDasharray="9 5" />
      <ellipse cx="108" cy="98" rx="36" ry="20" fill="#9b5530" opacity="0.4" transform="rotate(-22,108,98)" />
      <ellipse cx="103" cy="100" rx="16" ry="13" fill="#1a0a04" transform="rotate(-15,103,100)" />
      <ellipse cx="175" cy="95"  rx="14" ry="12" fill="#1a0a04" transform="rotate(12,175,95)" />
      <ellipse cx="112" cy="158" rx="15" ry="13" fill="#1a0a04" transform="rotate(-8,112,158)" />
      <ellipse cx="168" cy="160" rx="16" ry="13" fill="#1a0a04" transform="rotate(18,168,160)" />
      <ellipse cx="140" cy="122" rx="12" ry="11" fill="#1a0a04" />
      <ellipse cx="88"  cy="145" rx="13" ry="11" fill="#1a0a04" transform="rotate(10,88,145)" />
      <ellipse cx="155" cy="190" rx="11" ry="10" fill="#1a0a04" transform="rotate(-12,155,190)" />
      <rect x="88"  y="115" width="8" height="2.5" rx="1" fill="#F5EDD8" opacity="0.55" transform="rotate(-22,92,116)" />
      <rect x="160" y="113" width="7" height="2.5" rx="1" fill="#F5EDD8" opacity="0.55" transform="rotate(14,163,114)" />
      <rect x="130" y="174" width="9" height="2.5" rx="1" fill="#F5EDD8" opacity="0.55" transform="rotate(-6,134,175)" />
    </svg>
  );
}

const whyCards = [
  { icon: '🧈', title: 'Brown Butter Only',    body: "Every batch, every time. The nutty depth you can't identify? That's it." },
  { icon: '🍫', title: 'Valrhona Chocolate',   body: 'French couverture. The same chocolate used in Michelin-starred kitchens.' },
  { icon: '⏱️', title: '72-Hour Dough Rest',   body: "We won't rush it. Not for anyone. That rest is why we taste different." },
  { icon: '⚖️', title: 'Levain Size',          body: '3.5oz. One cookie. A full experience, not a snack. No apology for that.' },
  { icon: '✦',  title: 'Zero Preservatives',   body: "Fresh or it doesn't go out. That's not a marketing claim. That's how we operate." },
  { icon: '🌊', title: 'Maldon Finish',        body: 'Hand-harvested pyramid flakes from Essex, England. Finishing every single cookie.' },
];

export default function HomePage() {
  const slab = cookies.find(c => c.id === 'the-slab')!;
  const cakePops = cookies.filter(c => c.category === 'cake-pop');

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-htx-black pt-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 72% 38%, rgba(200,151,12,.11) 0%, transparent 52%), ' +
              'radial-gradient(ellipse at 18% 72%, rgba(46,21,3,.9) 0%, transparent 48%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2.5 border border-gold/35 px-4 py-2 mb-8 animate-pulse-glow">
                <span className="w-2 h-2 rounded-full bg-gold animate-badge-pulse" />
                <span className="font-mono text-xs text-gold tracking-widest">BAKING TODAY · HOUSTON, TX</span>
              </div>
              <h1 className="font-display text-7xl md:text-8xl text-cream leading-none tracking-wide mb-2">
                HOUSTON&apos;S<br />
                <span className="text-gold">FATTEST</span><br />
                COOKIE
              </h1>
              <p className="font-mono text-sm text-cream/40 tracking-widest mb-10">
                Torres Method · Levain Size · HTX Made
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-mono text-xs text-cream/50 tracking-wider">
                <span><span className="text-gold font-display text-xl">0</span> Artificial Flavors</span>
                <span className="text-gold/25 hidden sm:inline">|</span>
                <span><span className="text-gold font-display text-xl">72hr</span> Dough Rest</span>
                <span className="text-gold/25 hidden sm:inline">|</span>
                <span>HTX Born &amp; Raised</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/order" className="bg-gold text-htx-black font-mono text-sm tracking-widest uppercase px-8 py-4 font-medium hover:bg-gold-light transition-colors">
                  Order Now
                </Link>
                <Link href="/menu" className="border border-gold/35 text-gold font-mono text-sm tracking-widest uppercase px-8 py-4 hover:border-gold/70 hover:bg-gold/5 transition-colors">
                  See the Menu
                </Link>
              </div>
            </div>
            {/* Cookie */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <CookieSVG />
                <div className="absolute -left-6 top-14 bg-htx-black/90 border border-gold/25 px-3 py-1.5 font-mono text-xs text-gold-light tracking-wider whitespace-nowrap">
                  Valrhona Chocolate
                </div>
                <div className="absolute -right-2 md:-right-8 top-1/3 bg-htx-black/90 border border-gold/25 px-3 py-1.5 font-mono text-xs text-gold-light tracking-wider whitespace-nowrap">
                  Brown Butter Base
                </div>
                <div className="absolute left-2 bottom-10 bg-htx-black/90 border border-gold/25 px-3 py-1.5 font-mono text-xs text-gold-light tracking-wider whitespace-nowrap">
                  Maldon Sea Salt
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── FEATURED SLAB ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div
                className="w-64 h-64 rounded-full flex items-center justify-center text-8xl animate-float"
                style={{ background: 'radial-gradient(ellipse at 35% 35%, #7a3e1e, #2E1503)', boxShadow: '0 0 80px rgba(200,151,12,.2)' }}
              >
                🍫
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-gold/50 tracking-[0.25em] uppercase mb-3">Featured Cookie</p>
              <h2 className="font-display text-6xl text-cream tracking-widest mb-2">{slab.name}</h2>
              <p className="font-body text-gold/65 italic mb-5">{slab.htownStory}</p>
              <p className="font-body text-cream/60 text-lg leading-relaxed mb-8">{slab.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {slab.ingredients.map(ing => (
                  <span key={ing} className="font-mono text-xs border border-gold/20 text-cream/45 px-3 py-1">{ing}</span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="font-display text-5xl text-gold">${slab.price.toFixed(2)}</span>
                <Link href="/order" className="bg-gold text-htx-black font-mono text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors font-medium">
                  Order The Slab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAKE POP STAND ── */}
      <section className="py-24 bg-htx-black border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 border border-gold/35 px-4 py-2 mb-6 font-mono text-xs text-gold tracking-widest">
                <span className="w-2 h-2 rounded-full bg-gold animate-badge-pulse" />
                IN PERSON · CAKE POP STAND
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-cream tracking-wider mb-4">
                CAKE POP<br/>
                <span className="text-gold">STAND</span>
              </h2>
              <p className="font-body text-cream/60 text-lg leading-relaxed mb-3">
                Same kitchen. Same standards. Same zero shortcuts.
              </p>
              <p className="font-body text-cream/40 leading-relaxed mb-6">
                Houston-named. Brown butter cake. Valrhona chocolate shells. Maldon finish.
                Everything the cookies are built on — in one perfect pop.
              </p>
              <div className="bg-gold/5 border border-gold/20 px-5 py-4 mb-8 font-mono text-xs text-gold/70 tracking-wider space-y-1">
                <p><span className="text-gold">WHEN:</span> Friday &amp; Saturday · 4PM – 8PM</p>
                <p><span className="text-gold">HOW:</span> In person · Until sold out</p>
                <p className="text-cream/30">No pre-order. No holds. First come, first served.</p>
              </div>
              <Link href="/menu" className="font-mono text-xs text-gold tracking-widest uppercase underline underline-offset-4 hover:text-gold-light transition-colors">
                See the Cake Pop Menu →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cakePops.slice(0, 4).map(pop => (
                <div key={pop.id} className="bg-brown/40 border border-gold/10 p-5 hover:border-gold/30 transition-colors">
                  <span className="text-3xl mb-3 block">{pop.emoji}</span>
                  <h3 className="font-display text-base text-cream tracking-wider mb-1">{pop.name}</h3>
                  <p className="font-mono text-xs text-gold mb-2">${pop.price.toFixed(2)}</p>
                  <p className="font-body text-xs text-cream/40 leading-relaxed line-clamp-2">{pop.htownStory}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-3">Full Menu</p>
          <h2 className="font-display text-5xl text-cream tracking-wider mb-2">14 Cookies. 5 Cake Pops. All Houston.</h2>
          <p className="font-body text-cream/40 mb-12 max-w-xl">Every item named for the streets, sounds, and culture that made this city.</p>
          <FilteredMenu cookies={cookies} />
        </div>
      </section>

      {/* ── WHY HTX ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">The Difference</p>
              <h2 className="font-display text-5xl text-cream tracking-wider mb-6">No Shortcuts.<br />No Exceptions.</h2>
              <p className="font-body text-cream/60 text-lg leading-relaxed mb-6">
                Every decision in this kitchen is intentional. The ingredients are chosen because they&apos;re the best — not because they&apos;re convenient.
              </p>
              <p className="font-body text-cream/40 leading-relaxed mb-8">
                Houston deserves a cookie built with the same pride the city brings to everything else.
              </p>
              <Link href="/craft" className="font-mono text-xs text-gold tracking-widest uppercase underline underline-offset-4 hover:text-gold-light transition-colors">
                Read About Our Craft →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyCards.map(card => (
                <div key={card.title} className="bg-htx-black/50 border border-gold/10 p-5 hover:border-gold/30 transition-colors">
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h3 className="font-accent text-sm font-semibold text-cream mb-2">{card.title}</h3>
                  <p className="font-body text-xs text-cream/45 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24 bg-htx-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-3 text-center">Side by Side</p>
          <h2 className="font-display text-5xl text-cream tracking-wider mb-12 text-center">Not Even Close.</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <StatsCounter />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-htx-black border-t border-gold/15 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-6xl text-gold tracking-wider mb-4">READY?</h2>
          <p className="font-body text-cream/45 mb-10">Drone delivery only. Houston area. Thursday midnight cutoff.</p>
          <Link href="/order" className="inline-flex items-center bg-gold text-htx-black font-mono text-sm tracking-widest uppercase px-10 py-4 font-medium hover:bg-gold-light transition-colors animate-pulse-glow">
            Order Now
          </Link>
        </div>
      </section>
    </>
  );
}
