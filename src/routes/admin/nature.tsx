import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, StatCard, Table, Pill, SectionHeading, Button } from "@/components/admin/AdminLayout";
import { useContentStore, type Enrollment } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/nature")({
  component: NatureAdmin,
  head: () => ({ meta: [{ title: "Nature School — Ferncliff CMS" }] }),
});

const NATURE_PROGRAMS = ["Nature Preschool", "Wildcraft", "WILD Passport", "Homeschool Day"];

function NatureAdmin() {
  const { enrollments, setEnrollmentStatus } = useContentStore();
  const [program, setProgram] = useState<"all" | string>("all");

  const natureEnrollments = useMemo(
    () => enrollments.filter((e) => NATURE_PROGRAMS.includes(e.program)),
    [enrollments]
  );

  const preschoolCount = natureEnrollments.filter((e) => e.program === "Nature Preschool" && e.status !== "cancelled").length;
  const wildcraftCount = natureEnrollments.filter((e) => (e.program === "Wildcraft" || e.program === "WILD Passport" || e.program === "Homeschool Day") && e.status !== "cancelled").length;
  const waitlistCount = natureEnrollments.filter((e) => e.status === "waitlist").length;

  const filtered = program === "all" ? natureEnrollments : natureEnrollments.filter((e) => e.program === program);

  return (
    <AdminLayout title="Nature School">
      <PageHeader title="Nature School" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard accent="teal" value={String(preschoolCount)} label="Enrolled — Preschool" />
        <StatCard accent="gold" value={String(wildcraftCount)} label="Wildcraft / Homeschool" />
        <StatCard accent="teal" value={String(waitlistCount)} label="Waitlist" />
      </div>

      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <SectionHeading>Enrollments</SectionHeading>
        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]"
        >
          <option value="all">All Nature programs</option>
          {NATURE_PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <Card>
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-[#8a857c] text-[13px]">No enrollments yet for this program.</div>
        ) : (
          <Table
            headers={["Student", "Age", "Program", "Guardian", "Start", "Received", "Status", "Actions"]}
            rows={filtered.map((e) => [
              <span className="font-medium">{e.childName}</span>,
              e.childAge,
              e.program,
              <span><div>{e.parentName}</div><div className="text-[11px] text-[#8a857c]">{e.email}</div></span>,
              e.startDate,
              <span className="text-[11px] text-[#8a857c]">{e.received}</span>,
              <StatusPill s={e.status} />,
              <ActionMenu e={e} onStatus={(s) => setEnrollmentStatus(e.id, s)} />,
            ])}
          />
        )}
      </Card>
    </AdminLayout>
  );
}

function StatusPill({ s }: { s: Enrollment["status"] }) {
  const map = { new: ["yellow", "New"], confirmed: ["green", "Confirmed"], waitlist: ["gold", "Waitlist"], cancelled: ["red", "Cancelled"] } as const;
  const [color, label] = map[s];
  return <Pill color={color as any}>{label}</Pill>;
}

function ActionMenu({ e, onStatus }: { e: Enrollment; onStatus: (s: Enrollment["status"]) => void }) {
  return (
    <div className="flex gap-1.5">
      {e.status !== "confirmed" && <Button className="!h-7 !px-2 !text-[11px]" onClick={() => onStatus("confirmed")}>Confirm</Button>}
      {e.status !== "waitlist" && <Button className="!h-7 !px-2 !text-[11px]" variant="outline" onClick={() => onStatus("waitlist")}>Waitlist</Button>}
    </div>
  );
}
