import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, S as StatCard, C as Card, P as Pill, B as Button } from "./AdminLayout-BgfvEmVW.js";
import { u as useContentStore } from "./router-C6JYablr.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-Cna1nS-x.js";
import "./Campfire.es-CyVf36GU.js";
import "./UsersThree.es-DBg7kxs0.js";
import "./Leaf.es-C9gFgTaj.js";
import "./House.es-AaiP2I_B.js";
import "./X.es-D-he6W1E.js";
function VolPage() {
  const {
    volunteerRequests,
    setVolunteerStatus
  } = useContentStore();
  const [filter, setFilter] = reactExports.useState("all");
  const [interest, setInterest] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const interests = reactExports.useMemo(() => Array.from(new Set(volunteerRequests.map((v) => v.interest))), [volunteerRequests]);
  const filtered = reactExports.useMemo(() => volunteerRequests.filter((v) => (filter === "all" || v.status === filter) && (interest === "all" || v.interest === interest) && (q === "" || `${v.name} ${v.email} ${v.message ?? ""}`.toLowerCase().includes(q.toLowerCase()))), [volunteerRequests, filter, interest, q]);
  const counts = {
    total: volunteerRequests.length,
    new: volunteerRequests.filter((v) => v.status === "new").length,
    inProgress: volunteerRequests.filter((v) => v.status === "in-progress" || v.status === "acknowledged").length,
    resolved: volunteerRequests.filter((v) => v.status === "resolved").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Volunteer Requests", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Volunteer Requests & Queries" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(counts.total), label: "Total Requests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: String(counts.new), label: "New" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(counts.inProgress), label: "In Progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: String(counts.resolved), label: "Resolved" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 mb-4 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search…", value: q, onChange: (e) => setQ(e.target.value), className: "flex-1 min-w-[200px] h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All statuses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "acknowledged", children: "Acknowledged" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in-progress", children: "In Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "resolved", children: "Resolved" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: interest, onChange: (e) => setInterest(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All categories" }),
        interests.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i, children: i }, i))
      ] })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-[#8a857c] text-[13px]", children: volunteerRequests.length === 0 ? "No volunteer requests yet. Submissions from the public Outreach form will appear here in real time." : "No requests match your filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(VolCard, { v, onStatus: (s) => setVolunteerStatus(v.id, s) }, v.id)) })
  ] });
}
function VolCard({
  v,
  onStatus
}) {
  const labels = {
    new: "New",
    acknowledged: "Acknowledged",
    "in-progress": "In Progress",
    resolved: "Resolved"
  };
  const colors = {
    new: "yellow",
    acknowledged: "teal",
    "in-progress": "gold",
    resolved: "green"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[15px]", children: v.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d]", children: [
          v.email,
          " · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#2B7A6F]", children: v.interest })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: v.received })
    ] }),
    v.message && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-[#3a3631] mb-4 italic", children: [
      '"',
      v.message,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: v.status, onChange: (e) => onStatus(e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "acknowledged", children: "Acknowledged" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in-progress", children: "In Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "resolved", children: "Resolved" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: colors[v.status], children: labels[v.status] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onStatus("acknowledged"), children: "Acknowledge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onStatus("resolved"), children: "Mark Resolved" })
      ] })
    ] })
  ] });
}
export {
  VolPage as component
};
