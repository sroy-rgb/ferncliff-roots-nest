import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, c } from "./AdminLayout-DtRp_F75.js";
import { p } from "./router-CcwXCmxT.js";
import { f } from "./MagnifyingGlass.es-6AzPPtV6.js";
import { n as n$1 } from "./Plus.es-CkGihgcG.js";
import { n as n$2 } from "./X.es-wrRY5dVW.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-CcXU0ouX.js";
import "./Campfire.es-DWlYIawg.js";
import "./UsersThree.es-hrxF0Ge9.js";
import "./Leaf.es-DM0Xn-b5.js";
import "./House.es-D7jUb5Ym.js";
const e$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M196.49,151.51a12,12,0,0,1-17,17L168,157v51a12,12,0,0,1-24,0V157l-11.51,11.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220h28a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,132.6,21.29,12,12,0,1,0,22.8,7.51A92.06,92.06,0,0,0,160,36Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M188.24,164.24a6,6,0,0,1-8.48,0L158,142.49V208a6,6,0,0,1-12,0V142.49l-21.76,21.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32A6,6,0,0,1,188.24,164.24ZM160,42A86.1,86.1,0,0,0,82.43,90.88,62,62,0,1,0,72,214h40a6,6,0,0,0,0-12H72a50,50,0,0,1,0-100,50.68,50.68,0,0,1,5.91.36A85.54,85.54,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,103.6,67.85,6,6,0,0,0,4.8,11A86,86,0,0,0,160,42Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M186.83,162.83a4,4,0,0,1-5.66,0L156,137.66V208a4,4,0,0,1-8,0V137.66l-25.17,25.17a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32A4,4,0,0,1,186.83,162.83ZM160,44A84.09,84.09,0,0,0,83.61,93.13,60,60,0,1,0,72,212h40a4,4,0,0,0,0-8H72a52,52,0,1,1,8.57-103.27A83.45,83.45,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,106.4,69.68,4,4,0,0,0,1.6,7.66,3.92,3.92,0,0,0,1.6-.33A84,84,0,0,0,160,44Z" }))
  ]
]);
const e = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z" }))
  ]
]);
const r$1 = reactExports.forwardRef((e2, t) => /* @__PURE__ */ reactExports.createElement(p, { ref: t, ...e2, weights: e$1 }));
r$1.displayName = "CloudArrowUpIcon";
const s = r$1;
const r = reactExports.forwardRef((e$12, a) => /* @__PURE__ */ reactExports.createElement(p, { ref: a, ...e$12, weights: e }));
r.displayName = "SquaresFourIcon";
const n = r;
const images = ["https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg", "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg", "https://images.pexels.com/photos/45170/kids-girl-pencil-drawing-45170.jpeg", "https://images.pexels.com/photos/8612918/pexels-photo-8612918.jpeg", "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg", "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg", "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg", "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg", "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg", "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg", "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg", "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg"];
function MediaPage() {
  const [selected, setSelected] = reactExports.useState(null);
  const [showUpload, setShowUpload] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(null);
  const upload = () => {
    setShowUpload(false);
    setTimeout(() => {
      setToast("Upload complete");
      setTimeout(() => setToast(null), 3e3);
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Media Library", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Media Library", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowUpload(true), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(n$1, { size: 14 }),
      " Upload"
    ] }) }),
    showUpload && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: upload, className: "bg-white border-2 border-dashed border-[#2B7A6F]/40 rounded-xl p-6 mb-4 text-center cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: 42, className: "mx-auto text-[#2B7A6F]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[14px] font-medium", children: "Drag files here or click to browse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-[#888]", children: "PNG, JPG, GIF up to 10MB" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded bg-[#2B7A6F]/10 text-[#2B7A6F]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded text-[#888]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search media...", className: "w-full h-9 pl-9 pr-3 rounded-md border border-[#E5E5E5] text-[13px]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Images" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Videos" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(i), className: `group relative aspect-square rounded-lg overflow-hidden border-2 ${selected === i ? "border-[#2B7A6F]" : "border-transparent"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Media ${i + 1}`, className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-2 text-white text-[11px] opacity-0 group-hover:opacity-100", children: [
        "image-",
        i + 1,
        ".jpg"
      ] })
    ] }, i)) }),
    selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/30", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-0 right-0 w-full sm:w-[400px] bg-white p-5 overflow-y-auto", onClick: (e2) => e2.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Image Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$2, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: images[selected], alt: "", className: "w-full rounded-md mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888]", children: "Filename" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "image-",
            selected + 1,
            ".jpg"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888]", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "1.2 MB" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888]", children: "Dimensions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "2400 × 1600" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888]", children: "Uploaded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "May 22, 2026" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] mb-1", children: "Alt Text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Describe this image...", className: "w-full h-9 px-3 rounded-md border border-[#E5E5E5]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] mb-1", children: "Caption" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full h-9 px-3 rounded-md border border-[#E5E5E5]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] mb-1", children: "URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { readOnly: true, value: images[selected], className: "w-full h-9 px-2 rounded-md border border-[#E5E5E5] text-[11px] bg-[#F8F8F8]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full mt-3 h-9 rounded-md border border-red-300 text-red-600 text-[13px] hover:bg-red-50", children: "Delete" })
      ] })
    ] }) }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-20 right-6 z-[60] bg-green-600 text-white px-4 py-2 rounded-md shadow-lg text-[13px]", children: toast })
  ] });
}
export {
  MediaPage as component
};
