import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { C as CampHero } from "./CampHero-DAJsON1B.js";
import { u as useContentStore } from "./router-DASrCSie.js";
import { ArrowRight, Bed, ForkKnife, Presentation, WifiHigh, Wheelchair, Bathtub, Thermometer, Television, House, Users, Tree, Shower, CookingPot, Armchair, ChalkboardTeacher, ShieldCheck, Campfire, Boat, Target, Sun, CloudRain, Leaf, Clock, Coffee, Fish, Mountains, TreeStructure, PaintBrush, Plant, Compass } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "@tanstack/react-query";
const links = [
  { href: "#overview", label: "Overview" },
  { href: "#brown-center", label: "Brown Center" },
  { href: "#belden", label: "Belden Cabins" },
  { href: "#retreat-house", label: "Retreat House" },
  { href: "#yurts", label: "Yurts" },
  { href: "#meeting-rooms", label: "Meeting Rooms" },
  { href: "#youth-retreats", label: "Youth Retreats" },
  { href: "#pavilions", label: "Outdoor Pavilions" },
  { href: "#meals", label: "Meals" },
  { href: "#activities", label: "Activities" },
  { href: "#swimming", label: "Swimming" }
];
function RetreatsSubNav() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed left-0 right-0 z-[999]",
      style: { top: 72, background: "#FFFDF9", borderBottom: "1px solid #E8E2D8" },
      children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 h-[48px] whitespace-nowrap", children: links.map((l) => /* @__PURE__ */ jsx(
        "a",
        {
          href: l.href,
          className: "px-3 py-2 text-[13px] font-semibold hover:text-teal transition-colors",
          style: { color: "var(--color-dark-warm)" },
          children: l.label
        },
        l.href
      )) }) })
    }
  );
}
const Wifi = WifiHigh;
const lodgingCards = [{
  href: "#brown-center",
  img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Brown Center",
  badge: "36 Rooms · Up to 150",
  desc: "Hotel-style rooms with private baths, climate control, and conference space."
}, {
  href: "#belden",
  img: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Belden Cabins",
  badge: "12 Cabins · 12-16 each",
  desc: "Rustic cabins in a wooded setting, perfect for youth and camp-style groups."
}, {
  href: "#retreat-house",
  img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Retreat House",
  badge: "5 Bedrooms · Up to 25",
  desc: "A self-contained home with full kitchen for small group retreats."
}, {
  href: "#yurts",
  img: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Yurts",
  badge: "Glamping",
  desc: "Unique glamping-style lodging between cabins and tent camping."
}, {
  href: "#meeting-rooms",
  img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Williams Lodge",
  badge: "Meeting Space",
  desc: "Additional gathering space across our campus for retreats of any size."
}];
function FeatureBadge({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-teal-ghost text-teal rounded-full px-4 py-2 text-[13px] font-semibold", children: [
    /* @__PURE__ */ jsx("span", { children: icon }),
    label
  ] });
}
function BrownCenterGallery() {
  const images = ["https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200"];
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-[20px] overflow-hidden mb-4", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
    }, children: /* @__PURE__ */ jsx("img", { src: images[active], alt: "Brown Center", className: "w-full h-[420px] object-cover transition-opacity duration-300" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: images.slice(1).map((src, i) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(i + 1), className: `rounded-[12px] overflow-hidden border-2 transition ${active === i + 1 ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`, children: /* @__PURE__ */ jsx("img", { src, alt: "", className: "w-full h-[90px] object-cover" }) }, src)) })
  ] });
}
function BeldenGallery() {
  const [active, setActive] = useState(0);
  const images = ["https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200"];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-[20px] overflow-hidden mb-4", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
    }, children: /* @__PURE__ */ jsx("img", { src: images[active], alt: "Belden Cabins", className: "w-full h-[420px] object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: images.map((src, i) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(i), className: `rounded-[12px] overflow-hidden border-2 transition ${active === i ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`, children: /* @__PURE__ */ jsx("img", { src, alt: "", className: "w-full h-[90px] object-cover" }) }, src)) })
  ] });
}
function RetreatHouseGallery() {
  const [active, setActive] = useState(0);
  const images = ["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-[20px] overflow-hidden mb-4", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
    }, children: /* @__PURE__ */ jsx("img", { src: images[active], alt: "Retreat House", className: "w-full h-[420px] object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: images.map((src, i) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(i), className: `rounded-[12px] overflow-hidden border-2 transition ${active === i ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`, children: /* @__PURE__ */ jsx("img", { src, alt: "", className: "w-full h-[90px] object-cover" }) }, src)) })
  ] });
}
function RetreatsPage() {
  useScrollReveal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(RetreatsSubNav, {}),
    /* @__PURE__ */ jsxs("main", { style: {
      paddingTop: 120
    }, children: [
      /* @__PURE__ */ jsxs("section", { id: "overview", style: {
        scrollMarginTop: 130
      }, children: [
        /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Retreats & Conferences", title: "Space to gather, room to grow", subtitle: "Church retreats, corporate offsites, youth events, family reunions — 1,200 acres of hospitality just 15 minutes from Little Rock.", height: "60vh", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "#inquire", className: "btn btn-teal", children: "Inquire Now" }),
          /* @__PURE__ */ jsx("a", { href: "#brown-center", className: "btn btn-outline", children: "View Facilities" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "py-[80px] md:py-[120px] bg-offwhite", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 text-center mb-12 reveal", children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Choose Your Space" }),
            /* @__PURE__ */ jsx("h2", { style: {
              fontSize: "clamp(28px, 3.5vw, 40px)"
            }, children: "Lodging for every kind of gathering" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "flex md:grid md:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory", children: lodgingCards.map((c) => /* @__PURE__ */ jsxs("a", { href: c.href, className: "reveal shrink-0 w-[260px] md:w-auto snap-start bg-white rounded-[20px] overflow-hidden group", style: {
            boxShadow: "0 8px 24px rgba(44,41,38,0.06)"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "h-[180px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block text-[10px] font-bold uppercase tracking-[2px] text-teal bg-teal-ghost rounded-full px-3 py-1 mb-3", children: c.badge }),
              /* @__PURE__ */ jsx("h3", { className: "text-[20px] mb-2", children: c.title }),
              /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-snug mb-3", children: c.desc }),
              /* @__PURE__ */ jsxs("span", { className: "link-arrow text-[13px]", children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
              ] })
            ] })
          ] }, c.title)) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "py-[80px] md:py-[120px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 reveal", children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Why Ferncliff" }),
            /* @__PURE__ */ jsx("h2", { style: {
              fontSize: "clamp(28px, 3.5vw, 40px)"
            }, children: "Why groups choose us" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: [
            /* @__PURE__ */ jsxs("blockquote", { className: "reveal pl-6 border-l-[3px] border-gold", children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: {
                fontSize: "24px"
              }, children: '"The Ferncliff team handled every detail so we could focus on what mattered — our people and our purpose."' }),
              /* @__PURE__ */ jsx("cite", { className: "block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Retreat Coordinator, First Presbyterian Church" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-5 reveal", children: [{
              icon: /* @__PURE__ */ jsx(Bed, { size: 26 }),
              title: "Lodging for 1–150 guests"
            }, {
              icon: /* @__PURE__ */ jsx(ForkKnife, { size: 26 }),
              title: "Full-service meals"
            }, {
              icon: /* @__PURE__ */ jsx(Presentation, { size: 26 }),
              title: "AV-equipped meeting spaces"
            }, {
              icon: /* @__PURE__ */ jsx(Wifi, { size: 26 }),
              title: "Fiber optic WiFi campus-wide"
            }].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-teal shrink-0", children: f.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-[18px] mt-0.5", children: f.title })
            ] }, f.title)) }),
            /* @__PURE__ */ jsxs("div", { className: "reveal bg-cream-warm rounded-[20px] p-7", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[22px] mb-4", children: "By the Numbers" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-5", children: [{
                n: "150",
                l: "Guest Capacity"
              }, {
                n: "36",
                l: "Hotel Rooms"
              }, {
                n: "12",
                l: "Cabins"
              }, {
                n: "5",
                l: "Meeting Spaces"
              }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-serif text-teal", style: {
                  fontSize: "40px",
                  lineHeight: 1
                }, children: s.n }),
                /* @__PURE__ */ jsx("div", { className: "text-[12px] text-text-muted uppercase tracking-[1.5px] font-semibold mt-1", children: s.l })
              ] }, s.l)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-16 text-center reveal", children: [
            /* @__PURE__ */ jsx("h3", { style: {
              fontSize: "clamp(24px, 3vw, 32px)"
            }, children: "Ready to plan your retreat?" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 justify-center mt-6", children: /* @__PURE__ */ jsx("a", { href: "#inquire", className: "btn btn-teal", children: "Inquire Now" }) }),
            /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[14px] mt-6", children: [
              /* @__PURE__ */ jsx("a", { href: "tel:5018213063", className: "text-gold font-semibold", children: "(501) 821-3063" }),
              " · ",
              /* @__PURE__ */ jsx("a", { href: "mailto:retreats@ferncliff.org", className: "text-gold font-semibold", children: "retreats@ferncliff.org" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "brown-center", className: "py-[80px] md:py-[120px] bg-offwhite", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "reveal-left", children: /* @__PURE__ */ jsx(BrownCenterGallery, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Premier Lodging" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Brown Center" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "The Brown Conference Center includes four buildings linked with a covered walkway. One building has the conference space (large room, small casual room, restrooms and kitchenette). The other three buildings each have 12 hotel-style rooms (36 total), most with two double beds. Five of the rooms are handicap-accessible." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Bed, { size: 16 }), label: "36 Hotel-Style Rooms" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Wheelchair, { size: 16 }), label: "5 ADA Accessible" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Bathtub, { size: 16 }), label: "Private Bathrooms" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Wifi, { size: 16 }), label: "WiFi in Every Room" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Thermometer, { size: 16 }), label: "Climate Controlled" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Television, { size: 16 }), label: "Cable TV" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-cream rounded-[16px] p-5 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[12px] font-bold uppercase tracking-[2px] text-teal mb-2", children: "Each room includes" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-[14px] text-text-body space-y-1 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Private bathroom" }),
              /* @__PURE__ */ jsx("li", { children: "Climate control" }),
              /* @__PURE__ */ jsx("li", { children: "Cable TV & WiFi" }),
              /* @__PURE__ */ jsx("li", { children: "Two double beds (most rooms)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#inquire", className: "btn btn-teal", children: "Inquire About Brown Center" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "belden", className: "py-[80px] md:py-[120px] bg-cream", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal-left order-2 md:order-1", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Rustic Retreat" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Belden Pond Cabins" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "12 cabins nestled in a wooded setting near the lake. Each cabin sleeps 12–16 guests in bunk-style beds. Perfect for youth retreats, team building, and camp-style group experiences. Shared bathhouse nearby." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(House, { size: 16 }), label: "12 Cabins" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Users, { size: 16 }), label: "Sleeps 12–16 each" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Tree, { size: 16 }), label: "Wooded Lakeside" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Shower, { size: 16 }), label: "Shared Bathhouse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gold-light rounded-[16px] p-5 border-l-[3px] border-gold", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[12px] font-bold uppercase tracking-[2px] text-gold mb-2", children: "Ideal For" }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-body", children: "Youth groups, church retreats, team building weekends, and groups who want the authentic camp experience." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal-right order-1 md:order-2", children: /* @__PURE__ */ jsx(BeldenGallery, {}) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "retreat-house", className: "py-[80px] md:py-[120px] bg-offwhite", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "reveal-left", children: /* @__PURE__ */ jsx(RetreatHouseGallery, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Intimate Gathering" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Retreat House" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "A standalone home with 5 bedrooms, full kitchen, dining room, and two living areas. Ideal for small groups, board retreats, writing retreats, and intimate gatherings of up to 25 guests. A self-contained experience with all the comforts of home." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Bed, { size: 16 }), label: "5 Bedrooms" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Users, { size: 16 }), label: "Up to 25 Guests" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(CookingPot, { size: 16 }), label: "Full Kitchen" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Armchair, { size: 16 }), label: "Two Living Areas" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gold-light rounded-[16px] p-5 border-l-[3px] border-gold", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[12px] font-bold uppercase tracking-[2px] text-gold mb-2", children: "Ideal For" }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-body", children: "Board retreats, small group getaways, writing retreats, spiritual direction groups." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "yurts", className: "py-[80px] md:py-[120px] bg-cream", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto px-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-[24px] overflow-hidden mb-8 reveal", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Yurts", className: "w-full object-cover", style: {
          maxHeight: 400
        } }) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Glamping" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Yurts" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] max-w-[600px] mx-auto", children: "A unique glamping-style lodging option on the Ferncliff campus. Perfect for groups looking for something between cabins and tent camping." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "meeting-rooms", className: "py-[80px] md:py-[120px] bg-cream", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 reveal", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Conferences" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(28px, 3.5vw, 40px)"
          }, children: "Meeting spaces for every group size" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
          img: "https://images.pexels.com/photos/159806/pexels-photo-159806.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Glenn Meeting Room",
          desc: "Our largest meeting space, seating up to 150 theater-style or 100 classroom-style. Full AV setup, staging area, and breakout rooms nearby."
        }, {
          img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Evergreen Hall",
          desc: "A flexible mid-size meeting space for groups of 40–80. Natural light, configurable seating, and direct access to outdoor spaces."
        }, {
          img: "https://images.pexels.com/photos/1181434/pexels-photo-1181434.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Brown Center Meeting Room",
          desc: "Intimate meeting room within the Brown Center, perfect for groups of 20–40. Adjacent to the Brown Center Lounge for informal breakouts."
        }].map((c) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] overflow-hidden", style: {
          boxShadow: "0 8px 24px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "h-[200px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-[22px] mb-2", children: c.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-snug", children: c.desc })
          ] })
        ] }, c.title)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mt-12 reveal", children: [
          /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Presentation, { size: 16 }), label: "Full AV Equipment" }),
          /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Wifi, { size: 16 }), label: "Fiber Optic WiFi" }),
          /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(ChalkboardTeacher, { size: 16 }), label: "Whiteboard & Projector" }),
          /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Armchair, { size: 16 }), label: "Flexible Seating" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "youth-retreats", className: "py-[80px] md:py-[120px] bg-offwhite", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "reveal-left rounded-[20px] overflow-hidden", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/9299919/pexels-photo-9299919.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Youth retreat", className: "w-full h-[480px] object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Youth Groups" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Youth Retreats" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "Ferncliff is a natural fit for youth retreats — we've been hosting young people since 1937. Your group gets access to 1,200 acres of outdoor activities, flexible meeting spaces, cabin or hotel-style lodging, full meal service, and a team that knows how to support youth programming." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: [{
            icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 20 }),
            label: "ACA-accredited campus"
          }, {
            icon: /* @__PURE__ */ jsx(Campfire, { size: 20 }),
            label: "Campfire & outdoor worship spaces"
          }, {
            icon: /* @__PURE__ */ jsx(Boat, { size: 20 }),
            label: "Pool & lake access"
          }, {
            icon: /* @__PURE__ */ jsx(Target, { size: 20 }),
            label: "Archery, ropes course, hiking"
          }].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-teal", children: f.icon }),
            /* @__PURE__ */ jsx("span", { className: "text-[15px] text-text-body", children: f.label })
          ] }, f.label)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "pl-5 border-l-[3px] border-gold mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm", style: {
              fontSize: "20px",
              lineHeight: 1.5
            }, children: '"Our youth group has been coming to Ferncliff for years. The staff makes it so easy — we just show up and focus on our kids."' }),
            /* @__PURE__ */ jsx("cite", { className: "block mt-2 not-italic font-sans text-[12px] text-text-muted font-semibold", children: "— Youth Pastor, Conway" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#inquire", className: "btn btn-teal", children: "Inquire Now" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "pavilions", className: "py-[80px] md:py-[120px] bg-cream", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-[24px] overflow-hidden mb-10 reveal", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Outdoor pavilion", className: "w-full object-cover", style: {
          maxHeight: 420
        } }) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal max-w-[700px] mx-auto mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Outdoor Spaces" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Outdoor Pavilions" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75]", children: "Covered outdoor spaces perfect for worship, large group gatherings, team activities, and meals in nature. Multiple pavilion options across the campus to fit groups of all sizes." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: [{
          icon: /* @__PURE__ */ jsx(Sun, { size: 28 }),
          title: "Open-air worship space"
        }, {
          icon: /* @__PURE__ */ jsx(Users, { size: 28 }),
          title: "Group gathering area"
        }, {
          icon: /* @__PURE__ */ jsx(CloudRain, { size: 28 }),
          title: "Covered for weather protection"
        }].map((c) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[16px] p-6 text-center", style: {
          boxShadow: "0 8px 24px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center mb-3", children: c.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-[18px]", children: c.title })
        ] }, c.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "meals", className: "py-[80px] md:py-[120px] bg-offwhite", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal-left order-2 md:order-1", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Full-Service Dining" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Meals that bring people together" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "Our dining hall serves homestyle meals buffet-style for groups of all sizes. We accommodate dietary restrictions and allergies. Meal plans are customizable to your group's schedule — breakfast, lunch, dinner, and snacks." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(ForkKnife, { size: 16 }), label: "Buffet-Style Service" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Leaf, { size: 16 }), label: "Dietary Accommodations" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Clock, { size: 16 }), label: "Flexible Meal Times" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Coffee, { size: 16 }), label: "Coffee & Snacks" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal-right order-1 md:order-2 rounded-[20px] overflow-hidden", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Dining hall", className: "w-full h-[480px] object-cover" }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "swimming", className: "py-[80px] md:py-[120px] bg-cream", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "reveal-left rounded-[20px] overflow-hidden", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Pool", className: "w-full h-[480px] object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Aquatics" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, className: "mb-5", children: "Swimming & Aquatics" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-body leading-[1.75] mb-6", children: "Ferncliff's pool and lake offer refreshing recreation for retreat groups. The pool is available seasonally with lifeguard supervision. Lake activities include canoeing, kayaking, and fishing." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Boat, { size: 16 }), label: "Seasonal Pool" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Boat, { size: 16 }), label: "Canoeing & Kayaking" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(Fish, { size: 16 }), label: "Fishing" }),
            /* @__PURE__ */ jsx(FeatureBadge, { icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 16 }), label: "Lifeguard on Duty" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "activities", className: "py-[80px] md:py-[120px] bg-offwhite", style: {
        scrollMarginTop: 130
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 reveal", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Recreation" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "clamp(28px, 3.5vw, 40px)"
          }, children: "Activities & recreation" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: [{
          icon: /* @__PURE__ */ jsx(Target, { size: 28 }),
          title: "Archery",
          desc: "Supervised target shooting range"
        }, {
          icon: /* @__PURE__ */ jsx(Mountains, { size: 28 }),
          title: "Hiking Trails",
          desc: "20+ miles of marked trails"
        }, {
          icon: /* @__PURE__ */ jsx(TreeStructure, { size: 28 }),
          title: "Ropes Course",
          desc: "High and low challenge elements"
        }, {
          icon: /* @__PURE__ */ jsx(PaintBrush, { size: 28 }),
          title: "Arts & Crafts",
          desc: "Creative studio space"
        }, {
          icon: /* @__PURE__ */ jsx(Campfire, { size: 28 }),
          title: "Campfire Circles",
          desc: "Multiple fire pits and worship spaces"
        }, {
          icon: /* @__PURE__ */ jsx(Plant, { size: 28 }),
          title: "Farm & Garden",
          desc: "Visit the Ferncliff Farmstead"
        }, {
          icon: /* @__PURE__ */ jsx(Compass, { size: 28 }),
          title: "Nature Walks",
          desc: "Guided and self-guided options"
        }, {
          icon: /* @__PURE__ */ jsx(Users, { size: 28 }),
          title: "Sports Fields",
          desc: "Open recreation areas"
        }].map((a) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[16px] p-6", style: {
          boxShadow: "0 8px 24px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-teal mb-3", children: a.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-[18px] mb-1", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-snug", children: a.desc })
        ] }, a.title)) })
      ] }) }),
      /* @__PURE__ */ jsx(RetreatInquiryForm, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function RetreatInquiryForm() {
  const {
    addInquiry
  } = useContentStore();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    org: "",
    contact: "",
    email: "",
    guests: 20,
    dates: "",
    type: "Church Retreat",
    message: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    addInquiry({
      org: form.org,
      contact: form.contact,
      email: form.email,
      guests: Number(form.guests) || 0,
      dates: form.dates,
      type: form.type,
      message: form.message
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4e3);
    setForm({
      org: "",
      contact: "",
      email: "",
      guests: 20,
      dates: "",
      type: "Church Retreat",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxs("section", { id: "inquire", className: "py-[80px] md:py-[120px] bg-offwhite", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-[900px] mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-teal-ghost rounded-[28px] p-10 md:p-16 reveal", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-3", children: "Plan Your Retreat" }),
        /* @__PURE__ */ jsx("h2", { style: {
          fontSize: "clamp(28px, 3.5vw, 40px)"
        }, className: "mb-3", children: "Ready to plan your retreat?" }),
        /* @__PURE__ */ jsx("p", { className: "text-text-muted max-w-[560px] mx-auto", children: "Tell us about your group and we'll be in touch within one business day." })
      ] }),
      submitted && /* @__PURE__ */ jsx("div", { className: "mb-6 px-5 py-4 rounded-xl text-[14px]", style: {
        background: "rgba(43,122,111,0.10)",
        color: "#236158",
        border: "1px solid rgba(43,122,111,0.25)"
      }, children: "Thank you — your inquiry has been received. Our team will reach out shortly." }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Organization", required: true, children: /* @__PURE__ */ jsx("input", { required: true, value: form.org, onChange: (e) => setForm({
          ...form,
          org: e.target.value
        }), className: "inp" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Contact Name", required: true, children: /* @__PURE__ */ jsx("input", { required: true, value: form.contact, onChange: (e) => setForm({
          ...form,
          contact: e.target.value
        }), className: "inp" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Email", required: true, children: /* @__PURE__ */ jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }), className: "inp" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Estimated Guests", children: /* @__PURE__ */ jsx("input", { type: "number", min: 1, value: form.guests, onChange: (e) => setForm({
          ...form,
          guests: Number(e.target.value)
        }), className: "inp" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Preferred Dates", children: /* @__PURE__ */ jsx("input", { value: form.dates, onChange: (e) => setForm({
          ...form,
          dates: e.target.value
        }), placeholder: "e.g. Oct 2026", className: "inp" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Retreat Type", children: /* @__PURE__ */ jsxs("select", { value: form.type, onChange: (e) => setForm({
          ...form,
          type: e.target.value
        }), className: "inp", children: [
          /* @__PURE__ */ jsx("option", { children: "Church Retreat" }),
          /* @__PURE__ */ jsx("option", { children: "Youth Retreat" }),
          /* @__PURE__ */ jsx("option", { children: "Corporate" }),
          /* @__PURE__ */ jsx("option", { children: "Family" }),
          /* @__PURE__ */ jsx("option", { children: "Other" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Tell us more", children: /* @__PURE__ */ jsx("textarea", { rows: 4, value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), className: "inp resize-none" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 flex flex-wrap items-center gap-4 justify-between", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[13px] text-text-muted", children: [
            "Or reach us at ",
            /* @__PURE__ */ jsx("a", { href: "mailto:retreats@ferncliff.org", className: "text-gold font-semibold", children: "retreats@ferncliff.org" }),
            " · (501) 821-3063"
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-teal", children: "Send Inquiry" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `.inp{width:100%;height:42px;padding:0 14px;border-radius:10px;border:1px solid rgba(44,41,38,0.15);background:#FFFDF9;font-size:14px;color:#2c2926;font-family:inherit}.inp:focus{outline:none;border-color:#2B7A6F}textarea.inp{height:auto;padding:12px 14px}` })
  ] });
}
function Field({
  label,
  required,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxs("span", { className: "block text-[12px] font-semibold uppercase tracking-wider text-text-muted mb-1.5", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-coral", children: " *" })
    ] }),
    children
  ] });
}
export {
  RetreatsPage as component
};
