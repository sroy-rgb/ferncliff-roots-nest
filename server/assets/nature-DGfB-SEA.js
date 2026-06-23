import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { A as AdminLayout, b as PageHeader, S as StatCard, a as SectionHeading, C as Card, T as Table, P as Pill, B as Button } from "./AdminLayout-DtRp_F75.js";
import { u as useContentStore } from "./router-CcwXCmxT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-CcXU0ouX.js";
import "./Campfire.es-DWlYIawg.js";
import "./UsersThree.es-hrxF0Ge9.js";
import "./Leaf.es-DM0Xn-b5.js";
import "./House.es-D7jUb5Ym.js";
import "./X.es-wrRY5dVW.js";
const NATURE_PROGRAMS = ["Nature Preschool", "Wildcraft", "WILD Passport", "Homeschool Day"];
function NatureAdmin() {
  const {
    enrollments,
    setEnrollmentStatus
  } = useContentStore();
  const [program, setProgram] = reactExports.useState("all");
  const natureEnrollments = reactExports.useMemo(() => enrollments.filter((e) => NATURE_PROGRAMS.includes(e.program)), [enrollments]);
  const preschoolCount = natureEnrollments.filter((e) => e.program === "Nature Preschool" && e.status !== "cancelled").length;
  const wildcraftCount = natureEnrollments.filter((e) => (e.program === "Wildcraft" || e.program === "WILD Passport" || e.program === "Homeschool Day") && e.status !== "cancelled").length;
  const waitlistCount = natureEnrollments.filter((e) => e.status === "waitlist").length;
  const filtered = program === "all" ? natureEnrollments : natureEnrollments.filter((e) => e.program === program);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Nature School", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Nature School" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(preschoolCount), label: "Enrolled — Preschool" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: String(wildcraftCount), label: "Wildcraft / Homeschool" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(waitlistCount), label: "Waitlist" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Enrollments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: program, onChange: (e) => setProgram(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Nature programs" }),
        NATURE_PROGRAMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-[#8a857c] text-[13px]", children: "No enrollments yet for this program." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Student", "Age", "Program", "Guardian", "Start", "Received", "Status", "Actions"], rows: filtered.map((e) => [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: e.childName }), e.childAge, e.program, /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: e.parentName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: e.email })
    ] }), e.startDate, /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#8a857c]", children: e.received }), /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { s: e.status }), /* @__PURE__ */ jsxRuntimeExports.jsx(ActionMenu, { e, onStatus: (s) => setEnrollmentStatus(e.id, s) })]) }) })
  ] });
}
function StatusPill({
  s
}) {
  const map = {
    new: ["yellow", "New"],
    confirmed: ["green", "Confirmed"],
    waitlist: ["gold", "Waitlist"],
    cancelled: ["red", "Cancelled"]
  };
  const [color, label] = map[s];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color, children: label });
}
function ActionMenu({
  e,
  onStatus
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
    e.status !== "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "!h-7 !px-2 !text-[11px]", onClick: () => onStatus("confirmed"), children: "Confirm" }),
    e.status !== "waitlist" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "!h-7 !px-2 !text-[11px]", variant: "outline", onClick: () => onStatus("waitlist"), children: "Waitlist" })
  ] });
}
export {
  NatureAdmin as component
};
