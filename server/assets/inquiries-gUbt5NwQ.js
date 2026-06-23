import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, C as Card, P as Pill, B as Button } from "./AdminLayout-BgfvEmVW.js";
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
function InquiriesPage() {
  const {
    inquiries,
    setInquiryStatus,
    generalInquiries,
    setGeneralInquiryStatus
  } = useContentStore();
  const [tab, setTab] = reactExports.useState("retreat");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Inquiries", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Inquiries & Form Submissions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6 border-b border-[#E8E2D8]", children: [{
      key: "retreat",
      label: "Retreat Inquiries",
      count: inquiries.length
    }, {
      key: "general",
      label: "General",
      count: generalInquiries.length
    }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.key), className: `px-4 py-2 text-[13px] font-medium border-b-2 -mb-px flex items-center gap-2 ${tab === t.key ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`, children: [
      t.label,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 rounded-full bg-[#C49A3C] text-white text-[10px]", children: t.count })
    ] }, t.key)) }),
    tab === "retreat" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: inquiries.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryCard, { inquiry: i, onStatus: (s) => setInquiryStatus(i.id, s) }, i.id)) }),
    tab === "general" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: generalInquiries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-[#8a857c] text-[13px]", children: "No general inquiries yet." }) : generalInquiries.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[15px]", children: g.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d]", children: [
            g.name,
            " · ",
            g.email,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#2B7A6F]", children: [
              "via ",
              g.source
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: g.received })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[#3a3631] mb-3", children: g.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: g.status, onChange: (e) => setGeneralInquiryStatus(g.id, e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "acknowledged", children: "Acknowledged" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "resolved", children: "Resolved" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: g.status === "pending" ? "yellow" : g.status === "acknowledged" ? "gold" : "green", children: g.status })
      ] })
    ] }, g.id)) })
  ] });
}
function InquiryCard({
  inquiry: i,
  onStatus
}) {
  const label = i.status === "new" ? "New" : i.status === "in-progress" ? "In Progress" : "Responded";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: i.org }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: i.received })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Contact" }),
        i.contact
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Email" }),
        i.email
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Size · Dates" }),
        i.guests,
        " · ",
        i.dates
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#a39d92]", children: "Type" }),
        i.type
      ] })
    ] }),
    i.message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[#3a3631] mb-4 line-clamp-2", children: i.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: i.status, onChange: (e) => onStatus(e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in-progress", children: "In Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "responded", children: "Responded" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: i.status === "new" ? "yellow" : i.status === "in-progress" ? "gold" : "green", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Respond" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Mark Complete" })
      ] })
    ] })
  ] });
}
export {
  InquiriesPage as component
};
