import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout, b as PageHeader, S as StatCard, C as Card, T as Table, P as Pill } from "./AdminLayout-CKgi6IRm.js";
import "@tanstack/react-router";
import "react";
import "@phosphor-icons/react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
function OutreachAdmin() {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Outreach", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Outreach & Mission" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: "1,240", label: "Hygiene Kits YTD", sub: "goal 2,000" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "gold", value: "68", label: "Volunteers Active" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: "12", label: "Upcoming Mission Trips" })
    ] }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Program", "Date", "Coordinator", "Status"], rows: [["Hygiene Kit Drive — June", "Jun 14, 2026", "Roy", /* @__PURE__ */ jsx(Pill, { color: "green", children: "Active" })], ["Disaster Relief Training", "Jul 8, 2026", "Kim Graves", /* @__PURE__ */ jsx(Pill, { color: "gold", children: "Scheduled" })], ["Guatemala Mission Team", "Aug 1–14, 2026", "Pastor Mike", /* @__PURE__ */ jsx(Pill, { color: "green", children: "Active" })], ["School Supply Drive", "Aug 22, 2026", "Roy", /* @__PURE__ */ jsx(Pill, { color: "yellow", children: "Planning" })]] }) })
  ] });
}
export {
  OutreachAdmin as component
};
