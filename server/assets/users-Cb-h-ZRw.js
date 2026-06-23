import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, T as Table, P as Pill } from "./AdminLayout-CKgi6IRm.js";
import { Plus } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const users = [["KG", "Kimberly Graves", "kimberly@ferncliff.org", "Admin", "Active"], ["R", "Roy", "roy@ferncliff.org", "Editor", "Active"], ["S", "Staff User", "staff@ferncliff.org", "Author", "Active"], ["JD", "Jane Doe", "jane@ferncliff.org", "Author", "Invited"]];
function UsersPage() {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Users & Roles", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Users & Roles", action: /* @__PURE__ */ jsxs(Button, { children: [
      /* @__PURE__ */ jsx(Plus, { size: 14 }),
      " Invite User"
    ] }) }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Name", "Email", "Role", "Status"], rows: users.map(([i, n, e, r, s]) => [/* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full bg-[#2B7A6F] text-white text-[11px] flex items-center justify-center", children: i }),
      n
    ] }), /* @__PURE__ */ jsx("span", { className: "text-[#666]", children: e }), /* @__PURE__ */ jsx(Pill, { color: r === "Admin" ? "teal" : r === "Editor" ? "gold" : "grey", children: r }), /* @__PURE__ */ jsx(Pill, { color: s === "Active" ? "green" : "yellow", children: s })]) }) })
  ] });
}
export {
  UsersPage as component
};
