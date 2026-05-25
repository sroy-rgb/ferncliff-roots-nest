import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import { Heart, Users, Clock, Sparkle, ArrowRight } from "@phosphor-icons/react";

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

function DiscoveryPage() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Discovery Camps"
        title="Discovery Camps"
        subtitle="Designed for first-time campers ready to try overnight on a smaller scale."
      />

      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "3-Day Discovery", meta: "3 days, 2 nights · Grades 1–3", desc: "A gentle overnight introduction. Three days of cabin life, swimming, campfires, and friendship — perfect for new campers.", dates: "June 21–23, July 5–7, July 12–15" },
              { title: "Day Camp + Overnight", meta: "Full week + Thursday night · Grades 1–8", desc: "A full week of day camp with one overnight stay on Thursday. A natural step into the overnight camp experience.", dates: "Weekly, June 1 – August 7" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-[20px] p-8 reveal" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
                <h3 className="text-[26px] mb-2">{c.title}</h3>
                <p className="text-teal font-bold text-[13px] uppercase tracking-[2px] mb-4">{c.meta}</p>
                <p className="text-text-body mb-4">{c.desc}</p>
                <div className="bg-cream rounded-[12px] p-4 mb-5">
                  <div className="text-[11px] uppercase tracking-[2px] font-bold text-gold mb-1">Dates</div>
                  <p className="text-[14px] text-dark-warm">{c.dates}</p>
                </div>
                <Link to="/camp/register" className="btn btn-teal btn-sm">Register</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-10 reveal">
            <div className="eyebrow text-teal mb-3">Confidence Building</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>What makes Discovery special</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Users size={28} />, title: "Trusted Staff", desc: "Counselors trained in supporting first-time campers." },
              { icon: <Clock size={28} />, title: "Shorter Duration", desc: "A taste of overnight without a full week." },
              { icon: <Heart size={28} />, title: "Confidence First", desc: "Activities scaled to age and comfort level." },
              { icon: <Sparkle size={28} />, title: "Real Camp Magic", desc: "All the campfires, songs, and joy in a smaller package." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-[16px] p-6 reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <div className="text-teal mb-3">{f.icon}</div>
                <h3 className="text-[18px] mb-2">{f.title}</h3>
                <p className="text-[14px] text-text-muted leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] text-center bg-offwhite">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <h2 className="mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>New to camp?</h2>
          <p className="text-text-muted mb-6">Visit our First-Time Campers hub for packing lists, parent FAQ, and a virtual tour.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/camp/first-time" className="btn btn-gold-outline">Visit First-Time Hub <ArrowRight size={14} weight="bold" /></Link>
            <Link to="/camp/register" className="btn btn-teal">Register</Link>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
