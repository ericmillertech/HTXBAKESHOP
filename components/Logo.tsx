export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const scales = { sm: 'text-xl', md: 'text-2xl', lg: 'text-4xl' };
  const sub    = { sm: 'text-xs', md: 'text-xs',  lg: 'text-sm' };

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Cookie mark */}
      <svg
        viewBox="0 0 40 40"
        className={size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9'}
        aria-hidden
      >
        <circle cx="20" cy="20" r="18" fill="#2E1503" stroke="#C8970C" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="13" cy="14" r="3.5" fill="#0d0702" />
        <circle cx="26" cy="13" r="3"   fill="#0d0702" />
        <circle cx="14" cy="25" r="3"   fill="#0d0702" />
        <circle cx="26" cy="26" r="3.5" fill="#0d0702" />
        <circle cx="20" cy="19" r="2.5" fill="#0d0702" />
        <rect x="11" y="12" width="5" height="1.5" rx="0.5" fill="#F5EDD8" opacity="0.5" transform="rotate(-20,13,12.75)" />
        <rect x="23" y="24" width="4" height="1.5" rx="0.5" fill="#F5EDD8" opacity="0.5" transform="rotate(10,25,24.75)" />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className={`font-display ${scales[size]} text-gold tracking-widest`}>
          HTX
        </div>
        <div className={`font-mono ${sub[size]} text-cream/70 tracking-[0.25em] uppercase`}>
          Bakehouse
        </div>
      </div>
    </div>
  );
}
