import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";

export const Route = createFileRoute("/camp/dates")({
  head: () => ({
    meta: [
      { title: "2026 Camp Dates — Ferncliff" },
      { name: "description", content: "Full 2026 summer camp schedule for Ferncliff — June 1 through August 7." },
      { property: "og:title", content: "2026 Camp Dates — Ferncliff" },
      { property: "og:description", content: "Full 2026 summer camp schedule for Ferncliff — June 1 through August 7." },
    ],
  }),
  component: DatesPage,
});

type Status = "Open" | "Filling Fast" | "Full";
type Row = { week: string; dates: string; day: string; overnight: string; status: Status; types: string[] };

const rows: Row[] = [
  { week: "Aspen", dates: "June 1–5", day: "Grades 1–8", overnight: "—", status: "Open", types: ["day"] },
  { week: "Balsam", dates: "June 7–12", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Cedar", dates: "June 14–19", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Dogwood", dates: "June 21–26", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit + Discovery (1–3)", status: "Filling Fast", types: ["day", "overnight", "discovery"] },
  { week: "Elm", dates: "June 28–July 3", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Fern", dates: "July 5–10", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit + Discovery (1–3)", status: "Filling Fast", types: ["day", "overnight", "discovery"] },
  { week: "Gum", dates: "July 12–17", day: "Grades 1–8", overnight: "Pathfinders, Trailblazers, Summit + Discovery (1–3)", status: "Open", types: ["day", "overnight", "discovery"] },
];

const filters = [
  { key: "all", label: "All Camps" },
  { key: "day", label: "Day Camp Only" },
  { key: "overnight", label: "Overnight Only" },
  { key: "discovery", label: "Discovery" },
] as const;

const statusColor: Record<Status, string> = {
  Open: "var(--color-teal)",
  "Filling Fast": "var(--color-gold)",
  Full: "var(--color-coral)",
};

function DatesPage() {
  const [filter, setFilter] = useState<string>("all");
  const visible = filter === "all" ? rows : rows.filter((r) => r.types.includes(filter));

  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="2026 Summer"
        title="2026 Camp Dates"
        subtitle="June 1 – August 7"
        height="40vh"
      />

      <section className="py-[60px] md:py-[80px] bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="px-4 py-2 rounded-full text-[13px] font-bold transition-all"
                style={{
                  background: filter === f.key ? "var(--color-teal)" : "var(--color-offwhite)",
                  color: filter === f.key ? "#fff" : "var(--color-text-muted)",
                  border: "1px solid " + (filter === f.key ? "var(--color-teal)" : "rgba(0,0,0,0.08)"),
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
            <table className="w-full text-left">
              <thead className="bg-cream">
                <tr>
                  {["Week", "Dates", "Day Camp", "Overnight Camps", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[11px] uppercase tracking-[2px] font-bold text-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => (
                  <tr key={r.week} className="border-t border-cream-warm">
                    <td className="px-6 py-5 font-serif text-[22px] text-teal">{r.week}</td>
                    <td className="px-6 py-5 text-dark-warm font-semibold">{r.dates}</td>
                    <td className="px-6 py-5 text-text-body text-[14px]">{r.day}</td>
                    <td className="px-6 py-5 text-text-body text-[14px]">{r.overnight}</td>
                    <td className="px-6 py-5">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[1px] text-white" style={{ background: statusColor[r.status] }}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {visible.map((r) => (
              <div key={r.week} className="bg-white rounded-[16px] p-5" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.06)" }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-serif text-[24px] text-teal leading-none">{r.week}</div>
                    <div className="font-semibold text-dark-warm text-[14px] mt-1">{r.dates}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[1px] text-white" style={{ background: statusColor[r.status] }}>
                    {r.status}
                  </span>
                </div>
                <div className="text-[13px] space-y-1.5 mt-3">
                  <div><strong className="text-text-muted">Day:</strong> {r.day}</div>
                  <div><strong className="text-text-muted">Overnight:</strong> {r.overnight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-cream">
        <div className="max-w-[800px] mx-auto px-8 reveal">
          <div className="bg-cream-warm rounded-[20px] p-7">
            <h3 className="text-[22px] mb-3">Voluntary Pricing</h3>
            <p className="text-[14px] text-text-body leading-[1.7]">
              Every camp offers three pricing tiers — choose the one that fits your family. Tier 1 reflects the full cost of camp. Tier 2 is partially subsidized. Tier 3 is fully subsidized. The camp experience is identical no matter what you choose.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[80px] text-center bg-offwhite">
        <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
      </section>
    </CampLayout>
  );
}
