import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, Card, PageHeader, StatCard, Table } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/seo")({
  component: SeoPage,
  head: () => ({ meta: [{ title: "SEO & Analytics — Ferncliff CMS" }] }),
});

const audit = [
  ["Homepage", "✓", "✓", "100%", "✓", 98],
  ["Camp Overview", "✓", "✓", "85%", "✓", 94],
  ["First-Time Campers", "✓", "⚠ (too short)", "100%", "✓", 88],
  ["Retreats", "✓", "✓", "70%", "✗", 76],
  ["Giving", "✓", "✗ (missing)", "90%", "✓", 82],
];

const ind = (v: string) => {
  if (v.startsWith("✓")) return <span className="text-green-600">{v}</span>;
  if (v.startsWith("⚠")) return <span className="text-yellow-600">{v}</span>;
  if (v.startsWith("✗")) return <span className="text-red-600">{v}</span>;
  return v;
};

function SeoPage() {
  return (
    <AdminLayout title="SEO & Analytics">
      <PageHeader title="SEO & Analytics" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-5">
          <div className="text-[11px] uppercase tracking-wider text-[#888]">Core Web Vitals</div>
          <div className="mt-3 space-y-1 text-[12px]">
            <div className="flex justify-between"><span>LCP</span><span className="text-green-600">1.8s</span></div>
            <div className="flex justify-between"><span>FID</span><span className="text-green-600">45ms</span></div>
            <div className="flex justify-between"><span>CLS</span><span className="text-green-600">0.05</span></div>
          </div>
        </Card>
        <Card className="p-5 text-center">
          <div className="text-[11px] uppercase tracking-wider text-[#888]">SEO Score</div>
          <div className="mt-3 relative inline-flex">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#F0F0F0" strokeWidth="8" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#2B7A6F" strokeWidth="8" strokeDasharray={`${(92/100) * 213.6} 213.6`} strokeLinecap="round" transform="rotate(-90 40 40)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-semibold text-[#2B7A6F]">92</div>
          </div>
        </Card>
        <StatCard accent="teal" value="47" label="Indexed Pages" />
        <StatCard accent="gold" value="3,240" label="Monthly Organic Traffic" sub="visits" />
      </div>

      <Card>
        <Table
          headers={["Page", "Meta Title", "Meta Description", "Alt Text Coverage", "Schema", "Score"]}
          rows={audit.map((r) => [
            <span className="font-medium">{r[0]}</span>,
            ind(String(r[1])), ind(String(r[2])), ind(String(r[3])), ind(String(r[4])),
            <span className="font-semibold">{r[5]}</span>,
          ])}
        />
      </Card>
    </AdminLayout>
  );
}
