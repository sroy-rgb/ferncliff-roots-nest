import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/discovery")({
  head: () => ({
    meta: [
      { title: "Discovery Camps — Ferncliff" },
      { name: "description", content: "Discovery camps for first-time overnight campers. Build confidence at your own pace." },
      { property: "og:title", content: "Discovery Camps — Ferncliff" },
      { property: "og:description", content: "Discovery camps for first-time overnight campers. Build confidence at your own pace." },
    ],
  }),
  component: DiscoveryPage,
});

const why = [
  { strong: "Confidence building", text: "The overnight experience helps campers practice independence." },
  { strong: "Trusted staff support", text: "Trained counselors guide campers every step of the way." },
  { strong: "Gateway to full camp", text: "Prepares them for future Overnight Camp sessions." },
];

function DiscoveryPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Discovery Camps"
        title={<>Designed for <HeroEm>first-time</HeroEm> campers</>}
        subtitle="A shortened camp session for campers ready to try overnight on a smaller scale. Build confidence, connection, and comfort — every step of the way."
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <Link to="/camp/first-time" className="btn btn-outline">First-Time Hub</Link>
        </div>
      </CampHero>

      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="Discovery Camps"
            title={<>Designed for <Hw>first-time</Hw> campers</>}
            subtitle="A shortened camp session — all the traditional activities in a more manageable format."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div
              className="rounded-[28px] p-9 bg-white reveal"
              style={{ border: "2px solid var(--color-teal-light)", boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}
            >
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4"
                style={{ background: "var(--color-teal-light)", color: "var(--color-teal)" }}
              >
                Grades 1–3
              </span>
              <h3 style={{ fontSize: 28, marginBottom: 12 }}>3-Day Discovery</h3>
              <p className="text-[15px] text-text-body mb-3">
                3 days and 2 nights (Sunday–Tuesday). All the traditional camp activities in a shorter, more manageable format.
              </p>
              <p className="text-[14px] text-text-muted mb-5">
                <strong>Dates:</strong> June 21–23 · July 5–7 · July 12–15
              </p>
              <Link to="/camp/register" className="btn btn-teal btn-sm">Register for Discovery</Link>
            </div>

            <div className="reveal">
              <h3 style={{ fontSize: 26, marginBottom: 20 }}>Why Discovery?</h3>
              <div className="space-y-4">
                {why.map((w) => (
                  <div key={w.strong} className="flex items-start gap-3">
                    <CheckCircle size={24} weight="fill" className="text-teal shrink-0 mt-1" />
                    <div>
                      <strong className="text-dark">{w.strong}</strong>
                      <br />
                      <span className="text-[14px] text-text-muted">{w.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/camp/first-time" className="link-arrow mt-6 inline-flex">
                First-Time Camper Resources <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-cream text-center">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <div className="rounded-[28px] px-10 py-12 bg-white" style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.06)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 32px)", marginBottom: 12 }}>
              New to overnight? Start <Hw>here.</Hw>
            </h3>
            <p className="text-text-muted mb-7">Visit our First-Time Campers hub for packing lists, FAQ, and a virtual tour.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/camp/first-time" className="btn btn-gold-outline">First-Time Hub</Link>
              <Link to="/camp/register" className="btn btn-teal">Register</Link>
            </div>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
