export default function MarqueeStrip() {
  const text =
    'HTX BAKEHOUSE · DRONE DELIVERY ONLY · TORRES METHOD · LEVAIN SIZE · BORN IN HOUSTON · NO SHORTCUTS · THE SLAB · CANDY PAINT · THE GRILLZ · DROP TO YOUR DOOR · ';

  return (
    <div className="bg-gold overflow-hidden py-3 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1, 2, 3].map(i => (
          <span
            key={i}
            className="font-display text-htx-black text-lg tracking-widest shrink-0 px-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
