import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import { Users, Bed, ForkKnife, Sparkle, Rainbow, House } from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/family")({
  head: () => ({
    meta: [
      { title: "Family Camps & Retreats — Ferncliff" },
      { name: "description", content: "Weekend retreats for the whole family with hotel-style lodging and all camp activities." },
      { property: "og:title", content: "Family Camps & Retreats — Ferncliff" },
      { property: "og:description", content: "Weekend retreats for the whole family with hotel-style lodging and all camp activities." },
    ],
  }),
  component: FamilyPage,
});

const options = [
  {
    icon: <Rainbow size={32} />,
    title: "Rainbow Family Camp",
    meta: "All ages · Weekend retreat",
    desc: "A weekend retreat designed to welcome families of all shapes and sizes. Build community, enjoy nature, and share in worship together.",
    dates: "October 9–11, 2026",
  },
  {
    icon: <House size={32} />,
    title: "Family Retreat Weekend",
    meta: "All ages · Flexible schedule",
    desc: "A self-paced weekend with Brown Center hotel-style rooms, dining hall meals, and access to all camp activities. Come and go as your family pleases.",
    dates: "Multiple weekends — November & February",
  },
];

const features = [
  { icon: <Bed size={26} />, label: "Hotel-style rooms" },
  { icon: <ForkKnife size={26} />, label: "All meals included" },
  { icon: <Users size={26} />, label: "Flexible schedule" },
  { icon: <Sparkle size={26} />, label: "All camp activities available" },
];

function FamilyPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Family Camps"
        title="Camp isn't just for kids"
        subtitle="Weekend retreats for the whole family at Ferncliff."
      />

      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((o) => (
            <div key={o.title} className="bg-white rounded-[20px] p-8 reveal" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
              <div className="text-teal mb-4">{o.icon}</div>
              <h3 className="text-[26px] mb-1">{o.title}</h3>
              <p className="text-teal font-bold text-[13px] uppercase tracking-[2px] mb-4">{o.meta}</p>
              <p className="text-text-body mb-4">{o.desc}</p>
              <div className="bg-cream rounded-[12px] p-4 mb-5">
                <div className="text-[11px] uppercase tracking-[2px] font-bold text-gold mb-1">Dates</div>
                <p className="text-[14px] text-dark-warm">{o.dates}</p>
              </div>
              <Link to="/camp/register" className="btn btn-teal btn-sm">Register</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[80px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-center mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>What's Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.label} className="bg-white rounded-[16px] p-6 text-center reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <div className="text-teal flex justify-center mb-3">{f.icon}</div>
                <div className="font-semibold text-dark-warm text-[14px]">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
