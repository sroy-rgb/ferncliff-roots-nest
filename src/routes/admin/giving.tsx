import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table, SectionHeading } from "@/components/admin/AdminLayout";
import { useContentStore } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/giving")({
  component: GivingAdmin,
  head: () => ({ meta: [{ title: "Giving — Ferncliff CMS" }] }),
});

function GivingAdmin() {
  const { donations, homepage } = useContentStore();
  const total = donations.reduce((s, d) => s + d.amount, 0);
  const monthly = donations.filter((d) => d.type === "Monthly").length;
  const avg = donations.length ? Math.round(total / donations.length) : 0;
  const pct = Math.round((homepage.campaignRaised / homepage.campaignGoal) * 100);

  return (
    <AdminLayout title="Donations & Giving">
      <PageHeader title="Donations & Giving" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={`$${total.toLocaleString()}`} label="Total This Month" sub="vs $11,200 last month" arrow="up" />
        <StatCard accent="gold" value={`$${(homepage.campaignRaised / 1_000_000).toFixed(2)}M`} label="Campaign Total" sub={`${pct}% of $${(homepage.campaignGoal / 1_000_000).toFixed(1)}M goal`} />
        <StatCard accent="teal" value={String(monthly)} label="Active Monthly Donors" sub="Friends of Ferncliff" />
        <StatCard accent="gold" value={`$${avg}`} label="Average Gift Amount" />
      </div>

      <Card className="p-5 mb-6">
        <SectionHeading className="mb-3">Connect · Inspire · Transform Campaign</SectionHeading>
        <div className="h-3 rounded-full bg-[#F0EBE3] overflow-hidden">
          <div className="h-full bg-[#C49A3C]" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-[11px] text-[#6b665d]">
          <span>${homepage.campaignRaised.toLocaleString()} raised</span>
          <span>${homepage.campaignGoal.toLocaleString()} goal · {pct}%</span>
        </div>
      </Card>

      <Card>
        <Table
          headers={["Date", "Donor", "Amount", "Type", "Campaign"]}
          rows={donations.map((d) => [
            d.date,
            d.donor,
            <span className="font-semibold text-[#2B7A6F]">${d.amount.toLocaleString()}</span>,
            d.type,
            d.campaign,
          ])}
        />
      </Card>
      <div className="mt-3 text-[11px] text-[#8a857c] italic">All donation processing handled through DonorPerfect. This view shows synchronized records.</div>
    </AdminLayout>
  );
}
