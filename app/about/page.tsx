import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind HTX Bakehouse. A Houston-born cookie brand built on the Jacques Torres method, Levain size, and Houston street culture identity.',
};

const values = [
  'Zero artificial flavors — ever',
  'Made from scratch daily — never frozen',
  'Fresh or it doesn\'t go out',
  'Torres method — always',
  'Houston always',
];

const family = [
  { role: 'Head Baker', who: 'Dad', what: 'Recipe development, quality control, kitchen operations. Every batch starts and ends with him.' },
  { role: 'Brand & Operations', who: 'Daughter', what: 'Brand identity, social media, packaging, customer orders. The voice of HTX Bakehouse.' },
  { role: 'Drone Ops & Production', who: 'Son', what: 'Drone delivery, production support, content. When he wants in — he\'s all the way in.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-htx-black border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">The Story</p>
          <h1 className="font-display text-7xl md:text-8xl text-cream tracking-wide leading-none mb-6">
            WHY HOUSTON<br />NEEDED THIS
          </h1>
        </div>
      </section>

      {/* ── THE QUESTION ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-6">The Origin</p>
            <p className="font-display text-4xl text-gold leading-tight mb-10">
              &ldquo;Why does Houston not have a cookie that actually represents the city?&rdquo;
            </p>
            <p className="font-body text-cream/65 text-lg leading-relaxed mb-6">
              Not a franchise. Not a pink box. Not a weekly rotating gimmick menu built on whatever&apos;s trending.
            </p>
            <p className="font-body text-cream/55 text-lg leading-relaxed mb-6">
              Just the fattest, most intentional cookie the city has ever tasted — built on the most famous
              cookie recipe in New York Times history, scaled to Levain Bakery proportions, and named
              after the Houston streets, sounds, and culture that shaped everything.
            </p>
            <p className="font-body text-cream/55 leading-relaxed">
              That question became HTX Bakehouse.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE GIRL DAD ORIGIN ── */}
      <section className="py-24 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">The Beginning</p>
              <h2 className="font-display text-5xl text-cream tracking-wider mb-6">A Dad and a Daughter</h2>
              {/* Placeholder for personal story */}
              <div className="bg-brown/40 border border-gold/15 p-8 font-mono text-sm text-cream/35 leading-relaxed">
                <p className="text-gold/50 text-xs tracking-widest uppercase mb-3">// STORY PLACEHOLDER</p>
                <p>
                  This is where the personal origin story goes — a dad and his daughter building something
                  together. The real story of why this started and what it means to both of them.
                </p>
                <p className="mt-3">More soon. This is still being written.</p>
              </div>
            </div>
            <div>
              <div className="gold-line mb-8" />
              <p className="font-display text-4xl text-gold mb-4">BE SOMEONE</p>
              <p className="font-body text-cream/60 leading-relaxed mb-5">
                There&apos;s a mural on the I-45 overpass in Houston that reads BE SOMEONE. You&apos;ve seen it.
                It hits different every time you drive past it — and nobody fully agrees on who put it there or what it means.
              </p>
              <p className="font-body text-cream/45 leading-relaxed">
                HTX Bakehouse came from that same energy. The idea that you can build something intentional,
                something real, something Houston — and put it out into the world without apology.
                That sign isn&apos;t asking for permission. Neither are we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FAMILY ── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">The Team</p>
          <h2 className="font-display text-5xl text-cream tracking-wider mb-12">The Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {family.map(member => (
              <div key={member.role} className="bg-htx-black/60 border border-gold/10 p-7 hover:border-gold/25 transition-colors">
                <p className="font-mono text-xs text-gold/50 tracking-widest uppercase mb-2">{member.role}</p>
                <h3 className="font-display text-2xl text-cream tracking-wider mb-3">{member.who}</h3>
                <p className="font-body text-sm text-cream/45 leading-relaxed">{member.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">What We Stand For</p>
              <h2 className="font-display text-5xl text-cream tracking-wider mb-10">The Rules</h2>
              <div className="space-y-5">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-4 pb-5 border-b border-gold/10 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-gold/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-accent text-base font-semibold text-cream">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brown/30 border border-gold/10 p-8">
              <p className="font-display text-3xl text-gold mb-4">&ldquo;HOUSTON&apos;S COOKIE. NO CAP.&rdquo;</p>
              <p className="font-body text-cream/50 leading-relaxed mb-6">
                This is what happens when someone who loves this city decides to build something worthy of it.
                Not a chain. Not a trend. A permanent piece of Houston&apos;s food identity.
              </p>
              <Link
                href="/order"
                className="inline-block bg-gold text-htx-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold-light transition-colors font-medium"
              >
                Try One for Yourself
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
