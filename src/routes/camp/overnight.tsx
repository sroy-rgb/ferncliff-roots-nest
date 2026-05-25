import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import {
  CaretDown, Bed, ForkKnife, SwimmingPool, Target, PaintBrush,
  BookOpen, DownloadSimple,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/overnight")({
  head: () => ({
    meta: [
      { title: "Overnight Camp — Ferncliff" },
      { name: "description", content: "Multi-night overnight summer camps for grades 1-12 at Ferncliff." },
      { property: "og:title", content: "Overnight Camp — Ferncliff" },
      { property: "og:description", content: "Multi-night overnight summer camps for grades 1-12 at Ferncliff." },
    ],
  }),
  component: OvernightPage,
});

type CampCard = {
  title: string;
  label: string;
  dates: string;
  duration: string;
  desc: string;
  tiers: [string, string, string];
};

const cards: CampCard[] = [
  {
    title: "Entering Grades 1st–3rd",
    label: "Discovery Overnight",
    dates: "June 21–23, July 5–7, July 12–15",
    duration: "3 days, 2 nights (Sunday–Tuesday)",
    desc: "Perfect for first-time campers! Experience traditional camp activities from swimming and campfires to the Shady Chute.",
    tiers: ["$350", "$275", "$200"],
  },
  {
    title: "Entering Grades 3rd–5th — Pathfinders",
    label: "6-day weeks",
    dates: "Balsam (June 7–12), Cedar (June 14–19), Dogwood (June 21–26), Elm (June 28–July 3), Fern (July 5–10), Gum (July 12–17)",
    duration: "6 days, 5 nights",
    desc: "Campers live in cabins with their small family group and counselors, spending days in traditional camp activities.",
    tiers: ["$595", "$475", "$350"],
  },
  {
    title: "Entering Grades 6th–8th — Trailblazers",
    label: "6-day weeks",
    dates: "Same weeks as Pathfinders",
    duration: "6 days, 5 nights",
    desc: "A more independent camp experience with expanded activities and leadership opportunities.",
    tiers: ["$625", "$495", "$365"],
  },
  {
    title: "Entering Grades 9th–12th — Summit",
    label: "6-day weeks",
    dates: "Same weeks as Pathfinders",
    duration: "6 days, 5 nights",
    desc: "The ultimate Ferncliff experience — deeper faith exploration, advanced outdoor challenges, and servant leadership.",
    tiers: ["$650", "$515", "$380"],
  },
];

const included = [
  { icon: <Bed size={26} />, label: "Cabin lodging" },
  { icon: <ForkKnife size={26} />, label: "All meals" },
  { icon: <SwimmingPool size={26} />, label: "Swimming & aquatics" },
  { icon: <Target size={26} />, label: "Archery & ropes course" },
  { icon: <PaintBrush size={26} />, label: "Arts & crafts" },
  { icon: <BookOpen size={26} />, label: "Bible exploration & worship" },
];

function OvernightPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Overnight Camp"
        title="Overnight Camp"
        subtitle="A week of cabin life, outdoor adventure, and growing in faith."
      />

      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[900px] mx-auto px-8 space-y-5">
          {cards.map((c, i) => {
            const isOpen = open === i;
            return (
              <div
                key={c.title}
                className="bg-white rounded-[20px] overflow-hidden transition-all"
                style={{
                  boxShadow: "0 8px 24px rgba(44,41,38,0.06)",
                  borderLeft: isOpen ? "4px solid var(--color-teal)" : "4px solid transparent",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div>
                    <h3 className="text-[22px] mb-1">{c.title}</h3>
                    <span className="text-[13px] text-text-muted font-semibold">{c.label}</span>
                  </div>
                  <span className="flex items-center gap-2 text-teal font-bold text-[13px]">
                    {isOpen ? "Close" : "View Details"} <CaretDown size={16} weight="bold" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 300ms" }} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: isOpen ? 800 : 0 }}
                >
                  <div className="px-6 pb-6 space-y-4 border-t border-cream-warm pt-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-[2px] font-bold text-gold mb-1">Available Sessions</div>
                      <p className="text-text-body text-[15px]">{c.dates}</p>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[2px] font-bold text-gold mb-1">Duration</div>
                      <p className="text-text-body text-[15px]">{c.duration}</p>
                    </div>
                    <p className="text-text-body text-[15px]">{c.desc}</p>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {["Tier 1 — Full Cost", "Tier 2 — Partial", "Tier 3 — Subsidized"].map((label, idx) => (
                        <div key={label} className="bg-cream rounded-[12px] p-4 text-center">
                          <div className="text-[11px] uppercase tracking-[1px] font-bold text-text-muted mb-1">{label}</div>
                          <div className="font-serif text-teal text-[26px]">{c.tiers[idx]}</div>
                        </div>
                      ))}
                    </div>
                    <Link to="/camp/register" className="btn btn-teal mt-4">Register for {c.title.split("—")[1]?.trim() || `Grades ${i + 1}`}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-[80px] bg-cream">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-10 reveal">
            <div className="eyebrow text-teal mb-3">What's Included</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Everything you need for camp</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {included.map((i) => (
              <div key={i.label} className="reveal bg-white rounded-[16px] p-6 flex items-center gap-4" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
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
              "Every year, my son counts down the days until Ferncliff. He's grown into a kind, courageous boy here."
            </p>
            <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Camp Parent, Hot Springs</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-[80px] bg-offwhite text-center">
        <div className="max-w-[800px] mx-auto px-8 reveal">
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <p className="mt-6">
            <a href="#" className="link-arrow"><DownloadSimple size={16} weight="bold" /> Download the Overnight Camp 2026 Parent Packet</a>
          </p>
        </div>
      </section>
    </CampLayout>
  );
}
