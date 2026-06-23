import { T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, B as Button, S as StatCard, C as Card, T as Table } from "./AdminLayout-BgfvEmVW.js";
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
const subs = [["sarah.j@gmail.com", "Sarah Johnson", "Homepage", "May 23, 2026"], ["mlee@conway.edu", "Marcus Lee", "Camp page", "May 21, 2026"], ["pat.hayes@awl.org", "Patricia Hayes", "Retreats", "May 19, 2026"], ["family@brown.net", "The Browns", "Footer", "May 18, 2026"]];
function SubsAdmin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Email Subscribers", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Email Subscribers", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Export CSV" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: "2,840", label: "Total Subscribers", sub: "+34 this week", arrow: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: "42%", label: "Avg Open Rate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: "9.4%", label: "Avg Click Rate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Email", "Name", "Source", "Subscribed"], rows: subs.map((r) => [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r[0] }), r[1], r[2], r[3]]) }) })
  ] });
}
export {
  SubsAdmin as component
};
