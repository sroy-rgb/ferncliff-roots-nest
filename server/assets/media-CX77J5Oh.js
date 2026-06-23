import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card } from "./AdminLayout-CKgi6IRm.js";
import { Plus, CloudArrowUp, SquaresFour, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const images = ["https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg", "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg", "https://images.pexels.com/photos/45170/kids-girl-pencil-drawing-45170.jpeg", "https://images.pexels.com/photos/8612918/pexels-photo-8612918.jpeg", "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg", "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg", "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg", "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg", "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg", "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg", "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg", "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg"];
function MediaPage() {
  const [selected, setSelected] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [toast, setToast] = useState(null);
  const upload = () => {
    setShowUpload(false);
    setTimeout(() => {
      setToast("Upload complete");
      setTimeout(() => setToast(null), 3e3);
    }, 800);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Media Library", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Media Library", action: /* @__PURE__ */ jsxs(Button, { onClick: () => setShowUpload(true), children: [
      /* @__PURE__ */ jsx(Plus, { size: 14 }),
      " Upload"
    ] }) }),
    showUpload && /* @__PURE__ */ jsxs("div", { onClick: upload, className: "bg-white border-2 border-dashed border-[#2B7A6F]/40 rounded-xl p-6 mb-4 text-center cursor-pointer", children: [
      /* @__PURE__ */ jsx(CloudArrowUp, { size: 42, className: "mx-auto text-[#2B7A6F]" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-[14px] font-medium", children: "Drag files here or click to browse" }),
      /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#888]", children: "PNG, JPG, GIF up to 10MB" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-4 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("button", { className: "p-1.5 rounded bg-[#2B7A6F]/10 text-[#2B7A6F]", children: /* @__PURE__ */ jsx(SquaresFour, { size: 16 }) }),
      /* @__PURE__ */ jsx("button", { className: "p-1.5 rounded text-[#888]", children: /* @__PURE__ */ jsx(List, { size: 16 }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1 max-w-xs", children: [
        /* @__PURE__ */ jsx(MagnifyingGlass, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" }),
        /* @__PURE__ */ jsx("input", { placeholder: "Search media...", className: "w-full h-9 pl-9 pr-3 rounded-md border border-[#E5E5E5] text-[13px]" })
      ] }),
      /* @__PURE__ */ jsxs("select", { className: "h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]", children: [
        /* @__PURE__ */ jsx("option", { children: "All" }),
        /* @__PURE__ */ jsx("option", { children: "Images" }),
        /* @__PURE__ */ jsx("option", { children: "Documents" }),
        /* @__PURE__ */ jsx("option", { children: "Videos" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: images.map((src, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setSelected(i), className: `group relative aspect-square rounded-lg overflow-hidden border-2 ${selected === i ? "border-[#2B7A6F]" : "border-transparent"}`, children: [
      /* @__PURE__ */ jsx("img", { src, alt: `Media ${i + 1}`, className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-2 text-white text-[11px] opacity-0 group-hover:opacity-100", children: [
        "image-",
        i + 1,
        ".jpg"
      ] })
    ] }, i)) }),
    selected !== null && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-black/30", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-0 w-full sm:w-[400px] bg-white p-5 overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[13px] font-semibold", children: "Image Details" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSelected(null), children: /* @__PURE__ */ jsx(X, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsx("img", { src: images[selected], alt: "", className: "w-full rounded-md mb-4" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-[12px]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#888]", children: "Filename" }),
          /* @__PURE__ */ jsxs("div", { children: [
            "image-",
            selected + 1,
            ".jpg"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[#888]", children: "Size" }),
            /* @__PURE__ */ jsx("div", { children: "1.2 MB" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[#888]", children: "Dimensions" }),
            /* @__PURE__ */ jsx("div", { children: "2400 × 1600" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#888]", children: "Uploaded" }),
          /* @__PURE__ */ jsx("div", { children: "May 22, 2026" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#888] mb-1", children: "Alt Text" }),
          /* @__PURE__ */ jsx("input", { placeholder: "Describe this image...", className: "w-full h-9 px-3 rounded-md border border-[#E5E5E5]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#888] mb-1", children: "Caption" }),
          /* @__PURE__ */ jsx("input", { className: "w-full h-9 px-3 rounded-md border border-[#E5E5E5]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#888] mb-1", children: "URL" }),
          /* @__PURE__ */ jsx("input", { readOnly: true, value: images[selected], className: "w-full h-9 px-2 rounded-md border border-[#E5E5E5] text-[11px] bg-[#F8F8F8]" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "w-full mt-3 h-9 rounded-md border border-red-300 text-red-600 text-[13px] hover:bg-red-50", children: "Delete" })
      ] })
    ] }) }),
    toast && /* @__PURE__ */ jsx("div", { className: "fixed top-20 right-6 z-[60] bg-green-600 text-white px-4 py-2 rounded-md shadow-lg text-[13px]", children: toast })
  ] });
}
export {
  MediaPage as component
};
