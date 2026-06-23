import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
function SectionIntro({ eyebrow, title, subtitle, className = "", align = "center" }) {
  const isCenter = align === "center";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${isCenter ? "text-center mx-auto" : ""} reveal ${className}`,
      style: { maxWidth: isCenter ? 720 : void 0, marginBottom: 56 },
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-teal mb-4", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "clamp(28px, 4vw, 44px)", marginBottom: subtitle ? 16 : 0, lineHeight: 1.15 }, children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: isCenter ? "mx-auto" : "",
            style: { fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.7 },
            children: subtitle
          }
        )
      ]
    }
  );
}
function Hw({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: {
        fontFamily: "var(--font-hand)",
        color: "var(--color-gold)",
        fontWeight: 500,
        fontSize: "1.1em"
      },
      children
    }
  );
}
export {
  Hw as H,
  SectionIntro as S
};
