import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-htx-black border-t border-gold/15 pt-16 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="font-mono text-xs text-cream/40 tracking-wider mt-4 leading-relaxed">
              Torres Method. Levain Size. HTX Made.<br />
              Houston, TX · Drone Delivery Only
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[['/', 'Home'], ['/menu', 'Menu'], ['/craft', 'Our Craft'], ['/about', 'About'], ['/order', 'Order']].map(([href, label]) => (
                <Link key={href} href={href} className="font-body text-sm text-cream/45 hover:text-cream transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Order info */}
          <div>
            <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase mb-5">Order & Pay</p>
            <div className="flex flex-col gap-2 font-mono text-xs text-cream/45 leading-relaxed">
              <span>CashApp · Zelle · Venmo</span>
              <span className="text-cream/25">Details sent after order submitted</span>
            </div>
            <div className="mt-6">
              <p className="font-mono text-xs text-gold/50 tracking-[0.2em] uppercase mb-2">Drone Delivery</p>
              <p className="font-mono text-xs text-cream/45">Saturday & Sunday · Houston area</p>
              <p className="font-mono text-xs text-cream/30 mt-1">Order cutoff: Thursday midnight</p>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-cream/20">© 2025 HTX Bakehouse. All rights reserved.</p>
          <p className="font-mono text-xs text-cream/20">Texas Cottage Food Operation · Direct Sales Only · No Preservatives</p>
        </div>
      </div>
    </footer>
  );
}
