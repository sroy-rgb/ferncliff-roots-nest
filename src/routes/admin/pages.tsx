import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus, MagnifyingGlass, X } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/pages")({
  component: PagesPage,
  head: () => ({ meta: [{ title: "Pages — Ferncliff CMS" }] }),
});

type Page = { id: string; title: string; slug: string; status: "Published" | "Draft" | "Archived"; modified: string };
const initialPages: Page[] = [
  { id: "home", title: "Homepage", slug: "/", status: "Published", modified: "May 20, 2026" },
  { id: "camp", title: "Camp Overview", slug: "/camp", status: "Published", modified: "May 18, 2026" },
  { id: "overnight", title: "Overnight Camp", slug: "/camp/overnight", status: "Published", modified: "May 15, 2026" },
  { id: "day", title: "Day Camp", slug: "/camp/day", status: "Published", modified: "May 15, 2026" },
  { id: "first", title: "First-Time Campers", slug: "/camp/first-time", status: "Published", modified: "May 22, 2026" },
  { id: "retreats", title: "Retreats & Conferences", slug: "/retreats", status: "Published", modified: "May 12, 2026" },
  { id: "nature", title: "Nature School", slug: "/nature-school", status: "Published", modified: "May 10, 2026" },
  { id: "outreach", title: "Outreach", slug: "/outreach", status: "Published", modified: "May 8, 2026" },
  { id: "giving", title: "Giving", slug: "/giving", status: "Published", modified: "May 20, 2026" },
  { id: "about", title: "About", slug: "/about", status: "Draft", modified: "May 24, 2026" },
];

function PagesPage() {
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<Page | null>(null);

  const filtered = initialPages.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.slug.includes(q));

  return (
    <AdminLayout title="Pages">
      <PageHeader
        title="Pages"
        action={<Button><Plus size={14} /> New Page</Button>}
      />

      <Card>
        <div className="p-4 border-b border-[#E5E5E5] flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pages..."
              className="w-full h-9 pl-9 pr-3 rounded-md border border-[#E5E5E5] text-[13px] focus:outline-none focus:border-[#2B7A6F]"
            />
          </div>
          <div className="text-[12px] text-[#888]">Showing 1–{filtered.length} of {initialPages.length}</div>
        </div>
        <Table
          headers={["Page Title", "URL Slug", "Status", "Last Modified", "Actions"]}
          rows={filtered.map((p) => [
            <span className="font-medium">{p.title}</span>,
            <code className="text-[12px] text-[#666]">{p.slug}</code>,
            <Pill color={p.status === "Published" ? "green" : p.status === "Draft" ? "yellow" : "grey"}>{p.status}</Pill>,
            p.modified,
            <div className="flex gap-3 text-[12px]">
              <button onClick={() => setEditing(p)} className="text-[#2B7A6F] hover:underline">Edit</button>
              <a href={p.slug} className="text-[#666] hover:underline">View</a>
            </div>,
          ])}
        />
      </Card>

      {editing && <EditDrawer page={editing} onClose={() => setEditing(null)} />}
    </AdminLayout>
  );
}

function EditDrawer({ page, onClose }: { page: Page; onClose: () => void }) {
  const [seoOpen, setSeoOpen] = useState(true);
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div className="absolute inset-y-0 right-0 w-full md:w-[90%] lg:w-[1100px] bg-[#F8F8F8] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="h-14 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="text-[13px] text-[#666]">Editing Page</div>
          <button onClick={onClose} className="text-[#666] hover:text-[#1A1A1A]"><X size={20} /></button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 p-6">
          <div className="space-y-4">
            <input defaultValue={page.title} className="w-full text-2xl font-semibold border-none focus:outline-none bg-transparent" />
            <input defaultValue={page.slug} className="w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px] text-[#666]" />
            <Card>
              <div className="flex items-center gap-1 border-b border-[#E5E5E5] px-3 py-2 text-[12px] text-[#666]">
                <button className="px-2 py-1 hover:bg-[#F0F0F0] rounded font-bold">B</button>
                <button className="px-2 py-1 hover:bg-[#F0F0F0] rounded italic">I</button>
                <select className="px-2 py-1 bg-transparent border border-[#E5E5E5] rounded text-[12px]">
                  <option>Heading 1</option><option>Heading 2</option><option>Paragraph</option>
                </select>
                <button className="px-2 py-1 hover:bg-[#F0F0F0] rounded">Link</button>
                <button className="px-2 py-1 hover:bg-[#F0F0F0] rounded">Image</button>
                <button className="px-2 py-1 hover:bg-[#F0F0F0] rounded">Quote</button>
              </div>
              <textarea defaultValue={`# ${page.title}\n\nWelcome to ${page.title}. Edit your content here...`} className="w-full min-h-[280px] p-4 text-[14px] font-mono focus:outline-none resize-none" />
            </Card>
            <div className="space-y-2">
              {["Hero block", "Content block", "Call to action"].map((b) => (
                <Card key={b} className="p-4 flex items-center gap-3">
                  <div className="text-[#ccc] cursor-grab">⋮⋮</div>
                  <div className="flex-1 text-[13px]">{b}</div>
                  <button className="text-[12px] text-[#888] hover:text-[#2B7A6F]">Edit</button>
                </Card>
              ))}
            </div>
          </div>
          <aside className="space-y-4">
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#888] mb-2">Status</div>
              <select defaultValue={page.status} className="w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]">
                <option>Draft</option><option>Published</option><option>Archived</option>
              </select>
            </Card>
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#888] mb-2">Featured Image</div>
              <div className="border-2 border-dashed border-[#E5E5E5] rounded-md py-10 text-center text-[12px] text-[#888]">Click to upload</div>
            </Card>
            <Card className="p-4">
              <button onClick={() => setSeoOpen((v) => !v)} className="w-full flex items-center justify-between text-[12px] font-semibold uppercase tracking-wider text-[#888]">
                SEO <span>{seoOpen ? "−" : "+"}</span>
              </button>
              {seoOpen && (
                <div className="mt-3 space-y-2">
                  <input placeholder="Meta Title" className="w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]" />
                  <textarea placeholder="Meta Description" className="w-full min-h-[80px] p-2 rounded-md border border-[#E5E5E5] text-[13px]" />
                </div>
              )}
            </Card>
            <Card className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#888] mb-2">Categories</div>
              <input placeholder="Add categories..." className="w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]" />
            </Card>
            <div className="space-y-2">
              <Button className="w-full justify-center">Update Page</Button>
              <Button variant="outline" className="w-full justify-center">Preview</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
