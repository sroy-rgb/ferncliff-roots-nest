import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import "./MobileBottomBar-z-szcD1V.js";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
import "@phosphor-icons/react";
const camps = [{
  title: "Rainbow Family Camp",
  body: "A weekend celebrating families of all shapes and sizes. Enjoy camp activities together in a welcoming, inclusive environment.",
  meta: "October 9–11, 2026"
}, {
  title: "Family Retreat Weekend",
  body: "Flexible schedules, Brown Center hotel-style rooms, dining hall meals, and your choice of activities — swimming, hiking, archery, arts & crafts, and more.",
  meta: "Multiple weekends — November & February"
}];
function FamilyPage() {
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Family Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Camp isn't just for ",
      /* @__PURE__ */ jsx(HeroEm, { children: "kids" })
    ] }), subtitle: "Weekend retreats for the whole family — hotel-style lodging, meals in the dining hall, and all the fun of Ferncliff together.", children: /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Inquire Now" }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Family Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Camp isn't just for ",
        /* @__PURE__ */ jsx(Hw, { children: "kids" })
      ] }), subtitle: "Weekend retreats for the whole family — hotel-style lodging, meals in the dining hall, and all the fun of Ferncliff together." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: camps.map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[28px] p-9 reveal", style: {
        boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
      }, children: [
        /* @__PURE__ */ jsx("h3", { style: {
          fontSize: 28,
          marginBottom: 12
        }, children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mb-3", children: c.body }),
        /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-text-muted mb-5", children: [
          /* @__PURE__ */ jsx("strong", { children: "Dates:" }),
          " ",
          c.meta
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal btn-sm", children: "Learn More" })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream text-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-[700px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12 bg-white", style: {
      boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 32px)",
        marginBottom: 12
      }, children: [
        "Bring the whole ",
        /* @__PURE__ */ jsx(Hw, { children: "family" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7", children: "Questions about a weekend that fits your group? We'd love to help." }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Get in Touch" })
    ] }) }) })
  ] });
}
export {
  FamilyPage as component
};
