import { r as reactExports, T as jsxRuntimeExports } from "./server-DxfjOg74.js";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, T as Table, P as Pill } from "./AdminLayout-BgfvEmVW.js";
import { n } from "./Plus.es-DY0xbxcO.js";
import { n as n$1 } from "./Trash.es-CUEs9b4I.js";
import { n as n$2 } from "./X.es-D-he6W1E.js";
import { u as useContentStore } from "./router-C6JYablr.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Buildings.es-Cna1nS-x.js";
import "./Campfire.es-CyVf36GU.js";
import "./UsersThree.es-DBg7kxs0.js";
import "./Leaf.es-C9gFgTaj.js";
import "./House.es-AaiP2I_B.js";
const cats = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving", "Outreach"];
function BlogPage() {
  const {
    blogPosts,
    setBlogStatus,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  } = useContentStore();
  const [cat, setCat] = reactExports.useState("All");
  const [dateFilter, setDateFilter] = reactExports.useState("all");
  const [editing, setEditing] = reactExports.useState(null);
  const [creating, setCreating] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    let list = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);
    if (dateFilter !== "all") {
      const cutoff = Date.now() - parseInt(dateFilter) * 864e5;
      list = list.filter((p) => new Date(p.date).getTime() >= cutoff);
    }
    return list;
  }, [blogPosts, cat, dateFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminLayout, { title: "Blog & Stories", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Blog & Stories", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setCreating(true), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 14 }),
      " New Post"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
      cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-3 h-8 rounded-full text-[12px] font-medium transition ${cat === c ? "bg-[#2B7A6F] text-white" : "bg-[#FFFDF9] border border-[#E8E2D8] text-[#6b665d] hover:border-[#2B7A6F]"}`, children: c }, c)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: dateFilter, onChange: (e) => setDateFilter(e.target.value), className: "ml-auto h-8 px-2 rounded-md border border-[#E8E2D8] bg-white text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Any date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30", children: "Last 30 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "90", children: "Last 90 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "365", children: "Last year" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { headers: ["Title", "Category", "Author", "Status", "Published Date", "Actions"], rows: filtered.map((p) => [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.title }), /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: "teal", children: p.category }), p.author, /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { color: p.status === "Published" ? "green" : "yellow", children: p.status }), p.date, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-[12px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(p), className: "text-[#2B7A6F] hover:underline", children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBlogStatus(p.id, p.status === "Published" ? "Draft" : "Published"), className: "text-[#2B7A6F] hover:underline", children: p.status === "Published" ? "Unpublish" : "Publish" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        if (confirm(`Delete "${p.title}"?`)) deleteBlogPost(p.id);
      }, className: "text-[#DC2626] hover:underline inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(n$1, { size: 12 }),
        " Delete"
      ] }),
      p.slug && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.slug + "?fromAdmin=1", className: "text-[#6b665d] hover:underline", children: "View" })
    ] })]) }) }),
    (editing || creating) && /* @__PURE__ */ jsxRuntimeExports.jsx(PostEditor, { post: editing, onClose: () => {
      setEditing(null);
      setCreating(false);
    }, onSave: (data) => {
      if (editing) updateBlogPost(editing.id, data);
      else addBlogPost({
        ...data,
        status: data.status ?? "Draft"
      });
      setEditing(null);
      setCreating(false);
    } })
  ] });
}
function PostEditor({
  post,
  onClose,
  onSave
}) {
  const [title, setTitle] = reactExports.useState(post?.title ?? "");
  const [category, setCategory] = reactExports.useState(post?.category ?? "Support");
  const [author, setAuthor] = reactExports.useState(post?.author ?? "Kimberly Graves");
  const [status, setStatus] = reactExports.useState(post?.status ?? "Draft");
  const [excerpt, setExcerpt] = reactExports.useState(post?.excerpt ?? "");
  const [slug, setSlug] = reactExports.useState(post?.slug ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/40", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-0 right-0 w-full md:w-[560px] bg-[#FAF8F5] overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[#6b665d]", children: post ? "Edit Post" : "New Post" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$2, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: cats.filter((c) => c !== "All").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c }, c)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Published" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Author", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: author, onChange: (e) => setAuthor(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Slug (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: slug, onChange: (e) => setSlug(e.target.value), placeholder: "/stories/my-post", className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px] font-mono" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Excerpt", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: excerpt, onChange: (e) => setExcerpt(e.target.value), rows: 5, className: "w-full p-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => title && onSave({
          title,
          category,
          author,
          status,
          excerpt,
          slug: slug || void 0
        }), className: "flex-1 justify-center", children: post ? "Update Post" : "Create Post" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-1.5", children: label }),
    children
  ] });
}
export {
  BlogPage as component
};
