import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { C as CampLayout } from "./CampLayout-DhmiFiUD.js";
import { C as CampHero, H as HeroEm } from "./CampHero-d49gmH41.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-LPdAYD1l.js";
import { s } from "./router-C6JYablr.js";
import { s as s$1 } from "./ArrowRight.es-wytKn4sR.js";
import { n } from "./Eye.es-D52ZUTuY.js";
import { n as n$1 } from "./X.es-D-he6W1E.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./MobileBottomBar-BE_2in2-.js";
import "./Compass.es-DN97I6yk.js";
import "./Leaf.es-C9gFgTaj.js";
const images = [{
  src: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=900",
  span: true
}, {
  src: "https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=900",
  span: true
}, {
  src: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=900",
  span: true
}, {
  src: "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/5638751/pexels-photo-5638751.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/6838582/pexels-photo-6838582.jpeg?auto=compress&cs=tinysrgb&w=900"
}, {
  src: "https://images.pexels.com/photos/8034607/pexels-photo-8034607.jpeg?auto=compress&cs=tinysrgb&w=900"
}];
function GalleryPage() {
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const [fade, setFade] = reactExports.useState(true);
  const touchStartX = reactExports.useRef(null);
  const close = reactExports.useCallback(() => setOpenIdx(null), []);
  const navigate = reactExports.useCallback((dir) => {
    setFade(false);
    setTimeout(() => {
      setOpenIdx((i) => i === null ? null : (i + dir + images.length) % images.length);
      setFade(true);
    }, 150);
  }, []);
  reactExports.useEffect(() => {
    if (openIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampHero, { image: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Gallery", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "See Ferncliff through our campers' ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroEm, { children: "eyes" })
    ] }), subtitle: "A look at the lakes, cabins, faces, and moments that make a week here.", height: "50vh" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-[80px] pb-4 bg-offwhite", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionIntro, { eyebrow: "Gallery", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "See Ferncliff through our campers' ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hw, { children: "eyes" })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] md:py-[80px] bg-offwhite", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1300px] mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", style: {
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
      gridAutoRows: "200px"
    }, children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenIdx(i), className: "relative rounded-[16px] overflow-hidden group cursor-pointer", style: {
      gridRow: img.span ? "span 2" : void 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: "", className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-12 h-12 rounded-full bg-white/95 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 20, weight: "regular", className: "text-teal" }) }) })
    ] }, i)) }) }) }),
    openIdx !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[2000] flex items-center justify-center animate-fade-in", style: {
      background: "rgba(0,0,0,0.95)",
      backdropFilter: "blur(8px)"
    }, onClick: close, onTouchStart: (e) => {
      touchStartX.current = e.touches[0].clientX;
    }, onTouchEnd: (e) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
      touchStartX.current = null;
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        close();
      }, className: "absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white transition", style: {
        background: "rgba(255,255,255,0)"
      }, onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)", onMouseLeave: (e) => e.currentTarget.style.background = "rgba(255,255,255,0)", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$1, { size: 24, weight: "bold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        navigate(-1);
      }, className: "absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition", onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)", onMouseLeave: (e) => e.currentTarget.style.background = "rgba(255,255,255,0)", "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: 24, weight: "bold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: images[openIdx].src, alt: "", onClick: (e) => e.stopPropagation(), className: "rounded-[12px] transition-opacity duration-300", style: {
        maxHeight: "85vh",
        maxWidth: "90vw",
        objectFit: "contain",
        opacity: fade ? 1 : 0,
        animation: fade ? "scaleIn 400ms ease-out" : void 0
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        navigate(1);
      }, className: "absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition", onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)", onMouseLeave: (e) => e.currentTarget.style.background = "rgba(255,255,255,0)", "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s$1, { size: 24, weight: "bold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-0 right-0 text-center text-white/70 text-[14px]", children: [
        openIdx + 1,
        " / ",
        images.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }` })
    ] })
  ] });
}
export {
  GalleryPage as component
};
