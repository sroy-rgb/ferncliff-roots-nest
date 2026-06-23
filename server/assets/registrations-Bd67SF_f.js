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
function RegPage() {
  const {
    registrations,
    setRegistrationStatus
  } = useContentStore();
  const [filter, setFilter] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => registrations.filter((r) => (filter === "all" || r.status === filter) && (q === "" || `${r.camperName} ${r.parentName} ${r.email} ${r.session}`.toLowerCase().includes(q.toLowerCase()))), [registrations, filter, q]);
  const counts = {
    total: registrations.length,
    new: registrations.filter((r) => r.status === "new").length,
    confirmed: registrations.filter((r) => r.status === "confirmed").length,
    waitlist: registrations.filter((r) => r.status === "waitlist").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Registrations", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Camp Registrations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(counts.total), label: "Total Registrations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: String(counts.new), label: "New (pending review)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(counts.confirmed), label: "Confirmed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: String(counts.waitlist), label: "Waitlist" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 mb-4 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search name, email, session…", value: q, onChange: (e) => setQ(e.target.value), className: "flex-1 min-w-[200px] h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All statuses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "waitlist", children: "Waitlist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
      ] })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-[#8a857c] text-[13px]", children: registrations.length === 0 ? "No registrations yet. Submissions from the public Register form will appear here in real time." : "No registrations match your filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RegCard, { r, onStatus: (s) => setRegistrationStatus(r.id, s) }, r.id)) })
  ] });
}
function RegCard({
  r,
  onStatus
}) {
  const labels = {
    new: "New",
    confirmed: "Confirmed",
    waitlist: "Waitlist",
    cancelled: "Cancelled"
  };
  const colors = {
    new: "yellow",
    confirmed: "green",
    waitlist: "gold",
    cancelled: "red"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-[15px]", children: [
          r.camperName,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#8a857c] text-[12px] font-normal", children: [
            "· age ",
            r.age
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d]", children: [
          "Parent: ",
          r.parentName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: r.received })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Email" }),
        r.email
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Phone" }),
        r.phone
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Session" }),
        r.session
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Type" }),
        r.campType
      ] })
    ] }),
    r.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-[#3a3631] mb-4 italic", children: [
      '"',
      r.notes,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: r.status, onChange: (e) => onStatus(e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "waitlist", children: "Waitlist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: colors[r.status], children: labels[r.status] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onStatus("confirmed"), children: "Confirm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onStatus("waitlist"), children: "Waitlist" })
      ] })
    ] })
  ] });
}
export {
  RegPage as component
};
