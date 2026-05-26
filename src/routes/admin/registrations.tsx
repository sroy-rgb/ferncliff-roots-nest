import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Pill, Button, StatCard } from "@/components/admin/AdminLayout";
import { useContentStore, type Registration } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/registrations")({
  component: RegPage,
  head: () => ({ meta: [{ title: "Registrations — Ferncliff CMS" }] }),
});

function RegPage() {
  const { registrations, setRegistrationStatus } = useContentStore();
  const [filter, setFilter] = useState<"all" | Registration["status"]>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => registrations.filter((r) =>
    (filter === "all" || r.status === filter) &&
    (q === "" || `${r.camperName} ${r.parentName} ${r.email} ${r.session}`.toLowerCase().includes(q.toLowerCase()))
  ), [registrations, filter, q]);

  const counts = {
    total: registrations.length,
    new: registrations.filter((r) => r.status === "new").length,
    confirmed: registrations.filter((r) => r.status === "confirmed").length,
    waitlist: registrations.filter((r) => r.status === "waitlist").length,
  };

  return (
    <AdminLayout title="Registrations">
      <PageHeader title="Camp Registrations" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={String(counts.total)} label="Total Registrations" />
        <StatCard accent="gold" value={String(counts.new)} label="New (pending review)" />
        <StatCard accent="teal" value={String(counts.confirmed)} label="Confirmed" />
        <StatCard accent="gold" value={String(counts.waitlist)} label="Waitlist" />
      </div>

      <Card className="p-4 mb-4 flex flex-wrap items-center gap-3">
        <input
          placeholder="Search name, email, session…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1 min-w-[200px] h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="confirmed">Confirmed</option>
          <option value="waitlist">Waitlist</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </Card>

      {filtered.length === 0 ? (
        <Card className="p-10 text-center text-[#8a857c] text-[13px]">
          {registrations.length === 0
            ? "No registrations yet. Submissions from the public Register form will appear here in real time."
            : "No registrations match your filters."}
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <RegCard key={r.id} r={r} onStatus={(s) => setRegistrationStatus(r.id, s)} />
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

function RegCard({ r, onStatus }: { r: Registration; onStatus: (s: Registration["status"]) => void }) {
  const labels: Record<Registration["status"], string> = { new: "New", confirmed: "Confirmed", waitlist: "Waitlist", cancelled: "Cancelled" };
  const colors: Record<Registration["status"], "yellow" | "green" | "gold" | "red"> = { new: "yellow", confirmed: "green", waitlist: "gold", cancelled: "red" };
  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <div>
          <div className="font-semibold text-[15px]">{r.camperName} <span className="text-[#8a857c] text-[12px] font-normal">· age {r.age}</span></div>
          <div className="text-[12px] text-[#6b665d]">Parent: {r.parentName}</div>
        </div>
        <div className="text-[11px] text-[#8a857c]">{r.received}</div>
      </div>
      <div className="text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2">
        <div><div className="text-[#a39d92]">Email</div>{r.email}</div>
        <div><div className="text-[#a39d92]">Phone</div>{r.phone}</div>
        <div><div className="text-[#a39d92]">Session</div>{r.session}</div>
        <div><div className="text-[#a39d92]">Type</div>{r.campType}</div>
      </div>
      {r.notes && <div className="text-[13px] text-[#3a3631] mb-4 italic">"{r.notes}"</div>}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <select value={r.status} onChange={(e) => onStatus(e.target.value as Registration["status"])} className="h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]">
          <option value="new">New</option><option value="confirmed">Confirmed</option><option value="waitlist">Waitlist</option><option value="cancelled">Cancelled</option>
        </select>
        <Pill color={colors[r.status]}>{labels[r.status]}</Pill>
        <div className="flex gap-2 ml-auto">
          <Button onClick={() => onStatus("confirmed")}>Confirm</Button>
          <Button variant="outline" onClick={() => onStatus("waitlist")}>Waitlist</Button>
        </div>
      </div>
    </Card>
  );
}
