import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
function PricingTiers({ tiers, labels = ["Tier 1", "Tier 2", "Tier 3"] }) {
  const descs = ["Full Cost", "Reduced", "Lowest"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 my-4", children: tiers.map((price, i) => {
    const featured = i === 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-[12px] p-4 text-center",
        style: {
          background: featured ? "var(--color-teal)" : "var(--color-cream)",
          color: featured ? "#fff" : "var(--color-dark)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-[10px] uppercase tracking-[2px] font-bold mb-1",
              style: { color: featured ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" },
              children: labels[i]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-[24px] leading-none my-1", children: price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-[11px] mt-1",
              style: { color: featured ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)" },
              children: descs[i]
            }
          )
        ]
      },
      i
    );
  }) });
}
export {
  PricingTiers as P
};
