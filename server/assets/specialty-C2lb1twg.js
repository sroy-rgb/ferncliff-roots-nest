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
  tag: "Water Adventure",
  tagBg: "#d4eefa",
  tagColor: "#1a6b8a",
  title: "Hydro Water Camp",
  body: "A water-focused camp week with expanded lake and pool activities — canoeing, kayaking, swimming games, water slides, and more. All the classic camp fun with extra time on the water.",
  meta: "Grades: 3rd–12th · Duration: Full week"
}, {
  tag: "After Dark",
  tagBg: "#e8e0f0",
  tagColor: "#6b4c8a",
  title: "Night Owl Camp",
  body: "Late-night programming, stargazing, campfire cooking, night hikes, and unique evening activities. Sleep in and stay up late — a totally different camp rhythm.",
  meta: "Grades: 6th–12th · Duration: Full week"
}];
function SpecialtyPage() {
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Specialty Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "For the ",
      /* @__PURE__ */ jsx(HeroEm, { children: "adventurous" }),
      " camper"
    ] }), subtitle: "Theme-based camp weeks designed for older campers who want a more focused experience.", children: /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Specialty Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "For the ",
        /* @__PURE__ */ jsx(Hw, { children: "adventurous" }),
        " camper"
      ] }), subtitle: "Theme-based weeks for older campers who want a more focused experience." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: camps.map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[28px] p-9 reveal", style: {
        boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4", style: {
          background: c.tagBg,
          color: c.tagColor
        }, children: c.tag }),
        /* @__PURE__ */ jsx("h3", { style: {
          fontSize: 28,
          marginBottom: 12
        }, children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mb-3", children: c.body }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted mb-5", children: /* @__PURE__ */ jsx("strong", { children: c.meta }) }),
        /* @__PURE__ */ jsxs(Link, { to: "/camp/register", className: "btn btn-teal btn-sm", children: [
          "Register for ",
          c.title
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite text-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-[700px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12", style: {
      background: "var(--color-teal-ghost)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 32px)",
        marginBottom: 12
      }, children: [
        "Looking for something ",
        /* @__PURE__ */ jsx(Hw, { children: "different?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7", children: "More specialty weeks are added each season. Get on our list to hear first." }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" })
    ] }) }) })
  ] });
}
export {
  SpecialtyPage as component
};
