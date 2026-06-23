import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { FacebookLogo, TwitterLogo, Link as Link$1 } from "@phosphor-icons/react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
function StoryPage({
  title,
  heroImage,
  category,
  date,
  readTime,
  authorName,
  authorTitle,
  authorInitials,
  sections,
  children,
  relatedStories = []
}) {
  useScrollReveal();
  const articleRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight;
      const scrolled = Math.max(0, Math.min(total, -rect.top));
      setBarWidth(Math.min(100, scrolled / total * 100));
      setSidebarVisible(rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.3);
      let idx = 0;
      sections.forEach((s, i) => {
        const sec = document.getElementById(s.id);
        if (sec && sec.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
      });
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("div", { className: "reading-bar", children: /* @__PURE__ */ jsx("div", { className: "reading-bar-fill", style: { width: `${barWidth}%` } }) }),
    /* @__PURE__ */ jsx("div", { className: `reading-progress ${sidebarVisible ? "visible" : ""}`, children: sections.map((s, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => scrollTo(s.id),
        className: `rp-item ${i === activeIdx ? "active" : ""} ${i < activeIdx ? "passed" : ""}`,
        type: "button",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "rp-dot-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "rp-dot" }),
            i < sections.length - 1 && /* @__PURE__ */ jsx("div", { className: "rp-line" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rp-label", children: s.label })
        ]
      },
      s.id
    )) }),
    /* @__PURE__ */ jsxs("section", { className: "article-hero", children: [
      /* @__PURE__ */ jsx("img", { src: heroImage, alt: title }),
      /* @__PURE__ */ jsx("div", { className: "article-hero-content", children: /* @__PURE__ */ jsxs("div", { className: "container-n", children: [
        /* @__PURE__ */ jsxs("div", { className: "breadcrumb", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx(Link, { to: "/stories", children: "Stories of Impact" }),
          /* @__PURE__ */ jsx("span", { children: "›" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "article-meta", children: [
          /* @__PURE__ */ jsx("span", { className: "article-tag", children: category }),
          /* @__PURE__ */ jsxs("span", { className: "article-date", children: [
            date,
            " · ",
            readTime,
            " read"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsxs("div", { className: "article-author", children: [
          /* @__PURE__ */ jsx("div", { className: "article-author-avatar", children: authorInitials }),
          /* @__PURE__ */ jsxs("div", { className: "article-author-info", children: [
            /* @__PURE__ */ jsx("span", { children: authorName }),
            /* @__PURE__ */ jsx("small", { children: authorTitle })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("article", { ref: articleRef, className: "article-body reveal", children: [
      children,
      /* @__PURE__ */ jsxs("div", { className: "share-bar", children: [
        /* @__PURE__ */ jsx("span", { children: "Share" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "share-btn", "aria-label": "Share on Facebook", children: /* @__PURE__ */ jsx(FacebookLogo, { size: 18 }) }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "share-btn", "aria-label": "Share on Twitter", children: /* @__PURE__ */ jsx(TwitterLogo, { size: 18 }) }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "share-btn", "aria-label": "Copy link", children: /* @__PURE__ */ jsx(Link$1, { size: 18 }) })
      ] })
    ] }),
    relatedStories.length > 0 && /* @__PURE__ */ jsxs("section", { className: "py-20 bg-light", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-center mb-12", style: { fontSize: 32 }, children: [
        "More Stories of ",
        /* @__PURE__ */ jsx("span", { className: "hw", children: "Impact" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 max-w-[1200px] mx-auto px-8", style: { gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }, children: relatedStories.map((r, i) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: r.href,
          className: "block bg-white rounded-[20px] overflow-hidden group transition-all duration-[400ms] hover:-translate-y-1",
          style: { boxShadow: "0 2px 16px rgba(44,41,38,0.06)" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-[200px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: r.image, alt: r.title, className: "w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx(RelTag, { variant: r.tagVariant ?? "teal", children: r.category }),
              /* @__PURE__ */ jsx("h3", { className: "font-sans text-[16px] font-bold text-dark mt-2.5 mb-1.5 leading-snug", children: r.title }),
              /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted", children: r.excerpt })
            ] })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function RelTag({ variant, children }) {
  const styles = {
    teal: { background: "var(--color-teal-light)", color: "var(--color-teal)" },
    coral: { background: "var(--color-coral-light)", color: "var(--color-coral)" },
    gold: { background: "var(--color-gold-light)", color: "#96751e" }
  }[variant];
  return /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-[3px] rounded-full text-[11px] font-bold", style: styles, children });
}
function Anchor({ id }) {
  return /* @__PURE__ */ jsx("div", { id });
}
function PullQuote({ children, centered = false }) {
  return /* @__PURE__ */ jsx("div", { className: `pull-quote ${centered ? "centered" : ""}`, children: /* @__PURE__ */ jsx("p", { children }) });
}
function InlineQuote({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "inline-quote", children: /* @__PURE__ */ jsx("p", { children }) });
}
function FloatRight({ src, alt, caption }) {
  return /* @__PURE__ */ jsxs("div", { className: "float-right", children: [
    /* @__PURE__ */ jsx("img", { src, alt }),
    caption && /* @__PURE__ */ jsx("div", { className: "caption", children: caption })
  ] });
}
function ImageGrid({
  cols = 3,
  images,
  caption,
  portrait = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: `img-grid cols-${cols}`, children: [
    images.map((im, i) => /* @__PURE__ */ jsx("div", { className: `img-grid-item ${portrait ? "portrait" : ""}`, children: /* @__PURE__ */ jsx("img", { src: im.src, alt: im.alt }) }, i)),
    caption && /* @__PURE__ */ jsx("div", { className: "img-grid-caption", children: caption })
  ] });
}
function ArticleDivider() {
  return /* @__PURE__ */ jsx("div", { className: "article-divider" });
}
function ArticleCTA({
  title,
  accent,
  description,
  buttonLabel = "Support Ferncliff",
  buttonHref = "/#giving"
}) {
  return /* @__PURE__ */ jsxs("div", { className: "article-cta", children: [
    /* @__PURE__ */ jsxs("h3", { children: [
      title,
      " ",
      accent && /* @__PURE__ */ jsx("span", { className: "hw", children: accent })
    ] }),
    /* @__PURE__ */ jsx("p", { children: description }),
    /* @__PURE__ */ jsx("a", { href: buttonHref, className: "btn btn-teal", children: buttonLabel })
  ] });
}
export {
  Anchor as A,
  FloatRight as F,
  InlineQuote as I,
  PullQuote as P,
  StoryPage as S,
  ImageGrid as a,
  ArticleDivider as b,
  ArticleCTA as c
};
