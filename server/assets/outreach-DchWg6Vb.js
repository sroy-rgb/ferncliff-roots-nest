import { T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, S as StatCard, C as Card, T as Table, P as Pill } from "./AdminLayout-BgfvEmVW.js";
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
function OutreachAdmin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Outreach", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Outreach & Mission" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: "1,240", label: "Hygiene Kits YTD", sub: "goal 2,000" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: "68", label: "Volunteers Active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: "12", label: "Upcoming Mission Trips" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Program", "Date", "Coordinator", "Status"], rows: [["Hygiene Kit Drive — June", "Jun 14, 2026", "Roy", /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: "green", children: "Active" })], ["Disaster Relief Training", "Jul 8, 2026", "Kim Graves", /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: "gold", children: "Scheduled" })], ["Guatemala Mission Team", "Aug 1–14, 2026", "Pastor Mike", /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: "green", children: "Active" })], ["School Supply Drive", "Aug 22, 2026", "Roy", /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: "yellow", children: "Planning" })]] }) })
  ] });
}
export {
  OutreachAdmin as component
};
