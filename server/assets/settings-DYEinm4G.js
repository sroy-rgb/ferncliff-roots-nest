import { T as jsxRuntimeExports, r as reactExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, P as Pill, B as Button, C as Card } from "./AdminLayout-BgfvEmVW.js";
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
function Section({
  title,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full flex items-center justify-between px-5 py-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[14px]", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#888] text-lg", children: open ? "−" : "+" })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 pt-1 border-t border-[#F0F0F0]", children })
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: value, className: "mt-1 w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]" })
  ] });
}
function SettingsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "General", defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Site Title", value: "Ferncliff Camp & Conference Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tagline", value: "Where community grows wild" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Admin Email", value: "admin@ferncliff.org" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Timezone", value: "America/Chicago" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Integrations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-[13px]", children: [["CampBrain API", "green", "Connected"], ["DonorPerfect", "green", "Connected"], ["Constant Contact", "green", "Connected"], ["Square", "green", "Connected"], ["ADP", "yellow", "Needs attention"]].map(([n, c, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between border-b border-[#F0F0F0] py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: c, children: s })
      ] }, n)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Users", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-[13px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [["Kimberly Graves", "Admin"], ["Roy", "Editor"], ["Staff User", "Author"]].map(([n, r]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[#F0F0F0]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-[#666]", children: r })
      ] }, n)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Email Templates", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-[13px]", children: ["Welcome subscriber", "Registration confirmation", "Inquiry received", "Donation thank you"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-[#F0F0F0] py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[#2B7A6F] text-[12px] hover:underline", children: "Edit" })
      ] }, t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Backup", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[#666]", children: "Last backup: May 24, 2026 · 3:00 AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Create Backup" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-[12px] text-[#666] space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "May 24, 2026 · 3:00 AM · 142 MB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "May 23, 2026 · 3:00 AM · 141 MB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "May 22, 2026 · 3:00 AM · 140 MB" })
        ] })
      ] })
    ] })
  ] });
}
export {
  SettingsPage as component
};
