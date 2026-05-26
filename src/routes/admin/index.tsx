import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout, Card, StatCard, Button, SectionHeading, Pill } from "@/components/admin/AdminLayout";
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

function timeAgo(ts: number, now: number) {
  const diff = Math.max(0, now - ts);
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function DashboardPage() {
  const { campSessions, donations, inquiries, activity, registrations, volunteerRequests } = useContentStore();
  // Auto-refresh tick to keep counters/relative times live
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 5000);
    return () => clearInterval(t);
  }, []);

  const totalReg = campSessions.reduce((s, c) => s + c.registered, 0) + registrations.length;
  const monthDonations = donations.reduce((s, d) => s + d.amount, 0);
  const pendingInquiries = inquiries.filter((i) => i.status === "new").length;
  const newVolunteers = volunteerRequests.filter((v) => v.status === "new").length;
  const newRegs = registrations.filter((r) => r.status === "new").length;

  // Engagement matrix — registrations per session (live)
  const sessionMatrix = campSessions.map((s) => ({
    week: s.week,
    baseline: s.registered,
    live: registrations.filter((r) => r.session === s.week).length,
    capacity: s.capacity,
  }));
  const maxBar = Math.max(...sessionMatrix.map((s) => s.baseline + s.live), 1);

  return (
    <AdminLayout title="Dashboard">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="text-[12px] text-[#6b665d] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2B7A6F] animate-pulse" /> Live · auto-refresh every 5s
        </div>
        <div className="text-[11px] text-[#8a857c]">Updated {timeAgo(now - 1000, now)}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={String(totalReg)} label="Total Registrations" sub={`${newRegs} new this session`} arrow={newRegs > 0 ? "up" : undefined} />
        <StatCard accent="gold" value={String(pendingInquiries)} label="Pending Inquiries" sub={`${inquiries.length} total in queue`} />
        <StatCard accent="teal" value={String(newVolunteers)} label="New Volunteer Requests" sub={`${volunteerRequests.length} total`} arrow={newVolunteers > 0 ? "up" : undefined} />
        <StatCard accent="gold" value={fmtMoney(monthDonations)} label="Donations This Month" sub="+8% vs last month" arrow="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <SectionHeading className="mb-4">Recent Activity</SectionHeading>
          <ul className="space-y-3 max-h-[330px] overflow-y-auto pr-1">
            {activity.map((a) => <ActivityRow key={a.id} a={a} now={now} />)}
          </ul>
        </Card>

        <Card className="p-5">
          <SectionHeading className="mb-4">Live Registration Matrix</SectionHeading>
          <ul className="space-y-3">
            {sessionMatrix.map((b) => {
              const total = b.baseline + b.live;
              const pct = Math.round((total / b.capacity) * 100);
              const filling = pct >= 85;
              return (
                <li key={b.week} className="flex items-center gap-3">
                  <div className="w-16 text-[12px] text-[#6b665d]">{b.week}</div>
                  <div className="flex-1 h-3 rounded-full bg-[#F0EBE3] overflow-hidden flex">
                    <div className="h-full transition-all duration-700" style={{ width: `${Math.round((b.baseline / maxBar) * 100)}%`, background: filling ? "#C49A3C" : "#2B7A6F" }} />
                    {b.live > 0 && (
                      <div className="h-full transition-all duration-700" style={{ width: `${Math.round((b.live / maxBar) * 100)}%`, background: "#7DD3C4" }} title={`${b.live} new from inline form`} />
                    )}
                  </div>
                  <div className="w-28 text-right text-[12px] font-medium flex items-center justify-end gap-1.5">
                    {pct}%
                    {b.live > 0 && <Pill color="teal">+{b.live}</Pill>}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center gap-4 text-[11px] text-[#8a857c]">
            <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded-sm bg-[#2B7A6F]" /> Existing</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded-sm bg-[#7DD3C4]" /> Live submissions</span>
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <SectionHeading className="mb-3">Quick Actions</SectionHeading>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/registrations"><Button>View Registrations</Button></Link>
          <Link to="/admin/inquiries"><Button variant="outline">View Inquiries</Button></Link>
          <Link to="/admin/volunteers"><Button variant="outline">View Volunteer Requests</Button></Link>
          <Link to="/admin/roadmap"><Button variant="purple"><Sparkle size={14} /> Phase 2 Roadmap</Button></Link>
        </div>
      </Card>
    </AdminLayout>
  );
}

function ActivityRow({ a, now }: { a: { id: number; text: string; dot: string; time: string; ts: number }; now: number }) {
  const fresh = now - a.ts < 4000;
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
        <div className="text-[11px] text-[#8a857c]">{timeAgo(a.ts, now)}</div>
      </div>
    </li>
  );
}
