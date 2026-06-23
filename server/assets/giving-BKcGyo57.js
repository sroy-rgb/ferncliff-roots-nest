import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout, b as PageHeader, S as StatCard, C as Card, a as SectionHeading, T as Table } from "./AdminLayout-CKgi6IRm.js";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "react";
import "@phosphor-icons/react";
import "@tanstack/react-query";
function GivingAdmin() {
  const {
    donations,
    homepage
  } = useContentStore();
  const total = donations.reduce((s, d) => s + d.amount, 0);
  const monthly = donations.filter((d) => d.type === "Monthly").length;
  const avg = donations.length ? Math.round(total / donations.length) : 0;
  const pct = Math.round(homepage.campaignRaised / homepage.campaignGoal * 100);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Donations & Giving", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Donations & Giving" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: `$${total.toLocaleString()}`, label: "Total This Month", sub: "vs $11,200 last month", arrow: "up" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "gold", value: `$${(homepage.campaignRaised / 1e6).toFixed(2)}M`, label: "Campaign Total", sub: `${pct}% of $${(homepage.campaignGoal / 1e6).toFixed(1)}M goal` }),
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: String(monthly), label: "Active Monthly Donors", sub: "Friends of Ferncliff" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "gold", value: `$${avg}`, label: "Average Gift Amount" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-5 mb-6", children: [
      /* @__PURE__ */ jsx(SectionHeading, { className: "mb-3", children: "Connect · Inspire · Transform Campaign" }),
      /* @__PURE__ */ jsx("div", { className: "h-3 rounded-full bg-[#F0EBE3] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-[#C49A3C]", style: {
        width: `${pct}%`
      } }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2 text-[11px] text-[#6b665d]", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "$",
          homepage.campaignRaised.toLocaleString(),
          " raised"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "$",
          homepage.campaignGoal.toLocaleString(),
          " goal · ",
          pct,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Date", "Donor", "Amount", "Type", "Campaign"], rows: donations.map((d) => [d.date, d.donor, /* @__PURE__ */ jsxs("span", { className: "font-semibold text-[#2B7A6F]", children: [
      "$",
      d.amount.toLocaleString()
    ] }), d.type, d.campaign]) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-[11px] text-[#8a857c] italic", children: "All donation processing handled through DonorPerfect. This view shows synchronized records." })
  ] });
}
export {
  GivingAdmin as component
};
