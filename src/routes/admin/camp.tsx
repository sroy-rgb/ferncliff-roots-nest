import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";
import { useContentStore, type Registration } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/camp")({
  component: CampPage,
  head: () => ({ meta: [{ title: "Camp Sessions — Ferncliff CMS" }] }),
});

function CampPage() {
  const { campSessions, registrations, setRegistrationStatus } = useContentStore();
  const [tab, setTab] = useState<"sessions" | "registrations">("sessions");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [regFilter, setRegFilter] = useState<"all" | Registration["status"]>("all");
  const filteredRegs = registrations.filter((r) => regFilter === "all" || r.status === regFilter);

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
        <>
          <Card className="p-3 mb-4 flex flex-wrap items-center gap-3">
            <select value={regFilter} onChange={(e) => setRegFilter(e.target.value as any)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
              <option value="all">All statuses</option>
              <option value="new">New</option><option value="confirmed">Confirmed</option><option value="waitlist">Waitlist</option><option value="cancelled">Cancelled</option>
            </select>
            <Link to="/admin/registrations" className="ml-auto text-[12px] text-[#2B7A6F] hover:underline">Open detailed view →</Link>
          </Card>
          <Card>
            <Table
              headers={["Camper Name", "Guardian", "Camp Type", "Session", "Status", "Received", "Actions"]}
              rows={filteredRegs.map((r) => [
                <span className="font-medium">{r.camperName} <span className="text-[11px] text-[#8a857c] font-normal">· age {r.age}</span></span>,
                <div><div>{r.parentName}</div><div className="text-[11px] text-[#8a857c]">{r.email}</div></div>,
                r.campType,
                r.session,
                <Pill color={r.status === "confirmed" ? "green" : r.status === "waitlist" ? "gold" : r.status === "cancelled" ? "red" : "yellow"}>{r.status}</Pill>,
                <span className="text-[12px] text-[#6b665d]">{r.received}</span>,
                <select value={r.status} onChange={(e) => setRegistrationStatus(r.id, e.target.value as Registration["status"])} className="h-7 px-2 rounded border border-[#E8E2D8] bg-white text-[12px]">
                  <option value="new">New</option><option value="confirmed">Confirmed</option><option value="waitlist">Waitlist</option><option value="cancelled">Cancelled</option>
                </select>,
              ])}
            />
          </Card>
        </>
      )}
    </AdminLayout>
  );
}
