import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout, Card, StatCard, Button } from "@/components/admin/AdminLayout";
import { Sparkle } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Dashboard — Ferncliff CMS" }] }),
});

const activity = [
  { dot: "#2B7A6F", text: "New camp registration — Balsam Week, Pathfinders", time: "2 hours ago" },
  { dot: "#C49A3C", text: "Donation received — $100, Friends of Ferncliff", time: "3 hours ago" },
  { dot: "#6C3AED", text: "Blog post published — Rev. Rebecca Spooner Barber", time: "Yesterday" },
  { dot: "#2B7A6F", text: "Retreat inquiry — First Presbyterian, 45 guests", time: "Yesterday" },
  { dot: "#C49A3C", text: "Volunteer application — Mission Teams", time: "2 days ago" },
  { dot: "#2B7A6F", text: "New email subscriber — via homepage", time: "2 days ago" },
  { dot: "#888", text: "Page updated — First-Time Campers", time: "3 days ago" },
];

const bars = [
  { name: "Aspen", pct: 72, gold: false },
  { name: "Balsam", pct: 89, gold: false },
  { name: "Cedar", pct: 65, gold: false },
  { name: "Dogwood", pct: 94, gold: true },
  { name: "Elm", pct: 45, gold: false },
  { name: "Fern", pct: 91, gold: true },
  { name: "Gum", pct: 58, gold: false },
];

function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value="1,247" label="Website Visitors Today" sub="+12% vs last week" arrow="up" />
        <StatCard accent="gold" value="38" label="Camp Registrations This Week" sub="Balsam & Cedar weeks" />
        <StatCard accent="teal" value="$4,280" label="Donations This Month" sub="+8% vs last month" arrow="up" />
        <StatCard accent="gold" value="12" label="Pending Inquiries" sub="3 retreats, 9 camp" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <div className="text-[13px] font-semibold mb-4">Recent Activity</div>
          <ul className="space-y-3 max-h-[330px] overflow-y-auto pr-1">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px]">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                <div className="flex-1">
                  <div className="text-[#1A1A1A]">{a.text}</div>
                  <div className="text-[11px] text-[#888]">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="text-[13px] font-semibold mb-4">Camp Registration Overview</div>
          <ul className="space-y-3">
            {bars.map((b) => (
              <li key={b.name} className="flex items-center gap-3">
                <div className="w-16 text-[12px] text-[#666]">{b.name}</div>
                <div className="flex-1 h-3 rounded-full bg-[#F0F0F0] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${b.pct}%`, background: b.gold ? "#C49A3C" : "#2B7A6F" }}
                  />
                </div>
                <div className="w-20 text-right text-[12px] font-medium">
                  {b.pct}% {b.gold && <span className="text-[10px] text-[#C49A3C] ml-1">Filling</span>}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <div className="text-[13px] font-semibold mb-3">Quick Actions</div>
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
