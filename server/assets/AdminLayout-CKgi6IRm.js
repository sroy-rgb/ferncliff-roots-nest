import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRouterState, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, House, Files, Article, Images, Campfire, Buildings, Leaf, HandHeart, Heart, Envelope, ChatsCircle, UsersThree, UserGear, ChartLine, Sparkle, Gear, SignOut, List, Globe } from "@phosphor-icons/react";
import { a as useAdminAuth } from "./router-DASrCSie.js";
const sections = [
  { label: "Content", items: [
    { to: "/admin", label: "Dashboard", Icon: House, exact: true },
    { to: "/admin/pages", label: "Pages", Icon: Files },
    { to: "/admin/blog", label: "Blog / Stories", Icon: Article },
    { to: "/admin/media", label: "Media Library", Icon: Images }
  ] },
  { label: "Programs", items: [
    { to: "/admin/camp", label: "Camp Sessions", Icon: Campfire },
    { to: "/admin/retreats", label: "Retreats & Bookings", Icon: Buildings },
    { to: "/admin/nature", label: "Nature School", Icon: Leaf },
    { to: "/admin/outreach", label: "Outreach", Icon: HandHeart }
  ] },
  { label: "Engagement", items: [
    { to: "/admin/giving", label: "Donations & Giving", Icon: Heart },
    { to: "/admin/subscribers", label: "Email Subscribers", Icon: Envelope },
    { to: "/admin/inquiries", label: "Inquiries & Forms", Icon: ChatsCircle },
    { to: "/admin/volunteers", label: "Volunteer Requests", Icon: UsersThree }
  ] },
  { label: "System", items: [
    { to: "/admin/users", label: "Users & Roles", Icon: UserGear },
    { to: "/admin/seo", label: "SEO & Analytics", Icon: ChartLine },
    { to: "/admin/roadmap", label: "Phase 2 Roadmap", Icon: Sparkle },
    { to: "/admin/settings", label: "Settings", Icon: Gear }
  ] }
];
const SERIF = "'Cormorant Garamond', Georgia, serif";
function findCrumb(path) {
  for (const s of sections) {
    for (const i of s.items) {
      if (i.exact ? path === i.to : path === i.to || path.startsWith(i.to + "/")) {
        return { section: s.label, page: i.label };
      }
    }
  }
  return { page: "Admin" };
}
function AdminLayout({ children, title }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useNavigate();
  const { logout } = useAdminAuth();
  const crumb = findCrumb(path);
  const pageTitle = title ?? crumb.page;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FAF8F5] text-[#2c2926]", style: { fontFamily: "'DM Sans', system-ui, sans-serif" }, children: [
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed inset-y-0 left-0 z-40 w-[260px] bg-[#2c2926] text-white flex flex-col transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-5 border-b border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-md bg-[#2B7A6F] flex items-center justify-center text-white text-base font-semibold", style: { fontFamily: SERIF }, children: "F" }),
              /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[15px]", style: { fontFamily: SERIF, fontWeight: 500 }, children: "Ferncliff" }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/50", children: "CMS" }),
                /* @__PURE__ */ jsx("a", { href: "https://xtsworld.com", target: "_blank", rel: "noopener noreferrer", className: "text-[9px] text-white/35 hover:text-white/60 transition", children: "Powered by XTS" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "md:hidden text-white/70", onClick: () => setMobileOpen(false), "aria-label": "Close menu", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto py-4 px-3 space-y-5", children: sections.map((s) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40", children: s.label }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-0.5", children: s.items.map((i) => {
              const active = i.exact ? path === i.to : path === i.to || path.startsWith(i.to + "/");
              const isRoadmap = i.to === "/admin/roadmap";
              const activeColor = isRoadmap ? "#A78BFA" : "#7DD3C4";
              const activeBorder = isRoadmap ? "#6C3AED" : "#2B7A6F";
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: i.to,
                  onClick: () => setMobileOpen(false),
                  className: "group flex items-center gap-3 pl-3 pr-3 py-2 rounded-md text-[13px] border-l-[3px] transition-colors",
                  style: active ? { borderLeftColor: activeBorder, background: `${activeBorder}26`, color: activeColor } : { borderLeftColor: "transparent", color: "rgba(255,255,255,0.7)" },
                  children: [
                    /* @__PURE__ */ jsx(i.Icon, { size: 18, weight: "regular" }),
                    /* @__PURE__ */ jsx("span", { children: i.label })
                  ]
                }
              ) }, i.to);
            }) })
          ] }, s.label)) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-[#2B7A6F] flex items-center justify-center text-white text-xs font-semibold", children: "KG" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium truncate", children: "Kimberly Graves" }),
                /* @__PURE__ */ jsx("div", { className: "text-[11px] text-white/50", children: "Admin" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  logout();
                  nav({ to: "/admin/login" });
                },
                className: "mt-3 flex items-center gap-2 text-[12px] text-white/60 hover:text-white",
                children: [
                  /* @__PURE__ */ jsx(SignOut, { size: 14 }),
                  " Logout"
                ]
              }
            )
          ] })
        ]
      }
    ),
    mobileOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-30 bg-black/50 md:hidden", onClick: () => setMobileOpen(false) }),
    /* @__PURE__ */ jsxs("div", { className: "md:pl-[260px]", children: [
      /* @__PURE__ */ jsxs("header", { className: "h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center px-4 md:px-6 gap-3 sticky top-0 z-20", children: [
        /* @__PURE__ */ jsx("button", { className: "md:hidden", onClick: () => setMobileOpen(true), "aria-label": "Open menu", children: /* @__PURE__ */ jsx(List, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-[#8a857c]", children: [
            /* @__PURE__ */ jsx(Link, { to: "/admin", className: "hover:text-[#2B7A6F]", children: "Dashboard" }),
            crumb.section && /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              /* @__PURE__ */ jsx("span", { className: "mx-1", children: "›" }),
              " ",
              /* @__PURE__ */ jsx("span", { children: crumb.section })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "mx-1", children: "›" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#2c2926]", children: pageTitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[15px] leading-tight", style: { fontFamily: SERIF, fontWeight: 500 }, children: pageTitle })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/?fromAdmin=1",
            className: "hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-full border border-[#2B7A6F] text-[#2B7A6F] text-[12px] font-medium hover:bg-[#2B7A6F] hover:text-white transition",
            children: [
              /* @__PURE__ */ jsx(Globe, { size: 14 }),
              " View Site"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2B7A6F] flex items-center justify-center text-white text-xs font-semibold", children: "KG" })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "p-4 md:p-8 max-w-[1400px]", children })
    ] })
  ] });
}
function Card({ children, className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `bg-[#FFFDF9] border border-[#E8E2D8] rounded-xl shadow-[0_1px_2px_rgba(44,41,38,0.04)] ${className}`, children });
}
function StatCard({ value, label, sub, accent = "teal", arrow, to }) {
  const color = accent === "teal" ? "#2B7A6F" : "#C49A3C";
  const inner = /* @__PURE__ */ jsxs(Card, { className: `p-5 h-full ${to ? "transition-all hover:shadow-[0_4px_16px_rgba(44,41,38,0.08)] hover:-translate-y-0.5 hover:border-[#2B7A6F]/40 cursor-pointer group" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c]", children: label }),
      to && /* @__PURE__ */ jsx("span", { className: "text-[#8a857c] group-hover:text-[#2B7A6F] transition-colors text-[14px]", children: "→" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 flex items-baseline gap-2", children: /* @__PURE__ */ jsx("div", { className: "text-[34px] leading-none", style: { color, fontFamily: SERIF, fontWeight: 500 }, children: value }) }),
    sub && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-[12px] text-[#6b665d] flex items-center gap-1", children: [
      arrow && /* @__PURE__ */ jsx("span", { className: arrow === "up" ? "text-[#2B7A6F]" : "text-[#DC2626]", children: arrow === "up" ? "↑" : "↓" }),
      sub
    ] })
  ] });
  if (to) return /* @__PURE__ */ jsx(Link, { to, className: "block", children: inner });
  return inner;
}
function Pill({ children, color = "grey" }) {
  const map = {
    green: "bg-[#2B7A6F]/12 text-[#236158]",
    yellow: "bg-[#C49A3C]/15 text-[#8a6a26]",
    grey: "bg-[#E8E2D8] text-[#6b665d]",
    red: "bg-[#DC2626]/10 text-[#DC2626]",
    teal: "bg-[#2B7A6F]/10 text-[#2B7A6F]",
    gold: "bg-[#C49A3C]/15 text-[#8a6a26]",
    purple: "bg-[#6C3AED]/10 text-[#6C3AED]"
  };
  return /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${map[color]}`, children });
}
function PageHeader({ title, action }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-[32px] tracking-tight text-[#2c2926]", style: { fontFamily: SERIF, fontWeight: 500 }, children: title }),
    action
  ] });
}
function SectionHeading({ children, className = "" }) {
  return /* @__PURE__ */ jsx("h2", { className: `text-[20px] text-[#2c2926] ${className}`, style: { fontFamily: SERIF, fontWeight: 500 }, children });
}
function Button({ children, variant = "primary", onClick, className = "", as = "button", href, type = "button" }) {
  const styles = {
    primary: "bg-[#2B7A6F] text-white hover:bg-[#236158]",
    outline: "border border-[#C49A3C] text-[#8a6a26] hover:bg-[#C49A3C]/10",
    purple: "border border-[#6C3AED] text-[#6C3AED] hover:bg-[#6C3AED]/5"
  }[variant];
  const cls = `inline-flex items-center gap-2 px-4 h-9 rounded-md text-[13px] font-medium transition ${styles} ${className}`;
  if (as === "a") return /* @__PURE__ */ jsx("a", { href, className: cls, children });
  return /* @__PURE__ */ jsx("button", { type, onClick, className: cls, children });
}
function Table({ headers, rows }) {
  const [sort, setSort] = useState(null);
  const sorted = sort ? [...rows].sort((a, b) => {
    const av = String(a[sort.i] ?? "");
    const bv = String(b[sort.i] ?? "");
    return av.localeCompare(bv) * sort.dir;
  }) : rows;
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-[13px]", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "text-left text-[#8a857c] border-b border-[#E8E2D8]", children: headers.map((h, i) => /* @__PURE__ */ jsxs(
      "th",
      {
        onClick: () => setSort((s) => s?.i === i ? { i, dir: s.dir * -1 } : { i, dir: 1 }),
        className: "px-4 py-3 font-medium text-[11px] uppercase tracking-wider cursor-pointer select-none hover:text-[#2B7A6F]",
        children: [
          h,
          " ",
          sort?.i === i ? sort.dir === 1 ? "▲" : "▼" : ""
        ]
      },
      h
    )) }) }),
    /* @__PURE__ */ jsx("tbody", { children: sorted.map((r, i) => /* @__PURE__ */ jsx("tr", { className: "border-b border-[#F0EBE3] hover:bg-[#FAF6EE] transition-colors", children: r.map((c, j) => /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-middle", children: c }, j)) }, i)) })
  ] }) });
}
export {
  AdminLayout as A,
  Button as B,
  Card as C,
  Pill as P,
  StatCard as S,
  Table as T,
  SectionHeading as a,
  PageHeader as b
};
