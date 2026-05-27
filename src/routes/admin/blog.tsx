import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus, X, Trash } from "@phosphor-icons/react";
import { useContentStore, type BlogPost } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Blog — Ferncliff CMS" }] }),
});

const cats = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving", "Outreach"];

function BlogPage() {
  const { blogPosts, setBlogStatus, addBlogPost, updateBlogPost, deleteBlogPost } = useContentStore();
  const [cat, setCat] = useState("All");
  const [dateFilter, setDateFilter] = useState("all"); // all | 30 | 90 | 365
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);

  const filtered = useMemo(() => {
    let list = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);
    if (dateFilter !== "all") {
      const cutoff = Date.now() - parseInt(dateFilter) * 86_400_000;
      list = list.filter((p) => new Date(p.date).getTime() >= cutoff);
    }
    return list;
  }, [blogPosts, cat, dateFilter]);

  return (
    <AdminLayout title="Blog & Stories">
      <PageHeader title="Blog & Stories" action={<Button onClick={() => setCreating(true)}><Plus size={14} /> New Post</Button>} />
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 h-8 rounded-full text-[12px] font-medium transition ${
              cat === c ? "bg-[#2B7A6F] text-white" : "bg-[#FFFDF9] border border-[#E8E2D8] text-[#6b665d] hover:border-[#2B7A6F]"
            }`}
          >{c}</button>
        ))}
        <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="ml-auto h-8 px-2 rounded-md border border-[#E8E2D8] bg-white text-[12px]">
          <option value="all">Any date</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>
      <Card>
        <Table
          headers={["Title", "Category", "Author", "Status", "Published Date", "Actions"]}
          rows={filtered.map((p) => [
            <span className="font-medium">{p.title}</span>,
            <Pill color="teal">{p.category}</Pill>,
            p.author,
            <Pill color={p.status === "Published" ? "green" : "yellow"}>{p.status}</Pill>,
            p.date,
            <div className="flex gap-3 text-[12px]">
              <button onClick={() => setEditing(p)} className="text-[#2B7A6F] hover:underline">Edit</button>
              <button
                onClick={() => setBlogStatus(p.id, p.status === "Published" ? "Draft" : "Published")}
                className="text-[#2B7A6F] hover:underline"
              >{p.status === "Published" ? "Unpublish" : "Publish"}</button>
              <button onClick={() => { if (confirm(`Delete "${p.title}"?`)) deleteBlogPost(p.id); }} className="text-[#DC2626] hover:underline inline-flex items-center gap-1"><Trash size={12} /> Delete</button>
              {p.slug && <a href={p.slug + "?fromAdmin=1"} className="text-[#6b665d] hover:underline">View</a>}
            </div>,
          ])}
        />
      </Card>

      {(editing || creating) && (
        <PostEditor
          post={editing}
          onClose={() => { setEditing(null); setCreating(false); }}
          onSave={(data) => {
            if (editing) updateBlogPost(editing.id, data);
            else addBlogPost({ ...data, status: data.status ?? "Draft" } as Omit<BlogPost, "id" | "date">);
            setEditing(null);
            setCreating(false);
          }}
        />
      )}
    </AdminLayout>
  );
}

function PostEditor({ post, onClose, onSave }: { post: BlogPost | null; onClose: () => void; onSave: (data: Partial<BlogPost>) => void }) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [category, setCategory] = useState(post?.category ?? "Support");
  const [author, setAuthor] = useState(post?.author ?? "Kimberly Graves");
  const [status, setStatus] = useState<BlogPost["status"]>(post?.status ?? "Draft");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div className="absolute inset-y-0 right-0 w-full md:w-[560px] bg-[#FAF8F5] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center justify-between px-6">
          <div className="text-[13px] text-[#6b665d]">{post ? "Edit Post" : "New Post"}</div>
          <button onClick={onClose}><X size={20} /></button>
        </div>
        <div className="p-6 space-y-4">
          <Field label="Title"><input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Category">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
                {cats.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Status">
              <select value={status} onChange={(e) => setStatus(e.target.value as BlogPost["status"])} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
                <option>Draft</option><option>Published</option>
              </select>
            </Field>
          </div>
          <Field label="Author"><input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" /></Field>
          <Field label="Slug (optional)"><input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="/stories/my-post" className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px] font-mono" /></Field>
          <Field label="Excerpt"><textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={5} className="w-full p-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]" /></Field>
          <div className="flex gap-2 pt-2">
            <Button onClick={() => title && onSave({ title, category, author, status, excerpt, slug: slug || undefined })} className="flex-1 justify-center">{post ? "Update Post" : "Create Post"}</Button>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mb-1.5">{label}</div>
      {children}
    </label>
  );
}
