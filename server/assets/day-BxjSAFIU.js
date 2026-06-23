import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { P as PricingTiers } from "./PricingTiers-B8XtLDFC.js";
import "./MobileBottomBar-z-szcD1V.js";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
import "@phosphor-icons/react";
function DayPage() {
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Day Camp", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "All the fun of camp, every ",
      /* @__PURE__ */ jsx(HeroEm, { children: "day" })
    ] }), subtitle: "Full days of Ferncliff adventure with the convenience of drop-off and pick-up. Runs weekly, June 1 – August 7.", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-outline", children: "View Weekly Dates" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Day Camp", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Two ways to do ",
        /* @__PURE__ */ jsx(Hw, { children: "day camp" })
      ] }), subtitle: "Pick the rhythm that fits your family — full day with home each night, or extend into a Thursday overnight." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[28px] p-9 reveal", style: {
          boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4", style: {
            background: "var(--color-teal-light)",
            color: "var(--color-teal)"
          }, children: "Grades 1–8" }),
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 28,
            marginBottom: 12
          }, children: "Day Camp" }),
          /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mb-3", children: "Monday–Friday, 8:00 AM – 5:00 PM. Campers enjoy all the same activities as overnight campers — swimming, hiking, archery, arts & crafts, Bible exploration — then go home each evening." }),
          /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-text-muted mb-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Runs:" }),
            " Every week, June 1 – August 7, 2026"
          ] }),
          /* @__PURE__ */ jsx(PricingTiers, { tiers: ["$250", "$200", "$150"] }),
          /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal btn-sm mt-3", children: "Register for Day Camp" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] p-9 reveal", style: {
          background: "var(--color-gold-light)",
          boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4", style: {
            background: "var(--color-gold)",
            color: "#fff"
          }, children: "New" }),
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 28,
            marginBottom: 12
          }, children: "Day Camp + Overnight Experience" }),
          /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mb-3", children: "All the fun of Day Camp, but campers spend Thursday night in the cabins just like overnight campers and participate in closing programs. A great way to try overnight for the first time!" }),
          /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-text-muted mb-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Best for:" }),
            " First-time campers ready to try a taste of overnight"
          ] }),
          /* @__PURE__ */ jsx(PricingTiers, { tiers: ["$295", "$235", "$175"] }),
          /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal btn-sm mt-3", children: "Register for Day + Overnight" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[800px] mx-auto px-8", children: /* @__PURE__ */ jsxs("blockquote", { className: "pl-6 reveal", style: {
      borderLeft: "3px solid var(--color-gold)",
      padding: "16px 0 16px 24px"
    }, children: [
      /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: {
        fontSize: 24
      }, children: '"Day Camp gave my daughter the perfect first taste of Ferncliff. She begged to come back next summer."' }),
      /* @__PURE__ */ jsx("cite", { className: "block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Day Camp Parent, Little Rock" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite text-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-[700px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12", style: {
      background: "var(--color-teal-ghost)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 34px)",
        marginBottom: 12
      }, children: [
        "Ready for the ",
        /* @__PURE__ */ jsx(Hw, { children: "best" }),
        " summer days?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7", children: "June 1 – August 7. Weekly registration open now." }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register for Day Camp" })
    ] }) }) })
  ] });
}
export {
  DayPage as component
};
