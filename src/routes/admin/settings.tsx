import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Pill } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
  head: () => ({ meta: [{ title: "Settings — Ferncliff CMS" }] }),
});

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card className="overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-semibold text-[14px]">{title}</span>
        <span className="text-[#888] text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-[#F0F0F0]">{children}</div>}
    </Card>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-[#888]">{label}</label>
      <input defaultValue={value} className="mt-1 w-full h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]" />
    </div>
  );
}

function SettingsPage() {
  return (
    <AdminLayout title="Settings">
      <PageHeader title="Settings" />
      <div className="space-y-3 max-w-3xl">
        <Section title="General" defaultOpen>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Site Title" value="Ferncliff Camp & Conference Center" />
            <Field label="Tagline" value="Where community grows wild" />
            <Field label="Admin Email" value="admin@ferncliff.org" />
            <Field label="Timezone" value="America/Chicago" />
          </div>
        </Section>
        <Section title="Integrations">
          <ul className="space-y-2 text-[13px]">
            {[
              ["CampBrain API", "green", "Connected"],
              ["DonorPerfect", "green", "Connected"],
              ["Constant Contact", "green", "Connected"],
              ["Square", "green", "Connected"],
              ["ADP", "yellow", "Needs attention"],
            ].map(([n, c, s]) => (
              <li key={n} className="flex items-center justify-between border-b border-[#F0F0F0] py-2">
                <span>{n}</span>
                <Pill color={c as any}>{s}</Pill>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Users">
          <table className="w-full text-[13px]">
            <tbody>
              {[["Kimberly Graves", "Admin"], ["Roy", "Editor"], ["Staff User", "Author"]].map(([n, r]) => (
                <tr key={n} className="border-b border-[#F0F0F0]">
                  <td className="py-2">{n}</td>
                  <td className="py-2 text-[#666]">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
        <Section title="Email Templates">
          <ul className="space-y-2 text-[13px]">
            {["Welcome subscriber", "Registration confirmation", "Inquiry received", "Donation thank you"].map((t) => (
              <li key={t} className="flex justify-between border-b border-[#F0F0F0] py-2">
                <span>{t}</span>
                <button className="text-[#2B7A6F] text-[12px] hover:underline">Edit</button>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Backup">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[13px] text-[#666]">Last backup: May 24, 2026 · 3:00 AM</div>
            <Button>Create Backup</Button>
          </div>
          <ul className="text-[12px] text-[#666] space-y-1">
            <li>May 24, 2026 · 3:00 AM · 142 MB</li>
            <li>May 23, 2026 · 3:00 AM · 141 MB</li>
            <li>May 22, 2026 · 3:00 AM · 140 MB</li>
          </ul>
        </Section>
      </div>
    </AdminLayout>
  );
}
