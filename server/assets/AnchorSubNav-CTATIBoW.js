import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
function AnchorSubNav({ links }) {
  const [active, setActive] = reactExports.useState(links[0]?.href ?? "");
  reactExports.useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - 140 <= 0) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed left-0 right-0 z-[999] bg-offwhite",
      style: { top: 72, borderBottom: "1px solid rgba(0,0,0,0.06)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 h-[48px] whitespace-nowrap", children: links.map((l) => {
        const isActive = active === l.href;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: l.href,
            className: "relative px-3 py-2 text-[13px] font-semibold transition-colors",
            style: {
              color: isActive ? "var(--color-teal)" : "var(--color-text-muted)"
            },
            children: [
              l.label,
              isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute left-2 right-2 bottom-0 h-[2px] bg-gold rounded-full"
                }
              )
            ]
          },
          l.href
        );
      }) }) })
    }
  );
}
export {
  AnchorSubNav as A
};
