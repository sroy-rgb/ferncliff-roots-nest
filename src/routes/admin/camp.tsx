import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/camp")({
  component: CampPage,
  head: () => ({ meta: [{ title: "Camp Sessions — Ferncliff CMS" }] }),
});

const regs = [
  ["Emma Johnson", "Sarah Johnson", "Overnight", "Balsam", "Paid", "1"],
  ["Marcus Lee", "David Lee", "Day", "Aspen", "Pending", "2"],
  ["Sophia Chen", "Mei Chen", "Discovery", "Dogwood", "Paid", "1"],
  ["Liam Brown", "Karen Brown", "Overnight", "Cedar", "Partial", "3"],
  ["Ava Williams", "Rob Williams", "Day", "Aspen", "Paid", "1"],
];

function CampPage() {
  const { campSessions } = useContentStore();
  const [tab, setTab] = useState<"sessions" | "registrations">("sessions");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AdminLayout title="Camp Sessions">
      <PageHeader title="Camp Sessions — 2026" action={<Button><Plus size={14} /> Add Session</Button>} />
      <div className="flex gap-1 mb-4 border-b border-[#E8E2D8]">
        {(["sessions", "registrations"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px ${tab === t ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`}
          >{t}</button>
        ))}
      </div>

      {tab === "sessions" && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[#8a857c] border-b border-[#E8E2D8]">
                  {["Week", "Dates", "Camp Types", "Capacity", "Registered", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-[11px] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {campSessions.map((s) => {
                  const pct = Math.round((s.registered / s.capacity) * 100);
                  const open = expanded === s.week;
                  const gold = s.status === "filling";
                  return (
                    <Fragment key={s.week}>
                      <tr className="border-b border-[#F0EBE3] hover:bg-[#FAF6EE] cursor-pointer" onClick={() => setExpanded(open ? null : s.week)}>
                        <td className="px-4 py-3 font-medium">{s.week}</td>
                        <td className="px-4 py-3">{s.dates}</td>
                        <td className="px-4 py-3 text-[12px] text-[#6b665d]">{s.types.join(" + ")}</td>
                        <td className="px-4 py-3">{s.capacity}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-1.5 rounded-full bg-[#F0EBE3] overflow-hidden">
                              <div className="h-full" style={{ width: `${pct}%`, background: gold ? "#C49A3C" : "#2B7A6F" }} />
                            </div>
                            <span className="text-[12px]">{s.registered}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3"><Pill color={gold ? "gold" : "green"}>{gold ? "Filling" : "Open"}</Pill></td>
                      </tr>
                      {open && (
                        <tr className="bg-[#FAF6EE]"><td colSpan={6} className="px-6 py-4 text-[12px] text-[#6b665d]">
                          Breakdown — Day: {Math.round(s.registered * 0.5)} · Overnight: {Math.round(s.registered * 0.35)} · Discovery: {Math.round(s.registered * 0.15)}
                        </td></tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "registrations" && (
        <Card>
          <Table
            headers={["Camper Name", "Guardian", "Camp Type", "Week", "Payment", "Tier"]}
            rows={regs.map((r) => [
              <span className="font-medium">{r[0]}</span>, r[1], r[2], r[3],
              <Pill color={r[4] === "Paid" ? "green" : r[4] === "Partial" ? "gold" : "yellow"}>{r[4]}</Pill>,
              r[5],
            ])}
          />
        </Card>
      )}
    </AdminLayout>
  );
}
