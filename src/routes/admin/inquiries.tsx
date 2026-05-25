import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Pill } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/inquiries")({
  component: InquiriesPage,
  head: () => ({ meta: [{ title: "Inquiries — Ferncliff CMS" }] }),
});

const retreatInquiries = [
  { org: "First Presbyterian Church, Little Rock", date: "May 24, 2026", name: "Pastor John Smith", email: "john@firstpres.org", size: 45, dates: "Oct 2026", type: "Church Retreat", msg: "Looking for a full-weekend retreat for our adult congregation. Need accommodations for 45 with meeting space for worship and breakout sessions.", status: "New" },
  { org: "Conway Youth Group", date: "May 22, 2026", name: "Allison Reed", email: "areed@conwayyouth.org", size: 28, dates: "Sep 2026", type: "Youth Retreat", msg: "Annual fall retreat — high school students. Outdoor activities, campfire programs.", status: "In Progress" },
  { org: "Arkansas Women's Leadership", date: "May 20, 2026", name: "Patricia Hayes", email: "patricia@awl.org", size: 65, dates: "Nov 2026", type: "Corporate", msg: "Three-day leadership intensive. Need dining for all meals plus large meeting room.", status: "New" },
];

function InquiriesPage() {
  const [tab, setTab] = useState<"retreat" | "camp" | "general">("retreat");
  const [statuses, setStatuses] = useState(retreatInquiries.map((i) => i.status));

  return (
    <AdminLayout title="Inquiries">
      <PageHeader title="Inquiries & Form Submissions" />
      <div className="flex gap-1 mb-6 border-b border-[#E5E5E5]">
        {[
          { key: "retreat", label: "Retreat Inquiries", count: 3 },
          { key: "camp", label: "Camp Questions", count: 5 },
          { key: "general", label: "General", count: 4 },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as any)}
            className={`px-4 py-2 text-[13px] font-medium border-b-2 -mb-px flex items-center gap-2 ${tab === t.key ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#888]"}`}
          >
            {t.label} <span className="px-1.5 rounded-full bg-[#C49A3C] text-white text-[10px]">{t.count}</span>
          </button>
        ))}
      </div>

      {tab === "retreat" && (
        <div className="space-y-3">
          {retreatInquiries.map((i, idx) => (
            <Card key={idx} className="p-5">
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div className="font-semibold">{i.org}</div>
                <div className="text-[11px] text-[#888]">{i.date}</div>
              </div>
              <div className="text-[12px] text-[#666] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div><div className="text-[#999]">Contact</div>{i.name}</div>
                <div><div className="text-[#999]">Email</div>{i.email}</div>
                <div><div className="text-[#999]">Size · Dates</div>{i.size} · {i.dates}</div>
                <div><div className="text-[#999]">Type</div>{i.type}</div>
              </div>
              <div className="text-[13px] text-[#444] mb-4 line-clamp-2">{i.msg}</div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <select
                  value={statuses[idx]}
                  onChange={(e) => setStatuses((s) => s.map((v, j) => j === idx ? e.target.value : v))}
                  className="h-8 px-2 rounded-md border border-[#E5E5E5] text-[12px]"
                >
                  <option>New</option><option>In Progress</option><option>Responded</option>
                </select>
                <Pill color={statuses[idx] === "New" ? "yellow" : statuses[idx] === "In Progress" ? "gold" : "green"}>{statuses[idx]}</Pill>
                <div className="flex gap-2 ml-auto">
                  <Button>Respond</Button>
                  <Button variant="outline">Mark Complete</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      {tab !== "retreat" && (
        <Card className="p-10 text-center text-[#888] text-[13px]">No items to display.</Card>
      )}
    </AdminLayout>
  );
}
