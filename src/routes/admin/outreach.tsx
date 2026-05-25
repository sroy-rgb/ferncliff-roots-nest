import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table, Pill } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/outreach")({
  component: OutreachAdmin,
  head: () => ({ meta: [{ title: "Outreach — Ferncliff CMS" }] }),
});

function OutreachAdmin() {
  return (
    <AdminLayout title="Outreach">
      <PageHeader title="Outreach & Mission" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard accent="teal" value="1,240" label="Hygiene Kits YTD" sub="goal 2,000" />
        <StatCard accent="gold" value="68" label="Volunteers Active" />
        <StatCard accent="teal" value="12" label="Upcoming Mission Trips" />
      </div>
      <Card>
        <Table
          headers={["Program", "Date", "Coordinator", "Status"]}
          rows={[
            ["Hygiene Kit Drive — June", "Jun 14, 2026", "Roy", <Pill color="green">Active</Pill>],
            ["Disaster Relief Training", "Jul 8, 2026", "Kim Graves", <Pill color="gold">Scheduled</Pill>],
            ["Guatemala Mission Team", "Aug 1–14, 2026", "Pastor Mike", <Pill color="green">Active</Pill>],
            ["School Supply Drive", "Aug 22, 2026", "Roy", <Pill color="yellow">Planning</Pill>],
          ]}
        />
      </Card>
    </AdminLayout>
  );
}
