import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/camp")({
  component: CampPage,
  head: () => ({ meta: [{ title: "Camp Sessions — Ferncliff CMS" }] }),
});

const sessions = [
  { week: "Aspen", dates: "Jun 1–5", types: "Day Camp", cap: 60, reg: 43, status: "Open" },
  { week: "Balsam", dates: "Jun 7–12", types: "Day + Overnight", cap: 120, reg: 107, status: "Filling" },
  { week: "Cedar", dates: "Jun 14–19", types: "Day + Overnight", cap: 120, reg: 78, status: "Open" },
  { week: "Dogwood", dates: "Jun 21–26", types: "Day + Overnight + Discovery", cap: 140, reg: 132, status: "Filling" },
  { week: "Elm", dates: "Jun 28–Jul 3", types: "Day + Overnight", cap: 120, reg: 54, status: "Open" },
  { week: "Fern", dates: "Jul 5–10", types: "Day + Overnight + Discovery", cap: 140, reg: 128, status: "Filling" },
  { week: "Gum", dates: "Jul 12–17", types: "Day + Overnight + Discovery", cap: 140, reg: 81, status: "Open" },
];

const regs = [
  ["Emma Johnson", "Sarah Johnson", "Overnight", "Balsam", "Paid", "1"],
  ["Marcus Lee", "David Lee", "Day", "Aspen", "Pending", "2"],
  ["Sophia Chen", "Mei Chen", "Discovery", "Dogwood", "Paid", "1"],
  ["Liam Brown", "Karen Brown", "Overnight", "Cedar", "Partial", "3"],
  ["Ava Williams", "Rob Williams", "Day", "Aspen", "Paid", "1"],
];

function CampPage() {
  const [tab, setTab] = useState<"sessions" | "registrations">("sessions");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AdminLayout title="Camp Sessions">
      <PageHeader title="Camp Sessions — 2026" action={<Button><Plus size={14} /> Add Session</Button>} />
      <div className="flex gap-1 mb-4 border-b border-[#E5E5E5]">
        {(["sessions", "registrations"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px ${tab === t ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#888]"}`}
          >{t}</button>
        ))}
      </div>

      {tab === "sessions" && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[#888] border-b border-[#E5E5E5]">
                  {["Week", "Dates", "Camp Types", "Capacity", "Registered", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-[11px] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => {
                  const pct = Math.round((s.reg / s.cap) * 100);
                  const open = expanded === s.week;
                  return (
                    <FragmentWithKey key={s.week}>
                      <tr className="border-b border-[#F0F0F0] hover:bg-[#F8F8F8] cursor-pointer" onClick={() => setExpanded(open ? null : s.week)}>
                        <td className="px-4 py-3 font-medium">{s.week}</td>
                        <td className="px-4 py-3">{s.dates}</td>
                        <td className="px-4 py-3 text-[12px] text-[#666]">{s.types}</td>
                        <td className="px-4 py-3">{s.cap}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-1.5 rounded-full bg-[#F0F0F0] overflow-hidden">
                              <div className="h-full" style={{ width: `${pct}%`, background: s.status === "Filling" ? "#C49A3C" : "#2B7A6F" }} />
                            </div>
                            <span className="text-[12px]">{s.reg}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3"><Pill color={s.status === "Open" ? "green" : "gold"}>{s.status}</Pill></td>
                      </tr>
                      {open && (
                        <tr className="bg-[#F8F8F8]"><td colSpan={6} className="px-6 py-4 text-[12px] text-[#666]">
                          Breakdown — Day: {Math.round(s.reg * 0.5)} · Overnight: {Math.round(s.reg * 0.35)} · Discovery: {Math.round(s.reg * 0.15)}
                        </td></tr>
                      )}
                    </FragmentWithKey>
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
