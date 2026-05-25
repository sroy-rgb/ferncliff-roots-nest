import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";

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

const camps = [
  {
    title: "Rainbow Family Camp",
    body: "A weekend celebrating families of all shapes and sizes. Enjoy camp activities together in a welcoming, inclusive environment.",
    meta: "October 9–11, 2026",
  },
  {
    title: "Family Retreat Weekend",
    body: "Flexible schedules, Brown Center hotel-style rooms, dining hall meals, and your choice of activities — swimming, hiking, archery, arts & crafts, and more.",
    meta: "Multiple weekends — November & February",
  },
];

function FamilyPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Family Camps"
        title={<>Camp isn't just for <HeroEm>kids</HeroEm></>}
        subtitle="Weekend retreats for the whole family — hotel-style lodging, meals in the dining hall, and all the fun of Ferncliff together."
      >
        <Link to="/camp/register" className="btn btn-teal">Inquire Now</Link>
      </CampHero>

      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="Family Camps"
            title={<>Camp isn't just for <Hw>kids</Hw></>}
            subtitle="Weekend retreats for the whole family — hotel-style lodging, meals in the dining hall, and all the fun of Ferncliff together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {camps.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[28px] p-9 reveal"
                style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}
              >
                <h3 style={{ fontSize: 28, marginBottom: 12 }}>{c.title}</h3>
                <p className="text-[15px] text-text-body mb-3">{c.body}</p>
                <p className="text-[14px] text-text-muted mb-5"><strong>Dates:</strong> {c.meta}</p>
                <Link to="/camp/register" className="btn btn-teal btn-sm">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-cream text-center">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <div className="rounded-[28px] px-10 py-12 bg-white" style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 32px)", marginBottom: 12 }}>
              Bring the whole <Hw>family</Hw>
            </h3>
            <p className="text-text-muted mb-7">Questions about a weekend that fits your group? We'd love to help.</p>
            <Link to="/camp/register" className="btn btn-teal">Get in Touch</Link>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
