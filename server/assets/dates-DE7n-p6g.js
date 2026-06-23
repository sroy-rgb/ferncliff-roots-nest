import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import "./MobileBottomBar-z-szcD1V.js";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
import "@phosphor-icons/react";
const rows = [{
  week: "Aspen",
  dates: "June 1–5",
  day: "Grades 1–8",
  overnight: "—",
  status: "Open",
  types: ["day"]
}, {
  week: "Balsam",
  dates: "June 7–12",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit",
  status: "Open",
  types: ["day", "overnight"]
}, {
  week: "Cedar",
  dates: "June 14–19",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit",
  status: "Open",
  types: ["day", "overnight"]
}, {
  week: "Dogwood",
  dates: "June 21–26",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)",
  status: "Filling Fast",
  types: ["day", "overnight", "discovery"]
}, {
  week: "Elm",
  dates: "June 28–July 3",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit",
  status: "Open",
  types: ["day", "overnight"]
}, {
  week: "Fern",
  dates: "July 5–10",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)",
  status: "Filling Fast",
  types: ["day", "overnight", "discovery"]
}, {
  week: "Gum",
  dates: "July 12–17",
  day: "Grades 1–8",
  overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)",
  status: "Open",
  types: ["day", "overnight", "discovery"]
}];
const filters = [{
  key: "all",
  label: "All Camps"
}, {
  key: "day",
  label: "Day Camp"
}, {
  key: "overnight",
  label: "Overnight"
}, {
  key: "discovery",
  label: "Discovery"
}];
const statusStyle = {
  Open: {
    bg: "var(--color-teal-light)",
    color: "var(--color-teal)"
  },
  "Filling Fast": {
    bg: "var(--color-gold-light)",
    color: "#96751e"
  },
  Full: {
    bg: "var(--color-coral-light)",
    color: "var(--color-coral)"
  }
};
function DatesPage() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? rows : rows.filter((r) => r.types.includes(filter));
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "2026 Schedule", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "2026 Summer Camp ",
      /* @__PURE__ */ jsx(HeroEm, { children: "Dates" })
    ] }), subtitle: "June 1 – August 7, 2026. Registration is open — camps fill quickly!", height: "50vh", children: /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "2026 Schedule", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "2026 Summer Camp ",
        /* @__PURE__ */ jsx(Hw, { children: "Dates" })
      ] }), subtitle: "June 1 – August 7, 2026. Registration is open — camps fill quickly!" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-7 reveal", children: filters.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f.key), className: "px-5 py-2 rounded-full text-[13px] font-bold transition-all", style: {
        background: filter === f.key ? "var(--color-teal)" : "var(--color-offwhite)",
        color: filter === f.key ? "#fff" : "var(--color-text-muted)"
      }, children: f.label }, f.key)) }),
      /* @__PURE__ */ jsxs("table", { className: "hidden md:table w-full reveal", style: {
        borderCollapse: "separate",
        borderSpacing: "0 8px"
      }, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: ["Week", "Dates", "Day Camp", "Overnight Camps", "Status"].map((h) => /* @__PURE__ */ jsx("th", { className: "text-left px-4 py-2 text-[11px] font-bold uppercase text-text-muted", style: {
          letterSpacing: 2
        }, children: h }, h)) }) }),
        /* @__PURE__ */ jsx("tbody", { children: visible.map((r) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-4 bg-white font-bold text-dark text-[14px]", style: {
            borderRadius: "12px 0 0 12px"
          }, children: r.week }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-4 bg-white text-[14px] text-text-body", children: r.dates }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-4 bg-white text-[14px] text-text-body", children: r.day }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-4 bg-white text-[14px] text-text-body", children: r.overnight }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-4 bg-white", style: {
            borderRadius: "0 12px 12px 0"
          }, children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 rounded-full text-[11px] font-bold", style: statusStyle[r.status], children: r.status }) })
        ] }, r.week)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden space-y-3", children: visible.map((r) => /* @__PURE__ */ jsxs("div", { className: "rounded-[16px] p-5", style: {
        background: r.status === "Filling Fast" ? "var(--color-gold-light)" : "var(--color-offwhite)"
      }, children: [
        /* @__PURE__ */ jsxs("strong", { className: "text-dark", children: [
          r.week,
          " Week"
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("span", { className: "text-[14px] text-text-muted", children: [
          r.dates,
          " · ",
          r.overnight === "—" ? r.day : `Day + Overnight`
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 rounded-full text-[11px] font-bold mt-2", style: statusStyle[r.status], children: r.status })
      ] }, r.week)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center reveal", style: {
        marginTop: 48
      }, children: /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsx("div", { className: "max-w-[800px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] p-9 bg-cream-warm", children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: 24,
        marginBottom: 12
      }, children: [
        "Voluntary ",
        /* @__PURE__ */ jsx(Hw, { children: "Pricing" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body leading-[1.7]", children: "Every camp offers three pricing tiers — choose the one that fits your family. Tier 1 reflects the full cost of camp. Tier 2 is partially subsidized. Tier 3 is fully subsidized. The camp experience is identical no matter what you choose." })
    ] }) }) })
  ] });
}
export {
  DatesPage as component
};
