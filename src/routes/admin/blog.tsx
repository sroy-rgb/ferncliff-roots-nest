import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Blog — Ferncliff CMS" }] }),
});

const cats = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving", "Outreach"];
const posts = [
  { title: "Rev. Rebecca Spooner Barber and the Heart of Mission", cat: "Support", author: "Kimberly Graves", status: "Published", date: "Jan 21, 2026" },
  { title: "What Stayed With Her: Emelia Lee", cat: "Nature Pre School", author: "Kimberly Graves", status: "Published", date: "Feb 8, 2026" },
  { title: "A Preschooler Reminds Us Anyone Can Make a Difference", cat: "Giving", author: "Kimberly Graves", status: "Published", date: "Mar 15, 2026" },
  { title: "Summer 2026: What's New at Ferncliff", cat: "Summer Camp", author: "Kimberly Graves", status: "Draft", date: "May 24, 2026" },
];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.cat === cat);
  return (
    <AdminLayout title="Blog & Stories">
      <PageHeader title="Blog & Stories" action={<Button><Plus size={14} /> New Post</Button>} />
      <div className="flex flex-wrap gap-2 mb-4">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 h-8 rounded-full text-[12px] font-medium transition ${
              cat === c ? "bg-[#2B7A6F] text-white" : "bg-white border border-[#E5E5E5] text-[#666] hover:border-[#2B7A6F]"
            }`}
          >{c}</button>
        ))}
      </div>
      <Card>
        <Table
          headers={["Title", "Category", "Author", "Status", "Published Date", "Actions"]}
          rows={filtered.map((p) => [
            <span className="font-medium">{p.title}</span>,
            <Pill color="teal">{p.cat}</Pill>,
            p.author,
            <Pill color={p.status === "Published" ? "green" : "yellow"}>{p.status}</Pill>,
            p.date,
            <div className="flex gap-3 text-[12px]"><button className="text-[#2B7A6F] hover:underline">Edit</button><button className="text-[#666] hover:underline">View</button></div>,
          ])}
        />
      </Card>
    </AdminLayout>
  );
}
