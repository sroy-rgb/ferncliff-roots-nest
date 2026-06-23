import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { u as useContentStore, L as Link } from "./router-CcwXCmxT.js";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-o_4KanfB.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Compass.es-CgNCjn4Q.js";
import "./Leaf.es-DM0Xn-b5.js";
const stories = [{
  href: "/stories/rebecca-spooner",
  image: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-13-scaled.jpg",
  category: "Support",
  tagVariant: "coral",
  title: "Rev. Rebecca Spooner Barber and the Heart of Mission",
  excerpt: "A story of faith, loss, and new beginnings — and why she gives to Ferncliff."
}, {
  href: "/stories/emelia-lee",
  image: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Nature Pre School",
  tagVariant: "teal",
  title: "What Stayed With Her: Emelia Lee",
  excerpt: "A family's discovery of Arkansas's first forest kindergarten — and what it changed."
}, {
  href: "/stories/anyone-can-make-a-difference",
  image: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Giving",
  tagVariant: "gold",
  title: "A Preschooler Reminds Us That Anyone Can Make a Difference",
  excerpt: "How an eleven-dollar piggy bank quietly changed a giving year."
}];
const filters = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving"];
function StoriesIndex() {
  useScrollReveal();
  const {
    blogPosts
  } = useContentStore();
  const [filter, setFilter] = reactExports.useState("All");
  const tagMap = {
    "Support": "coral",
    "Nature Pre School": "teal",
    "Summer Camp": "teal",
    "Giving": "gold",
    "Outreach": "teal"
  };
  const extraFromStore = blogPosts.filter((p) => p.status === "Published").filter((p) => !stories.some((s) => s.title === p.title)).map((p) => ({
    href: p.slug ?? "/stories",
    image: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: p.category ?? "Support",
    tagVariant: tagMap[p.category] ?? "teal",
    title: p.title,
    excerpt: p.excerpt || "Read this story…"
  }));
  const all = [...stories, ...extraFromStore];
  const visible = filter === "All" ? all : all.filter((s) => s.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: {
      height: "40vh",
      minHeight: 320,
      marginTop: 72
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920", alt: "Stories of impact at Ferncliff", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(180deg, rgba(20,18,16,0.25) 30%, rgba(20,18,16,0.75) 100%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] w-full mx-auto px-8 pb-12 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold mb-3", children: "Stories of Impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
          fontSize: "clamp(36px, 5vw, 56px)",
          color: "#fff"
        }, children: [
          "Lives changed at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hw", children: "Ferncliff" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[600px]", style: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 16
        }, children: "Real stories from the people whose lives have been shaped by Ferncliff." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12 reveal", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-5 py-2 rounded-full text-[13px] font-bold transition-all ${filter === f ? "bg-teal text-white" : "bg-cream text-dark-warm hover:bg-cream-warm"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }, children: visible.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "reveal block bg-white rounded-[20px] overflow-hidden group transition-all duration-[400ms] hover:-translate-y-1", style: {
        boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[220px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { variant: s.tagVariant, children: s.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-[18px] font-bold text-dark mt-2.5 mb-2 leading-snug", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-text-muted leading-relaxed", children: s.excerpt })
        ] })
      ] }, s.href)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomBar, {})
  ] });
}
function Tag({
  variant,
  children
}) {
  const styles = {
    teal: {
      background: "var(--color-teal-light)",
      color: "var(--color-teal)"
    },
    coral: {
      background: "var(--color-coral-light)",
      color: "var(--color-coral)"
    },
    gold: {
      background: "var(--color-gold-light)",
      color: "#96751e"
    }
  }[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-[3px] rounded-full text-[11px] font-bold", style: styles, children });
}
export {
  StoriesIndex as component
};
