import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";

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
  { week: "Balsam", dates: "June 7–12", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Cedar", dates: "June 14–19", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Dogwood", dates: "June 21–26", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)", status: "Filling Fast", types: ["day", "overnight", "discovery"] },
  { week: "Elm", dates: "June 28–July 3", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit", status: "Open", types: ["day", "overnight"] },
  { week: "Fern", dates: "July 5–10", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)", status: "Filling Fast", types: ["day", "overnight", "discovery"] },
  { week: "Gum", dates: "July 12–17", day: "Grades 1–8", overnight: "Pathfinders · Trailblazers · Summit · Discovery (1–3)", status: "Open", types: ["day", "overnight", "discovery"] },
];

const filters = [
  { key: "all", label: "All Camps" },
  { key: "day", label: "Day Camp" },
  { key: "overnight", label: "Overnight" },
  { key: "discovery", label: "Discovery" },
] as const;

const statusStyle: Record<Status, { bg: string; color: string }> = {
  Open: { bg: "var(--color-teal-light)", color: "var(--color-teal)" },
  "Filling Fast": { bg: "var(--color-gold-light)", color: "#96751e" },
  Full: { bg: "var(--color-coral-light)", color: "var(--color-coral)" },
};

function DatesPage() {
  const [filter, setFilter] = useState<string>("all");
  const visible = filter === "all" ? rows : rows.filter((r) => r.types.includes(filter));

  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="2026 Schedule"
        title={<>2026 Summer Camp <HeroEm>Dates</HeroEm></>}
        subtitle="June 1 – August 7, 2026. Registration is open — camps fill quickly!"
        height="50vh"
      >
        <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
      </CampHero>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionIntro
            eyebrow="2026 Schedule"
            title={<>2026 Summer Camp <Hw>Dates</Hw></>}
            subtitle="June 1 – August 7, 2026. Registration is open — camps fill quickly!"
          />

          <div className="flex flex-wrap gap-2 mb-7 reveal">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="px-5 py-2 rounded-full text-[13px] font-bold transition-all"
                style={{
                  background: filter === f.key ? "var(--color-teal)" : "var(--color-offwhite)",
                  color: filter === f.key ? "#fff" : "var(--color-text-muted)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Desktop table */}
          <table className="hidden md:table w-full reveal" style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}>
            <thead>
              <tr>
                {["Week", "Dates", "Day Camp", "Overnight Camps", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-2 text-[11px] font-bold uppercase text-text-muted"
                    style={{ letterSpacing: 2 }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => (
                <tr key={r.week}>
                  <td className="px-4 py-4 bg-white font-bold text-dark text-[14px]" style={{ borderRadius: "12px 0 0 12px" }}>{r.week}</td>
                  <td className="px-4 py-4 bg-white text-[14px] text-text-body">{r.dates}</td>
                  <td className="px-4 py-4 bg-white text-[14px] text-text-body">{r.day}</td>
                  <td className="px-4 py-4 bg-white text-[14px] text-text-body">{r.overnight}</td>
                  <td className="px-4 py-4 bg-white" style={{ borderRadius: "0 12px 12px 0" }}>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold"
                      style={statusStyle[r.status]}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {visible.map((r) => (
              <div
                key={r.week}
                className="rounded-[16px] p-5"
                style={{ background: r.status === "Filling Fast" ? "var(--color-gold-light)" : "var(--color-offwhite)" }}
              >
                <strong className="text-dark">{r.week} Week</strong>
                <br />
                <span className="text-[14px] text-text-muted">{r.dates} · {r.overnight === "—" ? r.day : `Day + Overnight`}</span>
                <br />
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mt-2"
                  style={statusStyle[r.status]}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: 48 }}>
            <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-cream">
        <div className="max-w-[800px] mx-auto px-8 reveal">
          <div className="rounded-[28px] p-9 bg-cream-warm">
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>
              Voluntary <Hw>Pricing</Hw>
            </h3>
            <p className="text-[15px] text-text-body leading-[1.7]">
              Every camp offers three pricing tiers — choose the one that fits your family. Tier 1 reflects the full cost of camp. Tier 2 is partially subsidized. Tier 3 is fully subsidized. The camp experience is identical no matter what you choose.
            </p>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
