import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/giving")({
  component: GivingAdmin,
  head: () => ({ meta: [{ title: "Giving — Ferncliff CMS" }] }),
});

const donations = [
  ["May 24", "Anonymous", "$250", "One-time", "General", "Website"],
  ["May 23", "Johnson Family", "$50", "Monthly", "Friends of Ferncliff", "Website"],
  ["May 22", "First Presbyterian Conway", "$1,000", "One-time", "Transform Campaign", "Email"],
  ["May 21", "Rebecca S. Barber", "$100", "Monthly", "Friends of Ferncliff", "Website"],
  ["May 20", "Anonymous", "$25", "One-time", "General", "Website"],
];

function GivingAdmin() {
  return (
    <AdminLayout title="Donations & Giving">
      <PageHeader title="Donations & Giving" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value="$12,450" label="Total This Month" sub="vs $11,200 last month" arrow="up" />
        <StatCard accent="gold" value="$6,080,000" label="Campaign Total" sub="80% of $7.6M goal" />
        <StatCard accent="teal" value="142" label="Active Monthly Donors" sub="Friends of Ferncliff" />
        <StatCard accent="gold" value="$85" label="Average Gift Amount" />
      </div>

      <Card className="p-5 mb-6">
        <div className="text-[13px] font-semibold mb-3">Connect · Inspire · Transform Campaign</div>
        <div className="h-3 rounded-full bg-[#F0F0F0] overflow-hidden">
          <div className="h-full bg-[#C49A3C]" style={{ width: "80%" }} />
        </div>
        <div className="flex justify-between mt-2 text-[11px] text-[#666]">
          <span>$6.08M raised</span><span>$7.6M goal · 80%</span>
        </div>
      </Card>

      <Card>
        <Table
          headers={["Date", "Donor", "Amount", "Type", "Campaign", "Source"]}
          rows={donations.map((r) => r.map((c, i) => i === 2 ? <span className="font-semibold text-[#2B7A6F]">{c}</span> : c))}
        />
      </Card>
      <div className="mt-3 text-[11px] text-[#888] italic">All donation processing handled through DonorPerfect. This view shows synchronized records.</div>
    </AdminLayout>
  );
}
