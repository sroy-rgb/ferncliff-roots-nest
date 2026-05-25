import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { AnchorSubNav } from "@/components/site/AnchorSubNav";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import {
  Tree, Compass, Backpack, Mountains, ArrowRight, Plus, Minus,
  Sun, Leaf, Baby, CalendarBlank, Star,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/nature-school")({
  head: () => ({
    meta: [
      { title: "Nature School — Ferncliff" },
      { name: "description", content: "Arkansas's first nature preschool, Wildcraft homeschool programs, and outdoor education on 1,200 acres." },
      { property: "og:title", content: "Nature School — Ferncliff" },
      { property: "og:description", content: "Where the classroom is the forest. Year-round nature education for ages 3 through adult." },
    ],
  }),
  component: NatureSchoolPage,
});

const subnav = [
  { href: "#overview", label: "Overview" },
  { href: "#preschool", label: "Nature Preschool" },
  { href: "#wildcraft", label: "Wildcraft" },
  { href: "#wild-passport", label: "WILD Passport" },
  { href: "#hike-a-thon", label: "Hike-A-Thon" },
];

const programs = [
  { icon: <Tree size={28} />, title: "Nature Preschool", desc: "Forest kindergarten for ages 3–5", href: "#preschool" },
  { icon: <Compass size={28} />, title: "Wildcraft", desc: "Weekly homeschool day program", href: "#wildcraft" },
  { icon: <Backpack size={28} />, title: "WILD Passport", desc: "Educator training & certification", href: "#wild-passport" },
  { icon: <Mountains size={28} />, title: "Hike-A-Thon", desc: "Annual fundraising trail event", href: "#hike-a-thon" },
];

const schedule = [
  { time: "8:30 AM", item: "Morning Circle (outdoors)" },
  { time: "9:00 AM", item: "Nature Exploration" },
  { time: "10:30 AM", item: "Snack & Story" },
  { time: "11:00 AM", item: "Creative Play — art, building, gardening" },
  { time: "12:00 PM", item: "Lunch" },
  { time: "12:45 PM", item: "Rest & Reflection" },
  { time: "1:30 PM", item: "Afternoon Adventure" },
  { time: "2:45 PM", item: "Closing Circle" },
];

const faqs = [
  { q: "What do they do when it rains?", a: "They go outside! With proper layers and rain gear, weather becomes part of the curriculum. Children learn that there is no bad weather, only different opportunities for exploration." },
  { q: "What should my child wear?", a: "Layers, sturdy closed-toe shoes, rain boots, and a waterproof jacket. We provide a full clothing checklist on enrollment and keep extra layers on site." },
  { q: "Is it safe?", a: "Yes. Our educators are trained in wilderness first aid, child-to-teacher ratios meet or exceed state guidelines, and our 1,200 acres are continually monitored and maintained." },
  { q: "What do they learn?", a: "Early literacy, numeracy, social-emotional skills, and natural science — all rooted in hands-on, place-based experiences that meet developmental milestones." },
  { q: "How do I enroll?", a: "Visit our enrollment page or call us at (501) 821-3063. Spots fill quickly each year; we recommend reaching out as soon as you're considering applying." },
];

function NatureSchoolPage() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <AnchorSubNav links={subnav} />

      <main style={{ paddingTop: 72 + 48 }}>
        <section id="overview">
          <CampHero
            image="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920"
            eyebrow="Nature School"
            title={<>Where the classroom is the <HeroEm>forest</HeroEm></>}
            subtitle="Arkansas's first nature preschool, Wildcraft homeschool programs, and outdoor education — year-round on 1,200 acres."
          >
            <div className="flex flex-wrap gap-4">
              <a href="https://ferncliff.campbrainregistration.com/" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Enroll Now</a>
              <a href="#preschool" className="btn btn-outline">Explore Programs</a>
            </div>
          </CampHero>

          <div className="py-[80px] md:py-[110px] bg-offwhite">
            <div className="max-w-[1200px] mx-auto px-8">
              <SectionIntro eyebrow="Programs" title={<>Four ways to <Hw>learn outside</Hw></>} subtitle="From toddlers to teachers, our programs root learners in the land." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {programs.map((p) => (
                  <a key={p.title} href={p.href} className="reveal block bg-white rounded-[20px] p-7 transition-all hover:-translate-y-1.5"
                    style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 16px 48px rgba(44,41,38,0.12)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(44,41,38,0.06)")}>
                    <div className="text-teal mb-4">{p.icon}</div>
                    <h3 className="font-sans text-[17px] font-bold text-dark mb-1.5">{p.title}</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">{p.desc}</p>
                    <div className="link-arrow mt-3">Learn More <ArrowRight size={14} weight="bold" /></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="preschool" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative reveal-left">
                <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
                  <img src="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Preschoolers in the forest" className="w-full h-[520px] object-cover" />
                </div>
                <div className="absolute top-6 right-6 px-5 py-2.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", fontFamily: "var(--font-hand)", fontSize: 18, color: "var(--color-teal)", fontWeight: 600, boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                  🌿 First in Arkansas
                </div>
              </div>
              <div className="reveal-right">
                <div className="eyebrow text-teal mb-4">Nature Preschool</div>
                <h2 className="mb-5" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>A forest <Hw>kindergarten</Hw></h2>
                <p className="text-text-body mb-6">Ferncliff's Nature Preschool follows the forest kindergarten model. Rain or shine, preschoolers ages 3–5 spend their days outdoors exploring, creating, and building a lifelong connection with the natural world.</p>
                <div className="flex flex-wrap gap-5 mb-7">
                  {[[<Tree size={18} key="1" />, "Forest Kindergarten Model"], [<Star size={18} key="2" />, "First in Arkansas"], [<Baby size={18} key="3" />, "Ages 3–5"], [<CalendarBlank size={18} key="4" />, "Year-Round"]].map(([icon, label], i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-teal">{icon}</span>
                      <span className="text-[14px] font-semibold text-dark-warm">{label as string}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="my-7 py-5 pl-6 border-l-[3px] border-gold">
                  <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: 20 }}>
                    "Our daughter learned more in a week at Nature Preschool than a month inside. She comes home muddy, happy, and full of stories about bugs and birds."
                  </p>
                  <cite className="block mt-2.5 not-italic font-sans text-[13px] text-text-muted font-semibold">— Nature Preschool Parent</cite>
                </blockquote>
                <a href="https://ferncliff.campbrainregistration.com/" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Enroll Your Child</a>
              </div>
            </div>

            {/* Daily schedule */}
            <div className="mt-20 reveal">
              <SectionIntro eyebrow="A Day in the Forest" title={<>What a <Hw>typical day</Hw> looks like</>} />
              <div className="max-w-[720px] mx-auto bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                {schedule.map((s, i) => (
                  <div key={i} className="flex items-center gap-6 px-7 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)" }}>
                    <span className="text-teal font-serif text-[18px] w-[90px] shrink-0">{s.time}</span>
                    <span className="text-[15px] text-dark-warm">{s.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-20">
              <SectionIntro eyebrow="Parent Questions" title={<>Frequently <Hw>asked</Hw></>} />
              <div className="max-w-[760px] mx-auto space-y-3">
                {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
              </div>
            </div>
          </div>
        </section>

        <SimpleSplit id="wildcraft" reverse eyebrow="Wildcraft" title={<>Homeschool <Hw>day program</Hw></>}
          img="https://images.pexels.com/photos/9302141/pexels-photo-9302141.jpeg?auto=compress&cs=tinysrgb&w=900"
          desc="Weekly nature enrichment for homeschool families. Children participate in guided outdoor learning — naturalist skills, ecology, wilderness craft, and seasonal activities on the Ferncliff campus."
          features={[[<Leaf size={18} />, "Naturalist Skills"], [<Sun size={18} />, "Seasonal Curriculum"], [<Compass size={18} />, "Place-Based"]]}
          cta={{ label: "Inquire About Wildcraft", href: "#" }}
        />

        <SimpleSplit id="wild-passport" eyebrow="WILD Passport" title={<>Educator <Hw>certification</Hw></>}
          img="https://images.pexels.com/photos/8535608/pexels-photo-8535608.jpeg?auto=compress&cs=tinysrgb&w=900"
          desc="A professional development and certification program for outdoor educators. Learn to lead nature-based programming using Ferncliff's model — taught by our experienced staff on our 1,200-acre living classroom."
          features={[[<Star size={18} />, "Professional Development"], [<Tree size={18} />, "Field-Based Training"], [<Backpack size={18} />, "Certification"]]}
          cta={{ label: "Learn About Training", href: "#" }}
          bg="bg-offwhite"
        />

        <SimpleSplit id="hike-a-thon" reverse eyebrow="Hike-A-Thon" title={<>A trail event for <Hw>nature school</Hw></>}
          img="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=900"
          desc="An annual fundraising event celebrating Ferncliff's 20+ miles of hiking trails. Participants gather pledges and hike to support Nature School programming and scholarships."
          features={[[<Mountains size={18} />, "20+ Miles of Trails"], [<CalendarBlank size={18} />, "Annual Event"]]}
          cta={{ label: "Join the Hike-A-Thon", href: "#" }}
          bg="bg-cream"
        />

        {/* Final CTA */}
        <section className="py-[80px] md:py-[110px] bg-offwhite">
          <div className="max-w-[900px] mx-auto px-8">
            <div className="bg-teal-ghost rounded-[28px] p-10 md:p-16 text-center reveal">
              <h2 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Ready to <Hw>explore?</Hw></h2>
              <p className="text-[16px] text-text-muted max-w-[520px] mx-auto mb-7">Reach out to enroll, schedule a tour, or learn more about any of our Nature School programs.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://ferncliff.campbrainregistration.com/" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Enroll Now</a>
                <a href="tel:5018213063" className="btn btn-gold-outline">Call (501) 821-3063</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-sans font-bold text-dark text-[15px]">{q}</span>
        <span className="text-teal shrink-0">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      {open && <div className="px-6 pb-6 text-[14px] text-text-muted leading-relaxed">{a}</div>}
    </div>
  );
}

function SimpleSplit({
  id, reverse, eyebrow, title, img, desc, features, cta, bg = "bg-offwhite",
}: {
  id: string; reverse?: boolean; eyebrow: string; title: React.ReactNode; img: string; desc: string;
  features: [React.ReactNode, string][]; cta: { label: string; href: string }; bg?: string;
}) {
  return (
    <section id={id} className={`py-[80px] md:py-[120px] ${bg} scroll-mt-32`}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
          <div className="reveal" style={{ direction: "ltr" }}>
            <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src={img} alt="" className="w-full h-[460px] object-cover" />
            </div>
          </div>
          <div className="reveal" style={{ direction: "ltr" }}>
            <div className="eyebrow text-teal mb-4">{eyebrow}</div>
            <h2 className="mb-5" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>{title}</h2>
            <p className="text-text-body mb-6">{desc}</p>
            <div className="flex flex-wrap gap-5 mb-7">
              {features.map(([icon, label], i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-teal">{icon}</span>
                  <span className="text-[14px] font-semibold text-dark-warm">{label}</span>
                </div>
              ))}
            </div>
            <a href={cta.href} className="btn btn-teal">{cta.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
