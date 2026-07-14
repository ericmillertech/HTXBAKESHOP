'use client';

import { useState } from 'react';
import { cookies } from '@/data/cookies';

interface LineItem {
  cookieId: string;
  qty: number;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export default function OrderForm() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '',
    address: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const setQty = (id: string, val: number) => {
    setQuantities(q => ({ ...q, [id]: Math.max(0, val) }));
  };

  const lineItems: LineItem[] = cookies
    .filter(c => (quantities[c.id] ?? 0) > 0)
    .map(c => ({ cookieId: c.id, qty: quantities[c.id] }));

  const total = lineItems.reduce((sum, li) => {
    const cookie = cookies.find(c => c.id === li.cookieId)!;
    return sum + cookie.price * li.qty;
  }, 0);

  const itemCount = lineItems.reduce((s, li) => s + li.qty, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lineItems.length === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-6">
        <div className="text-6xl mb-6">🍪</div>
        <h2 className="font-display text-4xl text-gold tracking-wider mb-4">ORDER RECEIVED</h2>
        <p className="font-body text-cream/70 mb-8 leading-relaxed">
          Your order has been submitted. To complete it, send payment using one of the methods below.
          Once payment is confirmed, we&apos;ll reach out with pickup details.
        </p>

        <div className="bg-brown/30 border border-gold/20 p-8 mb-8 text-left">
          <p className="font-mono text-xs text-gold/60 tracking-widest uppercase mb-4">Order Summary</p>
          {lineItems.map(li => {
            const c = cookies.find(x => x.id === li.cookieId)!;
            return (
              <div key={li.cookieId} className="flex justify-between font-body text-sm text-cream/70 mb-2">
                <span>{c.name} × {li.qty}</span>
                <span>${(c.price * li.qty).toFixed(2)}</span>
              </div>
            );
          })}
          <div className="border-t border-gold/20 mt-4 pt-4 flex justify-between">
            <span className="font-mono text-sm text-cream/50 tracking-wider">TOTAL</span>
            <span className="font-display text-2xl text-gold">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'CashApp', value: '$HTXBakehouse' },
            { label: 'Venmo',   value: '@HTXBakehouse' },
            { label: 'Zelle',   value: 'Provided on request' },
          ].map(p => (
            <div key={p.label} className="bg-[#0d0b09] border border-gold/15 p-4 text-center">
              <p className="font-mono text-xs text-gold/50 tracking-widest uppercase mb-2">{p.label}</p>
              <p className="font-body text-sm text-cream">{p.value}</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-cream/35">
          Include your name in the payment note. Drone delivery: Saturday & Sunday, Houston area.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">

      {/* Cookie selection */}
      <div className="mb-12">
        <h2 className="font-display text-3xl text-gold tracking-wider mb-2">Select Cookies</h2>
        <p className="font-mono text-xs text-cream/40 tracking-wider mb-8">
          DRONE DELIVERY: SAT & SUN · ORDER CUTOFF: THURSDAY MIDNIGHT
        </p>

        <div className="space-y-3">
          {cookies.map(c => (
            <div
              key={c.id}
              className="flex items-center justify-between bg-[#0d0b09] border border-gold/10 px-5 py-4 hover:border-gold/25 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl shrink-0">{c.emoji}</span>
                <div className="min-w-0">
                  <p className="font-display text-base text-cream tracking-wider truncate">{c.name}</p>
                  <p className="font-mono text-xs text-gold">${c.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Qty stepper */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setQty(c.id, (quantities[c.id] ?? 0) - 1)}
                  className="w-8 h-8 border border-gold/20 text-cream/60 hover:border-gold hover:text-cream transition-colors font-display text-lg leading-none"
                >
                  −
                </button>
                <span className="font-mono text-sm text-cream w-4 text-center">
                  {quantities[c.id] ?? 0}
                </span>
                <button
                  type="button"
                  onClick={() => setQty(c.id, (quantities[c.id] ?? 0) + 1)}
                  className="w-8 h-8 border border-gold/20 text-cream/60 hover:border-gold hover:text-cream transition-colors font-display text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drone delivery address */}
      <div className="mb-10">
        <h2 className="font-display text-3xl text-gold tracking-wider mb-2">Drone Drop Address</h2>
        <p className="font-mono text-xs text-cream/35 tracking-wider mb-6">HOUSTON AREA ONLY · ENSURE 10FT CLEAR DROP ZONE</p>
        <div className="bg-gold/5 border border-gold/20 px-5 py-3 mb-4 flex items-center gap-3">
          <span className="text-xl">🚁</span>
          <p className="font-mono text-xs text-gold/70 tracking-wider">Drone delivery · Sat &amp; Sun · Delivery window confirmed after payment</p>
        </div>
        <input
          type="text"
          placeholder="Delivery address (Houston area only)"
          value={form.address}
          onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
          className="w-full bg-[#0d0b09] border border-gold/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50"
          required
        />
      </div>

      {/* Contact info */}
      <div className="mb-10">
        <h2 className="font-display text-3xl text-gold tracking-wider mb-6">Contact Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: 'name',  type: 'text',  placeholder: 'Full name',    required: true  },
            { key: 'phone', type: 'tel',   placeholder: 'Phone number', required: true  },
            { key: 'email', type: 'email', placeholder: 'Email',        required: false },
          ].map(f => (
            <input
              key={f.key}
              type={f.type}
              placeholder={f.placeholder}
              required={f.required}
              value={form[f.key as keyof FormState] as string}
              onChange={e => setForm(ff => ({ ...ff, [f.key]: e.target.value }))}
              className="bg-[#0d0b09] border border-gold/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors"
            />
          ))}
          <textarea
            placeholder="Special notes or requests"
            rows={3}
            value={form.notes}
            onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            className="md:col-span-2 bg-[#0d0b09] border border-gold/15 px-4 py-3 font-body text-sm text-cream placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Order summary + submit */}
      <div className="bg-brown/25 border border-gold/15 p-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-xs text-cream/40 tracking-widest">ITEMS</span>
          <span className="font-mono text-sm text-cream">{itemCount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-cream/40 tracking-widest">TOTAL</span>
          <span className="font-display text-3xl text-gold">${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={lineItems.length === 0 || !form.name || !form.phone || !form.address}
        className="w-full bg-gold text-htx-black font-mono text-sm tracking-widest uppercase py-4 font-medium hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Submit Order
      </button>
      <p className="font-mono text-xs text-cream/25 text-center mt-3">
        Payment via CashApp · Zelle · Venmo after confirmation
      </p>
    </form>
  );
}
