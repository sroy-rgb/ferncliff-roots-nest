import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { PricingTiers } from "@/components/site/PricingTiers";

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

function DayPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Day Camp"
        title={<>All the fun of camp, every <HeroEm>day</HeroEm></>}
        subtitle="Full days of Ferncliff adventure with the convenience of drop-off and pick-up. Runs weekly, June 1 – August 7."
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <Link to="/camp/dates" className="btn btn-outline">View Weekly Dates</Link>
        </div>
      </CampHero>

      <section className="py-[100px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="Day Camp"
            title={<>Two ways to do <Hw>day camp</Hw></>}
            subtitle="Pick the rhythm that fits your family — full day with home each night, or extend into a Thursday overnight."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-white rounded-[28px] p-9 reveal"
              style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}
            >
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4"
                style={{ background: "var(--color-teal-light)", color: "var(--color-teal)" }}
              >
                Grades 1–8
              </span>
              <h3 style={{ fontSize: 28, marginBottom: 12 }}>Day Camp</h3>
              <p className="text-[15px] text-text-body mb-3">
                Monday–Friday, 8:00 AM – 5:00 PM. Campers enjoy all the same activities as overnight campers — swimming, hiking, archery, arts &amp; crafts, Bible exploration — then go home each evening.
              </p>
              <p className="text-[14px] text-text-muted mb-2"><strong>Runs:</strong> Every week, June 1 – August 7, 2026</p>
              <PricingTiers tiers={["$250", "$200", "$150"]} />
              <Link to="/camp/register" className="btn btn-teal btn-sm mt-3">Register for Day Camp</Link>
            </div>

            <div
              className="rounded-[28px] p-9 reveal"
              style={{ background: "var(--color-gold-light)", boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}
            >
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4"
                style={{ background: "var(--color-gold)", color: "#fff" }}
              >
                New
              </span>
              <h3 style={{ fontSize: 28, marginBottom: 12 }}>Day Camp + Overnight Experience</h3>
              <p className="text-[15px] text-text-body mb-3">
                All the fun of Day Camp, but campers spend Thursday night in the cabins just like overnight campers and participate in closing programs. A great way to try overnight for the first time!
              </p>
              <p className="text-[14px] text-text-muted mb-2"><strong>Best for:</strong> First-time campers ready to try a taste of overnight</p>
              <PricingTiers tiers={["$295", "$235", "$175"]} />
              <Link to="/camp/register" className="btn btn-teal btn-sm mt-3">Register for Day + Overnight</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8">
          <blockquote className="pl-6 reveal" style={{ borderLeft: "3px solid var(--color-gold)", padding: "16px 0 16px 24px" }}>
            <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: 24 }}>
              "Day Camp gave my daughter the perfect first taste of Ferncliff. She begged to come back next summer."
            </p>
            <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Day Camp Parent, Little Rock</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-[100px] bg-offwhite text-center">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <div className="rounded-[28px] px-10 py-12" style={{ background: "var(--color-teal-ghost)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: 12 }}>
              Ready for the <Hw>best</Hw> summer days?
            </h3>
            <p className="text-text-muted mb-7">June 1 – August 7. Weekly registration open now.</p>
            <Link to="/camp/register" className="btn btn-teal">Register for Day Camp</Link>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
