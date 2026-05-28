import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Pill } from "@/components/admin/AdminLayout";
import { Plus, MagnifyingGlass, X, Trash } from "@phosphor-icons/react";
import { useContentStore, type PageEntry } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/pages")({
  component: PagesPage,
  head: () => ({ meta: [{ title: "Pages — Ferncliff CMS" }] }),
});

type EditingState = { mode: "edit"; page: PageEntry } | { mode: "create" } | null;

function PagesPage() {
  const { pages, deletePage } = useContentStore();
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<EditingState>(null);

  const filtered = useMemo(
    () => pages.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.slug.includes(q)),
    [pages, q],
  );
  const tops = filtered.filter((p) => !p.parent);
  const childrenOf = (id: string) => filtered.filter((p) => p.parent === id);

  return (
    <AdminLayout title="Pages">
      <PageHeader
        title="Pages"
        action={
          <Button onClick={() => setEditing({ mode: "create" })}>
            <Plus size={14} /> New Page
          </Button>
        }
      />

      <Card>
        <div className="p-4 border-b border-[#E8E2D8] flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a857c]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pages..."
              className="w-full h-9 pl-9 pr-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px] focus:outline-none focus:border-[#2B7A6F]"
            />
          </div>
          <div className="text-[12px] text-[#8a857c]">Showing {filtered.length} of {pages.length}</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-[#8a857c] border-b border-[#E8E2D8]">
                {["Page Title", "URL Slug", "Status", "Last Modified", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium text-[11px] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tops.map((p) => {
                const kids = childrenOf(p.id);
                return (
                  <PageRows
                    key={p.id}
                    top={p}
                    kids={kids}
                    onEdit={(pg) => setEditing({ mode: "edit", page: pg })}
                    onDelete={(id) => {
                      if (confirm("Delete this page? This cannot be undone.")) deletePage(id);
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {editing && <EditDrawer state={editing} onClose={() => setEditing(null)} />}
    </AdminLayout>
  );
}

function PageRows({ top, kids, onEdit, onDelete }: { top: PageEntry; kids: PageEntry[]; onEdit: (p: PageEntry) => void; onDelete: (id: string) => void }) {
  return (
    <>
      <Row p={top} depth={0} onEdit={onEdit} onDelete={onDelete} />
      {kids.map((c, i) => (
        <Row key={c.id} p={c} depth={1} onEdit={onEdit} onDelete={onDelete} isLast={i === kids.length - 1} />
      ))}
    </>
  );
}

function Row({ p, depth, onEdit, onDelete, isLast }: { p: PageEntry; depth: number; onEdit: (p: PageEntry) => void; onDelete: (id: string) => void; isLast?: boolean }) {
  return (
    <tr className="border-b border-[#F0EBE3] hover:bg-[#FAF6EE]">
      <td className="px-4 py-3">
        <div className="flex items-center" style={{ paddingLeft: depth * 24 }}>
          {depth > 0 && (
            <span className="relative inline-block w-4 h-5 mr-2 text-[#C49A3C]/40">
              <span className="absolute left-0 top-0 bottom-1/2 w-px bg-[#C49A3C]/40" style={isLast ? { bottom: "50%" } : { bottom: "-50%" }} />
              <span className="absolute left-0 top-1/2 w-3 h-px bg-[#C49A3C]/40" />
            </span>
          )}
          <span className="font-medium">{p.title}</span>
        </div>
      </td>
      <td className="px-4 py-3"><code className="text-[12px] text-[#6b665d]">{p.slug}</code></td>
      <td className="px-4 py-3"><Pill color={p.status === "Published" ? "green" : p.status === "Draft" ? "yellow" : "grey"}>{p.status}</Pill></td>
      <td className="px-4 py-3">{p.modified}</td>
      <td className="px-4 py-3">
        <div className="flex gap-3 text-[12px] items-center">
          <button onClick={() => onEdit(p)} className="text-[#2B7A6F] hover:underline">Edit</button>
          <a href={p.slug + "?fromAdmin=1"} target="_blank" rel="noreferrer" className="text-[#6b665d] hover:underline">View</a>
          <button onClick={() => onDelete(p.id)} className="text-[#a8341f] hover:underline inline-flex items-center gap-1">
            <Trash size={12} /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

function EditDrawer({ state, onClose }: { state: NonNullable<EditingState>; onClose: () => void }) {
  const { homepage, updateHomepage, updatePage, addPage, pages } = useContentStore();
  const isCreate = state.mode === "create";
  const page = isCreate ? null : state.page;
  const isHome = page?.id === "home";

  const [title, setTitle] = useState(page?.title ?? "");
  const [slug, setSlug] = useState(page?.slug ?? "/");
  const [status, setStatus] = useState<PageEntry["status"]>(page?.status ?? "Draft");
  const [parent, setParent] = useState<string>(page?.parent ?? "");
  const [body, setBody] = useState(page?.body ?? (page ? `# ${page.title}\n\nWelcome to ${page.title}. Edit your content here...` : ""));
  const [seoTitle, setSeoTitle] = useState(page?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = useState(page?.seoDescription ?? "");
  const [tagline, setTagline] = useState(homepage.heroTagline);
  const [raised, setRaised] = useState(String(homepage.campaignRaised));

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
        parent: parent || undefined,
        body,
        seoTitle: seoTitle || undefined,
        seoDescription: seoDescription || undefined,
      });
    } else if (page) {
      updatePage(page.id, {
        title: title.trim(),
        slug: normalizedSlug,
        status,
        parent: parent || undefined,
        body,
        seoTitle: seoTitle || undefined,
        seoDescription: seoDescription || undefined,
      });
      if (isHome) {
        updateHomepage({ heroTagline: tagline, campaignRaised: Number(raised) || 0 });
      }
    }
    onClose();
  };

  const topLevel = pages.filter((p) => !p.parent && p.id !== page?.id);

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div className="absolute inset-y-0 right-0 w-full md:w-[90%] lg:w-[1100px] bg-[#FAF8F5] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="text-[13px] text-[#6b665d]">{isCreate ? "New Page" : "Editing Page"}</div>
          <button onClick={onClose} className="text-[#6b665d] hover:text-[#2c2926]"><X size={20} /></button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 p-6">
          <div className="space-y-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Page title"
              className="w-full text-2xl border-none focus:outline-none bg-transparent"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            />
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#8a857c] mb-1">URL Slug</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="/about"
                className="w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px] text-[#6b665d]"
              />
            </div>

            {isHome && (
              <Card className="p-4 space-y-3">
                <div className="text-[11px] uppercase tracking-wider text-[#8a857c]">Hero Tagline (live on homepage)</div>
                <input
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]"
                />
                <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mt-2">Campaign Raised ($)</div>
                <input
                  value={raised}
                  onChange={(e) => setRaised(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[14px]"
                />
                <div className="text-[11px] text-[#8a857c]">Updates flow to the public homepage Hero and Campaign sections.</div>
              </Card>
            )}

            <Card>
              <div className="flex items-center gap-1 border-b border-[#E8E2D8] px-3 py-2 text-[12px] text-[#6b665d]">
                <span className="text-[11px] uppercase tracking-wider text-[#8a857c]">Page Content (Markdown)</span>
              </div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="# Page heading&#10;&#10;Write content here..."
                className="w-full min-h-[280px] p-4 text-[14px] font-mono focus:outline-none resize-y bg-[#FFFDF9]"
              />
            </Card>

            <Card className="p-4 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-[#8a857c]">SEO</div>
              <input
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder="SEO title (under 60 chars)"
                className="w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]"
              />
              <textarea
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="Meta description (under 160 chars)"
                className="w-full min-h-[70px] p-3 rounded-md border border-[#E8E2D8] bg-white text-[13px] resize-none"
              />
            </Card>
          </div>
          <aside className="space-y-4">
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mb-2">Status</div>
              <select value={status} onChange={(e) => setStatus(e.target.value as PageEntry["status"])} className="w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px]">
                <option>Draft</option><option>Published</option><option>Archived</option>
              </select>
            </Card>
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mb-2">Parent Page</div>
              <select value={parent} onChange={(e) => setParent(e.target.value)} className="w-full h-9 px-3 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[13px]">
                <option value="">— None (top level) —</option>
                {topLevel.map((p) => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </Card>
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mb-2">Featured Image</div>
              <div className="border-2 border-dashed border-[#E8E2D8] rounded-md py-10 text-center text-[12px] text-[#8a857c]">Click to upload</div>
            </Card>
            <div className="space-y-2">
              <Button onClick={save} className="w-full justify-center">{isCreate ? "Create Page" : "Update Page"}</Button>
              <Button variant="outline" onClick={onClose} className="w-full justify-center">Cancel</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
