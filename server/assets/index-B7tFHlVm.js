import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero } from "./CampHero-DAJsON1B.js";
import { ArrowRight, ShieldCheck, Heart, Leaf, Sun, ForkKnife, Compass, PaintBrush, Campfire, Moon } from "@phosphor-icons/react";
import "./MobileBottomBar-z-szcD1V.js";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const campTypes = [{
  to: "/camp/overnight",
  img: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=500",
  title: "Overnight Camp",
  badge: "Grades 1–12",
  desc: "A classic week of cabin life, outdoor adventures, Bible exploration, and lifelong friendships.",
  cta: "Explore Overnight"
}, {
  to: "/camp/day",
  img: "https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=500",
  title: "Day Camp",
  badge: "Grades 1–8",
  desc: "Full days of camp fun with drop-off and pick-up. Optional overnight add-on for a taste of cabin life.",
  cta: "Explore Day Camp"
}, {
  to: "/camp/discovery",
  img: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=500",
  title: "Discovery Camps",
  badge: "Grades 1–8",
  desc: "2–3 night starter sessions designed for first-time campers. Build confidence at your own pace.",
  cta: "Explore Discovery"
}, {
  to: "/camp/specialty",
  img: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=500",
  title: "Specialty Camps",
  badge: "Grades 3–12",
  desc: "Theme-based experiences — Hydro Water Camp, Night Owl, and more for adventurous campers.",
  cta: "Explore Specialty"
}, {
  to: "/camp/family",
  img: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=500",
  title: "Family Camps",
  badge: "All Ages",
  desc: "Weekend retreats for the whole family. Hotel-style lodging, meals, and all the fun of Ferncliff.",
  cta: "Explore Family"
}];
const schedule = [{
  time: "7:30 AM",
  icon: /* @__PURE__ */ jsx(Sun, { size: 20 }),
  label: "Rise & Shine"
}, {
  time: "8:00 AM",
  icon: /* @__PURE__ */ jsx(ForkKnife, { size: 20 }),
  label: "Breakfast in the Dining Hall"
}, {
  time: "9:00 AM",
  icon: /* @__PURE__ */ jsx(Compass, { size: 20 }),
  label: "Morning Activities — swimming, hiking, archery, arts & crafts"
}, {
  time: "12:00 PM",
  icon: /* @__PURE__ */ jsx(ForkKnife, { size: 20 }),
  label: "Lunch & Rest Time"
}, {
  time: "1:30 PM",
  icon: /* @__PURE__ */ jsx(PaintBrush, { size: 20 }),
  label: "Afternoon Activities — fishing, ropes course, farm & garden"
}, {
  time: "5:30 PM",
  icon: /* @__PURE__ */ jsx(ForkKnife, { size: 20 }),
  label: "Dinner"
}, {
  time: "7:00 PM",
  icon: /* @__PURE__ */ jsx(Campfire, { size: 20 }),
  label: "Evening Program — campfire, worship, games, stargazing"
}, {
  time: "9:00 PM",
  icon: /* @__PURE__ */ jsx(Moon, { size: 20 }),
  label: "Cabin Time & Lights Out"
}];
const testimonials = [{
  quote: "My daughter came home a different person — more confident, more kind, more herself.",
  cite: "Camp Parent, Little Rock"
}, {
  quote: "The counselors genuinely cared about my son. He talks about them all year.",
  cite: "Camp Parent, Conway"
}, {
  quote: "Camp had a wonderful impact on my child's character. I can't say enough about how good it was.",
  cite: "Camp Parent, Jonesboro"
}];
function CampIndex() {
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Summer Camp · Since 1937", title: "The best week of their summer", subtitle: "Day and overnight camps for ages 1st through 12th grade on 1,200 acres of forest, lakes, and trails.", height: "60vh", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-2", children: [
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-outline", children: "View 2026 Dates" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-[80px] md:py-[120px] bg-offwhite", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 text-center mb-12 reveal", children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontSize: "clamp(28px, 3.5vw, 40px)"
        }, children: "Find the right camp for your camper" }),
        /* @__PURE__ */ jsx("p", { className: "text-text-muted mt-3", children: "We offer camps for every age and experience level." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "flex md:grid md:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory", children: campTypes.map((c) => /* @__PURE__ */ jsxs(Link, { to: c.to, className: "reveal shrink-0 w-[280px] md:w-auto snap-start bg-white rounded-[20px] overflow-hidden group transition-transform", style: {
        boxShadow: "0 8px 24px rgba(44,41,38,0.06)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "h-[220px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-[2px] text-teal bg-teal-ghost rounded-full px-3 py-1 mb-3", children: c.badge }),
          /* @__PURE__ */ jsx("h3", { className: "text-[22px] mb-2", children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-snug mb-4", children: c.desc }),
          /* @__PURE__ */ jsxs("span", { className: "link-arrow", children: [
            c.cta,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
          ] })
        ] })
      ] }, c.to)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Why Ferncliff" }),
        /* @__PURE__ */ jsx("h2", { style: {
          fontSize: "clamp(28px, 3.5vw, 40px)"
        }, children: "What makes us different" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("blockquote", { className: "reveal pl-6 border-l-[3px] border-gold", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: {
            fontSize: "28px"
          }, children: `"Ferncliff is a place where my kids can be themselves, unplug from screens, and come home with stories they'll tell for years."` }),
          /* @__PURE__ */ jsx("cite", { className: "block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Camp Parent, Conway, AR" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 reveal", children: [{
          icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 26 }),
          title: "ACA Accredited Safety Standards"
        }, {
          icon: /* @__PURE__ */ jsx(Heart, { size: 26 }),
          title: "Faith-Based Community"
        }, {
          icon: /* @__PURE__ */ jsx(Leaf, { size: 26 }),
          title: "1,200 Acres of Nature"
        }].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal shrink-0", children: f.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-[20px] mt-0.5", children: f.title })
        ] }, f.title)) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal bg-cream-warm rounded-[20px] p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[24px] mb-3", children: "Camp for Every Family" }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-body leading-[1.7] mb-4", children: "Recognizing that families have different abilities to pay, Ferncliff has a voluntary fee program. You choose the price that fits your family — Tier 1 (full cost), Tier 2 (partially subsidized), or Tier 3 (subsidized). The experience is the same no matter what you choose." }),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "link-arrow", children: [
            "Learn More About Pricing ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14 reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Daily Rhythm" }),
        /* @__PURE__ */ jsx("h2", { style: {
          fontSize: "clamp(28px, 3.5vw, 40px)"
        }, children: "A Day at Ferncliff" })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "relative border-l-2 border-teal-light ml-4 space-y-7", children: schedule.map((s) => /* @__PURE__ */ jsxs("li", { className: "relative pl-8 reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-teal border-4 border-offwhite" }),
        /* @__PURE__ */ jsx("div", { className: "text-gold font-bold text-[13px] tracking-[2px] uppercase", children: s.time }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mt-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal mt-1", children: s.icon }),
          /* @__PURE__ */ jsx("p", { className: "text-dark-warm text-[16px]", children: s.label })
        ] })
      ] }, s.time)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[80px] bg-teal", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-6 md:grid md:grid-cols-3 snap-x snap-mandatory pb-2", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "shrink-0 w-[300px] md:w-auto snap-start bg-white/10 backdrop-blur rounded-[16px] p-7 text-white border border-white/15", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-serif italic leading-[1.5]", style: {
        fontSize: "20px"
      }, children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("cite", { className: "block mt-4 not-italic text-[12px] opacity-75 font-sans font-semibold", children: [
        "— ",
        t.cite
      ] })
    ] }, t.cite)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-offwhite text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto px-8 reveal", children: [
      /* @__PURE__ */ jsx("h2", { style: {
        fontSize: "clamp(32px, 4vw, 48px)"
      }, children: "Ready to register?" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mt-3 mb-8", children: "2026 camps run June 1 – August 7" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
        /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-gold-outline", children: "View All Dates" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[14px] mt-8", children: [
        "Questions? Call ",
        /* @__PURE__ */ jsx("a", { href: "tel:5018213063", className: "text-gold font-semibold", children: "(501) 821-3063" }),
        " or email ",
        /* @__PURE__ */ jsx("a", { href: "mailto:summercamp@ferncliff.org", className: "text-gold font-semibold", children: "summercamp@ferncliff.org" })
      ] })
    ] }) })
  ] });
}
export {
  CampIndex as component
};
