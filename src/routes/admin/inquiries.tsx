import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Pill } from "@/components/admin/AdminLayout";
import { useContentStore, type Inquiry } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/inquiries")({
  component: InquiriesPage,
  head: () => ({ meta: [{ title: "Inquiries — Ferncliff CMS" }] }),
});

function InquiriesPage() {
  const { inquiries, setInquiryStatus } = useContentStore();
  const [tab, setTab] = useState<"retreat" | "camp" | "general">("retreat");

  return (
    <AdminLayout title="Inquiries">
      <PageHeader title="Inquiries & Form Submissions" />
      <div className="flex gap-1 mb-6 border-b border-[#E8E2D8]">
        {[
          { key: "retreat", label: "Retreat Inquiries", count: inquiries.length },
          { key: "camp", label: "Camp Questions", count: 5 },
          { key: "general", label: "General", count: 4 },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as any)}
            className={`px-4 py-2 text-[13px] font-medium border-b-2 -mb-px flex items-center gap-2 ${tab === t.key ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`}
          >
            {t.label} <span className="px-1.5 rounded-full bg-[#C49A3C] text-white text-[10px]">{t.count}</span>
          </button>
        ))}
      </div>

      {tab === "retreat" && (
        <div className="space-y-3">
          {inquiries.map((i) => (
            <InquiryCard key={i.id} inquiry={i} onStatus={(s) => setInquiryStatus(i.id, s)} />
          ))}
        </div>
      )}
      {tab !== "retreat" && (
        <Card className="p-10 text-center text-[#8a857c] text-[13px]">No items to display.</Card>
      )}
    </AdminLayout>
  );
}

function InquiryCard({ inquiry: i, onStatus }: { inquiry: Inquiry; onStatus: (s: Inquiry["status"]) => void }) {
  const label = i.status === "new" ? "New" : i.status === "in-progress" ? "In Progress" : "Responded";
  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <div className="font-semibold">{i.org}</div>
        <div className="text-[11px] text-[#8a857c]">{i.received}</div>
      </div>
      <div className="text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2">
        <div><div className="text-[#a39d92]">Contact</div>{i.contact}</div>
        <div><div className="text-[#a39d92]">Email</div>{i.email}</div>
        <div><div className="text-[#a39d92]">Size · Dates</div>{i.guests} · {i.dates}</div>
        <div><div className="text-[#a39d92]">Type</div>{i.type}</div>
      </div>
      {i.message && <div className="text-[13px] text-[#3a3631] mb-4 line-clamp-2">{i.message}</div>}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <select
          value={i.status}
          onChange={(e) => onStatus(e.target.value as Inquiry["status"])}
          className="h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]"
        >
          <option value="new">New</option><option value="in-progress">In Progress</option><option value="responded">Responded</option>
        </select>
        <Pill color={i.status === "new" ? "yellow" : i.status === "in-progress" ? "gold" : "green"}>{label}</Pill>
        <div className="flex gap-2 ml-auto">
          <Button>Respond</Button>
          <Button variant="outline">Mark Complete</Button>
        </div>
      </div>
    </Card>
  );
}
