import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { AnchorSubNav } from "@/components/site/AnchorSubNav";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { Leaf, Lightning, Recycle, SunDim, Plus, Minus, MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ferncliff Camp & Conference Center" },
      { name: "description", content: "Since 1937, Ferncliff has welcomed people into a life of caring for Creation, others, and themselves. Learn about our mission, staff, and 1,200 acres." },
      { property: "og:title", content: "About — Ferncliff" },
      { property: "og:description", content: "As an expression of God's love — our mission, sustainability, staff, and history." },
    ],
  }),
  component: AboutPage,
});

const subnav = [
  { href: "#mission", label: "Our Mission" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#staff", label: "Staff & Board" },
  { href: "#trails", label: "Trails & Walks" },
  { href: "#jobs", label: "Jobs" },
  { href: "#directions", label: "Directions" },
];

const timeline = [
  ["1937", "Founded"],
  ["1950s", "First summer camps"],
  ["1970s", "Conference center expansion"],
  ["2000s", "Nature School launch"],
  ["2020s", "Connect Inspire Transform campaign"],
];

const staff = [
  { name: "David Gill", title: "Executive Director", bio: "Leading Ferncliff into its next chapter." },
  { name: "Sarah Martinez", title: "Camp Director", bio: "Crafting unforgettable summers since 2015." },
  { name: "Michael Roberts", title: "Program Director", bio: "Building year-round programming." },
  { name: "Jenna Park", title: "Nature School Director", bio: "Forest kindergarten pioneer." },
  { name: "Tom Reynolds", title: "Facilities Director", bio: "Stewarding 1,200 acres." },
  { name: "Kimberly Graves", title: "Communications Director", bio: "Sharing the Ferncliff story." },
  { name: "Andrea Williams", title: "Development Director", bio: "Connecting donors to mission." },
  { name: "Rev. Mark Davis", title: "Hospitality Director", bio: "Welcoming every guest." },
];

const board = [
  ["Elizabeth Carter", "Chair"],
  ["Robert Allen", "Vice Chair"],
  ["Patricia Mendoza", "Treasurer"],
  ["James Wu", "Secretary"],
  ["Rev. Susan Park", "Member"],
  ["Daniel Foster", "Member"],
  ["Maria Gonzalez", "Member"],
  ["Stephen O'Connor", "Member"],
  ["Linda Becker", "Member"],
  ["Rev. John Hartman", "Member"],
];

const trails = [
  { name: "Lake Loop", distance: "1.2 mi", level: "Easy", desc: "A gentle walk circling Belden Pond — perfect for families and morning strolls." },
  { name: "Forest Cathedral", distance: "2.8 mi", level: "Moderate", desc: "Wooded trail through old-growth hardwoods. Wildflowers in spring." },
  { name: "Ridge Ramble", distance: "4.5 mi", level: "Moderate", desc: "Ridgeline route with panoramic views of the surrounding hills." },
  { name: "Wilderness Way", distance: "6.2 mi", level: "Challenging", desc: "Backcountry trail along creeks and the property's western boundary." },
  { name: "Sunset Spur", distance: "0.8 mi", level: "Easy", desc: "Short climb to a clearing with the best sunset view on the property." },
];

const jobs = [
  { title: "Summer Camp Counselor", type: "Seasonal", desc: "Live on site for the summer and lead overnight or day-camp groups." },
  { title: "Facilities Assistant", type: "Full-Time", desc: "Maintain buildings, grounds, and equipment across 1,200 acres." },
  { title: "Nature School Educator", type: "Part-Time", desc: "Lead outdoor learning sessions for ages 3–5 in our forest classroom." },
];

const levelColor: Record<string, string> = {
  Easy: "#3da87a",
  Moderate: "#c9a04a",
  Challenging: "#c46b3a",
};

function AboutPage() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <AnchorSubNav links={subnav} />

      <main style={{ paddingTop: 72 + 48 }}>
        <section id="mission">
          <CampHero
            image="https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920"
            eyebrow="Our Mission"
            title={<>As an expression of <HeroEm>God's love</HeroEm></>}
            subtitle="We welcome people into a life of caring for Creation, caring for others, and caring for themselves."
          />

          <div className="py-[80px] md:py-[110px] bg-offwhite">
            <div className="max-w-[760px] mx-auto px-8 reveal">
              <p className="font-serif" style={{ fontSize: 22, lineHeight: 1.55, color: "var(--color-dark-warm)" }}>
                Ferncliff Camp & Conference Center was established in 1937 as a ministry of the Presbyterian Church (USA). For nearly nine decades, our 1,200 acres just outside Little Rock, Arkansas have welcomed campers, retreat groups, families, and seekers of every age.
              </p>
              <p className="mt-6 text-text-body" style={{ fontSize: 17, lineHeight: 1.8 }}>
                What began as a small summer camp has grown into a year-round center for hospitality, education, and service — without ever losing the rooted, hand-built character that makes Ferncliff feel like home.
              </p>

              <div className="my-14 grid grid-cols-2 md:grid-cols-5 gap-6">
                {timeline.map(([yr, label]) => (
                  <div key={yr} className="text-center">
                    <div className="font-serif text-teal leading-none" style={{ fontSize: 30 }}>{yr}</div>
                    <div className="text-[12px] text-text-muted mt-2 font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <SectionIntro eyebrow="What We Believe" title={<>Three kinds of <Hw>care</Hw></>} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  ["Care for Creation", "We tend 1,200 acres of forest, lake, and meadow as a gift entrusted to us."],
                  ["Care for Others", "We welcome every guest, every camper, every neighbor — without exception."],
                  ["Care for Self", "We make room for rest, reflection, and the kind of quiet hard to find elsewhere."],
                ].map(([t, d]) => (
                  <div key={t} className="text-center">
                    <h3 className="font-serif text-teal mb-3" style={{ fontSize: 22 }}>{t}</h3>
                    <p className="text-[14px] text-text-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-14 py-7 pl-7 border-l-[4px] border-gold">
                <p className="font-serif italic text-dark-warm" style={{ fontSize: 26, lineHeight: 1.4 }}>
                  "You can't go to Ferncliff and walk away not different."
                </p>
                <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Rev. Rebecca Spooner Barber</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="sustainability" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionIntro eyebrow="Sustainability" title={<>1,200 acres of <Hw>stewardship</Hw></>} subtitle="Recognized as Arkansas's Greenest Non-Profit and recipient of a National Energy Efficiency Award." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-[28px] overflow-hidden reveal" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
                <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Forest landscape" className="w-full h-[480px] object-cover" />
              </div>
              <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  [<SunDim size={26} />, "Solar Panels", "Powering buildings across campus"],
                  [<Lightning size={26} />, "Geothermal Heating", "Energy-efficient climate control"],
                  [<Leaf size={26} />, "Conservation Easements", "Permanently protected acreage"],
                  [<Recycle size={26} />, "Recycling & Native Planting", "Reducing waste, restoring habitat"],
                ].map(([icon, t, d], i) => (
                  <div key={i} className="bg-white rounded-[16px] p-6" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                    <div className="text-teal mb-3">{icon}</div>
                    <h4 className="font-sans text-[15px] font-bold text-dark mb-1">{t as string}</h4>
                    <p className="text-[13px] text-text-muted leading-relaxed">{d as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="staff" className="py-[80px] md:py-[120px] bg-offwhite scroll-mt-32">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionIntro eyebrow="Staff & Board" title={<>The <Hw>people</Hw> behind Ferncliff</>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {staff.map((s) => (
                <div key={s.name} className="reveal bg-white rounded-[20px] p-6 flex items-start gap-4" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-serif text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--color-teal), #3da87a)", fontSize: 18 }}>
                    {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-sans font-bold text-dark text-[15px]">{s.name}</div>
                    <div className="text-teal text-[12px] font-semibold uppercase mt-0.5" style={{ letterSpacing: "1px" }}>{s.title}</div>
                    <p className="text-[13px] text-text-muted mt-2 leading-relaxed">{s.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-[760px] mx-auto reveal">
              <h3 className="font-serif text-center mb-6" style={{ fontSize: 26 }}>Board of Directors</h3>
              <div className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                {board.map(([name, role], i) => (
                  <div key={name} className="flex justify-between items-center px-6 py-4"
                    style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)" }}>
                    <span className="font-sans font-bold text-dark text-[14px]">{name}</span>
                    <span className="text-[12px] text-text-muted font-semibold">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="trails" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[900px] mx-auto px-8">
            <SectionIntro eyebrow="Trails & Walks" title={<>20+ miles of <Hw>marked trails</Hw></>} subtitle="Ferncliff trails are free and open to the community year-round." />
            <div className="space-y-3">
              {trails.map((t) => <TrailItem key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        <section id="jobs" className="py-[80px] md:py-[120px] bg-offwhite scroll-mt-32">
          <div className="max-w-[1000px] mx-auto px-8">
            <SectionIntro eyebrow="Jobs" title={<>Join our <Hw>team</Hw></>} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {jobs.map((j) => (
                <div key={j.title} className="reveal bg-white rounded-[20px] p-7" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-gold-light text-dark-warm mb-3">{j.type}</span>
                  <h4 className="font-sans text-[16px] font-bold text-dark mb-2">{j.title}</h4>
                  <p className="text-[13px] text-text-muted leading-relaxed mb-4">{j.desc}</p>
                  <a href="mailto:jobs@ferncliff.org" className="btn btn-sm btn-teal">Apply</a>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted text-[14px] reveal">
              Don't see your role? We're always looking for passionate people. Send your resume to{" "}
              <a href="mailto:jobs@ferncliff.org" className="text-teal font-semibold">jobs@ferncliff.org</a>.
            </p>
          </div>
        </section>

        <section id="directions" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionIntro eyebrow="Directions & Contact" title={<>Come <Hw>visit us</Hw></>} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="reveal">
                <div className="space-y-5 mb-6">
                  {[
                    [<MapPin size={20} />, "1720 Ferncliff Road, Little Rock, AR 72223"],
                    [<Phone size={20} />, "(501) 821-3063"],
                    [<EnvelopeSimple size={20} />, "info@ferncliff.org"],
                    [<Clock size={20} />, "Office: Mon–Fri, 8:30am – 4:30pm"],
                  ].map(([icon, line], i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-teal mt-0.5">{icon}</span>
                      <span className="text-[15px] text-dark-warm">{line as string}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.1)" }}>
                  <iframe
                    title="Ferncliff Map"
                    src="https://www.google.com/maps?q=1720+Ferncliff+Road,+Little+Rock,+AR+72223&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
              <div className="reveal bg-white rounded-[20px] p-8" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                <h3 className="font-serif mb-5" style={{ fontSize: 24 }}>Send us a message</h3>
                <ContactForm />
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

function TrailItem({ name, distance, level, desc }: { name: string; distance: string; level: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-[16px] overflow-hidden reveal" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <div className="flex items-center gap-3 flex-1">
          <span className="font-sans font-bold text-dark text-[15px]">{name}</span>
          <span className="text-[12px] text-text-muted font-semibold">{distance}</span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: levelColor[level] + "22", color: levelColor[level] }}>{level}</span>
        </div>
        <span className="text-teal shrink-0">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      {open && <div className="px-6 pb-5 text-[14px] text-text-muted leading-relaxed">{desc}</div>}
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <p className="font-serif text-teal" style={{ fontSize: 20 }}>Thanks! We'll be in touch soon.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      {[["Name", "name", "text"], ["Email", "email", "email"]].map(([l, n, t]) => (
        <div key={n}>
          <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>{l}</label>
          <input name={n} type={t} required className="w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }} />
        </div>
      ))}
      <div>
        <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>Subject</label>
        <select className="w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          {["General Inquiry", "Camp Question", "Retreat Inquiry", "Donation Question", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>Message</label>
        <textarea rows={4} className="w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }} />
      </div>
      <button type="submit" className="btn btn-teal w-full">Send Message</button>
    </form>
  );
}
