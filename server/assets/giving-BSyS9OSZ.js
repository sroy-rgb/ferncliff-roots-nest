import { T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { A as AdminLayout, b as PageHeader, S as StatCard, C as Card, a as SectionHeading, T as Table } from "./AdminLayout-DtRp_F75.js";
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
function GivingAdmin() {
  const {
    donations,
    homepage
  } = useContentStore();
  const total = donations.reduce((s, d) => s + d.amount, 0);
  const monthly = donations.filter((d) => d.type === "Monthly").length;
  const avg = donations.length ? Math.round(total / donations.length) : 0;
  const pct = Math.round(homepage.campaignRaised / homepage.campaignGoal * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Donations & Giving", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Donations & Giving" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: `$${total.toLocaleString()}`, label: "Total This Month", sub: "vs $11,200 last month", arrow: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: `$${(homepage.campaignRaised / 1e6).toFixed(2)}M`, label: "Campaign Total", sub: `${pct}% of $${(homepage.campaignGoal / 1e6).toFixed(1)}M goal` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "teal", value: String(monthly), label: "Active Monthly Donors", sub: "Friends of Ferncliff" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { accent: "gold", value: `$${avg}`, label: "Average Gift Amount" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { className: "mb-3", children: "Connect · Inspire · Transform Campaign" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-[#F0EBE3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[#C49A3C]", style: {
        width: `${pct}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 text-[11px] text-[#6b665d]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "$",
          homepage.campaignRaised.toLocaleString(),
          " raised"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "$",
          homepage.campaignGoal.toLocaleString(),
          " goal · ",
          pct,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Date", "Donor", "Amount", "Type", "Campaign"], rows: donations.map((d) => [d.date, d.donor, /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[#2B7A6F]", children: [
      "$",
      d.amount.toLocaleString()
    ] }), d.type, d.campaign]) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] text-[#8a857c] italic", children: "All donation processing handled through DonorPerfect. This view shows synchronized records." })
  ] });
}
export {
  GivingAdmin as component
};
