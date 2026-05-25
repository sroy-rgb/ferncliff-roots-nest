type Props = {
  tiers: [string, string, string];
  labels?: [string, string, string];
};

/** Pricing row matching the reference: Tier 1 featured (teal), Tiers 2 & 3 subtle. */
export function PricingTiers({ tiers, labels = ["Tier 1", "Tier 2", "Tier 3"] }: Props) {
  const descs = ["Full Cost", "Reduced", "Lowest"];
  return (
    <div className="grid grid-cols-3 gap-3 my-4">
      {tiers.map((price, i) => {
        const featured = i === 0;
        return (
          <div
            key={i}
            className="rounded-[12px] p-4 text-center"
            style={{
              background: featured ? "var(--color-teal)" : "var(--color-cream)",
              color: featured ? "#fff" : "var(--color-dark)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[2px] font-bold mb-1"
              style={{ color: featured ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" }}
            >
              {labels[i]}
            </div>
            <div className="font-serif text-[24px] leading-none my-1">{price}</div>
            <div
              className="text-[11px] mt-1"
              style={{ color: featured ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)" }}
            >
              {descs[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
