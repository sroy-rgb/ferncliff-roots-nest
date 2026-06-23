import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout, b as PageHeader, C as Card, P as Pill, B as Button } from "./AdminLayout-CKgi6IRm.js";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@phosphor-icons/react";
import "@tanstack/react-query";
function InquiriesPage() {
  const {
    inquiries,
    setInquiryStatus,
    generalInquiries,
    setGeneralInquiryStatus
  } = useContentStore();
  const [tab, setTab] = useState("retreat");
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Inquiries", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Inquiries & Form Submissions" }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-6 border-b border-[#E8E2D8]", children: [{
      key: "retreat",
      label: "Retreat Inquiries",
      count: inquiries.length
    }, {
      key: "general",
      label: "General",
      count: generalInquiries.length
    }].map((t) => /* @__PURE__ */ jsxs("button", { onClick: () => setTab(t.key), className: `px-4 py-2 text-[13px] font-medium border-b-2 -mb-px flex items-center gap-2 ${tab === t.key ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`, children: [
      t.label,
      " ",
      /* @__PURE__ */ jsx("span", { className: "px-1.5 rounded-full bg-[#C49A3C] text-white text-[10px]", children: t.count })
    ] }, t.key)) }),
    tab === "retreat" && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: inquiries.map((i) => /* @__PURE__ */ jsx(InquiryCard, { inquiry: i, onStatus: (s) => setInquiryStatus(i.id, s) }, i.id)) }),
    tab === "general" && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: generalInquiries.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-[#8a857c] text-[13px]", children: "No general inquiries yet." }) : generalInquiries.map((g) => /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-[15px]", children: g.subject }),
          /* @__PURE__ */ jsxs("div", { className: "text-[12px] text-[#6b665d]", children: [
            g.name,
            " · ",
            g.email,
            " · ",
            /* @__PURE__ */ jsxs("span", { className: "text-[#2B7A6F]", children: [
              "via ",
              g.source
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: g.received })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-[13px] text-[#3a3631] mb-3", children: g.message }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxs("select", { value: g.status, onChange: (e) => setGeneralInquiryStatus(g.id, e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
          /* @__PURE__ */ jsx("option", { value: "pending", children: "Pending" }),
          /* @__PURE__ */ jsx("option", { value: "acknowledged", children: "Acknowledged" }),
          /* @__PURE__ */ jsx("option", { value: "resolved", children: "Resolved" })
        ] }),
        /* @__PURE__ */ jsx(Pill, { color: g.status === "pending" ? "yellow" : g.status === "acknowledged" ? "gold" : "green", children: g.status })
      ] })
    ] }, g.id)) })
  ] });
}
function InquiryCard({
  inquiry: i,
  onStatus
}) {
  const label = i.status === "new" ? "New" : i.status === "in-progress" ? "In Progress" : "Responded";
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: i.org }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: i.received })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#a39d92]", children: "Contact" }),
        i.contact
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#a39d92]", children: "Email" }),
        i.email
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#a39d92]", children: "Size · Dates" }),
        i.guests,
        " · ",
        i.dates
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#a39d92]", children: "Type" }),
        i.type
      ] })
    ] }),
    i.message && /* @__PURE__ */ jsx("div", { className: "text-[13px] text-[#3a3631] mb-4 line-clamp-2", children: i.message }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxs("select", { value: i.status, onChange: (e) => onStatus(e.target.value), className: "h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]", children: [
        /* @__PURE__ */ jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsx("option", { value: "in-progress", children: "In Progress" }),
        /* @__PURE__ */ jsx("option", { value: "responded", children: "Responded" })
      ] }),
      /* @__PURE__ */ jsx(Pill, { color: i.status === "new" ? "yellow" : i.status === "in-progress" ? "gold" : "green", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 ml-auto", children: [
        /* @__PURE__ */ jsx(Button, { children: "Respond" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Mark Complete" })
      ] })
    ] })
  ] });
}
export {
  InquiriesPage as component
};
