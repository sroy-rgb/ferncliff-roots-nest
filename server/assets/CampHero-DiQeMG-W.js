import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
function CampHero({ image, eyebrow, title, subtitle, height = "60vh", children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative flex items-end overflow-hidden",
      style: { minHeight: height, paddingBottom: 60 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(180deg, rgba(20,18,16,0.2) 0%, rgba(20,18,16,0.1) 30%, rgba(20,18,16,0.5) 65%, rgba(20,18,16,0.85) 100%), linear-gradient(90deg, rgba(20,18,16,0.4) 0%, transparent 55%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative z-[2] w-full",
            style: { maxWidth: 1200, margin: "0 auto", padding: "0 48px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 640 }, children: [
              eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold mb-4", children: eyebrow }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-white font-light leading-[1.08] mb-4",
                  style: { fontSize: "clamp(36px, 5vw, 60px)" },
                  children: title
                }
              ),
              subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light mb-7",
                  style: { color: "rgba(255,255,255,0.7)", fontSize: 17, maxWidth: 480 },
                  children: subtitle
                }
              ),
              children
            ] })
          }
        )
      ]
    }
  );
}
function HeroEm({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "em",
    {
      style: {
        fontStyle: "italic",
        fontWeight: 400,
        color: "var(--color-gold)"
      },
      children
    }
  );
}
export {
  CampHero as C,
  HeroEm as H
};
