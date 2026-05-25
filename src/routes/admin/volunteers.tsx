import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, Table, Pill, Button } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/volunteers")({
  component: VolPage,
  head: () => ({ meta: [{ title: "Volunteers — Ferncliff CMS" }] }),
});

const apps = [
  ["Anna Martinez", "Camp Counselor", "Jun–Aug 2026", "Submitted"],
  ["James Wright", "Mission Team — Guatemala", "Aug 2026", "Interview"],
  ["Priya Patel", "Disaster Relief", "Ongoing", "Approved"],
  ["Daniel Kim", "Maintenance Weekend", "Sep 2026", "Submitted"],
];

function VolPage() {
  return (
    <AdminLayout title="Volunteer Applications">
      <PageHeader title="Volunteer Applications" action={<Button variant="outline">Export</Button>} />
      <Card>
        <Table headers={["Applicant", "Program", "Availability", "Status"]} rows={apps.map((r) => [
          <span className="font-medium">{r[0]}</span>, r[1], r[2],
          <Pill color={r[3] === "Approved" ? "green" : r[3] === "Interview" ? "gold" : "yellow"}>{r[3]}</Pill>,
        ])} />
      </Card>
    </AdminLayout>
  );
}
