import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import { Sun, ForkKnife, PaintBrush, Bed, Compass, Heart } from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/day")({
  head: () => ({
    meta: [
      { title: "Day Camp — Ferncliff" },
      { name: "description", content: "Day camp for grades 1-8 with drop-off and pick-up, plus optional overnight add-on." },
      { property: "og:title", content: "Day Camp — Ferncliff" },
      { property: "og:description", content: "Day camp for grades 1-8 with drop-off and pick-up, plus optional overnight add-on." },
    ],
  }),
  component: DayPage,
});

const tabs = [
  {
    key: "day",
    title: "Day Camp",
    summary: "Grades 1–8 · June 1 – August 7 · Monday–Friday · 8am–5pm",
    desc: "A full day of camp activities at Ferncliff with drop-off and pick-up. Swimming, archery, arts & crafts, Bible exploration, and outdoor adventure — all the magic of camp, home each night.",
    tiers: ["$285", "$225", "$165"],
  },
  {
    key: "overnight",
    title: "Day Camp + Overnight Experience",
    summary: "Grades 1–8 · Same weekly schedule plus Thursday night",
    desc: "Same as Day Camp with the addition of a Thursday overnight in cabins and participation in closing programs. A great way to try overnight for the first time.",
    tiers: ["$345", "$275", "$200"],
  },
] as const;

const included = [
  { icon: <Sun size={24} />, label: "Full-day programming" },
  { icon: <ForkKnife size={24} />, label: "Lunch & snacks" },
  { icon: <PaintBrush size={24} />, label: "Arts & crafts" },
  { icon: <Compass size={24} />, label: "Outdoor adventure" },
  { icon: <Bed size={24} />, label: "Optional Thursday overnight" },
  { icon: <Heart size={24} />, label: "Trained counselors" },
];

function DayPage() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Day Camp"
        title="Day Camp"
        subtitle="A full day of camp — home each night."
      />

      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="flex gap-2 mb-8 bg-cream rounded-full p-1.5 w-fit">
            {tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                className="px-5 py-2.5 rounded-full text-[13px] font-bold transition-all"
                style={{
                  background: active === i ? "var(--color-teal)" : "transparent",
                  color: active === i ? "#fff" : "var(--color-text-muted)",
                }}
              >
                {t.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[20px] p-8" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
            <h2 className="text-[28px] mb-2">{tab.title}</h2>
            <p className="text-text-muted text-[14px] font-semibold mb-4">{tab.summary}</p>
            <p className="text-text-body mb-6">{tab.desc}</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Tier 1 — Full Cost", "Tier 2 — Partial", "Tier 3 — Subsidized"].map((label, idx) => (
                <div key={label} className="bg-cream rounded-[12px] p-4 text-center">
                  <div className="text-[11px] uppercase tracking-[1px] font-bold text-text-muted mb-1">{label}</div>
                  <div className="font-serif text-teal text-[26px]">{tab.tiers[idx]}</div>
                </div>
              ))}
            </div>
            <Link to="/camp/register" className="btn btn-teal">Register</Link>
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-cream">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>What's Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {included.map((i) => (
              <div key={i.label} className="bg-white rounded-[16px] p-6 flex items-center gap-4 reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <span className="text-teal">{i.icon}</span>
                <span className="font-semibold text-dark-warm">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8">
          <blockquote className="pl-6 border-l-[3px] border-gold reveal">
            <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: "26px" }}>
              "Day Camp gave my daughter the perfect first taste of Ferncliff. She begged to come back next summer."
            </p>
            <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Day Camp Parent, Little Rock</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-[80px] text-center">
        <Link to="/camp/register" className="btn btn-teal">Register for Day Camp</Link>
      </section>
    </CampLayout>
  );
}
