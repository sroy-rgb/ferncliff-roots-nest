import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRouterState, Link } from "@tanstack/react-router";
import { a as useAdminAuth } from "./router-DASrCSie.js";
import { CaretDown, MoonStars, Sun, Compass, Backpack, Bed, PresentationChart, ForkKnife, PaperPlaneTilt, Tree, Heart, Leaf, Users, MapPin, CalendarPlus } from "@phosphor-icons/react";
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const LOGO$1 = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";
const campMega = {
  width: 520,
  items: [
    { icon: /* @__PURE__ */ jsx(MoonStars, { size: 22 }), title: "Overnight Camp", desc: "Multi-day immersive experiences, grades 1–12", to: "/camp/overnight" },
    { icon: /* @__PURE__ */ jsx(Sun, { size: 22 }), title: "Day Camp", desc: "Full-day programs for younger campers", to: "/camp/day" },
    { icon: /* @__PURE__ */ jsx(Compass, { size: 22 }), title: "Specialty Camps", desc: "Adventure, arts, leadership & more", to: "/camp/specialty" },
    { icon: /* @__PURE__ */ jsx(Backpack, { size: 22 }), title: "First-Time Campers", desc: "Everything you need to feel confident", to: "/camp/first-time" }
  ],
  image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=520"
};
const retreatsMega = {
  width: 520,
  items: [
    { icon: /* @__PURE__ */ jsx(Bed, { size: 22 }), title: "Lodging", desc: "Hotel rooms, retreat house, cabins", to: "/retreats#brown-center" },
    { icon: /* @__PURE__ */ jsx(PresentationChart, { size: 22 }), title: "Meeting Spaces", desc: "Flexible rooms for groups up to 150", to: "/retreats#meeting-rooms" },
    { icon: /* @__PURE__ */ jsx(ForkKnife, { size: 22 }), title: "Meals & Dining", desc: "Fresh, family-style or buffet", to: "/retreats#meals" },
    { icon: /* @__PURE__ */ jsx(PaperPlaneTilt, { size: 22 }), title: "Plan Your Retreat", desc: "Talk to our hospitality team", to: "/retreats#inquire" }
  ],
  image: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=520"
};
const natureMega = {
  width: 380,
  items: [
    { icon: /* @__PURE__ */ jsx(Tree, { size: 22 }), title: "Nature Preschool", desc: "Forest kindergarten, ages 3–5", to: "/nature-school#preschool" },
    { icon: /* @__PURE__ */ jsx(Compass, { size: 22 }), title: "Wildcraft & Homeschool", desc: "Programs for older learners", to: "/nature-school#wildcraft" }
  ]
};
const aboutMega = {
  width: 380,
  items: [
    { icon: /* @__PURE__ */ jsx(Heart, { size: 22 }), title: "Our Mission", desc: "Faith, nature, and community since 1937", to: "/about#mission" },
    { icon: /* @__PURE__ */ jsx(Leaf, { size: 22 }), title: "Sustainability", desc: "Arkansas's greenest non-profit", to: "/about#sustainability" },
    { icon: /* @__PURE__ */ jsx(Users, { size: 22 }), title: "Staff & Board", desc: "The people behind Ferncliff", to: "/about#staff" },
    { icon: /* @__PURE__ */ jsx(MapPin, { size: 22 }), title: "Contact & Directions", desc: "Visit us outside Little Rock", to: "/about#directions" }
  ]
};
const navItems = [
  { label: "Camp", mega: campMega, to: "/camp" },
  { label: "Retreats & Conferences", mega: retreatsMega, to: "/retreats" },
  { label: "Nature School", mega: natureMega, to: "/nature-school" },
  { label: "Outreach", mega: null, to: "/outreach" },
  { label: "About", mega: aboutMega, to: "/about" }
];
function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const { loggedIn } = useAdminAuth();
  const adminBarOffset = loggedIn ? 36 : 0;
  const [scrolledRaw, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrolled = !isHome || scrolledRaw;
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: "fixed left-0 right-0 h-[72px] z-[1000] transition-all duration-300",
      style: {
        top: adminBarOffset,
        background: scrolled ? "#FFFDF9" : "transparent",
        backdropFilter: scrolled && isHome ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 #E8E2D8" : "none",
        borderBottom: scrolled && !isHome ? "1px solid #E8E2D8" : "none"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: LOGO$1,
            alt: "Ferncliff",
            className: "h-12 w-auto transition-all",
            style: { filter: scrolled ? "none" : "brightness(0) invert(1)" }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.to,
              className: "px-3 py-2 text-[14px] font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
              style: {
                color: scrolled ? "var(--color-dark-warm)" : "rgba(255,255,255,0.85)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = scrolled ? "var(--color-teal-ghost)" : "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = scrolled ? "var(--color-teal)" : "#fff";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = scrolled ? "var(--color-dark-warm)" : "rgba(255,255,255,0.85)";
              },
              children: [
                item.label,
                item.mega && /* @__PURE__ */ jsx(
                  CaretDown,
                  {
                    size: 12,
                    weight: "bold",
                    className: "transition-transform duration-300 ease-out group-hover:rotate-180 animate-caret-bounce",
                    style: { color: scrolled ? "var(--color-gold)" : "#ffffff" }
                  }
                )
              ]
            }
          ),
          item.mega && /* @__PURE__ */ jsx(MegaMenu, { mega: item.mega })
        ] }, item.label)) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: scrolled ? "btn btn-sm btn-teal" : "btn btn-sm btn-glass", children: "Register" }),
          /* @__PURE__ */ jsx(Link, { to: "/giving", className: "btn btn-sm btn-coral", children: "Give" })
        ] })
      ] })
    }
  );
}
function MegaMenu({ mega }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute left-1/2 top-full pt-3 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-x-[-50%] translate-x-[-50%] translate-y-2 group-hover:translate-y-0 transition-all duration-[350ms] ease-out",
      style: { width: mega.width },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-[20px] p-7 border",
          style: {
            boxShadow: "0 16px 48px rgba(44,41,38,0.12)",
            borderColor: "rgba(0,0,0,0.04)"
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: `grid gap-2 ${mega.items.length > 2 && mega.width >= 520 ? "grid-cols-2" : "grid-cols-1"}`, children: mega.items.map((it) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: it.to,
                className: "flex items-start gap-3 p-3 rounded-[12px] hover:bg-[var(--color-teal-ghost)] transition-colors",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-teal mt-0.5 shrink-0", children: it.icon }),
                  /* @__PURE__ */ jsxs("span", { className: "block", children: [
                    /* @__PURE__ */ jsx("span", { className: "block font-sans text-[14px] font-bold text-dark", children: it.title }),
                    /* @__PURE__ */ jsx("span", { className: "block text-[12px] text-text-muted leading-snug mt-0.5", children: it.desc })
                  ] })
                ]
              },
              it.title
            )) }),
            mega.image && /* @__PURE__ */ jsx("div", { className: "mt-4 h-[120px] rounded-[12px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: mega.image, alt: "", className: "w-full h-full object-cover" }) })
          ]
        }
      )
    }
  );
}
const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";
const cols = [
  { title: "Explore", links: [["Camp", "/camp"], ["Retreats & Conferences", "/retreats"], ["Nature School", "/nature-school"], ["Outreach", "/outreach"], ["Store", "https://www.ferncliffstore.org/"]] },
  { title: "Support", links: [["Ways to Give", "/giving"], ["Friends of Ferncliff", "/giving#friends"], ["Transform Campaign", "/giving#campaign"], ["Volunteer", "/outreach#volunteer"]] },
  { title: "About", links: [["Our Mission", "/about#mission"], ["Staff & Board", "/about#staff"], ["Blog & Stories", "/stories"], ["Jobs", "/about#jobs"], ["Contact", "/about#directions"]] }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-dark pt-[72px] pb-8", style: { color: "rgba(255,255,255,0.55)" }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: LOGO, alt: "Ferncliff", className: "h-11 w-auto", style: { filter: "brightness(0) invert(1)", opacity: 0.75 } }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] mt-4 max-w-[280px] leading-[1.7]", style: { color: "rgba(255,255,255,0.4)" }, children: "As an expression of God's love, we welcome people into a life of caring for Creation, others, and themselves." })
      ] }),
      cols.map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "text-gold font-sans text-[12px] font-bold uppercase mb-5", style: { letterSpacing: "2px" }, children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: col.links.map(([label, href]) => {
          const external = href.startsWith("http");
          const baseStyle = "block text-[14px] transition-all";
          const onEnter = (e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            e.currentTarget.style.paddingLeft = "4px";
          };
          const onLeave = (e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            e.currentTarget.style.paddingLeft = "0";
          };
          return /* @__PURE__ */ jsx("li", { children: external ? /* @__PURE__ */ jsx(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: baseStyle,
              style: { color: "rgba(255,255,255,0.5)" },
              onMouseEnter: onEnter,
              onMouseLeave: onLeave,
              children: label
            }
          ) : /* @__PURE__ */ jsx(
            Link,
            {
              to: href,
              className: baseStyle,
              style: { color: "rgba(255,255,255,0.5)" },
              onMouseEnter: onEnter,
              onMouseLeave: onLeave,
              children: label
            }
          ) }, label);
        }) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-px mb-7", style: { background: "rgba(255,255,255,0.06)" } }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between md:items-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[12px]", style: { color: "rgba(255,255,255,0.25)" }, children: "© 2026 Ferncliff Camp & Conference Center · 1720 Ferncliff Road, Little Rock, AR 72223" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-5", children: [
        /* @__PURE__ */ jsx("a", { href: "tel:5018213063", className: "text-gold text-[13px] opacity-70 hover:opacity-100 transition-opacity", children: "(501) 821-3063" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:info@ferncliff.org", className: "text-gold text-[13px] opacity-70 hover:opacity-100 transition-opacity", children: "info@ferncliff.org" })
      ] })
    ] })
  ] }) });
}
function MobileBottomBar() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "md:hidden fixed bottom-0 left-0 right-0 z-[1001] flex h-[52px]",
      style: { boxShadow: "0 -4px 24px rgba(0,0,0,0.12)" },
      children: [
        /* @__PURE__ */ jsxs(Link, { to: "/camp/register", className: "flex-1 flex items-center justify-center gap-2 bg-teal text-white font-bold text-[14px]", children: [
          /* @__PURE__ */ jsx(CalendarPlus, { size: 18, weight: "regular" }),
          " Register"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/giving", className: "flex-1 flex items-center justify-center gap-2 bg-coral text-white font-bold text-[14px]", children: [
          /* @__PURE__ */ jsx(Heart, { size: 18, weight: "regular" }),
          " Give"
        ] })
      ]
    }
  );
}
export {
  Footer as F,
  MobileBottomBar as M,
  Nav as N,
  useScrollReveal as u
};
