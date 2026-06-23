import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-o_4KanfB.js";
import { L as Link } from "./router-CcwXCmxT.js";
const links = [
  { to: "/camp", label: "Overview" },
  { to: "/camp/overnight", label: "Overnight" },
  { to: "/camp/day", label: "Day Camp" },
  { to: "/camp/discovery", label: "Discovery" },
  { to: "/camp/specialty", label: "Specialty" },
  { to: "/camp/family", label: "Family" },
  { to: "/camp/dates", label: "2026 Dates" },
  { to: "/camp/first-time", label: "First-Time" },
  { to: "/camp/gallery", label: "Gallery" }
];
function CampSubNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed left-0 right-0 z-[999]",
      style: {
        top: 72,
        background: "#FFFDF9",
        borderBottom: "1px solid #E8E2D8"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 h-[48px] whitespace-nowrap", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          activeOptions: { exact: true },
          className: "px-3 py-2 text-[13px] font-semibold transition-colors relative",
          style: { color: "var(--color-dark-warm)" },
          activeProps: {
            style: {
              color: "var(--color-teal)",
              borderBottom: "2px solid var(--color-gold)"
            }
          },
          children: l.label
        },
        l.to
      )) }) })
    }
  );
}
function CampLayout({ children }) {
  useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampSubNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { style: { paddingTop: 120 }, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomBar, {})
  ] });
}
export {
  CampLayout as C
};
