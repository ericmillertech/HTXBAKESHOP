'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { href: '/',       label: 'Home'      },
  { href: '/menu',   label: 'Menu'      },
  { href: '/craft',  label: 'Our Craft' },
  { href: '/about',  label: 'About'     },
  { href: '/order',  label: 'Order'     },
];

export default function Nav() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-htx-black/95 backdrop-blur-md border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="HTX Bakehouse home">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                pathname === l.href
                  ? 'text-gold'
                  : 'text-cream/55 hover:text-cream'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/order"
          className="hidden md:inline-flex items-center font-mono text-xs tracking-widest uppercase bg-gold text-htx-black px-5 py-2.5 font-medium hover:bg-gold-light transition-colors"
        >
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-px bg-cream transition-transform origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-transform origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-htx-black/98 border-t border-gold/15 px-6 py-8 flex flex-col gap-5">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-sm tracking-widest uppercase ${
                pathname === l.href ? 'text-gold' : 'text-cream/60'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="mt-2 bg-gold text-htx-black font-mono text-xs tracking-widest uppercase px-5 py-3 text-center font-medium"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
