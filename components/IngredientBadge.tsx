interface IngredientBadgeProps {
  name: string;
  source: string;
}

export default function IngredientBadge({ name, source }: IngredientBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-brown/50 border border-gold/20 px-3 py-1.5 text-xs font-mono rounded-sm">
      <span className="text-gold-light">{name}</span>
      <span className="text-cream/25">·</span>
      <span className="text-cream/45">{source}</span>
    </div>
  );
}
