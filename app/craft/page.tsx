import type { Metadata } from 'next';
import { ingredients } from '@/data/ingredients';

export const metadata: Metadata = {
  title: 'Our Craft',
  description: 'What goes into every HTX Bakehouse cookie. The 72-hour commitment, premium ingredients, and what we refuse to put in our cookies.',
};

const noList = [
  'No artificial flavors',
  'No preservatives',
  'No pre-mixed dough',
  'No frozen shortcuts',
  'No artificial colors',
  'No margarine',
];

export default function CraftPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-htx-black border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">The Method</p>
          <h1 className="font-display text-7xl md:text-8xl text-cream tracking-wide mb-4">
            WHAT GOES INTO<br />EVERY COOKIE
          </h1>
          <p className="font-body text-cream/45 text-lg max-w-2xl leading-relaxed">
            This page is about quality and trust. It is not a recipe. The recipes stay in the kitchen.
          </p>
        </div>
      </section>

      {/* ── 72-HOUR COMMITMENT ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Section 01</p>
              <h2 className="font-display text-5xl text-cream tracking-wider mb-6">The 72-Hour<br />Commitment</h2>
              <p className="font-body text-cream/65 text-lg leading-relaxed mb-5">
                Every cookie rests for 72 hours before it ever sees an oven. That rest is why our cookies
                taste different from everything else in Houston.
              </p>
              <p className="font-body text-cream/50 leading-relaxed mb-5">
                We won&apos;t rush it. Not for anyone. Not for a big order. Not for a last-minute request.
                The dough is ready when it&apos;s ready, and not a moment before.
              </p>
              <p className="font-body text-cream/50 leading-relaxed">
                Most cookie operations skip this step entirely because it costs time and takes patience.
                That&apos;s exactly why we don&apos;t.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gold/20" />
              {[
                { day: 'Day 1', title: 'Dough mixed', sub: 'Everything comes together.' },
                { day: 'Day 2', title: 'Resting',     sub: 'Flavor deepens. Structure builds.' },
                { day: 'Day 3', title: 'Still cold',  sub: "Still waiting. Still worth it." },
                { day: 'Oven',  title: 'Baked fresh', sub: 'Not a moment before it\'s ready.' },
                { day: 'You',   title: 'Your hands',  sub: 'The way it should arrive.' },
              ].map((step, i) => (
                <div key={step.day} className="relative flex items-start gap-6 mb-8 last:mb-0">
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center shrink-0 font-mono text-xs tracking-wider ${
                      step.day === 'You'
                        ? 'bg-gold border-gold text-htx-black'
                        : 'bg-brown border-gold/30 text-gold'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="pt-2">
                    <p className="font-mono text-xs text-gold/50 tracking-widest uppercase mb-0.5">{step.day}</p>
                    <p className="font-accent text-sm font-semibold text-cream mb-0.5">{step.title}</p>
                    <p className="font-body text-xs text-cream/40">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS ── */}
      <section className="py-24 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Section 02</p>
          <h2 className="font-display text-5xl text-cream tracking-wider mb-4">The Ingredients</h2>
          <p className="font-body text-cream/45 mb-12 max-w-2xl leading-relaxed">
            What we use, where it comes from, and why. No quantities. No ratios. That part stays in the kitchen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ingredients.map(ing => (
              <div
                key={ing.id}
                className="bg-[#0d0b09] border border-gold/10 p-6 hover:border-gold/30 transition-colors group"
              >
                <span className="text-3xl mb-4 block">{ing.icon}</span>
                <h3 className="font-accent text-sm font-semibold text-cream mb-1 group-hover:text-gold transition-colors">
                  {ing.name}
                </h3>
                <p className="font-mono text-xs text-gold/45 mb-3 tracking-wide">{ing.source}</p>
                <p className="font-body text-xs text-cream/45 leading-relaxed">{ing.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DON'T USE ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Section 03</p>
            <h2 className="font-display text-5xl text-cream tracking-wider mb-10">What We Don&apos;t Use</h2>
            <div className="space-y-4">
              {noList.map(item => (
                <div key={item} className="flex items-center gap-4 border-b border-gold/10 pb-4 last:border-0">
                  <span className="text-htx-red font-display text-xl">✕</span>
                  <span className="font-accent text-lg font-semibold text-cream">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRESH OR IT DOESN'T GO OUT ── */}
      <section className="py-24 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Section 04</p>
            <h2 className="font-display text-5xl text-cream tracking-wider mb-6">
              Fresh or It<br />Doesn&apos;t Go Out
            </h2>
            <p className="font-body text-cream/65 text-lg leading-relaxed mb-5">
              We bake to order. If it didn&apos;t sell today, it doesn&apos;t go out tomorrow.
            </p>
            <p className="font-body text-cream/45 leading-relaxed">
              Freshness is not a marketing claim for us. It&apos;s not a tagline on the box.
              It&apos;s how we operate — because that&apos;s the only way to deliver what we promised.
              A cookie that&apos;s a day old is not an HTX Bakehouse cookie.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE SIZE ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="flex justify-center">
              <div
                className="w-56 h-56 rounded-full flex items-center justify-center text-7xl animate-float"
                style={{ background: 'radial-gradient(ellipse at 35% 35%, #7a3e1e, #2E1503)', boxShadow: '0 0 60px rgba(200,151,12,.18)' }}
              >
                🍪
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Section 05</p>
              <h2 className="font-display text-5xl text-cream tracking-wider mb-6">The Size</h2>
              <p className="font-body text-cream/65 text-lg leading-relaxed mb-5">
                We make cookies that are meant to be a full experience — not a snack. One cookie. That&apos;s the meal.
              </p>
              <p className="font-body text-cream/45 leading-relaxed mb-5">
                Levain Bakery in New York became a legend with this philosophy. We brought that same energy
                to Houston. If your cookie doesn&apos;t require both hands and a full commitment, it&apos;s not a cookie.
                It&apos;s a garnish.
              </p>
              <p className="font-body text-cream/45 leading-relaxed">
                No apology for that.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
