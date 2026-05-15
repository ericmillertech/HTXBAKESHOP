'use client';

import { useEffect, useRef, useState } from 'react';

const rows = [
  { category: 'Chocolate Source',   htx: 'Valrhona (France)',        crumbl: 'Commodity blend'          },
  { category: 'Butter',             htx: 'Browned in-house',         crumbl: 'Standard butter'          },
  { category: 'Dough Rest',         htx: '72 hours minimum',         crumbl: 'Baked same day'           },
  { category: 'Cookie Size',        htx: '3.5oz Levain-style',       crumbl: 'Varies by week'           },
  { category: 'Preservatives',      htx: 'Zero. None. Ever.',        crumbl: 'Present'                  },
  { category: 'Artificial Flavors', htx: 'None',                     crumbl: 'Used in rotating menu'   },
  { category: 'Made From Scratch',  htx: 'Every single batch',       crumbl: 'Partially pre-mixed'      },
  { category: 'Local Roots',        htx: 'Houston born & made',      crumbl: 'Utah franchise'           },
];

export default function ComparisonTable() {
  const [vis, setVis] = useState<boolean[]>(rows.map(() => false));
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  useEffect(() => {
    const observers = rows.map((_, i) => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVis(v => { const n = [...v]; n[i] = true; return n; });
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      const el = rowRefs.current[i];
      if (el) obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-4 font-mono text-xs text-cream/30 tracking-widest uppercase w-1/3"></th>
            <th className="py-4 px-4 text-center">
              <span className="font-display text-2xl text-gold tracking-widest">HTX BAKEHOUSE</span>
            </th>
            <th className="py-4 px-4 text-center">
              <span className="font-mono text-sm text-cream/30 tracking-widest">CRUMBL</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              ref={el => { rowRefs.current[i] = el; }}
              className={`border-t border-gold/10 transition-all duration-500 ${
                vis[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <td className="py-4 px-4 font-mono text-xs text-cream/40 tracking-wide">{row.category}</td>
              <td className="py-4 px-4 text-center">
                <span className="font-body text-sm text-cream font-semibold">
                  <span className="text-emerald-400 mr-1.5">✓</span>{row.htx}
                </span>
              </td>
              <td className="py-4 px-4 text-center font-mono text-xs text-cream/25">{row.crumbl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
