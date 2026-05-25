import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, Button, Table, Pill } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/retreats")({
  component: RetreatsAdmin,
  head: () => ({ meta: [{ title: "Retreats — Ferncliff CMS" }] }),
});

const bookings = [
  ["First Presbyterian, LR", "Oct 18–20, 2026", "Camp McMillan", 45, "Confirmed"],
  ["Conway Youth", "Sep 12–14, 2026", "Brown Center", 28, "Pending"],
  ["AR Women's Leadership", "Nov 6–8, 2026", "Brown Center", 65, "Inquiry"],
  ["Pulaski Heights UMC", "Jan 9–11, 2027", "Camp McMillan", 35, "Confirmed"],
];

function RetreatsAdmin() {
  return (
    <AdminLayout title="Retreats & Bookings">
      <PageHeader title="Retreats & Bookings" action={<Button><Plus size={14} /> Add Booking</Button>} />
      <Card>
        <Table
          headers={["Organization", "Dates", "Facility", "Guests", "Status"]}
          rows={bookings.map((r) => [
            <span className="font-medium">{r[0]}</span>, r[1], r[2], r[3],
            <Pill color={r[4] === "Confirmed" ? "green" : r[4] === "Pending" ? "gold" : "yellow"}>{r[4]}</Pill>,
          ])}
        />
      </Card>
    </AdminLayout>
  );
}
