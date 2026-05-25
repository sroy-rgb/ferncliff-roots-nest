import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table, Button } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/subscribers")({
  component: SubsAdmin,
  head: () => ({ meta: [{ title: "Subscribers — Ferncliff CMS" }] }),
});

const subs = [
  ["sarah.j@gmail.com", "Sarah Johnson", "Homepage", "May 23, 2026"],
  ["mlee@conway.edu", "Marcus Lee", "Camp page", "May 21, 2026"],
  ["pat.hayes@awl.org", "Patricia Hayes", "Retreats", "May 19, 2026"],
  ["family@brown.net", "The Browns", "Footer", "May 18, 2026"],
];

function SubsAdmin() {
  return (
    <AdminLayout title="Email Subscribers">
      <PageHeader title="Email Subscribers" action={<Button variant="outline">Export CSV</Button>} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard accent="teal" value="2,840" label="Total Subscribers" sub="+34 this week" arrow="up" />
        <StatCard accent="gold" value="42%" label="Avg Open Rate" />
        <StatCard accent="teal" value="9.4%" label="Avg Click Rate" />
      </div>
      <Card>
        <Table headers={["Email", "Name", "Source", "Subscribed"]} rows={subs.map((r) => [
          <span className="font-medium">{r[0]}</span>, r[1], r[2], r[3],
        ])} />
      </Card>
    </AdminLayout>
  );
}
