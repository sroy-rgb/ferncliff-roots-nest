import { T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, C as Card, S as StatCard, T as Table } from "./AdminLayout-BgfvEmVW.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C6JYablr.js";
import "./Buildings.es-Cna1nS-x.js";
import "./Campfire.es-CyVf36GU.js";
import "./UsersThree.es-DBg7kxs0.js";
import "./Leaf.es-C9gFgTaj.js";
import "./House.es-AaiP2I_B.js";
import "./X.es-D-he6W1E.js";
const audit = [["Homepage", "✓", "✓", "100%", "✓", 98], ["Camp Overview", "✓", "✓", "85%", "✓", 94], ["First-Time Campers", "✓", "⚠ (too short)", "100%", "✓", 88], ["Retreats", "✓", "✓", "70%", "✗", 76], ["Giving", "✓", "✗ (missing)", "90%", "✓", 82]];
const ind = (v) => {
  if (v.startsWith("✓")) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: v });
  if (v.startsWith("⚠")) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-600", children: v });
  if (v.startsWith("✗")) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600", children: v });
  return v;
};
function SeoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "SEO & Analytics", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "SEO & Analytics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: "Core Web Vitals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LCP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "1.8s" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "45ms" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CLS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "0.05" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: "SEO Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 relative inline-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "80", height: "80", viewBox: "0 0 80 80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "34", fill: "none", stroke: "#F0F0F0", strokeWidth: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "34", fill: "none", stroke: "#2B7A6F", strokeWidth: "8", strokeDasharray: `${92 / 100 * 213.6} 213.6`, strokeLinecap: "round", transform: "rotate(-90 40 40)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center font-semibold text-[#2B7A6F]", children: "92" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: "47", label: "Indexed Pages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: "3,240", label: "Monthly Organic Traffic", sub: "visits" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Page", "Meta Title", "Meta Description", "Alt Text Coverage", "Schema", "Score"], rows: audit.map((r) => [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r[0] }), ind(String(r[1])), ind(String(r[2])), ind(String(r[3])), ind(String(r[4])), /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: r[5] })]) }) })
  ] });
}
export {
  SeoPage as component
};
