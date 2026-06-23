import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowSquareOut, Campfire, PaperPlaneTilt, Buildings, ArrowRight, Leaf, Heart, HandHeart, Sun, Users, ShieldCheck, Tree, Backpack, Lightning, CalendarCheck, Star, Baby, X, CheckCircle, Lock, EyeSlash, FirstAid, UsersThree, Package, FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-query";
const POSTER = "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920";
const VIDEO = "https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_30fps.mp4";
const paths = [
  {
    icon: /* @__PURE__ */ jsx(Campfire, { size: 22 }),
    title: "Summer Camp",
    desc: "Day & overnight camps, Pre-K – 12th grade",
    subs: [
      { label: "Overnight Camp", href: "/camp#overnight" },
      { label: "Day Camp", href: "/camp#daycamp" },
      { label: "First-Time Campers", href: "/camp#first-time" }
    ],
    cta: { label: "Register Now", icon: /* @__PURE__ */ jsx(ArrowSquareOut, { size: 14, weight: "bold" }), href: "/camp/register" }
  },
  {
    icon: /* @__PURE__ */ jsx(Buildings, { size: 22 }),
    title: "Retreats & Conferences",
    desc: "Groups up to 150 with full lodging & meals",
    subs: [
      { label: "View Lodging", href: "/retreats#brown-center" },
      { label: "Meeting Spaces", href: "/retreats#meeting-rooms" }
    ],
    cta: { label: "Inquire Now", icon: /* @__PURE__ */ jsx(PaperPlaneTilt, { size: 14, weight: "bold" }), href: "/retreats#inquire" }
  },
  {
    icon: /* @__PURE__ */ jsx(Leaf, { size: 22 }),
    title: "Nature School",
    desc: "Arkansas's first nature preschool",
    subs: [
      { label: "Nature Preschool", href: "/nature-school#preschool" },
      { label: "Wildcraft Programs", href: "/nature-school#wildcraft" }
    ],
    cta: { label: "Learn More", icon: /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" }), href: "/nature-school" }
  },
  {
    icon: /* @__PURE__ */ jsx(HandHeart, { size: 22 }),
    title: "Support Ferncliff",
    desc: "Give, volunteer, or join our mission",
    subs: [
      { label: "Make a Gift", href: "/giving" },
      { label: "Volunteer", href: "/outreach#volunteer" }
    ],
    cta: { label: "Give Today", icon: /* @__PURE__ */ jsx(Heart, { size: 14, weight: "bold" }), href: "/giving" }
  }
];
function Hero() {
  const { homepage } = useContentStore();
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-end overflow-hidden pb-[200px] md:pb-[160px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxs(
        "video",
        {
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          poster: POSTER,
          className: "w-full h-full object-cover",
          children: [
            /* @__PURE__ */ jsx("source", { src: VIDEO, type: "video/mp4" }),
            /* @__PURE__ */ jsx("img", { src: POSTER, alt: "", className: "w-full h-full object-cover" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(180deg, rgba(20,18,16,0.3) 0%, rgba(20,18,16,0.05) 30%, rgba(20,18,16,0.45) 65%, rgba(20,18,16,0.88) 100%), linear-gradient(90deg, rgba(20,18,16,0.5) 0%, transparent 55%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-[2] max-w-[640px] px-6 md:px-12", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-gold mb-6", children: "Since 1937 · 1,200 Acres" }),
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "text-white font-light leading-[1.08] mb-8",
          style: { fontSize: "clamp(42px, 5.5vw, 68px)" },
          children: homepage.heroTagline
        }
      ),
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: "font-light max-w-[460px] mb-10",
          style: { color: "rgba(255,255,255,0.65)", fontSize: "17px" },
          children: [
            homepage.heroSubtext,
            " — just outside Little Rock, Arkansas."
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp", className: "btn btn-teal", children: "Explore Camp" }),
        /* @__PURE__ */ jsx(Link, { to: "/retreats", className: "btn btn-outline", children: "Plan a Retreat" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex absolute bottom-[200px] right-12 z-[5] flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-px h-12 bg-white/20 overflow-hidden", children: /* @__PURE__ */ jsx(
        "span",
        {
          className: "absolute left-0 w-px h-3 bg-gold",
          style: { animation: "scrollLight 2s ease-in-out infinite" }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-[10px] uppercase",
          style: {
            writingMode: "vertical-rl",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)"
          },
          children: "Discover"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4", children: paths.map((p, i) => /* @__PURE__ */ jsx(PathItem, { path: p, isLast: i === paths.length - 1 }, p.title)) }) })
  ] });
}
function PathItem({ path, isLast }) {
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative px-8 py-7 transition-colors duration-300 cursor-pointer",
      style: {
        background: hover ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.35)",
        backdropFilter: "blur(16px)",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)"
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute bottom-0 left-0 right-0 h-[3px] bg-gold origin-left transition-transform duration-300",
            style: { transform: hover ? "scaleX(1)" : "scaleX(0)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: path.icon }),
          /* @__PURE__ */ jsx("h3", { className: "font-sans text-[15px] font-bold text-white", children: path.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[12px] mt-1.5", style: { color: "rgba(255,255,255,0.5)" }, children: path.desc }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "hidden md:block overflow-hidden transition-all duration-500 ease-out",
            style: {
              maxHeight: hover ? 200 : 0,
              opacity: hover ? 1 : 0,
              paddingTop: hover ? 16 : 0
            },
            children: /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-3 space-y-1.5", children: [
              path.subs.map((s) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: s.href,
                  className: "flex items-center gap-2 text-[13px] transition-all",
                  style: { color: "rgba(255,255,255,0.7)" },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.color = "var(--color-gold)";
                    e.currentTarget.style.paddingLeft = "4px";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.paddingLeft = "0";
                  },
                  children: [
                    /* @__PURE__ */ jsx(ArrowRight, { size: 12 }),
                    " ",
                    s.label
                  ]
                },
                s.label
              )),
              path.cta.external ? /* @__PURE__ */ jsxs("a", { href: path.cta.href, target: "_blank", rel: "noopener noreferrer", className: "mt-3 inline-flex items-center gap-1.5 text-gold text-[13px] font-bold", children: [
                path.cta.label,
                " ",
                path.cta.icon
              ] }) : /* @__PURE__ */ jsxs(Link, { to: path.cta.href, className: "mt-3 inline-flex items-center gap-1.5 text-gold text-[13px] font-bold", children: [
                path.cta.label,
                " ",
                path.cta.icon
              ] })
            ] })
          }
        )
      ]
    }
  );
}
function Camp() {
  return /* @__PURE__ */ jsx("section", { id: "camp", className: "py-[80px] md:py-[120px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative reveal-left", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-[28px] overflow-hidden group",
          style: { boxShadow: "0 16px 48px rgba(44,41,38,0.12)" },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=900",
              alt: "Kids setting up a tent at camp",
              className: "w-full h-[520px] object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-[1.03]"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-[20px] px-7 py-5 flex items-center gap-4 md:absolute md:-bottom-6 md:-right-6 md:z-[2] relative -mt-6 md:mt-0 mx-4 md:mx-0",
          style: { boxShadow: "0 8px 32px rgba(44,41,38,0.08)" },
          children: [
            /* @__PURE__ */ jsx(Stat, { n: "1,600+", label: "Campers each summer" }),
            /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-cream-warm" }),
            /* @__PURE__ */ jsx(Stat, { n: "40+", label: "Summer staff" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-5", children: "Summer Camp" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-5", style: { fontSize: "clamp(32px, 4vw, 48px)" }, children: [
        "The best week of their ",
        /* @__PURE__ */ jsx("span", { className: "hw", style: { fontSize: "1.15em" }, children: "summer" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-body mb-2", children: "From Pre-K through 12th grade, Ferncliff camps are where kids unplug, explore, and grow. Rooted in faith and 1,200 acres of nature, our ACA-accredited programs build friendships that last a lifetime." }),
      /* @__PURE__ */ jsxs(
        "blockquote",
        {
          className: "my-7 py-6 pl-6 border-l-[3px] border-gold",
          children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "font-serif italic text-dark-warm leading-[1.5]",
                style: { fontSize: "22px" },
                children: `"My daughter came home a different person — more confident, more kind, more herself. Ferncliff gave her something we couldn't."`
              }
            ),
            /* @__PURE__ */ jsx("cite", { className: "block mt-2.5 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Ferncliff Camp Parent, Little Rock" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-5 my-7 mb-9", children: [
        /* @__PURE__ */ jsx(Badge, { icon: /* @__PURE__ */ jsx(Sun, { size: 18 }), label: "Day & Overnight" }),
        /* @__PURE__ */ jsx(Badge, { icon: /* @__PURE__ */ jsx(Users, { size: 18 }), label: "Pre-K – 12th Grade" }),
        /* @__PURE__ */ jsx(Badge, { icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 18 }), label: "ACA Accredited" }),
        /* @__PURE__ */ jsx(Badge, { icon: /* @__PURE__ */ jsx(Tree, { size: 18 }), label: "1,200 Acres" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gold-light rounded-[12px] px-6 py-5 mb-8 flex items-start gap-4", children: [
        /* @__PURE__ */ jsx(Backpack, { size: 24, weight: "regular", className: "text-gold shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-dark-soft", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-bold", children: "First time at Ferncliff?" }),
            " We've got everything you need to feel confident about your child's experience."
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/camp/first-time", className: "link-arrow mt-1.5", children: [
            "First-Time Camper Guide ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register for Camp" }),
        /* @__PURE__ */ jsx(Link, { to: "/camp", className: "btn btn-outline", children: "Explore Camp" })
      ] })
    ] })
  ] }) }) });
}
function Stat({ n, label }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-teal leading-none", style: { fontSize: "36px", fontWeight: 500 }, children: n }),
    /* @__PURE__ */ jsx("div", { className: "text-[12px] font-semibold text-text-muted mt-1", children: label })
  ] });
}
function Badge({ icon, label }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-teal", children: icon }),
    /* @__PURE__ */ jsx("span", { className: "text-[14px] font-semibold text-dark-warm", children: label })
  ] });
}
function ImageBreak() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[40vh] md:h-[50vh] min-h-[360px] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Teenagers warming their hands at a campfire",
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 flex items-end p-8 md:p-12",
        style: { background: "linear-gradient(180deg, rgba(20,18,16,0.1) 0%, rgba(20,18,16,0.6) 100%)" },
        children: /* @__PURE__ */ jsx(
          "h2",
          {
            className: "hw max-w-[600px] text-white",
            style: { fontSize: "clamp(28px, 5vw, 48px)", color: "#fff", fontWeight: 500 },
            children: "We believe in community, compassion, and you."
          }
        )
      }
    )
  ] });
}
const cards = [
  {
    img: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Lake at golden hour",
    badge: "Lodging",
    title: "Brown Center",
    text: "36 hotel-style rooms with private bathrooms, lake views, and WiFi. Perfect for conferences and adult retreats.",
    link: "Tour the Rooms",
    href: "/retreats#brown-center"
  },
  {
    img: "https://images.pexels.com/photos/5887849/pexels-photo-5887849.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Forest golden hour",
    badge: "Retreat House",
    title: "Retreat House",
    text: "5 bedrooms, full kitchen, dining room, and two living areas — ideal for intimate gatherings of up to 25 guests.",
    link: "Explore",
    href: "/retreats#retreat-house"
  },
  {
    img: "https://images.pexels.com/photos/1092183/pexels-photo-1092183.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Green trees",
    badge: "Cabins",
    title: "Belden Pond Cabins",
    text: "12 cabins in a wooded setting near the lake — perfect for youth retreats and camp-style group experiences.",
    link: "View Cabins",
    href: "/retreats#belden"
  }
];
function Retreats() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "retreats", className: "py-[80px] md:py-[120px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Retreats & Conferences" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-4", style: { fontSize: "clamp(32px, 4.5vw, 52px)" }, children: [
          "Space to gather,",
          /* @__PURE__ */ jsx("br", {}),
          "room to ",
          /* @__PURE__ */ jsx("span", { className: "hw", children: "grow" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[17px] text-text-muted max-w-[560px] mx-auto", children: "Church retreats, corporate offsites, youth events, family reunions — 1,200 acres of hospitality just 15 minutes from Little Rock." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7", children: cards.map((c) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "reveal bg-white rounded-[20px] overflow-hidden transition-all duration-[400ms] hover:-translate-y-1.5 group",
          style: { boxShadow: "0 2px 16px rgba(44,41,38,0.06)" },
          onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 16px 48px rgba(44,41,38,0.12)",
          onMouseLeave: (e) => e.currentTarget.style.boxShadow = "0 2px 16px rgba(44,41,38,0.06)",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-[220px] overflow-hidden", children: [
              /* @__PURE__ */ jsx("img", { src: c.img, alt: c.alt, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute top-4 left-4 text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase",
                  style: { background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", letterSpacing: "1px" },
                  children: c.badge
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-sans text-[18px] font-bold text-dark mb-2", children: c.title }),
              /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-relaxed mb-3.5", children: c.text }),
              /* @__PURE__ */ jsxs(Link, { to: c.href, className: "link-arrow", children: [
                c.link,
                " ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
              ] })
            ] })
          ]
        },
        c.title
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[700px] mx-auto mt-14 pt-12 text-center border-t border-black/5 reveal", children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: { fontSize: "24px" }, children: `"The Ferncliff team handled every detail so we could focus on what mattered — our people and our purpose. We're already planning our next retreat."` }),
        /* @__PURE__ */ jsx("cite", { className: "block mt-3 not-italic text-[13px] text-text-muted font-semibold", children: "— Retreat Coordinator, First Presbyterian Church, Little Rock" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-center gap-10 md:gap-16 mt-12 reveal", children: [
        ["150", "Guest Capacity"],
        ["42", "Hotel Rooms"],
        ["12", "Cabins"],
        ["1,200", "Acres"]
      ].map(([n, l]) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-teal leading-none", style: { fontSize: "48px" }, children: n }),
        /* @__PURE__ */ jsx("div", { className: "text-[12px] font-semibold text-text-muted uppercase mt-1", style: { letterSpacing: "1px" }, children: l })
      ] }, l)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12 reveal", children: /* @__PURE__ */ jsx(Link, { to: "/retreats#inquire", className: "btn btn-teal", children: "Inquire About Your Retreat" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-dark py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8 flex flex-wrap justify-center gap-x-14 gap-y-3", children: [
      [/* @__PURE__ */ jsx(ShieldCheck, { size: 20 }, "1"), "ACA Accredited"],
      [/* @__PURE__ */ jsx(Leaf, { size: 20 }, "2"), "Arkansas's Greenest Non-Profit"],
      [/* @__PURE__ */ jsx(Lightning, { size: 20 }, "3"), "National Energy Efficiency Award"],
      [/* @__PURE__ */ jsx(CalendarCheck, { size: 20 }, "4"), "Trusted Since 1937"]
    ].map(([icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: icon }),
      /* @__PURE__ */ jsx("span", { className: "text-[13px] font-medium", style: { color: "rgba(255,255,255,0.6)" }, children: label })
    ] }, i)) }) })
  ] });
}
function NatureSchool() {
  return /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative reveal-left order-1", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-[28px] overflow-hidden group",
          style: { boxShadow: "0 16px 48px rgba(44,41,38,0.12)" },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900",
              alt: "Young girls playing outdoors in a park",
              className: "w-full h-[480px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-6 right-6 px-5 py-2.5 rounded-full",
          style: {
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(8px)",
            fontFamily: "var(--font-hand)",
            fontSize: "18px",
            color: "var(--color-teal)",
            fontWeight: 600,
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          },
          children: "🌿 First in Arkansas"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "reveal-right order-2", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-5", children: "Nature School" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-5", style: { fontSize: "clamp(32px, 4vw, 48px)" }, children: [
        "Where the classroom",
        /* @__PURE__ */ jsx("br", {}),
        "is the ",
        /* @__PURE__ */ jsx("span", { className: "hw", style: { fontSize: "1.15em" }, children: "forest" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-body mb-6", children: "Ferncliff's Nature Preschool — the first of its kind in Arkansas — follows the forest kindergarten model. Rain or shine, our preschoolers spend their days outdoors, exploring, creating, and building a lifelong connection with the natural world." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-5 mb-8", children: [
        [/* @__PURE__ */ jsx(Tree, { size: 18 }, "1"), "Forest Kindergarten Model"],
        [/* @__PURE__ */ jsx(Star, { size: 18 }, "2"), "First in Arkansas"],
        [/* @__PURE__ */ jsx(Baby, { size: 18 }, "3"), "Ages 3–5"]
      ].map(([icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-teal", children: icon }),
        /* @__PURE__ */ jsx("span", { className: "text-[14px] font-semibold text-dark-warm", children: label })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/nature-school", className: "btn btn-teal", children: "Explore Nature School" }),
        /* @__PURE__ */ jsxs(Link, { to: "/nature-school#wildcraft", className: "link-arrow", children: [
          "Wildcraft Programs ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
        ] })
      ] })
    ] })
  ] }) }) });
}
function Stories() {
  return /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-light", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14 reveal", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-3", children: "Stories of Impact" }),
        /* @__PURE__ */ jsxs("h2", { style: { fontSize: "clamp(32px, 4vw, 48px)" }, children: [
          "Lives changed at ",
          /* @__PURE__ */ jsx("span", { className: "hw", children: "Ferncliff" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/stories", className: "link-arrow", children: [
        "All Stories ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "grid gap-6",
        style: { gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.8fr) minmax(0,1fr)", gridTemplateRows: "auto auto" },
        children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/stories/emelia-lee",
              className: "reveal relative bg-white rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-[400ms] hover:-translate-y-1 col-span-3 md:col-span-1 row-span-1 md:row-span-2",
              style: { boxShadow: "0 2px 16px rgba(44,41,38,0.06)" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "h-full min-h-[400px] overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=800",
                    alt: "Joyful family of five bonding by the lake at sunset",
                    className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "absolute bottom-0 left-0 right-0 p-8 text-white",
                    style: { background: "linear-gradient(transparent, rgba(20,18,16,0.85))" },
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-2.5",
                          style: { background: "rgba(43,122,111,0.3)", color: "rgba(255,255,255,0.9)" },
                          children: "Nature Pre School"
                        }
                      ),
                      /* @__PURE__ */ jsx("h3", { className: "font-sans text-[22px] font-bold text-white mb-1.5", children: "What Stayed With Her: Emelia Lee" }),
                      /* @__PURE__ */ jsx("p", { className: "text-[13px]", style: { color: "rgba(255,255,255,0.7)" }, children: "When Emelia's family began looking for a preschool, her mom was searching for a place that felt different..." })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            StoryCard,
            {
              to: "/stories/rebecca-spooner",
              img: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Parents lifting their daughter joyfully outdoors",
              tag: "Support",
              tagBg: "bg-coral-light",
              tagColor: "text-coral",
              title: "Rev. Rebecca Spooner Barber and the Heart of Mission",
              text: "A story of dedication, faith, and lasting impact..."
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block" }),
          /* @__PURE__ */ jsx(
            StoryCard,
            {
              to: "/stories/anyone-can-make-a-difference",
              img: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Campsite",
              tag: "Giving",
              tagBg: "bg-gold-light",
              tagColor: "",
              tagColorHex: "#96751e",
              title: "A Preschooler Reminds Us Anyone Can Make a Difference",
              text: "Sometimes the smallest hands make the biggest impact..."
            }
          )
        ]
      }
    )
  ] }) });
}
function StoryCard({
  to,
  img,
  alt,
  tag,
  tagBg,
  tagColor,
  tagColorHex,
  title,
  text
}) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to,
      className: "reveal bg-white rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-[400ms] hover:-translate-y-1 block",
      style: { boxShadow: "0 2px 16px rgba(44,41,38,0.06)" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "h-[200px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: img, alt, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-2.5 ${tagBg} ${tagColor}`,
              style: tagColorHex ? { color: tagColorHex } : void 0,
              children: tag
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "font-sans text-[16px] font-bold text-dark mb-1.5 leading-snug", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted", children: text })
        ] })
      ]
    }
  );
}
const amounts$1 = [25, 50, 100, 250, 500, 1e3];
function DonationModal({ open, onClose }) {
  const { addDonation } = useContentStore();
  const [freq, setFreq] = useState("one");
  const [amt, setAmt] = useState(50);
  const [custom, setCustom] = useState("");
  const [donor, setDonor] = useState({ name: "", email: "", campaign: "General" });
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (open) {
      setDone(false);
      setCustom("");
    }
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  const finalAmt = custom ? Math.max(1, Number(custom) || 0) : amt;
  const submit = (e) => {
    e.preventDefault();
    addDonation({
      donor: donor.name.trim() || "Anonymous",
      amount: finalAmt,
      type: freq === "one" ? "One-time" : "Monthly",
      campaign: donor.campaign
    });
    setDone(true);
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), className: "bg-white rounded-[24px] w-full max-w-[520px] max-h-[92vh] overflow-y-auto shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-7 pt-6 pb-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-dark", style: { fontSize: 24 }, children: "Make your gift" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-text-muted hover:text-dark", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    done ? /* @__PURE__ */ jsxs("div", { className: "px-7 pb-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center my-4", children: /* @__PURE__ */ jsx(CheckCircle, { size: 52, weight: "fill" }) }),
      /* @__PURE__ */ jsxs("h4", { className: "font-serif text-dark mb-2", style: { fontSize: 22 }, children: [
        "Thank you, ",
        donor.name || "friend",
        "!"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[14px] mb-6", children: [
        "We've recorded your ",
        freq === "monthly" ? "monthly" : "one-time",
        " gift of ",
        /* @__PURE__ */ jsxs("strong", { children: [
          "$",
          finalAmt.toLocaleString()
        ] }),
        " to ",
        donor.campaign,
        "."
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "btn btn-teal", children: "Close" })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "px-7 pb-7", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted mb-5", children: "Secure · You never leave ferncliff.org" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 p-1 rounded-full mb-5 bg-cream-warm", children: ["one", "monthly"].map((k) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setFreq(k),
          className: "flex-1 py-2.5 rounded-full text-[13px] font-bold transition-colors",
          style: { background: freq === k ? "var(--color-teal)" : "transparent", color: freq === k ? "#fff" : "var(--color-text-muted)" },
          children: k === "one" ? "One-Time" : "Monthly"
        },
        k
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2.5 mb-3", children: amounts$1.map((a) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setAmt(a);
            setCustom("");
          },
          className: "py-3 rounded-[12px] font-serif transition-colors",
          style: {
            background: !custom && amt === a ? "var(--color-teal)" : "var(--color-offwhite)",
            color: !custom && amt === a ? "#fff" : "var(--color-dark-warm)",
            border: `1px solid ${!custom && amt === a ? "var(--color-teal)" : "rgba(0,0,0,0.08)"}`,
            fontSize: 20
          },
          children: [
            "$",
            a.toLocaleString()
          ]
        },
        a
      )) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          min: 1,
          placeholder: "Custom amount",
          value: custom,
          onChange: (e) => setCustom(e.target.value),
          className: "w-full mb-4 px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite",
          style: { border: "1px solid rgba(0,0,0,0.1)" }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2.5 mb-4", children: [
        /* @__PURE__ */ jsx("input", { required: true, placeholder: "Your name", value: donor.name, onChange: (e) => setDonor({ ...donor, name: e.target.value }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: { border: "1px solid rgba(0,0,0,0.1)" } }),
        /* @__PURE__ */ jsx("input", { required: true, type: "email", placeholder: "Email", value: donor.email, onChange: (e) => setDonor({ ...donor, email: e.target.value }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: { border: "1px solid rgba(0,0,0,0.1)" } }),
        /* @__PURE__ */ jsxs("select", { value: donor.campaign, onChange: (e) => setDonor({ ...donor, campaign: e.target.value }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: { border: "1px solid rgba(0,0,0,0.1)" }, children: [
          /* @__PURE__ */ jsx("option", { children: "General" }),
          /* @__PURE__ */ jsx("option", { children: "Friends of Ferncliff" }),
          /* @__PURE__ */ jsx("option", { children: "Transform Campaign" }),
          /* @__PURE__ */ jsx("option", { children: "Camp Scholarships" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "w-full py-3.5 rounded-full bg-coral text-white font-sans font-bold hover:-translate-y-0.5 transition-all",
          style: { fontSize: 15, boxShadow: "0 4px 20px rgba(201,107,60,0.3)" },
          children: [
            "Donate $",
            finalAmt.toLocaleString(),
            freq === "monthly" ? "/mo" : "",
            " →"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-5 mt-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-text-muted", children: [
          /* @__PURE__ */ jsx(Lock, { size: 12 }),
          " SSL Encrypted"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-text-muted", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { size: 12 }),
          " PCI Compliant"
        ] })
      ] })
    ] })
  ] }) });
}
const amounts = [25, 50, 100, 250, 500, 1e3];
function Giving() {
  const [freq, setFreq] = useState("one");
  const [amt, setAmt] = useState(50);
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { id: "giving", className: "relative min-h-[70vh] flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Sunset over lake",
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: { background: "linear-gradient(135deg, rgba(20,18,16,0.82) 0%, rgba(20,18,16,0.5) 50%, rgba(43,122,111,0.35) 100%)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-[2] max-w-[1200px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal-left text-white", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-gold mb-5", children: "Support Ferncliff" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-white font-light mb-5", style: { fontSize: "clamp(32px, 4.5vw, 52px)" }, children: [
          "Every gift grows",
          /* @__PURE__ */ jsx("br", {}),
          "something ",
          /* @__PURE__ */ jsx("span", { className: "hw", style: { fontSize: "1.1em" }, children: "extraordinary" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-light max-w-[440px] mb-8", style: { fontSize: "17px", color: "rgba(255,255,255,0.7)" }, children: "Your generosity sends kids to camp, protects 1,200 acres of forest, and powers disaster relief that serves communities across the country." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-9 mb-10", children: [["1,600+", "Campers each summer"], ["90+", "Years of service"], ["1,200", "Acres protected"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-serif text-gold leading-none", style: { fontSize: "40px" }, children: n }),
          /* @__PURE__ */ jsx("div", { className: "text-[12px] font-semibold mt-1", style: { color: "rgba(255,255,255,0.5)" }, children: l })
        ] }, l)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setOpen(true), className: "btn btn-coral", children: "Give Today" }),
          /* @__PURE__ */ jsx(Link, { to: "/giving", className: "btn btn-outline", children: "Join Friends of Ferncliff" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "reveal-right rounded-[28px] p-10 text-white",
          style: {
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)"
          },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-white mb-1.5", style: { fontSize: "28px" }, children: "Make your gift" }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] mb-7", style: { color: "rgba(255,255,255,0.5)" }, children: "Secure · You never leave ferncliff.org" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex gap-1 p-1 rounded-full mb-6",
                style: { background: "rgba(255,255,255,0.06)" },
                children: ["one", "monthly"].map((k) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setFreq(k),
                    className: "flex-1 text-center py-2.5 rounded-full text-[13px] font-bold transition-colors",
                    style: {
                      background: freq === k ? "var(--color-teal)" : "transparent",
                      color: freq === k ? "#fff" : "rgba(255,255,255,0.5)"
                    },
                    children: k === "one" ? "One-Time" : "Monthly"
                  },
                  k
                ))
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2.5 mb-5", children: amounts.map((a) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setAmt(a),
                className: "py-3.5 rounded-[12px] font-serif text-white transition-colors",
                style: {
                  background: amt === a ? "var(--color-teal)" : "rgba(255,255,255,0.08)",
                  border: `1px solid ${amt === a ? "var(--color-teal)" : "rgba(255,255,255,0.12)"}`,
                  fontSize: "24px"
                },
                children: [
                  "$",
                  a.toLocaleString()
                ]
              },
              a
            )) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(true),
                className: "w-full py-4 rounded-full bg-coral text-white font-sans font-bold transition-all hover:-translate-y-0.5",
                style: { fontSize: "16px", boxShadow: "0 4px 20px rgba(201,107,60,0.3)" },
                children: "Donate Now →"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-5 mt-4", children: [
              [/* @__PURE__ */ jsx(Lock, { size: 12 }, "1"), "SSL Encrypted"],
              [/* @__PURE__ */ jsx(ShieldCheck, { size: 12 }, "2"), "PCI Compliant"],
              [/* @__PURE__ */ jsx(EyeSlash, { size: 12 }, "3"), "Private"]
            ].map(([icon, label], i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px]", style: { color: "rgba(255,255,255,0.35)" }, children: [
              icon,
              " ",
              label
            ] }, i)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DonationModal, { open, onClose: () => setOpen(false) })
  ] });
}
function Campaign() {
  const ref = useRef(null);
  const { homepage } = useContentStore();
  const targetPct = Math.round(homepage.campaignRaised / homepage.campaignGoal * 100);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setProgress(targetPct);
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [targetPct]);
  useEffect(() => {
    setProgress(targetPct);
  }, [targetPct]);
  const raisedM = (homepage.campaignRaised / 1e6).toFixed(2);
  const goalM = (homepage.campaignGoal / 1e6).toFixed(1);
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-16", children: /* @__PURE__ */ jsxs("div", { ref, className: "max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row md:items-center gap-12 reveal", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-coral mb-3", children: "Capital Campaign" }),
      /* @__PURE__ */ jsxs("h3", { className: "font-serif mb-2", style: { fontSize: "28px" }, children: [
        "Connect, Inspire, ",
        /* @__PURE__ */ jsx("span", { className: "hw", children: "Transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[15px] text-text-muted max-w-[500px]", children: "Investing in Ferncliff's next chapter — new facilities, expanded programs, and environmental stewardship." }),
      /* @__PURE__ */ jsx("div", { className: "h-3 bg-cream rounded-full overflow-hidden mt-4 mb-2.5", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full transition-all ease-out",
          style: {
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--color-teal), #3da87a)",
            transitionDuration: "2000ms"
          }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[12px] text-text-muted font-semibold", children: [
        /* @__PURE__ */ jsx("span", { children: "$0" }),
        /* @__PURE__ */ jsxs("span", { className: "text-teal font-bold", children: [
          "$",
          raisedM,
          "M raised · ",
          targetPct,
          "% of $",
          goalM,
          "M goal"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "$",
          goalM,
          "M"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "shrink-0 md:text-right text-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/giving#campaign", className: "btn btn-gold-outline block mb-3", children: "Learn About the Campaign" }),
      /* @__PURE__ */ jsxs(Link, { to: "/giving", className: "link-arrow inline-flex", children: [
        "Support This Campaign ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
      ] })
    ] })
  ] }) });
}
const items = [
  { icon: /* @__PURE__ */ jsx(FirstAid, { size: 32 }), title: "Disaster Assistance", desc: "National-level relief hub for Presbyterian Church USA", href: "/outreach#disaster" },
  { icon: /* @__PURE__ */ jsx(UsersThree, { size: 32 }), title: "Mission Teams", desc: "Year-round service for groups of all sizes", href: "/outreach#mission" },
  { icon: /* @__PURE__ */ jsx(Package, { size: 32 }), title: "Sharing The Goods", desc: "Product redistribution at 80-90% discounts", href: "/outreach#sharing" },
  { icon: /* @__PURE__ */ jsx(HandHeart, { size: 32 }), title: "Volunteer", desc: "Join our community of service", href: "/outreach#volunteer" }
];
function Outreach() {
  return /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[120px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-14 reveal", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Outreach & Mission" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-3", style: { fontSize: "clamp(32px, 4vw, 48px)" }, children: [
        "Caring for others,",
        /* @__PURE__ */ jsx("br", {}),
        "close to home & ",
        /* @__PURE__ */ jsx("span", { className: "hw", children: "beyond" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[17px] text-text-muted max-w-[520px] mx-auto", children: "From disaster relief to community food programs, Ferncliff extends its mission far beyond camp season." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: it.href,
        className: "reveal relative bg-white rounded-[20px] pt-9 px-6 pb-7 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group block",
        onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(44,41,38,0.08)",
        onMouseLeave: (e) => e.currentTarget.style.boxShadow = "none",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute top-0 left-0 right-0 h-[3px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms]" }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center text-teal mb-4", children: it.icon }),
          /* @__PURE__ */ jsx("h4", { className: "font-sans text-[16px] font-bold text-dark mb-1.5", children: it.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-relaxed", children: it.desc })
        ]
      },
      it.title
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10 reveal", children: /* @__PURE__ */ jsx(Link, { to: "/outreach", className: "btn btn-teal", children: "Explore Outreach Programs" }) })
  ] }) });
}
function Newsletter() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-teal py-20 text-center", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute pointer-events-none rounded-full",
        style: {
          top: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.04)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-[640px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "hw text-white mb-2", style: { fontSize: "44px", color: "#fff" }, children: "Stay in the loop" }),
      /* @__PURE__ */ jsx("p", { className: "mb-8", style: { color: "rgba(255,255,255,0.65)", fontSize: "16px" }, children: "Camp updates, event announcements, and stories — right to your inbox." }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => e.preventDefault(),
          className: "flex flex-col md:flex-row max-w-[440px] mx-auto mb-4 md:rounded-full md:overflow-hidden gap-3 md:gap-0",
          style: { boxShadow: "0 4px 24px rgba(0,0,0,0.15)" },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Your email address",
                className: "flex-1 px-6 py-4 bg-white text-dark outline-none text-[15px] rounded-full md:rounded-none"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "px-7 py-4 bg-gold text-dark font-bold text-[14px] whitespace-nowrap hover:bg-gold-warm transition-colors rounded-full md:rounded-none",
                children: "Subscribe"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[11px]", style: { color: "rgba(255,255,255,0.35)" }, children: "We respect your privacy. Unsubscribe anytime." }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-5 mt-7", children: [FacebookLogo, InstagramLogo, TwitterLogo].map((Icon, i) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
          style: { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.16)";
            e.currentTarget.style.color = "#fff";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          },
          children: /* @__PURE__ */ jsx(Icon, { size: 18 })
        },
        i
      )) })
    ] })
  ] });
}
function Index() {
  useScrollReveal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Camp, {}),
      /* @__PURE__ */ jsx(ImageBreak, {}),
      /* @__PURE__ */ jsx(Retreats, {}),
      /* @__PURE__ */ jsx(NatureSchool, {}),
      /* @__PURE__ */ jsx(Stories, {}),
      /* @__PURE__ */ jsx(Giving, {}),
      /* @__PURE__ */ jsx(Campaign, {}),
      /* @__PURE__ */ jsx(Outreach, {}),
      /* @__PURE__ */ jsx(Newsletter, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
export {
  Index as component
};
