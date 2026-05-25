import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/nature")({
  component: NatureAdmin,
  head: () => ({ meta: [{ title: "Nature School — Ferncliff CMS" }] }),
});

const enrollees = [
  ["Oliver Stone", "Preschool 3-4", "Sarah Stone", "Active"],
  ["Lily Park", "Preschool 4-5", "Min Park", "Active"],
  ["Henry Davis", "Wildcraft", "Tom Davis", "Waitlist"],
  ["Zoe Miller", "Homeschool Day", "Anna Miller", "Active"],
];

function NatureAdmin() {
  return (
    <AdminLayout title="Nature School">
      <PageHeader title="Nature School" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard accent="teal" value="42" label="Enrolled — Preschool" />
        <StatCard accent="gold" value="18" label="Wildcraft / Homeschool" />
        <StatCard accent="teal" value="9" label="Waitlist" />
      </div>
      <Card>
        <Table headers={["Student", "Program", "Guardian", "Status"]} rows={enrollees.map((r) => [
          <span className="font-medium">{r[0]}</span>, r[1], r[2], r[3],
        ])} />
      </Card>
    </AdminLayout>
  );
}
