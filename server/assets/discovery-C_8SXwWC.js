import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import "./MobileBottomBar-z-szcD1V.js";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const why = [{
  strong: "Confidence building",
  text: "The overnight experience helps campers practice independence."
}, {
  strong: "Trusted staff support",
  text: "Trained counselors guide campers every step of the way."
}, {
  strong: "Gateway to full camp",
  text: "Prepares them for future Overnight Camp sessions."
}];
function DiscoveryPage() {
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Discovery Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Designed for ",
      /* @__PURE__ */ jsx(HeroEm, { children: "first-time" }),
      " campers"
    ] }), subtitle: "A shortened camp session for campers ready to try overnight on a smaller scale. Build confidence, connection, and comfort — every step of the way.", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/first-time", className: "btn btn-outline", children: "First-Time Hub" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Discovery Camps", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Designed for ",
        /* @__PURE__ */ jsx(Hw, { children: "first-time" }),
        " campers"
      ] }), subtitle: "A shortened camp session — all the traditional activities in a more manageable format." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] p-9 bg-white reveal", style: {
          border: "2px solid var(--color-teal-light)",
          boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4", style: {
            background: "var(--color-teal-light)",
            color: "var(--color-teal)"
          }, children: "Grades 1–3" }),
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 28,
            marginBottom: 12
          }, children: "3-Day Discovery" }),
          /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mb-3", children: "3 days and 2 nights (Sunday–Tuesday). All the traditional camp activities in a shorter, more manageable format." }),
          /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-text-muted mb-5", children: [
            /* @__PURE__ */ jsx("strong", { children: "Dates:" }),
            " June 21–23 · July 5–7 · July 12–15"
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal btn-sm", children: "Register for Discovery" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 26,
            marginBottom: 20
          }, children: "Why Discovery?" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: why.map((w) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { size: 24, weight: "fill", className: "text-teal shrink-0 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-dark", children: w.strong }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-[14px] text-text-muted", children: w.text })
            ] })
          ] }, w.strong)) }),
          /* @__PURE__ */ jsxs(Link, { to: "/camp/first-time", className: "link-arrow mt-6 inline-flex", children: [
            "First-Time Camper Resources ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream text-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-[700px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12 bg-white", style: {
      boxShadow: "0 8px 32px rgba(44,41,38,0.06)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 32px)",
        marginBottom: 12
      }, children: [
        "New to overnight? Start ",
        /* @__PURE__ */ jsx(Hw, { children: "here." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7", children: "Visit our First-Time Campers hub for packing lists, FAQ, and a virtual tour." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp/first-time", className: "btn btn-gold-outline", children: "First-Time Hub" }),
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register" })
      ] })
    ] }) }) })
  ] });
}
export {
  DiscoveryPage as component
};
