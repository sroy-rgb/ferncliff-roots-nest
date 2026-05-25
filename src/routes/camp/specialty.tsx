import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";

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
    tag: "Water Adventure",
    tagBg: "#d4eefa",
    tagColor: "#1a6b8a",
    title: "Hydro Water Camp",
    body: "A water-focused camp week with expanded lake and pool activities — canoeing, kayaking, swimming games, water slides, and more. All the classic camp fun with extra time on the water.",
    meta: "Grades: 3rd–12th · Duration: Full week",
  },
  {
    tag: "After Dark",
    tagBg: "#e8e0f0",
    tagColor: "#6b4c8a",
    title: "Night Owl Camp",
    body: "Late-night programming, stargazing, campfire cooking, night hikes, and unique evening activities. Sleep in and stay up late — a totally different camp rhythm.",
    meta: "Grades: 6th–12th · Duration: Full week",
  },
];

function SpecialtyPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Specialty Camps"
        title={<>For the <HeroEm>adventurous</HeroEm> camper</>}
        subtitle="Theme-based camp weeks designed for older campers who want a more focused experience."
      >
        <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
      </CampHero>

      <section className="py-[100px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="Specialty Camps"
            title={<>For the <Hw>adventurous</Hw> camper</>}
            subtitle="Theme-based weeks for older campers who want a more focused experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {camps.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[28px] p-9 reveal"
                style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}
              >
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4"
                  style={{ background: c.tagBg, color: c.tagColor }}
                >
                  {c.tag}
                </span>
                <h3 style={{ fontSize: 28, marginBottom: 12 }}>{c.title}</h3>
                <p className="text-[15px] text-text-body mb-3">{c.body}</p>
                <p className="text-[14px] text-text-muted mb-5"><strong>{c.meta}</strong></p>
                <Link to="/camp/register" className="btn btn-teal btn-sm">Register for {c.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-offwhite text-center">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <div className="rounded-[28px] px-10 py-12" style={{ background: "var(--color-teal-ghost)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 32px)", marginBottom: 12 }}>
              Looking for something <Hw>different?</Hw>
            </h3>
            <p className="text-text-muted mb-7">More specialty weeks are added each season. Get on our list to hear first.</p>
            <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
