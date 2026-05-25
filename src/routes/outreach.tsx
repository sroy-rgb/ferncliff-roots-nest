import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { AnchorSubNav } from "@/components/site/AnchorSubNav";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { FirstAid, UsersThree, Package, BowlFood, Plant, HandHeart } from "@phosphor-icons/react";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach & Mission — Ferncliff" },
      { name: "description", content: "Disaster relief, mission teams, food redistribution, and community service extending Ferncliff's mission far beyond camp season." },
      { property: "og:title", content: "Outreach & Mission — Ferncliff" },
      { property: "og:description", content: "Caring for others, close to home and beyond." },
    ],
  }),
  component: OutreachPage,
});

const subnav = [
  { href: "#overview", label: "Overview" },
  { href: "#disaster", label: "Disaster Assistance" },
  { href: "#mission", label: "Mission Teams" },
  { href: "#sharing", label: "Sharing The Goods" },
  { href: "#hunger", label: "Rise Against Hunger" },
  { href: "#farmstead", label: "Farmstead" },
  { href: "#volunteer", label: "Volunteer" },
];

function OutreachPage() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <AnchorSubNav links={subnav} />

      <main style={{ paddingTop: 72 + 48 }}>
        <section id="overview">
          <CampHero
            image="https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=1920"
            eyebrow="Outreach & Mission"
            title={<>Caring for others, close to home and <HeroEm>beyond</HeroEm></>}
            subtitle="Disaster relief, mission teams, food redistribution, and community service — extending Ferncliff's mission far beyond camp season."
          >
            <a href="#volunteer" className="btn btn-teal">Get Involved</a>
          </CampHero>

          {/* Impact stats */}
          <div className="bg-dark py-14">
            <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[["50+ years", "of disaster response"], ["10,000+", "volunteers served"], ["Millions of lbs", "redistributed through Sharing The Goods"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-gold leading-none" style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>{n}</div>
                  <div className="text-[13px] font-semibold mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Split id="disaster" eyebrow="Disaster Assistance Center" title={<>A national <Hw>relief hub</Hw></>}
          imgs={[
            "https://ferncliff.org/wp-content/uploads/2023/12/camp-noahCDP-800x600.jpg",
            "https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6646836/pexels-photo-6646836.jpeg?auto=compress&cs=tinysrgb&w=600",
          ]}
          desc="Ferncliff serves as a national-level disaster relief hub for the Presbyterian Church (USA). When disasters strike — tornadoes, floods, ice storms — Ferncliff mobilizes volunteers, supplies, and housing to serve affected communities across the region."
          quote={{ text: "When the call came after the storm, we drove through the night. By morning Ferncliff had supplies staged and volunteers ready. That's what this place does — it shows up.", cite: "— Rev. Rebecca Spooner Barber" }}
          icon={<FirstAid size={28} />}
        />

        <Split id="mission" eyebrow="Mission Teams" title={<>Service for <Hw>groups of all sizes</Hw></>} reverse bg="bg-cream"
          imgs={["https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=900"]}
          desc="Year-round service opportunities for groups of all sizes. Mission teams stay at Ferncliff and serve the surrounding community through construction, renovation, environmental stewardship, and community projects."
          icon={<UsersThree size={28} />}
        />

        <Split id="sharing" eyebrow="Sharing The Goods" title={<>Product <Hw>redistribution</Hw></>}
          imgs={["https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=900"]}
          desc="A product redistribution ministry. Ferncliff receives donated goods from manufacturers and retailers and makes them available to churches, nonprofits, and communities at 80–90% below retail prices."
          icon={<Package size={28} />}
        />

        <Split id="hunger" eyebrow="Rise Against Hunger" title={<>Meal <Hw>packaging events</Hw></>} reverse bg="bg-cream"
          imgs={["https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=900"]}
          desc="Ferncliff hosts Rise Against Hunger meal packaging events, bringing together volunteers to package nutritious meals for communities facing food insecurity around the world."
          icon={<BowlFood size={28} />}
        />

        <Split id="farmstead" eyebrow="Farmstead" title={<>Growing <Hw>sustainably</Hw></>}
          imgs={["https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=900"]}
          desc="The Ferncliff Farmstead grows produce, raises animals, and teaches sustainable agriculture. Produce is used in the dining hall and shared with the community."
          icon={<Plant size={28} />}
        />

        {/* Volunteer CTA */}
        <section id="volunteer" className="py-[80px] md:py-[110px] bg-offwhite scroll-mt-32">
          <div className="max-w-[900px] mx-auto px-8">
            <div className="bg-teal-ghost rounded-[28px] p-10 md:p-16 reveal">
              <div className="text-center mb-8">
                <div className="text-teal flex justify-center mb-3"><HandHeart size={32} /></div>
                <h2 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Join our community of <Hw>service</Hw></h2>
                <p className="text-[16px] text-text-muted max-w-[520px] mx-auto">Tell us how you'd like to get involved and our outreach team will reach out within a few days.</p>
              </div>
              <VolunteerForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function Split({ id, eyebrow, title, imgs, desc, reverse, quote, icon, bg = "bg-offwhite" }: {
  id: string; eyebrow: string; title: React.ReactNode; imgs: string[]; desc: string;
  reverse?: boolean; quote?: { text: string; cite: string }; icon?: React.ReactNode; bg?: string;
}) {
  return (
    <section id={id} className={`py-[80px] md:py-[120px] ${bg} scroll-mt-32`}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
          <div className="reveal" style={{ direction: "ltr" }}>
            {imgs.length === 1 ? (
              <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
                <img src={imgs[0]} alt="" className="w-full h-[460px] object-cover" />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-[20px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
                  <img src={imgs[0]} alt="" className="w-full h-[300px] object-cover" />
                </div>
                {imgs.slice(1).map((s, i) => (
                  <div key={i} className="rounded-[14px] overflow-hidden">
                    <img src={s} alt="" className="w-full h-[150px] object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="reveal" style={{ direction: "ltr" }}>
            {icon && <div className="text-teal mb-4">{icon}</div>}
            <div className="eyebrow text-teal mb-3">{eyebrow}</div>
            <h2 className="mb-5" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>{title}</h2>
            <p className="text-text-body mb-5">{desc}</p>
            {quote && (
              <blockquote className="my-6 py-5 pl-6 border-l-[3px] border-gold">
                <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: 19 }}>"{quote.text}"</p>
                <cite className="block mt-2 not-italic font-sans text-[13px] text-text-muted font-semibold">{quote.cite}</cite>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div className="text-center py-8 bg-white rounded-[16px]">
      <p className="font-serif text-teal" style={{ fontSize: 22 }}>Thank you!</p>
      <p className="text-text-muted text-[14px] mt-2">Our outreach team will be in touch within a few days.</p>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Name" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <div className="md:col-span-2">
        <Select label="Interest Area" name="interest" options={["Disaster Response", "Mission Teams", "Sharing The Goods", "Rise Against Hunger", "Farmstead", "General"]} />
      </div>
      <div className="md:col-span-2">
        <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>Message</label>
        <textarea name="message" rows={4} className="w-full bg-white rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
      </div>
      <div className="md:col-span-2 text-center mt-2">
        <button type="submit" className="btn btn-teal">Send Message</button>
      </div>
    </form>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>{label}</label>
      <input name={name} type={type} required={required} className="w-full bg-white rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>{label}</label>
      <select name={name} className="w-full bg-white rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
