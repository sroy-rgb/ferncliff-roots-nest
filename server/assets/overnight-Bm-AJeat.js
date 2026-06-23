import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { P as PricingTiers } from "./PricingTiers-B8XtLDFC.js";
import { Plus, House, ForkKnife, SwimmingPool, Target, PaintBrush, BookOpen } from "@phosphor-icons/react";
import "./MobileBottomBar-z-szcD1V.js";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const cards = [{
  badge: "Grades 1–3",
  title: "3-Day Overnight Camp — Perfect for First-Timers",
  body: "Spend 3 days and 2 nights (Sunday–Tuesday) experiencing traditional camp activities — from swimming and campfires to the Shady Chute! A great entry point for younger campers.",
  meta: "Dates: June 21–23 · July 5–7 · July 12–15",
  tiers: ["$350", "$275", "$200"]
}, {
  badge: "Grades 3–5",
  title: "Pathfinders — Full Week Overnight",
  body: "A full week (6 days, 5 nights) of classic Ferncliff camp. Campers explore 1,200 acres, build friendships, and grow in faith through outdoor activities, Bible exploration, and worship.",
  meta: "Available weeks: Balsam (June 7–12) · Cedar (June 14–19) · Dogwood (June 21–26) · Elm (June 28–July 3) · Fern (July 5–10) · Gum (July 12–17)",
  tiers: ["$525", "$425", "$325"]
}, {
  badge: "Grades 6–8",
  title: "Trailblazers — Full Week Overnight",
  body: "A more independent camp experience with expanded activities and leadership opportunities. Same great Ferncliff adventure with age-appropriate challenges.",
  meta: "Available weeks: Balsam through Gum (June 7 – July 17)",
  tiers: ["$525", "$425", "$325"]
}, {
  badge: "Grades 9–12",
  title: "Summit — Full Week Overnight",
  body: "The ultimate Ferncliff experience — deeper faith exploration, advanced outdoor challenges, servant leadership, and preparation for the Future Counselor Training Program.",
  meta: "Available weeks: Balsam through Gum (June 7 – July 17)",
  tiers: ["$525", "$425", "$325"]
}];
const included = [{
  icon: /* @__PURE__ */ jsx(House, { size: 28 }),
  title: "Cabin Lodging",
  desc: "Small groups with dedicated counselors"
}, {
  icon: /* @__PURE__ */ jsx(ForkKnife, { size: 28 }),
  title: "All Meals",
  desc: "Breakfast, lunch, dinner & snacks"
}, {
  icon: /* @__PURE__ */ jsx(SwimmingPool, { size: 28 }),
  title: "Swimming & Aquatics",
  desc: "Pool and lake activities"
}, {
  icon: /* @__PURE__ */ jsx(Target, { size: 28 }),
  title: "Archery & Ropes",
  desc: "Challenge course and target sports"
}, {
  icon: /* @__PURE__ */ jsx(PaintBrush, { size: 28 }),
  title: "Arts & Crafts",
  desc: "Creative expression daily"
}, {
  icon: /* @__PURE__ */ jsx(BookOpen, { size: 28 }),
  title: "Bible Exploration",
  desc: "Small group study and worship"
}];
function OvernightPage() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Overnight Camp", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A week of cabin life and growing in ",
      /* @__PURE__ */ jsx(HeroEm, { children: "faith" })
    ] }), subtitle: "Campers live in cabins with their small family group and counselors — days in traditional camp activities, evenings building independence, friendships, and lifelong memories.", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
      /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-outline", children: "View 2026 Dates" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1000px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Overnight Camp", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "By age group — find the right ",
        /* @__PURE__ */ jsx(Hw, { children: "fit" })
      ] }), subtitle: "Every overnight camp follows the same Ferncliff rhythm — adapted to your camper's grade level." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: cards.map((c, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxs("div", { className: "rounded-[20px] overflow-hidden bg-white border border-black/5 transition-shadow", style: {
          boxShadow: isOpen ? "0 8px 32px rgba(44,41,38,0.08)" : "0 2px 8px rgba(44,41,38,0.03)"
        }, children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-teal-ghost", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap", style: {
              background: "var(--color-teal-light)",
              color: "var(--color-teal)"
            }, children: c.badge }),
            /* @__PURE__ */ jsx("h3", { className: "flex-1 text-left", style: {
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--color-dark)"
            }, children: c.title }),
            /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform", style: {
              background: "var(--color-offwhite)",
              color: "var(--color-teal)",
              transform: isOpen ? "rotate(45deg)" : "none"
            }, children: /* @__PURE__ */ jsx(Plus, { size: 16, weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden transition-[max-height] duration-500 ease-out", style: {
            maxHeight: isOpen ? 800 : 0
          }, children: /* @__PURE__ */ jsxs("div", { className: "px-7 pb-7 border-t border-black/5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-body mt-4 leading-[1.7]", children: c.body }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-body mt-3", children: /* @__PURE__ */ jsx("strong", { children: c.meta }) }),
            /* @__PURE__ */ jsx(PricingTiers, { tiers: c.tiers }),
            /* @__PURE__ */ jsxs(Link, { to: "/camp/register", className: "btn btn-teal btn-sm mt-2", children: [
              "Register for ",
              c.badge
            ] })
          ] }) })
        ] }, c.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "What's Included", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Everything for a ",
        /* @__PURE__ */ jsx(Hw, { children: "great" }),
        " week"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-5", children: included.map((i) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[20px] p-7 text-center reveal transition-transform hover:-translate-y-1", style: {
        boxShadow: "0 4px 16px rgba(44,41,38,0.04)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center mb-3", children: i.icon }),
        /* @__PURE__ */ jsx("h4", { className: "font-sans font-bold text-[15px] text-dark mb-1", children: i.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted", children: i.desc })
      ] }, i.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[800px] mx-auto px-8 text-center reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12", style: {
      background: "var(--color-teal-ghost)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 34px)",
        marginBottom: 12
      }, children: [
        "Ready for a week they'll ",
        /* @__PURE__ */ jsx(Hw, { children: "remember?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7 max-w-[500px] mx-auto", children: "Spots fill quickly. Register today and lock in your week." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
        /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-gold-outline", children: "View All Dates" })
      ] })
    ] }) }) })
  ] });
}
export {
  OvernightPage as component
};
