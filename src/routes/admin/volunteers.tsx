import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Pill, Button, StatCard } from "@/components/admin/AdminLayout";
import { useContentStore, type VolunteerRequest } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/volunteers")({
  component: VolPage,
  head: () => ({ meta: [{ title: "Volunteer Requests — Ferncliff CMS" }] }),
});

function VolPage() {
  const { volunteerRequests, setVolunteerStatus } = useContentStore();
  const [filter, setFilter] = useState<"all" | VolunteerRequest["status"]>("all");
  const [interest, setInterest] = useState("all");
  const [q, setQ] = useState("");

  const interests = useMemo(() => Array.from(new Set(volunteerRequests.map((v) => v.interest))), [volunteerRequests]);

  const filtered = useMemo(() => volunteerRequests.filter((v) =>
    (filter === "all" || v.status === filter) &&
    (interest === "all" || v.interest === interest) &&
    (q === "" || `${v.name} ${v.email} ${v.message ?? ""}`.toLowerCase().includes(q.toLowerCase()))
  ), [volunteerRequests, filter, interest, q]);

  const counts = {
    total: volunteerRequests.length,
    new: volunteerRequests.filter((v) => v.status === "new").length,
    inProgress: volunteerRequests.filter((v) => v.status === "in-progress" || v.status === "acknowledged").length,
    resolved: volunteerRequests.filter((v) => v.status === "resolved").length,
  };

  return (
    <AdminLayout title="Volunteer Requests">
      <PageHeader title="Volunteer Requests & Queries" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={String(counts.total)} label="Total Requests" />
        <StatCard accent="gold" value={String(counts.new)} label="New" />
        <StatCard accent="teal" value={String(counts.inProgress)} label="In Progress" />
        <StatCard accent="gold" value={String(counts.resolved)} label="Resolved" />
      </div>

      <Card className="p-4 mb-4 flex flex-wrap items-center gap-3">
        <input placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} className="flex-1 min-w-[200px] h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" />
        <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="acknowledged">Acknowledged</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
        <select value={interest} onChange={(e) => setInterest(e.target.value)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
          <option value="all">All categories</option>
          {interests.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </Card>

      {filtered.length === 0 ? (
        <Card className="p-10 text-center text-[#8a857c] text-[13px]">
          {volunteerRequests.length === 0
            ? "No volunteer requests yet. Submissions from the public Outreach form will appear here in real time."
            : "No requests match your filters."}
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((v) => <VolCard key={v.id} v={v} onStatus={(s) => setVolunteerStatus(v.id, s)} />)}
        </div>
      )}
    </AdminLayout>
  );
}

function VolCard({ v, onStatus }: { v: VolunteerRequest; onStatus: (s: VolunteerRequest["status"]) => void }) {
  const labels: Record<VolunteerRequest["status"], string> = { new: "New", acknowledged: "Acknowledged", "in-progress": "In Progress", resolved: "Resolved" };
  const colors: Record<VolunteerRequest["status"], "yellow" | "teal" | "gold" | "green"> = { new: "yellow", acknowledged: "teal", "in-progress": "gold", resolved: "green" };
  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <div>
          <div className="font-semibold text-[15px]">{v.name}</div>
          <div className="text-[12px] text-[#6b665d]">{v.email} · <span className="text-[#2B7A6F]">{v.interest}</span></div>
        </div>
        <div className="text-[11px] text-[#8a857c]">{v.received}</div>
      </div>
      {v.message && <div className="text-[13px] text-[#3a3631] mb-4 italic">"{v.message}"</div>}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <select value={v.status} onChange={(e) => onStatus(e.target.value as VolunteerRequest["status"])} className="h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]">
          <option value="new">New</option><option value="acknowledged">Acknowledged</option><option value="in-progress">In Progress</option><option value="resolved">Resolved</option>
        </select>
        <Pill color={colors[v.status]}>{labels[v.status]}</Pill>
        <div className="flex gap-2 ml-auto">
          <Button onClick={() => onStatus("acknowledged")}>Acknowledge</Button>
          <Button variant="outline" onClick={() => onStatus("resolved")}>Mark Resolved</Button>
        </div>
      </div>
    </Card>
  );
}
