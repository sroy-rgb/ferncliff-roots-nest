import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, Fragment } from "react";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, P as Pill, T as Table } from "./AdminLayout-CKgi6IRm.js";
import { Plus } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-query";
function CampPage() {
  const {
    campSessions,
    registrations,
    setRegistrationStatus
  } = useContentStore();
  const [tab, setTab] = useState("sessions");
  const [expanded, setExpanded] = useState(null);
  const [regFilter, setRegFilter] = useState("all");
  const filteredRegs = registrations.filter((r) => regFilter === "all" || r.status === regFilter);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Camp Sessions", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Camp Sessions — 2026", action: /* @__PURE__ */ jsxs(Button, { children: [
      /* @__PURE__ */ jsx(Plus, { size: 14 }),
      " Add Session"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4 border-b border-[#E8E2D8]", children: ["sessions", "registrations"].map((t) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(t), className: `px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px ${tab === t ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`, children: t }, t)) }),
    tab === "sessions" && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-[13px]", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "text-left text-[#8a857c] border-b border-[#E8E2D8]", children: ["Week", "Dates", "Camp Types", "Capacity", "Registered", "Status"].map((h) => /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-[11px] uppercase tracking-wider", children: h }, h)) }) }),
      /* @__PURE__ */ jsx("tbody", { children: campSessions.map((s) => {
        const pct = Math.round(s.registered / s.capacity * 100);
        const open = expanded === s.week;
        const gold = s.status === "filling";
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-[#F0EBE3] hover:bg-[#FAF6EE] cursor-pointer", onClick: () => setExpanded(open ? null : s.week), children: [
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-medium", children: s.week }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: s.dates }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-[12px] text-[#6b665d]", children: s.types.join(" + ") }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: s.capacity }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-24 h-1.5 rounded-full bg-[#F0EBE3] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full", style: {
                width: `${pct}%`,
                background: gold ? "#C49A3C" : "#2B7A6F"
              } }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[12px]", children: s.registered })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx(Pill, { color: gold ? "gold" : "green", children: gold ? "Filling" : "Open" }) })
          ] }),
          open && /* @__PURE__ */ jsx("tr", { className: "bg-[#FAF6EE]", children: /* @__PURE__ */ jsxs("td", { colSpan: 6, className: "px-6 py-4 text-[12px] text-[#6b665d]", children: [
            "Breakdown — Day: ",
            Math.round(s.registered * 0.5),
            " · Overnight: ",
            Math.round(s.registered * 0.35),
            " · Discovery: ",
            Math.round(s.registered * 0.15)
          ] }) })
        ] }, s.week);
      }) })
    ] }) }) }),
    tab === "registrations" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-3 mb-4 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("select", { value: regFilter, onChange: (e) => setRegFilter(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
          /* @__PURE__ */ jsx("option", { value: "all", children: "All statuses" }),
          /* @__PURE__ */ jsx("option", { value: "new", children: "New" }),
          /* @__PURE__ */ jsx("option", { value: "confirmed", children: "Confirmed" }),
          /* @__PURE__ */ jsx("option", { value: "waitlist", children: "Waitlist" }),
          /* @__PURE__ */ jsx("option", { value: "cancelled", children: "Cancelled" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/registrations", className: "ml-auto text-[12px] text-[#2B7A6F] hover:underline", children: "Open detailed view →" })
      ] }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Camper Name", "Guardian", "Camp Type", "Session", "Status", "Received", "Actions"], rows: filteredRegs.map((r) => [/* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
        r.camperName,
        " ",
        /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-[#8a857c] font-normal", children: [
          "· age ",
          r.age
        ] })
      ] }), /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { children: r.parentName }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: r.email })
      ] }), r.campType, r.session, /* @__PURE__ */ jsx(Pill, { color: r.status === "confirmed" ? "green" : r.status === "waitlist" ? "gold" : r.status === "cancelled" ? "red" : "yellow", children: r.status }), /* @__PURE__ */ jsx("span", { className: "text-[12px] text-[#6b665d]", children: r.received }), /* @__PURE__ */ jsxs("select", { value: r.status, onChange: (e) => setRegistrationStatus(r.id, e.target.value), className: "h-7 px-2 rounded border border-[#E8E2D8] bg-white text-[12px]", children: [
        /* @__PURE__ */ jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsx("option", { value: "confirmed", children: "Confirmed" }),
        /* @__PURE__ */ jsx("option", { value: "waitlist", children: "Waitlist" }),
        /* @__PURE__ */ jsx("option", { value: "cancelled", children: "Cancelled" })
      ] })]) }) })
    ] })
  ] });
}
export {
  CampPage as component
};
