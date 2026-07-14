'use client';

import { useState } from 'react';
import { Cookie, CookieCategory } from '@/data/cookies';
import CookieCard from './CookieCard';

type Filter = 'all' | CookieCategory;

const tabs: { label: string; value: Filter }[] = [
  { label: 'All',        value: 'all'         },
  { label: 'Classic',    value: 'classic'     },
  { label: 'Premium',    value: 'premium'     },
  { label: 'Baddie Box', value: 'baddie-box'  },
  { label: 'Cake Pops',  value: 'cake-pop'   },
];

interface Props {
  cookies: Cookie[];
}

export default function FilteredMenu({ cookies }: Props) {
  const [active, setActive] = useState<Filter>('all');

  const filtered = active === 'all'
    ? cookies
    : cookies.filter(c => c.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {tabs.map(t => (
          <button
            key={t.value}
            onClick={() => setActive(t.value)}
            className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
              active === t.value
                ? 'bg-gold text-htx-black border-gold'
                : 'bg-transparent text-cream/50 border-gold/20 hover:border-gold/50 hover:text-cream'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(cookie => (
          <CookieCard
            key={cookie.id}
            cookie={cookie}
            featured={cookie.featured && active === 'all'}
          />
        ))}
      </div>
    </div>
  );
}
