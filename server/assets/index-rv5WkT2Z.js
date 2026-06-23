import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { u as useContentStore, L as Link } from "./router-CcwXCmxT.js";
import { A as AdminLayout, S as StatCard, C as Card, a as SectionHeading, P as Pill, B as Button, s } from "./AdminLayout-DtRp_F75.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-CcXU0ouX.js";
import "./Campfire.es-DWlYIawg.js";
import "./UsersThree.es-hrxF0Ge9.js";
import "./Leaf.es-DM0Xn-b5.js";
import "./House.es-D7jUb5Ym.js";
import "./X.es-wrRY5dVW.js";
function fmtMoney(n) {
  return "$" + n.toLocaleString("en-US");
}
function timeAgo(ts, now) {
  const diff = Math.max(0, now - ts);
  const s2 = Math.floor(diff / 1e3);
  if (s2 < 60) return `${s2}s ago`;
  const m = Math.floor(s2 / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}
function DashboardPage() {
  const {
    campSessions,
    donations,
    inquiries,
    activity,
    registrations,
    volunteerRequests,
    enrollments,
    generalInquiries
  } = useContentStore();
  const [now, setNow] = reactExports.useState(Date.now());
  reactExports.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 5e3);
    return () => clearInterval(t);
  }, []);
  const totalReg = registrations.length;
  const monthDonations = donations.reduce((s2, d) => s2 + d.amount, 0);
  const totalInquiries = inquiries.length;
  const pendingInquiries = inquiries.filter((i) => i.status === "new").length;
  const totalVolunteers = volunteerRequests.length;
  const newVolunteers = volunteerRequests.filter((v) => v.status === "new").length;
  const newRegs = registrations.filter((r) => r.status === "new").length;
  const sessionMatrix = campSessions.map((s2) => ({
    week: s2.week,
    baseline: s2.registered,
    live: registrations.filter((r) => r.session === s2.week).length,
    capacity: s2.capacity
  }));
  const maxBar = Math.max(...sessionMatrix.map((s2) => s2.baseline + s2.live), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Dashboard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d] flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#2B7A6F] animate-pulse" }),
        " Live · auto-refresh every 5s"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-[#8a857c]", children: [
        "Updated ",
        timeAgo(now - 1e3, now)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/registrations", accent: "teal", value: String(totalReg), label: "Registrations", sub: `${newRegs} new`, arrow: newRegs > 0 ? "up" : void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/nature", accent: "gold", value: String(enrollments.filter((e) => ["Nature Preschool", "Wildcraft", "WILD Passport", "Homeschool Day"].includes(e.program)).length), label: "Nature Enrollments", sub: `${enrollments.filter((e) => e.status === "new").length} new`, arrow: enrollments.some((e) => e.status === "new") ? "up" : void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/inquiries", accent: "gold", value: String(totalInquiries + generalInquiries.length), label: "Inquiries", sub: `${pendingInquiries + generalInquiries.filter((g) => g.status === "pending").length} pending` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/volunteers", accent: "teal", value: String(totalVolunteers), label: "Volunteer Requests", sub: `${newVolunteers} new`, arrow: newVolunteers > 0 ? "up" : void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/giving", accent: "gold", value: fmtMoney(monthDonations), label: "Donations This Month", sub: `${donations.length} gifts · ${donations.filter((d) => d.type === "Monthly").length} monthly`, arrow: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { to: "/admin/giving", accent: "teal", value: String(donations.filter((d) => d.type === "One-time").length), label: "One-Time Gifts", sub: "this month" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { className: "mb-4", children: "Recent Activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 max-h-[330px] overflow-y-auto pr-1", children: activity.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityRow, { a, now }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { className: "mb-4", children: "Live Registration Matrix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: sessionMatrix.map((b) => {
          const total = b.baseline + b.live;
          const pct = Math.round(total / b.capacity * 100);
          const filling = pct >= 85;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 text-[12px] text-[#6b665d]", children: b.week }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 h-3 rounded-full bg-[#F0EBE3] overflow-hidden flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full transition-all duration-700", style: {
                width: `${Math.round(b.baseline / maxBar * 100)}%`,
                background: filling ? "#C49A3C" : "#2B7A6F"
              } }),
              b.live > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full transition-all duration-700", style: {
                width: `${Math.round(b.live / maxBar * 100)}%`,
                background: "#7DD3C4"
              }, title: `${b.live} new from inline form` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-28 text-right text-[12px] font-medium flex items-center justify-end gap-1.5", children: [
              pct,
              "%",
              b.live > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Pill, { color: "teal", children: [
                "+",
                b.live
              ] })
            ] })
          ] }, b.week);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4 text-[11px] text-[#8a857c]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-2 rounded-sm bg-[#2B7A6F]" }),
            " Existing"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-2 rounded-sm bg-[#7DD3C4]" }),
            " Live submissions"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { className: "mb-3", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/registrations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "View Registrations" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/inquiries", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "View Inquiries" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/volunteers", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "View Volunteer Requests" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/roadmap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "purple", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: 14 }),
          " Phase 2 Roadmap"
        ] }) })
      ] })
    ] })
  ] });
}
function ActivityRow({
  a,
  now
}) {
  const fresh = now - a.ts < 4e3;
  const [glow, setGlow] = reactExports.useState(fresh);
  reactExports.useEffect(() => {
    if (!glow) return;
    const t = setTimeout(() => setGlow(false), 2e3);
    return () => clearTimeout(t);
  }, [glow]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-[13px] rounded-md px-2 -mx-2 py-1 transition-colors", style: glow ? {
    background: "rgba(43,122,111,0.10)"
  } : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-2 h-2 rounded-full flex-shrink-0", style: {
      background: a.dot
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#2c2926]", children: a.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: timeAgo(a.ts, now) })
    ] })
  ] });
}
export {
  DashboardPage as component
};
