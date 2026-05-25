import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, Table, Pill, Button } from "@/components/admin/AdminLayout";
import { Plus } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/users")({
  component: UsersPage,
  head: () => ({ meta: [{ title: "Users — Ferncliff CMS" }] }),
});

const users = [
  ["KG", "Kimberly Graves", "kimberly@ferncliff.org", "Admin", "Active"],
  ["R", "Roy", "roy@ferncliff.org", "Editor", "Active"],
  ["S", "Staff User", "staff@ferncliff.org", "Author", "Active"],
  ["JD", "Jane Doe", "jane@ferncliff.org", "Author", "Invited"],
];

function UsersPage() {
  return (
    <AdminLayout title="Users & Roles">
      <PageHeader title="Users & Roles" action={<Button><Plus size={14} /> Invite User</Button>} />
      <Card>
        <Table
          headers={["Name", "Email", "Role", "Status"]}
          rows={users.map(([i, n, e, r, s]) => [
            <div className="flex items-center gap-2 font-medium">
              <span className="w-7 h-7 rounded-full bg-[#2B7A6F] text-white text-[11px] flex items-center justify-center">{i}</span>
              {n}
            </div>,
            <span className="text-[#666]">{e}</span>,
            <Pill color={r === "Admin" ? "teal" : r === "Editor" ? "gold" : "grey"}>{r}</Pill>,
            <Pill color={s === "Active" ? "green" : "yellow"}>{s}</Pill>,
          ])}
        />
      </Card>
    </AdminLayout>
  );
}
