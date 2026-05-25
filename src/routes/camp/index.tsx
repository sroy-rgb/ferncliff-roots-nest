import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import {
  ArrowRight, ShieldCheck, Heart, Leaf, Sun, ForkKnife, Compass,
  PaintBrush, Campfire, Moon,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/")({
  head: () => ({
    meta: [
      { title: "Summer Camp — Ferncliff" },
      { name: "description", content: "Day and overnight summer camps for grades 1-12 on 1,200 acres outside Little Rock." },
      { property: "og:title", content: "Summer Camp — Ferncliff" },
      { property: "og:description", content: "Day and overnight summer camps for grades 1-12 on 1,200 acres outside Little Rock." },
    ],
  }),
  component: CampIndex,
});

const campTypes = [
  { to: "/camp/overnight", img: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=500", title: "Overnight Camp", badge: "Grades 1–12", desc: "A classic week of cabin life, outdoor adventures, Bible exploration, and lifelong friendships.", cta: "Explore Overnight" },
  { to: "/camp/day", img: "https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=500", title: "Day Camp", badge: "Grades 1–8", desc: "Full days of camp fun with drop-off and pick-up. Optional overnight add-on for a taste of cabin life.", cta: "Explore Day Camp" },
  { to: "/camp/discovery", img: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=500", title: "Discovery Camps", badge: "Grades 1–8", desc: "2–3 night starter sessions designed for first-time campers. Build confidence at your own pace.", cta: "Explore Discovery" },
  { to: "/camp/specialty", img: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=500", title: "Specialty Camps", badge: "Grades 3–12", desc: "Theme-based experiences — Hydro Water Camp, Night Owl, and more for adventurous campers.", cta: "Explore Specialty" },
  { to: "/camp/family", img: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=500", title: "Family Camps", badge: "All Ages", desc: "Weekend retreats for the whole family. Hotel-style lodging, meals, and all the fun of Ferncliff.", cta: "Explore Family" },
] as const;

const schedule = [
  { time: "7:30 AM", icon: <Sun size={20} />, label: "Rise & Shine" },
  { time: "8:00 AM", icon: <ForkKnife size={20} />, label: "Breakfast in the Dining Hall" },
  { time: "9:00 AM", icon: <Compass size={20} />, label: "Morning Activities — swimming, hiking, archery, arts & crafts" },
  { time: "12:00 PM", icon: <ForkKnife size={20} />, label: "Lunch & Rest Time" },
  { time: "1:30 PM", icon: <PaintBrush size={20} />, label: "Afternoon Activities — fishing, ropes course, farm & garden" },
  { time: "5:30 PM", icon: <ForkKnife size={20} />, label: "Dinner" },
  { time: "7:00 PM", icon: <Campfire size={20} />, label: "Evening Program — campfire, worship, games, stargazing" },
  { time: "9:00 PM", icon: <Moon size={20} />, label: "Cabin Time & Lights Out" },
];

const testimonials = [
  { quote: "My daughter came home a different person — more confident, more kind, more herself.", cite: "Camp Parent, Little Rock" },
  { quote: "The counselors genuinely cared about my son. He talks about them all year.", cite: "Camp Parent, Conway" },
  { quote: "Camp had a wonderful impact on my child's character. I can't say enough about how good it was.", cite: "Camp Parent, Jonesboro" },
];

function CampIndex() {
  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Summer Camp · Since 1937"
        title="The best week of their summer"
        subtitle="Day and overnight camps for ages 1st through 12th grade on 1,200 acres of forest, lakes, and trails."
        height="60vh"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <Link to="/camp/dates" className="btn btn-outline">View 2026 Dates</Link>
        </div>
      </CampHero>

      {/* Switchboard */}
      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8 text-center mb-12 reveal">
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Find the right camp for your camper</h2>
          <p className="text-text-muted mt-3">We offer camps for every age and experience level.</p>
        </div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex md:grid md:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
            {campTypes.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="reveal shrink-0 w-[280px] md:w-auto snap-start bg-white rounded-[20px] overflow-hidden group transition-transform"
                style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}
              >
                <div className="h-[220px] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[2px] text-teal bg-teal-ghost rounded-full px-3 py-1 mb-3">{c.badge}</span>
                  <h3 className="text-[22px] mb-2">{c.title}</h3>
                  <p className="text-[14px] text-text-muted leading-snug mb-4">{c.desc}</p>
                  <span className="link-arrow">{c.cta} <ArrowRight size={14} weight="bold" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Ferncliff different */}
      <section className="py-[80px] md:py-[120px] bg-cream">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow text-teal mb-4">Why Ferncliff</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <blockquote className="reveal pl-6 border-l-[3px] border-gold">
              <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: "28px" }}>
                "Ferncliff is a place where my kids can be themselves, unplug from screens, and come home with stories they'll tell for years."
              </p>
              <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Camp Parent, Conway, AR</cite>
            </blockquote>
            <div className="space-y-6 reveal">
              {[
                { icon: <ShieldCheck size={26} />, title: "ACA Accredited Safety Standards" },
                { icon: <Heart size={26} />, title: "Faith-Based Community" },
                { icon: <Leaf size={26} />, title: "1,200 Acres of Nature" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="text-teal shrink-0">{f.icon}</span>
                  <h3 className="text-[20px] mt-0.5">{f.title}</h3>
                </div>
              ))}
            </div>
            <div className="reveal bg-cream-warm rounded-[20px] p-7">
              <h3 className="text-[24px] mb-3">Camp for Every Family</h3>
              <p className="text-[14px] text-text-body leading-[1.7] mb-4">
                Recognizing that families have different abilities to pay, Ferncliff has a voluntary fee program. You choose the price that fits your family — Tier 1 (full cost), Tier 2 (partially subsidized), or Tier 3 (subsidized). The experience is the same no matter what you choose.
              </p>
              <a href="#" className="link-arrow">Learn More About Pricing <ArrowRight size={14} weight="bold" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* A Day at Ferncliff */}
      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-14 reveal">
            <div className="eyebrow text-teal mb-4">Daily Rhythm</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>A Day at Ferncliff</h2>
          </div>
          <ol className="relative border-l-2 border-teal-light ml-4 space-y-7">
            {schedule.map((s) => (
              <li key={s.time} className="relative pl-8 reveal">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-teal border-4 border-offwhite" />
                <div className="text-gold font-bold text-[13px] tracking-[2px] uppercase">{s.time}</div>
                <div className="flex items-start gap-3 mt-1">
                  <span className="text-teal mt-1">{s.icon}</span>
                  <p className="text-dark-warm text-[16px]">{s.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="py-[80px] bg-teal">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto">
          <div className="flex gap-6 md:grid md:grid-cols-3 snap-x snap-mandatory pb-2">
            {testimonials.map((t) => (
              <div key={t.cite} className="shrink-0 w-[300px] md:w-auto snap-start bg-white/10 backdrop-blur rounded-[16px] p-7 text-white border border-white/15">
                <p className="font-serif italic leading-[1.5]" style={{ fontSize: "20px" }}>"{t.quote}"</p>
                <cite className="block mt-4 not-italic text-[12px] opacity-75 font-sans font-semibold">— {t.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] md:py-[120px] bg-offwhite text-center">
        <div className="max-w-[800px] mx-auto px-8 reveal">
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Ready to register?</h2>
          <p className="text-text-muted mt-3 mb-8">2026 camps run June 1 – August 7</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
            <Link to="/camp/dates" className="btn btn-gold-outline">View All Dates</Link>
          </div>
          <p className="text-text-muted text-[14px] mt-8">
            Questions? Call <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> or email <a href="mailto:summercamp@ferncliff.org" className="text-gold font-semibold">summercamp@ferncliff.org</a>
          </p>
        </div>
      </section>
    </CampLayout>
  );
}
