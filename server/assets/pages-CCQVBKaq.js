import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, P as Pill } from "./AdminLayout-BgfvEmVW.js";
import { f } from "./MagnifyingGlass.es-Lqzy9oti.js";
import { n } from "./Plus.es-DY0xbxcO.js";
import { n as n$2 } from "./Trash.es-CUEs9b4I.js";
import { n as n$1 } from "./X.es-D-he6W1E.js";
import { u as useContentStore } from "./router-C6JYablr.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-Cna1nS-x.js";
import "./Campfire.es-CyVf36GU.js";
import "./UsersThree.es-DBg7kxs0.js";
import "./Leaf.es-C9gFgTaj.js";
import "./House.es-AaiP2I_B.js";
function PagesPage() {
  const {
    pages,
    deletePage
  } = useContentStore();
  const [q, setQ] = reactExports.useState("");
  const [editing, setEditing] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => pages.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.slug.includes(q)), [pages, q]);
  const tops = filtered.filter((p) => !p.parent);
  const childrenOf = (id) => filtered.filter((p) => p.parent === id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Pages", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Pages", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setEditing({
      mode: "create"
    }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 14 }),
      " New Page"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-[#E8E2D8] flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(f, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8a857c]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search pages...", className: "w-full h-9 pl-9 pr-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px] focus:outline-none focus:border-[#2B7A6F]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-[#8a857c]", children: [
          "Showing ",
          filtered.length,
          " of ",
          pages.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-left text-[#8a857c] border-b border-[#E8E2D8]", children: ["Page Title", "URL Slug", "Status", "Last Modified", "Actions"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium text-[11px] uppercase tracking-wider", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tops.map((p) => {
          const kids = childrenOf(p.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRows, { top: p, kids, onEdit: (pg) => setEditing({
            mode: "edit",
            page: pg
          }), onDelete: (id) => {
            if (confirm("Delete this page? This cannot be undone.")) deletePage(id);
          } }, p.id);
        }) })
      ] }) })
    ] }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(EditDrawer, { state: editing, onClose: () => setEditing(null) })
  ] });
}
function PageRows({
  top,
  kids,
  onEdit,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { p: top, depth: 0, onEdit, onDelete }),
    kids.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { p: c, depth: 1, onEdit, onDelete, isLast: i === kids.length - 1 }, c.id))
  ] });
}
function Row({
  p,
  depth,
  onEdit,
  onDelete,
  isLast
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[#F0EBE3] hover:bg-[#FAF6EE]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", style: {
      paddingLeft: depth * 24
    }, children: [
      depth > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block w-4 h-5 mr-2 text-[#C49A3C]/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-0 bottom-1/2 w-px bg-[#C49A3C]/40", style: isLast ? {
          bottom: "50%"
        } : {
          bottom: "-50%"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1/2 w-3 h-px bg-[#C49A3C]/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[12px] text-[#6b665d]", children: p.slug }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: p.status === "Published" ? "green" : p.status === "Draft" ? "yellow" : "grey", children: p.status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: p.modified }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-[12px] items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onEdit(p), className: "text-[#2B7A6F] hover:underline", children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.slug + "?fromAdmin=1", target: "_blank", rel: "noreferrer", className: "text-[#6b665d] hover:underline", children: "View" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onDelete(p.id), className: "text-[#a8341f] hover:underline inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(n$2, { size: 12 }),
        " Delete"
      ] })
    ] }) })
  ] });
}
function EditDrawer({
  state,
  onClose
}) {
  const {
    homepage,
    updateHomepage,
    updatePage,
    addPage,
    pages
  } = useContentStore();
  const isCreate = state.mode === "create";
  const page = isCreate ? null : state.page;
  const isHome = page?.id === "home";
  const [title, setTitle] = reactExports.useState(page?.title ?? "");
  const [slug, setSlug] = reactExports.useState(page?.slug ?? "/");
  const [status, setStatus] = reactExports.useState(page?.status ?? "Draft");
  const [parent, setParent] = reactExports.useState(page?.parent ?? "");
  const [body, setBody] = reactExports.useState(page?.body ?? (page ? `# ${page.title}

Welcome to ${page.title}. Edit your content here...` : ""));
  const [seoTitle, setSeoTitle] = reactExports.useState(page?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = reactExports.useState(page?.seoDescription ?? "");
  const [tagline, setTagline] = reactExports.useState(homepage.heroTagline);
  const [raised, setRaised] = reactExports.useState(String(homepage.campaignRaised));
  const save = () => {
    if (!title.trim()) {
      alert("Page title is required.");
      return;
    }
    const normalizedSlug = slug.startsWith("/") ? slug : "/" + slug;
    if (isCreate) {
      addPage({
        title: title.trim(),
        slug: normalizedSlug,
        status,
        parent: parent || void 0,
        body,
        seoTitle: seoTitle || void 0,
        seoDescription: seoDescription || void 0
      });
    } else if (page) {
      updatePage(page.id, {
        title: title.trim(),
        slug: normalizedSlug,
        status,
        parent: parent || void 0,
        body,
        seoTitle: seoTitle || void 0,
        seoDescription: seoDescription || void 0
      });
      if (isHome) {
        updateHomepage({
          heroTagline: tagline,
          campaignRaised: Number(raised) || 0
        });
      }
    }
    onClose();
  };
  const topLevel = pages.filter((p) => !p.parent && p.id !== page?.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/40", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-0 right-0 w-full md:w-[90%] lg:w-[1100px] bg-[#FAF8F5] overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center justify-between px-6 sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[#6b665d]", children: isCreate ? "New Page" : "Editing Page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-[#6b665d] hover:text-[#2c2926]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$1, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Page title", className: "w-full text-2xl border-none focus:outline-none bg-transparent", style: {
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 500
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] uppercase tracking-wider text-[#8a857c] mb-1", children: "URL Slug" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: slug, onChange: (e) => setSlug(e.target.value), placeholder: "/about", className: "w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px] text-[#6b665d]" })
        ] }),
        isHome && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c]", children: "Hero Tagline (live on homepage)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: tagline, onChange: (e) => setTagline(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mt-2", children: "Campaign Raised ($)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: raised, onChange: (e) => setRaised(e.target.value.replace(/[^0-9]/g, "")), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#8a857c]", children: "Updates flow to the public homepage Hero and Campaign sections." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 border-b border-[#E8E2D8] px-3 py-2 text-[12px] text-[#6b665d]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wider text-[#8a857c]", children: "Page Content (Markdown)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: body, onChange: (e) => setBody(e.target.value), placeholder: "# Page heading\n\nWrite content here...", className: "w-full min-h-[280px] p-4 text-[14px] font-mono focus:outline-none resize-y bg-[#FFFDF9]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c]", children: "SEO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: seoTitle, onChange: (e) => setSeoTitle(e.target.value), placeholder: "SEO title (under 60 chars)", className: "w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: seoDescription, onChange: (e) => setSeoDescription(e.target.value), placeholder: "Meta description (under 160 chars)", className: "w-full min-h-[70px] p-3 rounded-md border border-[#E8E2D8] bg-white text-[13px] resize-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-2", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Draft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Published" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Archived" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-2", children: "Parent Page" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: parent, onChange: (e) => setParent(e.target.value), className: "w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— None (top level) —" }),
            topLevel.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.title }, p.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-2", children: "Featured Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-2 border-dashed border-[#E8E2D8] rounded-md py-10 text-center text-[12px] text-[#8a857c]", children: "Click to upload" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, className: "w-full justify-center", children: isCreate ? "Create Page" : "Update Page" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, className: "w-full justify-center", children: "Cancel" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  PagesPage as component
};
