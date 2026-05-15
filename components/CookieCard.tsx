'use client';

import Link from 'next/link';
import { Cookie } from '@/data/cookies';
import MirrorGlazeColorPicker from './MirrorGlazeColorPicker';

const allergenIcons: Record<string, string> = {
  wheat:       '🌾',
  dairy:       '🥛',
  eggs:        '🥚',
  peanuts:     '🥜',
  'tree nuts': '🌰',
  soy:         '🫘',
};

const catStyle: Record<string, string> = {
  classic:      'text-cream/50 border-cream/20',
  premium:      'text-gold border-gold/40',
  'baddie-box': 'text-emerald-400 border-emerald-500/40',
};

const catLabel: Record<string, string> = {
  classic:      'Classic',
  premium:      'Premium',
  'baddie-box': 'Baddie Box',
};

interface Props {
  cookie: Cookie;
  featured?: boolean;
}

export default function CookieCard({ cookie, featured }: Props) {
  const badgeStyle =
    cookie.badge === 'premium' ? 'bg-gold/15 text-gold border-gold/30' :
    cookie.badge === 'limited' ? 'bg-htx-red/15 text-red-400 border-htx-red/30' :
    '';

  return (
    <div
      className={`group relative bg-[#0d0b09] border border-gold/10 hover:border-gold/35 transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ boxShadow: 'none' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(200,151,12,.12)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
    >
      {/* Badge */}
      {cookie.badge && (
        <div className={`absolute top-3 right-3 font-mono text-xs tracking-widest uppercase border px-2 py-0.5 z-10 ${badgeStyle}`}>
          {cookie.badge}
        </div>
      )}

      <div className={`p-6 ${featured ? 'md:grid md:grid-cols-2 md:gap-8 md:items-start' : ''}`}>

        {/* Visual */}
        {cookie.id === 'candy-paint' ? (
          <MirrorGlazeColorPicker />
        ) : (
          <div className="h-32 flex items-center justify-center bg-brown/25 mb-5 text-5xl group-hover:scale-105 transition-transform duration-300">
            {cookie.emoji}
          </div>
        )}

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-2xl text-cream tracking-wider leading-tight">{cookie.name}</h3>
            {cookie.id !== 'candy-paint' && (
              <span className="font-display text-xl text-gold shrink-0">${cookie.price.toFixed(2)}</span>
            )}
          </div>

          <span className={`font-mono text-xs tracking-widest uppercase border px-2 py-0.5 inline-block mb-3 ${catStyle[cookie.category]}`}>
            {catLabel[cookie.category]}
          </span>

          <p className="font-body text-xs text-gold/60 italic mb-2 leading-relaxed">{cookie.htownStory}</p>
          <p className="font-body text-sm text-cream/55 mb-4 leading-relaxed">{cookie.description}</p>

          {/* Ingredients */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cookie.ingredients.map(ing => (
              <span key={ing} className="font-mono text-xs bg-brown/35 border border-gold/10 text-cream/45 px-2 py-0.5 rounded-sm">
                {ing}
              </span>
            ))}
          </div>

          {/* Macros — Baddie Box only */}
          {cookie.macros && (
            <div className="flex gap-6 mb-4 bg-emerald-900/15 border border-emerald-500/20 px-4 py-3 rounded-sm">
              {[
                { val: `${cookie.macros.protein}g`, lbl: 'Protein' },
                { val: `${cookie.macros.calories}`,  lbl: 'Calories' },
                { val: `${cookie.macros.netCarbs}g`, lbl: 'Net Carbs' },
              ].map(m => (
                <div key={m.lbl} className="text-center">
                  <div className="font-display text-lg text-emerald-400 leading-none">{m.val}</div>
                  <div className="font-mono text-xs text-cream/35 mt-1">{m.lbl}</div>
                </div>
              ))}
            </div>
          )}

          {/* Allergens */}
          <div className="flex gap-1.5 mb-5" title="Allergens">
            {cookie.allergens.map(a => (
              <span key={a} title={a} className="text-sm opacity-40">{allergenIcons[a]}</span>
            ))}
          </div>

          <Link
            href="/order"
            className="block w-full bg-gold text-htx-black font-mono text-xs tracking-widest uppercase py-3 text-center hover:bg-gold-light transition-colors font-medium"
          >
            Add to Order
          </Link>
        </div>
      </div>
    </div>
  );
}
