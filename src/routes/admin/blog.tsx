import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Blog — Ferncliff CMS" }] }),
});

const cats = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving", "Outreach"];

function BlogPage() {
  const { blogPosts, setBlogStatus } = useContentStore();
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <AdminLayout title="Blog & Stories">
      <PageHeader title="Blog & Stories" action={<Button><Plus size={14} /> New Post</Button>} />
      <div className="flex flex-wrap gap-2 mb-4">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 h-8 rounded-full text-[12px] font-medium transition ${
              cat === c ? "bg-[#2B7A6F] text-white" : "bg-[#FFFDF9] border border-[#E8E2D8] text-[#6b665d] hover:border-[#2B7A6F]"
            }`}
          >{c}</button>
        ))}
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
              <button
                onClick={() => setBlogStatus(p.id, p.status === "Published" ? "Draft" : "Published")}
                className="text-[#2B7A6F] hover:underline"
              >{p.status === "Published" ? "Unpublish" : "Publish"}</button>
              {p.slug && <a href={p.slug + "?fromAdmin=1"} className="text-[#6b665d] hover:underline">View</a>}
            </div>,
          ])}
        />
      </Card>
    </AdminLayout>
  );
}
