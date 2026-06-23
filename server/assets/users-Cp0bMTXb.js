import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, T as Table, P as Pill } from "./AdminLayout-DtRp_F75.js";
import { n } from "./Plus.es-CkGihgcG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CcwXCmxT.js";
import "./Buildings.es-CcXU0ouX.js";
import "./Campfire.es-DWlYIawg.js";
import "./UsersThree.es-hrxF0Ge9.js";
import "./Leaf.es-DM0Xn-b5.js";
import "./House.es-D7jUb5Ym.js";
import "./X.es-wrRY5dVW.js";
const users = [["KG", "Kimberly Graves", "kimberly@ferncliff.org", "Admin", "Active"], ["R", "Roy", "roy@ferncliff.org", "Editor", "Active"], ["S", "Staff User", "staff@ferncliff.org", "Author", "Active"], ["JD", "Jane Doe", "jane@ferncliff.org", "Author", "Invited"]];
function UsersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Users & Roles", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Users & Roles", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 14 }),
      " Invite User"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Name", "Email", "Role", "Status"], rows: users.map(([i, n2, e, r, s]) => [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full bg-[#2B7A6F] text-white text-[11px] flex items-center justify-center", children: i }),
      n2
    ] }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#666]", children: e }), /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: r === "Admin" ? "teal" : r === "Editor" ? "gold" : "grey", children: r }), /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: s === "Active" ? "green" : "yellow", children: s })]) }) })
  ] });
}
export {
  UsersPage as component
};
