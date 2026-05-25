import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout, Card, StatCard, Button, SectionHeading } from "@/components/admin/AdminLayout";
import { Sparkle } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Dashboard — Ferncliff CMS" }] }),
});

function fmtMoney(n: number) {
  return "$" + n.toLocaleString("en-US");
}

function DashboardPage() {
  const { campSessions, donations, inquiries, activity } = useContentStore();
  const totalReg = campSessions.reduce((s, c) => s + c.registered, 0);
  const monthDonations = donations.reduce((s, d) => s + d.amount, 0);
  const pending = inquiries.filter((i) => i.status === "new").length;

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value="1,247" label="Website Visitors Today" sub="+12% vs last week" arrow="up" />
        <StatCard accent="gold" value={String(totalReg)} label="Camp Registrations This Week" sub={`Across ${campSessions.length} weeks`} />
        <StatCard accent="teal" value={fmtMoney(monthDonations)} label="Donations This Month" sub="+8% vs last month" arrow="up" />
        <StatCard accent="gold" value={String(pending)} label="Pending Inquiries" sub={`${inquiries.length} total in queue`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <SectionHeading className="mb-4">Recent Activity</SectionHeading>
          <ul className="space-y-3 max-h-[330px] overflow-y-auto pr-1">
            {activity.map((a) => <ActivityRow key={a.id} a={a} />)}
          </ul>
        </Card>

        <Card className="p-5">
          <SectionHeading className="mb-4">Camp Registration Overview</SectionHeading>
          <ul className="space-y-3">
            {campSessions.map((b) => {
              const pct = Math.round((b.registered / b.capacity) * 100);
              const gold = b.status === "filling";
              return (
                <li key={b.week} className="flex items-center gap-3">
                  <div className="w-16 text-[12px] text-[#6b665d]">{b.week}</div>
                  <div className="flex-1 h-3 rounded-full bg-[#F0EBE3] overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: gold ? "#C49A3C" : "#2B7A6F" }} />
                  </div>
                  <div className="w-24 text-right text-[12px] font-medium">
                    {pct}% {gold && <span className="text-[10px] text-[#8a6a26] ml-1">Filling</span>}
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <SectionHeading className="mb-3">Quick Actions</SectionHeading>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/blog"><Button>New Blog Post</Button></Link>
          <Link to="/admin/inquiries"><Button variant="outline">View Inquiries</Button></Link>
          <Button variant="outline">Export Registrations</Button>
          <Link to="/admin/roadmap"><Button variant="purple"><Sparkle size={14} /> View Phase 2 Roadmap</Button></Link>
        </div>
      </Card>
    </AdminLayout>
  );
}

function ActivityRow({ a }: { a: { id: number; text: string; dot: string; time: string; ts: number } }) {
  const fresh = Date.now() - a.ts < 4000;
  const [glow, setGlow] = useState(fresh);
  useEffect(() => {
    if (!glow) return;
    const t = setTimeout(() => setGlow(false), 2000);
    return () => clearTimeout(t);
  }, [glow]);
  return (
    <li
      className="flex items-start gap-3 text-[13px] rounded-md px-2 -mx-2 py-1 transition-colors"
      style={glow ? { background: "rgba(43,122,111,0.10)" } : undefined}
    >
      <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.dot }} />
      <div className="flex-1">
        <div className="text-[#2c2926]">{a.text}</div>
        <div className="text-[11px] text-[#8a857c]">{a.time}</div>
      </div>
    </li>
  );
}
