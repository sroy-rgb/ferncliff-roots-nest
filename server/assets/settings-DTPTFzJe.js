import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout, b as PageHeader, P as Pill, B as Button, C as Card } from "./AdminLayout-CKgi6IRm.js";
import "@tanstack/react-router";
import "@phosphor-icons/react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
function Section({
  title,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full flex items-center justify-between px-5 py-4 text-left", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-[14px]", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-[#888] text-lg", children: open ? "−" : "+" })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 border-t border-[#F0F0F0]", children })
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: label }),
    /* @__PURE__ */ jsx("input", { defaultValue: value, className: "mt-1 w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]" })
  ] });
}
function SettingsPage() {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Settings", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Settings" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 max-w-3xl", children: [
      /* @__PURE__ */ jsx(Section, { title: "General", defaultOpen: true, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(Field, { label: "Site Title", value: "Ferncliff Camp & Conference Center" }),
        /* @__PURE__ */ jsx(Field, { label: "Tagline", value: "Where community grows wild" }),
        /* @__PURE__ */ jsx(Field, { label: "Admin Email", value: "admin@ferncliff.org" }),
        /* @__PURE__ */ jsx(Field, { label: "Timezone", value: "America/Chicago" })
      ] }) }),
      /* @__PURE__ */ jsx(Section, { title: "Integrations", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[13px]", children: [["CampBrain API", "green", "Connected"], ["DonorPerfect", "green", "Connected"], ["Constant Contact", "green", "Connected"], ["Square", "green", "Connected"], ["ADP", "yellow", "Needs attention"]].map(([n, c, s]) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between border-b border-[#F0F0F0] py-2", children: [
        /* @__PURE__ */ jsx("span", { children: n }),
        /* @__PURE__ */ jsx(Pill, { color: c, children: s })
      ] }, n)) }) }),
      /* @__PURE__ */ jsx(Section, { title: "Users", children: /* @__PURE__ */ jsx("table", { className: "w-full text-[13px]", children: /* @__PURE__ */ jsx("tbody", { children: [["Kimberly Graves", "Admin"], ["Roy", "Editor"], ["Staff User", "Author"]].map(([n, r]) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-[#F0F0F0]", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2", children: n }),
        /* @__PURE__ */ jsx("td", { className: "py-2 text-[#666]", children: r })
      ] }, n)) }) }) }),
      /* @__PURE__ */ jsx(Section, { title: "Email Templates", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[13px]", children: ["Welcome subscriber", "Registration confirmation", "Inquiry received", "Donation thank you"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-[#F0F0F0] py-2", children: [
        /* @__PURE__ */ jsx("span", { children: t }),
        /* @__PURE__ */ jsx("button", { className: "text-[#2B7A6F] text-[12px] hover:underline", children: "Edit" })
      ] }, t)) }) }),
      /* @__PURE__ */ jsxs(Section, { title: "Backup", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[13px] text-[#666]", children: "Last backup: May 24, 2026 · 3:00 AM" }),
          /* @__PURE__ */ jsx(Button, { children: "Create Backup" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[12px] text-[#666] space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "May 24, 2026 · 3:00 AM · 142 MB" }),
          /* @__PURE__ */ jsx("li", { children: "May 23, 2026 · 3:00 AM · 141 MB" }),
          /* @__PURE__ */ jsx("li", { children: "May 22, 2026 · 3:00 AM · 140 MB" })
        ] })
      ] })
    ] })
  ] });
}
export {
  SettingsPage as component
};
