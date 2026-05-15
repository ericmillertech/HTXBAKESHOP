import type { Metadata } from 'next';
import OrderForm from '@/components/OrderForm';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Order HTX Bakehouse cookies. Weekend pickup in Houston, TX. Thursday midnight cutoff. CashApp, Zelle, and Venmo accepted.',
};

export default function OrderPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-htx-black border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Place Your Order</p>
          <h1 className="font-display text-7xl md:text-8xl text-cream tracking-wide leading-none mb-4">
            LET&apos;S GO
          </h1>
          <p className="font-body text-cream/45 text-lg max-w-2xl leading-relaxed">
            Weekend pickup. Houston only. Order by Thursday midnight — no exceptions.
            Payment via CashApp, Zelle, or Venmo after confirmation.
          </p>
        </div>
      </section>

      {/* Order details bar */}
      <section className="py-6 bg-brown border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 font-mono text-xs text-cream/50 tracking-wider">
            <span>
              <span className="text-gold">Pickup:</span> Saturday &amp; Sunday
            </span>
            <span className="text-gold/20 hidden sm:inline">|</span>
            <span>
              <span className="text-gold">Cutoff:</span> Thursday midnight
            </span>
            <span className="text-gold/20 hidden sm:inline">|</span>
            <span>
              <span className="text-gold">Payment:</span> CashApp · Zelle · Venmo
            </span>
            <span className="text-gold/20 hidden sm:inline">|</span>
            <span>
              <span className="text-gold">Min:</span> 1 cookie
            </span>
          </div>
        </div>
      </section>

      {/* Order form */}
      <section className="py-16 bg-htx-black">
        <div className="max-w-7xl mx-auto px-6">
          <OrderForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brown">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-xs text-gold/40 tracking-[0.25em] uppercase mb-4">Common Questions</p>
          <h2 className="font-display text-4xl text-cream tracking-wider mb-10">Before You Order</h2>
          <div className="space-y-6">
            {[
              {
                q: 'When do I pay?',
                a: "After you submit your order, we'll confirm it via text or email and send payment instructions. You pay via CashApp, Zelle, or Venmo — payment locks in your order.",
              },
              {
                q: 'Where do I pick up?',
                a: "Pickup location is shared after your order is confirmed and paid. We're in Houston, TX. We do not ship — these are baked fresh and meant to be eaten the same day.",
              },
              {
                q: 'Can I order same day?',
                a: "No. Every cookie rests for 72 hours before it's baked. Thursday midnight is the hard cutoff for weekend pickup. No exceptions — not for any order size.",
              },
              {
                q: 'What if I have an allergy?',
                a: "All cookies are made in a home kitchen. Cross-contact with wheat, dairy, eggs, peanuts, tree nuts, and soy is possible. If you have a severe allergy, we are not the right fit — please do not order.",
              },
              {
                q: 'Can I get a custom order or bulk order?',
                a: "Reach out via the notes field. We'll do our best to accommodate large orders with enough lead time. Minimum 1 week notice for orders of 2+ dozen.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gold/10 pb-6 last:border-0">
                <h3 className="font-accent text-sm font-semibold text-gold mb-2">{q}</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
