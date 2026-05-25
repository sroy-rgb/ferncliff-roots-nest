import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { PricingTiers } from "@/components/site/PricingTiers";
import {
  Plus, House, ForkKnife, SwimmingPool, Target, PaintBrush, BookOpen,
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

type Card = {
  badge: string;
  title: string;
  body: string;
  meta: string;
  tiers: [string, string, string];
};

const cards: Card[] = [
  {
    badge: "Grades 1–3",
    title: "3-Day Overnight Camp — Perfect for First-Timers",
    body: "Spend 3 days and 2 nights (Sunday–Tuesday) experiencing traditional camp activities — from swimming and campfires to the Shady Chute! A great entry point for younger campers.",
    meta: "Dates: June 21–23 · July 5–7 · July 12–15",
    tiers: ["$350", "$275", "$200"],
  },
  {
    badge: "Grades 3–5",
    title: "Pathfinders — Full Week Overnight",
    body: "A full week (6 days, 5 nights) of classic Ferncliff camp. Campers explore 1,200 acres, build friendships, and grow in faith through outdoor activities, Bible exploration, and worship.",
    meta: "Available weeks: Balsam (June 7–12) · Cedar (June 14–19) · Dogwood (June 21–26) · Elm (June 28–July 3) · Fern (July 5–10) · Gum (July 12–17)",
    tiers: ["$525", "$425", "$325"],
  },
  {
    badge: "Grades 6–8",
    title: "Trailblazers — Full Week Overnight",
    body: "A more independent camp experience with expanded activities and leadership opportunities. Same great Ferncliff adventure with age-appropriate challenges.",
    meta: "Available weeks: Balsam through Gum (June 7 – July 17)",
    tiers: ["$525", "$425", "$325"],
  },
  {
    badge: "Grades 9–12",
    title: "Summit — Full Week Overnight",
    body: "The ultimate Ferncliff experience — deeper faith exploration, advanced outdoor challenges, servant leadership, and preparation for the Future Counselor Training Program.",
    meta: "Available weeks: Balsam through Gum (June 7 – July 17)",
    tiers: ["$525", "$425", "$325"],
  },
];

const included = [
  { icon: <House size={28} />, title: "Cabin Lodging", desc: "Small groups with dedicated counselors" },
  { icon: <ForkKnife size={28} />, title: "All Meals", desc: "Breakfast, lunch, dinner & snacks" },
  { icon: <SwimmingPool size={28} />, title: "Swimming & Aquatics", desc: "Pool and lake activities" },
  { icon: <Target size={28} />, title: "Archery & Ropes", desc: "Challenge course and target sports" },
  { icon: <PaintBrush size={28} />, title: "Arts & Crafts", desc: "Creative expression daily" },
  { icon: <BookOpen size={28} />, title: "Bible Exploration", desc: "Small group study and worship" },
];

function OvernightPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Overnight Camp"
        title={<>A week of cabin life and growing in <HeroEm>faith</HeroEm></>}
        subtitle="Campers live in cabins with their small family group and counselors — days in traditional camp activities, evenings building independence, friendships, and lifelong memories."
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <Link to="/camp/dates" className="btn btn-outline">View 2026 Dates</Link>
        </div>
      </CampHero>

      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1000px] mx-auto px-8">
          <SectionIntro
            eyebrow="Overnight Camp"
            title={<>By age group — find the right <Hw>fit</Hw></>}
            subtitle="Every overnight camp follows the same Ferncliff rhythm — adapted to your camper's grade level."
          />

          <div className="space-y-3">
            {cards.map((c, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={c.title}
                  className="rounded-[20px] overflow-hidden bg-white border border-black/5 transition-shadow"
                  style={{ boxShadow: isOpen ? "0 8px 32px rgba(44,41,38,0.08)" : "0 2px 8px rgba(44,41,38,0.03)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-teal-ghost"
                  >
                    <span
                      className="text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ background: "var(--color-teal-light)", color: "var(--color-teal)" }}
                    >
                      {c.badge}
                    </span>
                    <h3
                      className="flex-1 text-left"
                      style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}
                    >
                      {c.title}
                    </h3>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform"
                      style={{
                        background: "var(--color-offwhite)",
                        color: "var(--color-teal)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      <Plus size={16} weight="bold" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-500 ease-out"
                    style={{ maxHeight: isOpen ? 800 : 0 }}
                  >
                    <div className="px-7 pb-7 border-t border-black/5">
                      <p className="text-[15px] text-text-body mt-4 leading-[1.7]">{c.body}</p>
                      <p className="text-[14px] text-text-body mt-3"><strong>{c.meta}</strong></p>
                      <PricingTiers tiers={c.tiers} />
                      <Link to="/camp/register" className="btn btn-teal btn-sm mt-2">Register for {c.badge}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="What's Included"
            title={<>Everything for a <Hw>great</Hw> week</>}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {included.map((i) => (
              <div
                key={i.title}
                className="bg-white rounded-[20px] p-7 text-center reveal transition-transform hover:-translate-y-1"
                style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}
              >
                <div className="text-teal flex justify-center mb-3">{i.icon}</div>
                <h4 className="font-sans font-bold text-[15px] text-dark mb-1">{i.title}</h4>
                <p className="text-[13px] text-text-muted">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8 text-center reveal">
          <div className="rounded-[28px] px-10 py-12" style={{ background: "var(--color-teal-ghost)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: 12 }}>
              Ready for a week they'll <Hw>remember?</Hw>
            </h3>
            <p className="text-text-muted mb-7 max-w-[500px] mx-auto">Spots fill quickly. Register today and lock in your week.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
              <Link to="/camp/dates" className="btn btn-gold-outline">View All Dates</Link>
            </div>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
