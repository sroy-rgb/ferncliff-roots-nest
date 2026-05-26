import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Pill, Button, StatCard } from "@/components/admin/AdminLayout";
import { useContentStore, type Enrollment } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/enrollments")({
  component: EnrollmentsPage,
  head: () => ({ meta: [{ title: "Enrollments — Ferncliff CMS" }] }),
});

function EnrollmentsPage() {
  const { enrollments, setEnrollmentStatus } = useContentStore();
  const [filter, setFilter] = useState<"all" | Enrollment["status"]>("all");
  const [program, setProgram] = useState("all");
  const [q, setQ] = useState("");

  const programs = useMemo(() => Array.from(new Set(enrollments.map((e) => e.program))), [enrollments]);

  const filtered = useMemo(() => enrollments.filter((e) =>
    (filter === "all" || e.status === filter) &&
    (program === "all" || e.program === program) &&
    (q === "" || `${e.childName} ${e.parentName} ${e.email}`.toLowerCase().includes(q.toLowerCase()))
  ), [enrollments, filter, program, q]);

  const counts = {
    total: enrollments.length,
    new: enrollments.filter((e) => e.status === "new").length,
    confirmed: enrollments.filter((e) => e.status === "confirmed").length,
    waitlist: enrollments.filter((e) => e.status === "waitlist").length,
  };

  return (
    <AdminLayout title="Enrollments">
      <PageHeader title="Program Enrollments" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={String(counts.total)} label="Total Enrollments" />
        <StatCard accent="gold" value={String(counts.new)} label="New (pending review)" />
        <StatCard accent="teal" value={String(counts.confirmed)} label="Confirmed" />
        <StatCard accent="gold" value={String(counts.waitlist)} label="Waitlist" />
      </div>

      <Card className="p-4 mb-4 flex flex-wrap items-center gap-3">
        <input placeholder="Search child, parent, email…" value={q} onChange={(e) => setQ(e.target.value)} className="flex-1 min-w-[200px] h-9 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" />
        <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="confirmed">Confirmed</option>
          <option value="waitlist">Waitlist</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <select value={program} onChange={(e) => setProgram(e.target.value)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
          <option value="all">All programs</option>
          {programs.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </Card>

      {filtered.length === 0 ? (
        <Card className="p-10 text-center text-[#8a857c] text-[13px]">
          {enrollments.length === 0 ? "No enrollments yet." : "No enrollments match your filters."}
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((e) => <EnrollCard key={e.id} e={e} onStatus={(s) => setEnrollmentStatus(e.id, s)} />)}
        </div>
      )}
    </AdminLayout>
  );
}

function EnrollCard({ e, onStatus }: { e: Enrollment; onStatus: (s: Enrollment["status"]) => void }) {
  const labels: Record<Enrollment["status"], string> = { new: "New", confirmed: "Confirmed", waitlist: "Waitlist", cancelled: "Cancelled" };
  const colors: Record<Enrollment["status"], "yellow" | "green" | "gold" | "red"> = { new: "yellow", confirmed: "green", waitlist: "gold", cancelled: "red" };
  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <div>
          <div className="font-semibold text-[15px]">{e.childName} <span className="text-[#8a857c] text-[12px] font-normal">· age {e.childAge}</span></div>
          <div className="text-[12px] text-[#6b665d]">Parent: {e.parentName}</div>
        </div>
        <div className="text-[11px] text-[#8a857c]">{e.received}</div>
      </div>
      <div className="text-[12px] text-[#6b665d] mb-3 grid grid-cols-2 md:grid-cols-4 gap-2">
        <div><div className="text-[#a39d92]">Email</div>{e.email}</div>
        <div><div className="text-[#a39d92]">Phone</div>{e.phone}</div>
        <div><div className="text-[#a39d92]">Program</div>{e.program}</div>
        <div><div className="text-[#a39d92]">Start</div>{e.startDate}</div>
      </div>
      {e.notes && <div className="text-[13px] text-[#3a3631] mb-4 italic">"{e.notes}"</div>}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <select value={e.status} onChange={(ev) => onStatus(ev.target.value as Enrollment["status"])} className="h-8 px-2 rounded-md border border-[#E8E2D8] bg-[#FFFDF9] text-[12px]">
          <option value="new">New</option><option value="confirmed">Confirmed</option><option value="waitlist">Waitlist</option><option value="cancelled">Cancelled</option>
        </select>
        <Pill color={colors[e.status]}>{labels[e.status]}</Pill>
        <div className="flex gap-2 ml-auto">
          <Button onClick={() => onStatus("confirmed")}>Confirm</Button>
          <Button variant="outline" onClick={() => onStatus("waitlist")}>Waitlist</Button>
        </div>
      </div>
    </Card>
  );
}
