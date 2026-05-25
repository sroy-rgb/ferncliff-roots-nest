import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import { Drop, MoonStars } from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/specialty")({
  head: () => ({
    meta: [
      { title: "Specialty Camps — Ferncliff" },
      { name: "description", content: "Theme-based camp experiences: Hydro Water Camp, Night Owl Camp, and more." },
      { property: "og:title", content: "Specialty Camps — Ferncliff" },
      { property: "og:description", content: "Theme-based camp experiences: Hydro Water Camp, Night Owl Camp, and more." },
    ],
  }),
  component: SpecialtyPage,
});

const camps = [
  {
    icon: <Drop size={32} />,
    title: "Hydro Water Camp",
    meta: "Grades 4–8 · 5 days, 4 nights",
    dates: "July 19–23",
    desc: "A water-focused camp week with expanded lake and pool activities. Canoeing, paddleboarding, swim challenges, water games, and aquatic ecology — perfect for campers who can't get enough of the water.",
    tiers: ["$595", "$475", "$350"],
  },
  {
    icon: <MoonStars size={32} />,
    title: "Night Owl Camp",
    meta: "Grades 6–12 · 5 days, 4 nights",
    dates: "July 26–30",
    desc: "Late-night programming, stargazing, campfire cooking, night hikes, and unique evening activities. Sleep in late, stay up by the fire — a camp week designed for the nocturnally inclined.",
    tiers: ["$625", "$495", "$365"],
  },
];

function SpecialtyPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Specialty Camps"
        title="Specialty Camps"
        subtitle="Theme-based experiences for adventurous campers."
      />

      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8 space-y-8">
          {camps.map((c) => (
            <div key={c.title} className="bg-white rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 reveal" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
              <div className="text-teal">{c.icon}</div>
              <div>
                <h3 className="text-[28px] mb-1">{c.title}</h3>
                <p className="text-teal font-bold text-[13px] uppercase tracking-[2px] mb-3">{c.meta}</p>
                <p className="text-text-body mb-4">{c.desc}</p>
                <div className="bg-cream rounded-[12px] p-4 mb-5">
                  <div className="text-[11px] uppercase tracking-[2px] font-bold text-gold mb-1">Dates</div>
                  <p className="text-[14px] text-dark-warm">{c.dates}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {["Tier 1", "Tier 2", "Tier 3"].map((label, idx) => (
                    <div key={label} className="bg-cream rounded-[12px] p-4 text-center">
                      <div className="text-[11px] uppercase tracking-[1px] font-bold text-text-muted mb-1">{label}</div>
                      <div className="font-serif text-teal text-[24px]">{c.tiers[idx]}</div>
                    </div>
                  ))}
                </div>
                <Link to="/camp/register" className="btn btn-teal btn-sm">Register for {c.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </CampLayout>
  );
}
