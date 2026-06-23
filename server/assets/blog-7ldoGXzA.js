import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { A as AdminLayout, b as PageHeader, B as Button, C as Card, T as Table, P as Pill } from "./AdminLayout-CKgi6IRm.js";
import { Plus, Trash, X } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const cats = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving", "Outreach"];
function BlogPage() {
  const {
    blogPosts,
    setBlogStatus,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  } = useContentStore();
  const [cat, setCat] = useState("All");
  const [dateFilter, setDateFilter] = useState("all");
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);
  const filtered = useMemo(() => {
    let list = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);
    if (dateFilter !== "all") {
      const cutoff = Date.now() - parseInt(dateFilter) * 864e5;
      list = list.filter((p) => new Date(p.date).getTime() >= cutoff);
    }
    return list;
  }, [blogPosts, cat, dateFilter]);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Blog & Stories", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Blog & Stories", action: /* @__PURE__ */ jsxs(Button, { onClick: () => setCreating(true), children: [
      /* @__PURE__ */ jsx(Plus, { size: 14 }),
      " New Post"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
      cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `px-3 h-8 rounded-full text-[12px] font-medium transition ${cat === c ? "bg-[#2B7A6F] text-white" : "bg-[#FFFDF9] border border-[#E8E2D8] text-[#6b665d] hover:border-[#2B7A6F]"}`, children: c }, c)),
      /* @__PURE__ */ jsxs("select", { value: dateFilter, onChange: (e) => setDateFilter(e.target.value), className: "ml-auto h-8 px-2 rounded-md border border-[#E8E2D8] bg-white text-[12px]", children: [
        /* @__PURE__ */ jsx("option", { value: "all", children: "Any date" }),
        /* @__PURE__ */ jsx("option", { value: "30", children: "Last 30 days" }),
        /* @__PURE__ */ jsx("option", { value: "90", children: "Last 90 days" }),
        /* @__PURE__ */ jsx("option", { value: "365", children: "Last year" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Title", "Category", "Author", "Status", "Published Date", "Actions"], rows: filtered.map((p) => [/* @__PURE__ */ jsx("span", { className: "font-medium", children: p.title }), /* @__PURE__ */ jsx(Pill, { color: "teal", children: p.category }), p.author, /* @__PURE__ */ jsx(Pill, { color: p.status === "Published" ? "green" : "yellow", children: p.status }), p.date, /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-[12px]", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setEditing(p), className: "text-[#2B7A6F] hover:underline", children: "Edit" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setBlogStatus(p.id, p.status === "Published" ? "Draft" : "Published"), className: "text-[#2B7A6F] hover:underline", children: p.status === "Published" ? "Unpublish" : "Publish" }),
      /* @__PURE__ */ jsxs("button", { onClick: () => {
        if (confirm(`Delete "${p.title}"?`)) deleteBlogPost(p.id);
      }, className: "text-[#DC2626] hover:underline inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Trash, { size: 12 }),
        " Delete"
      ] }),
      p.slug && /* @__PURE__ */ jsx("a", { href: p.slug + "?fromAdmin=1", className: "text-[#6b665d] hover:underline", children: "View" })
    ] })]) }) }),
    (editing || creating) && /* @__PURE__ */ jsx(PostEditor, { post: editing, onClose: () => {
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
  const [title, setTitle] = useState(post?.title ?? "");
  const [category, setCategory] = useState(post?.category ?? "Support");
  const [author, setAuthor] = useState(post?.author ?? "Kimberly Graves");
  const [status, setStatus] = useState(post?.status ?? "Draft");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-black/40", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-0 w-full md:w-[560px] bg-[#FAF8F5] overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { className: "h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center justify-between px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[13px] text-[#6b665d]", children: post ? "Edit Post" : "New Post" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsx(Field, { label: "Title", children: /* @__PURE__ */ jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(Field, { label: "Category", children: /* @__PURE__ */ jsx("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: cats.filter((c) => c !== "All").map((c) => /* @__PURE__ */ jsx("option", { children: c }, c)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
          /* @__PURE__ */ jsx("option", { children: "Draft" }),
          /* @__PURE__ */ jsx("option", { children: "Published" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Field, { label: "Author", children: /* @__PURE__ */ jsx("input", { value: author, onChange: (e) => setAuthor(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Slug (optional)", children: /* @__PURE__ */ jsx("input", { value: slug, onChange: (e) => setSlug(e.target.value), placeholder: "/stories/my-post", className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px] font-mono" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Excerpt", children: /* @__PURE__ */ jsx("textarea", { value: excerpt, onChange: (e) => setExcerpt(e.target.value), rows: 5, className: "w-full p-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => title && onSave({
          title,
          category,
          author,
          status,
          excerpt,
          slug: slug || void 0
        }), className: "flex-1 justify-center", children: post ? "Update Post" : "Create Post" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-1.5", children: label }),
    children
  ] });
}
export {
  BlogPage as component
};
