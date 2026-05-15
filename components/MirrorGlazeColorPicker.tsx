'use client';

import { useState } from 'react';

const colorways = [
  { name: 'Purple Drank',  color: '#6B2FA0', flavor: 'Grape lavender',      price: 7.50 },
  { name: 'Candy Red',     color: '#B83020', flavor: 'Strawberry hibiscus',  price: 7.50 },
  { name: 'Midnight Blue', color: '#1A3A6B', flavor: 'Blueberry lemon',      price: 7.50 },
  { name: 'Slab Gold',     color: '#C8970C', flavor: 'Saffron honey',        price: 8.50 },
];

export default function MirrorGlazeColorPicker() {
  const [sel, setSel] = useState(0);
  const cw = colorways[sel];

  return (
    <div className="space-y-4">
      {/* Cookie visual */}
      <div
        className="h-36 w-full flex items-center justify-center transition-all duration-500 rounded-sm relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 35% 35%, ${cw.color}ee 0%, ${cw.color}77 60%, #0d0702 100%)`,
          boxShadow: `0 0 40px ${cw.color}55`,
        }}
      >
        {/* Shine streak */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, #ffffff44 0%, transparent 50%)`,
          }}
        />
        <span className="text-5xl relative z-10">🍪</span>
      </div>

      {/* Swatches */}
      <div className="flex gap-2">
        {colorways.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSel(i)}
            title={c.name}
            className={`flex-1 h-8 rounded-sm border transition-all duration-200 ${
              i === sel
                ? 'border-cream/80 scale-105 shadow-lg'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
            style={{ background: c.color, boxShadow: i === sel ? `0 2px 12px ${c.color}88` : undefined }}
          />
        ))}
      </div>

      {/* Selected info */}
      <div className="flex justify-between items-end">
        <div>
          <p className="font-display text-xl text-cream tracking-wider">{cw.name}</p>
          <p className="font-mono text-xs text-cream/45">{cw.flavor}</p>
        </div>
        <p className="font-display text-2xl text-gold">${cw.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
