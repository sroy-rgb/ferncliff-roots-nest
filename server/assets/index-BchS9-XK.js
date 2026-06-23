import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as AdminLayout, S as StatCard, C as Card, a as SectionHeading, P as Pill, B as Button } from "./AdminLayout-CKgi6IRm.js";
import { Sparkle } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import { useState, useEffect } from "react";
import "@tanstack/react-query";
function fmtMoney(n) {
  return "$" + n.toLocaleString("en-US");
}
function timeAgo(ts, now) {
  const diff = Math.max(0, now - ts);
  const s = Math.floor(diff / 1e3);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
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
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 5e3);
    return () => clearInterval(t);
  }, []);
  const totalReg = registrations.length;
  const monthDonations = donations.reduce((s, d) => s + d.amount, 0);
  const totalInquiries = inquiries.length;
  const pendingInquiries = inquiries.filter((i) => i.status === "new").length;
  const totalVolunteers = volunteerRequests.length;
  const newVolunteers = volunteerRequests.filter((v) => v.status === "new").length;
  const newRegs = registrations.filter((r) => r.status === "new").length;
  const sessionMatrix = campSessions.map((s) => ({
    week: s.week,
    baseline: s.registered,
    live: registrations.filter((r) => r.session === s.week).length,
    capacity: s.capacity
  }));
  const maxBar = Math.max(...sessionMatrix.map((s) => s.baseline + s.live), 1);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Dashboard", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-[12px] text-[#6b665d] flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#2B7A6F] animate-pulse" }),
        " Live · auto-refresh every 5s"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-[#8a857c]", children: [
        "Updated ",
        timeAgo(now - 1e3, now)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/registrations", accent: "teal", value: String(totalReg), label: "Registrations", sub: `${newRegs} new`, arrow: newRegs > 0 ? "up" : void 0 }),
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/nature", accent: "gold", value: String(enrollments.filter((e) => ["Nature Preschool", "Wildcraft", "WILD Passport", "Homeschool Day"].includes(e.program)).length), label: "Nature Enrollments", sub: `${enrollments.filter((e) => e.status === "new").length} new`, arrow: enrollments.some((e) => e.status === "new") ? "up" : void 0 }),
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/inquiries", accent: "gold", value: String(totalInquiries + generalInquiries.length), label: "Inquiries", sub: `${pendingInquiries + generalInquiries.filter((g) => g.status === "pending").length} pending` }),
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/volunteers", accent: "teal", value: String(totalVolunteers), label: "Volunteer Requests", sub: `${newVolunteers} new`, arrow: newVolunteers > 0 ? "up" : void 0 }),
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/giving", accent: "gold", value: fmtMoney(monthDonations), label: "Donations This Month", sub: `${donations.length} gifts · ${donations.filter((d) => d.type === "Monthly").length} monthly`, arrow: "up" }),
      /* @__PURE__ */ jsx(StatCard, { to: "/admin/giving", accent: "teal", value: String(donations.filter((d) => d.type === "One-time").length), label: "One-Time Gifts", sub: "this month" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsx(SectionHeading, { className: "mb-4", children: "Recent Activity" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 max-h-[330px] overflow-y-auto pr-1", children: activity.map((a) => /* @__PURE__ */ jsx(ActivityRow, { a, now }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsx(SectionHeading, { className: "mb-4", children: "Live Registration Matrix" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: sessionMatrix.map((b) => {
          const total = b.baseline + b.live;
          const pct = Math.round(total / b.capacity * 100);
          const filling = pct >= 85;
          return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 text-[12px] text-[#6b665d]", children: b.week }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 h-3 rounded-full bg-[#F0EBE3] overflow-hidden flex", children: [
              /* @__PURE__ */ jsx("div", { className: "h-full transition-all duration-700", style: {
                width: `${Math.round(b.baseline / maxBar * 100)}%`,
                background: filling ? "#C49A3C" : "#2B7A6F"
              } }),
              b.live > 0 && /* @__PURE__ */ jsx("div", { className: "h-full transition-all duration-700", style: {
                width: `${Math.round(b.live / maxBar * 100)}%`,
                background: "#7DD3C4"
              }, title: `${b.live} new from inline form` })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-28 text-right text-[12px] font-medium flex items-center justify-end gap-1.5", children: [
              pct,
              "%",
              b.live > 0 && /* @__PURE__ */ jsxs(Pill, { color: "teal", children: [
                "+",
                b.live
              ] })
            ] })
          ] }, b.week);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-4 text-[11px] text-[#8a857c]", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-3 h-2 rounded-sm bg-[#2B7A6F]" }),
            " Existing"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-3 h-2 rounded-sm bg-[#7DD3C4]" }),
            " Live submissions"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsx(SectionHeading, { className: "mb-3", children: "Quick Actions" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/admin/registrations", children: /* @__PURE__ */ jsx(Button, { children: "View Registrations" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/inquiries", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View Inquiries" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/volunteers", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View Volunteer Requests" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/roadmap", children: /* @__PURE__ */ jsxs(Button, { variant: "purple", children: [
          /* @__PURE__ */ jsx(Sparkle, { size: 14 }),
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
  const [glow, setGlow] = useState(fresh);
  useEffect(() => {
    if (!glow) return;
    const t = setTimeout(() => setGlow(false), 2e3);
    return () => clearTimeout(t);
  }, [glow]);
  return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[13px] rounded-md px-2 -mx-2 py-1 transition-colors", style: glow ? {
    background: "rgba(43,122,111,0.10)"
  } : void 0, children: [
    /* @__PURE__ */ jsx("span", { className: "mt-1.5 w-2 h-2 rounded-full flex-shrink-0", style: {
      background: a.dot
    } }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[#2c2926]", children: a.text }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: timeAgo(a.ts, now) })
    ] })
  ] });
}
export {
  DashboardPage as component
};
