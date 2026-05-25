import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { RetreatsSubNav } from "@/components/site/RetreatsSubNav";
import { CampHero } from "@/components/site/CampHero";
import {
  ArrowRight, Bed, ForkKnife, WifiHigh, Presentation, Users, House, Tree, Shower,
  CookingPot, Armchair, ChalkboardTeacher, ShieldCheck, Campfire, Target,
  Sun, CloudRain, Leaf, Clock, Coffee, Boat, Fish, Mountains, TreeStructure,
  PaintBrush, Plant, Compass, Bathtub, Thermometer, Television, Wheelchair,
} from "@phosphor-icons/react";
const Wifi = WifiHigh;

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      { title: "Retreats & Conferences — Ferncliff" },
      { name: "description", content: "Church retreats, corporate offsites, youth events, and family reunions on 1,200 acres outside Little Rock." },
      { property: "og:title", content: "Retreats & Conferences — Ferncliff" },
      { property: "og:description", content: "Church retreats, corporate offsites, youth events, and family reunions on 1,200 acres outside Little Rock." },
    ],
  }),
  component: RetreatsPage,
});

const lodgingCards = [
  { href: "#brown-center", img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Brown Center", badge: "36 Rooms · Up to 150", desc: "Hotel-style rooms with private baths, climate control, and conference space." },
  { href: "#belden", img: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Belden Cabins", badge: "12 Cabins · 12-16 each", desc: "Rustic cabins in a wooded setting, perfect for youth and camp-style groups." },
  { href: "#retreat-house", img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Retreat House", badge: "5 Bedrooms · Up to 25", desc: "A self-contained home with full kitchen for small group retreats." },
  { href: "#yurts", img: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Yurts", badge: "Glamping", desc: "Unique glamping-style lodging between cabins and tent camping." },
  { href: "#meeting-rooms", img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Williams Lodge", badge: "Meeting Space", desc: "Additional gathering space across our campus for retreats of any size." },
];

function FeatureBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-teal-ghost text-teal rounded-full px-4 py-2 text-[13px] font-semibold">
      <span>{icon}</span>{label}
    </div>
  );
}

function BrownCenterGallery() {
  const images = [
    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="rounded-[20px] overflow-hidden mb-4" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
        <img src={images[active]} alt="Brown Center" className="w-full h-[420px] object-cover transition-opacity duration-300" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.slice(1).map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i + 1)}
            className={`rounded-[12px] overflow-hidden border-2 transition ${active === i + 1 ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`}
          >
            <img src={src} alt="" className="w-full h-[90px] object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function BeldenGallery() {
  const [active, setActive] = useState(0);
  const images = [
    "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];
  return (
    <div>
      <div className="rounded-[20px] overflow-hidden mb-4" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
        <img src={images[active]} alt="Belden Cabins" className="w-full h-[420px] object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => setActive(i)} className={`rounded-[12px] overflow-hidden border-2 transition ${active === i ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`}>
            <img src={src} alt="" className="w-full h-[90px] object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RetreatHouseGallery() {
  const [active, setActive] = useState(0);
  const images = [
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];
  return (
    <div>
      <div className="rounded-[20px] overflow-hidden mb-4" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
        <img src={images[active]} alt="Retreat House" className="w-full h-[420px] object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => setActive(i)} className={`rounded-[12px] overflow-hidden border-2 transition ${active === i ? "border-teal" : "border-transparent opacity-80 hover:opacity-100"}`}>
            <img src={src} alt="" className="w-full h-[90px] object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RetreatsPage() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <RetreatsSubNav />
      <main style={{ paddingTop: 120 }}>
        {/* SECTION 1: OVERVIEW */}
        <section id="overview" style={{ scrollMarginTop: 130 }}>
          <CampHero
            image="https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1920"
            eyebrow="Retreats & Conferences"
            title="Space to gather, room to grow"
            subtitle="Church retreats, corporate offsites, youth events, family reunions — 1,200 acres of hospitality just 15 minutes from Little Rock."
            height="60vh"
          >
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="mailto:retreats@ferncliff.org" className="btn btn-teal">Inquire Now</a>
              <a href="#brown-center" className="btn btn-outline">View Facilities</a>
            </div>
          </CampHero>

          {/* Choose Your Space */}
          <div className="py-[80px] md:py-[120px] bg-offwhite">
            <div className="max-w-[1200px] mx-auto px-8 text-center mb-12 reveal">
              <div className="eyebrow text-teal mb-4">Choose Your Space</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Lodging for every kind of gathering</h2>
            </div>
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex md:grid md:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
                {lodgingCards.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="reveal shrink-0 w-[260px] md:w-auto snap-start bg-white rounded-[20px] overflow-hidden group"
                    style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}
                  >
                    <div className="h-[180px] overflow-hidden">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[2px] text-teal bg-teal-ghost rounded-full px-3 py-1 mb-3">{c.badge}</span>
                      <h3 className="text-[20px] mb-2">{c.title}</h3>
                      <p className="text-[13px] text-text-muted leading-snug mb-3">{c.desc}</p>
                      <span className="link-arrow text-[13px]">Learn More <ArrowRight size={14} weight="bold" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Why Groups Choose Ferncliff */}
          <div className="py-[80px] md:py-[120px] bg-cream">
            <div className="max-w-[1200px] mx-auto px-8">
              <div className="text-center mb-12 reveal">
                <div className="eyebrow text-teal mb-4">Why Ferncliff</div>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Why groups choose us</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <blockquote className="reveal pl-6 border-l-[3px] border-gold">
                  <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: "24px" }}>
                    "The Ferncliff team handled every detail so we could focus on what mattered — our people and our purpose."
                  </p>
                  <cite className="block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold">— Retreat Coordinator, First Presbyterian Church</cite>
                </blockquote>
                <div className="space-y-5 reveal">
                  {[
                    { icon: <Bed size={26} />, title: "Lodging for 1–150 guests" },
                    { icon: <ForkKnife size={26} />, title: "Full-service meals" },
                    { icon: <Presentation size={26} />, title: "AV-equipped meeting spaces" },
                    { icon: <Wifi size={26} />, title: "Fiber optic WiFi campus-wide" },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-4">
                      <span className="text-teal shrink-0">{f.icon}</span>
                      <h3 className="text-[18px] mt-0.5">{f.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="reveal bg-cream-warm rounded-[20px] p-7">
                  <h3 className="text-[22px] mb-4">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { n: "150", l: "Guest Capacity" },
                      { n: "36", l: "Hotel Rooms" },
                      { n: "12", l: "Cabins" },
                      { n: "5", l: "Meeting Spaces" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="font-serif text-teal" style={{ fontSize: "40px", lineHeight: 1 }}>{s.n}</div>
                        <div className="text-[12px] text-text-muted uppercase tracking-[1.5px] font-semibold mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center reveal">
                <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>Ready to plan your retreat?</h3>
                <div className="flex flex-wrap gap-4 justify-center mt-6">
                  <a href="mailto:retreats@ferncliff.org" className="btn btn-teal">Inquire Now</a>
                </div>
                <p className="text-text-muted text-[14px] mt-6">
                  <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> · <a href="mailto:retreats@ferncliff.org" className="text-gold font-semibold">retreats@ferncliff.org</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BROWN CENTER */}
        <section id="brown-center" className="py-[80px] md:py-[120px] bg-offwhite" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start">
            <div className="reveal-left">
              <BrownCenterGallery />
            </div>
            <div className="reveal-right">
              <div className="eyebrow text-teal mb-4">Premier Lodging</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Brown Center</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                The Brown Conference Center includes four buildings linked with a covered walkway. One building has the conference space (large room, small casual room, restrooms and kitchenette). The other three buildings each have 12 hotel-style rooms (36 total), most with two double beds. Five of the rooms are handicap-accessible.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <FeatureBadge icon={<Bed size={16} />} label="36 Hotel-Style Rooms" />
                <FeatureBadge icon={<Wheelchair size={16} />} label="5 ADA Accessible" />
                <FeatureBadge icon={<Bathtub size={16} />} label="Private Bathrooms" />
                <FeatureBadge icon={<Wifi size={16} />} label="WiFi in Every Room" />
                <FeatureBadge icon={<Thermometer size={16} />} label="Climate Controlled" />
                <FeatureBadge icon={<Television size={16} />} label="Cable TV" />
              </div>
              <div className="bg-cream rounded-[16px] p-5 mb-6">
                <div className="text-[12px] font-bold uppercase tracking-[2px] text-teal mb-2">Each room includes</div>
                <ul className="text-[14px] text-text-body space-y-1 list-disc list-inside">
                  <li>Private bathroom</li>
                  <li>Climate control</li>
                  <li>Cable TV & WiFi</li>
                  <li>Two double beds (most rooms)</li>
                </ul>
              </div>
              <a href="mailto:retreats@ferncliff.org" className="btn btn-teal">Inquire About Brown Center</a>
            </div>
          </div>
        </section>

        {/* SECTION 3: BELDEN */}
        <section id="belden" className="py-[80px] md:py-[120px] bg-cream" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start">
            <div className="reveal-left order-2 md:order-1">
              <div className="eyebrow text-teal mb-4">Rustic Retreat</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Belden Pond Cabins</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                12 cabins nestled in a wooded setting near the lake. Each cabin sleeps 12–16 guests in bunk-style beds. Perfect for youth retreats, team building, and camp-style group experiences. Shared bathhouse nearby.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <FeatureBadge icon={<House size={16} />} label="12 Cabins" />
                <FeatureBadge icon={<Users size={16} />} label="Sleeps 12–16 each" />
                <FeatureBadge icon={<Tree size={16} />} label="Wooded Lakeside" />
                <FeatureBadge icon={<Shower size={16} />} label="Shared Bathhouse" />
              </div>
              <div className="bg-gold-light rounded-[16px] p-5 border-l-[3px] border-gold">
                <div className="text-[12px] font-bold uppercase tracking-[2px] text-gold mb-2">Ideal For</div>
                <p className="text-[14px] text-text-body">Youth groups, church retreats, team building weekends, and groups who want the authentic camp experience.</p>
              </div>
            </div>
            <div className="reveal-right order-1 md:order-2">
              <BeldenGallery />
            </div>
          </div>
        </section>

        {/* SECTION 4: RETREAT HOUSE */}
        <section id="retreat-house" className="py-[80px] md:py-[120px] bg-offwhite" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-start">
            <div className="reveal-left">
              <RetreatHouseGallery />
            </div>
            <div className="reveal-right">
              <div className="eyebrow text-teal mb-4">Intimate Gathering</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Retreat House</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                A standalone home with 5 bedrooms, full kitchen, dining room, and two living areas. Ideal for small groups, board retreats, writing retreats, and intimate gatherings of up to 25 guests. A self-contained experience with all the comforts of home.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <FeatureBadge icon={<Bed size={16} />} label="5 Bedrooms" />
                <FeatureBadge icon={<Users size={16} />} label="Up to 25 Guests" />
                <FeatureBadge icon={<CookingPot size={16} />} label="Full Kitchen" />
                <FeatureBadge icon={<Armchair size={16} />} label="Two Living Areas" />
              </div>
              <div className="bg-gold-light rounded-[16px] p-5 border-l-[3px] border-gold">
                <div className="text-[12px] font-bold uppercase tracking-[2px] text-gold mb-2">Ideal For</div>
                <p className="text-[14px] text-text-body">Board retreats, small group getaways, writing retreats, spiritual direction groups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: YURTS */}
        <section id="yurts" className="py-[80px] md:py-[120px] bg-cream" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[900px] mx-auto px-8 text-center">
            <div className="rounded-[24px] overflow-hidden mb-8 reveal" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Yurts" className="w-full object-cover" style={{ maxHeight: 400 }} />
            </div>
            <div className="reveal">
              <div className="eyebrow text-teal mb-4">Glamping</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Yurts</h2>
              <p className="text-text-body leading-[1.75] max-w-[600px] mx-auto">
                A unique glamping-style lodging option on the Ferncliff campus. Perfect for groups looking for something between cabins and tent camping.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: MEETING ROOMS */}
        <section id="meeting-rooms" className="py-[80px] md:py-[120px] bg-cream" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-12 reveal">
              <div className="eyebrow text-teal mb-4">Conferences</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Meeting spaces for every group size</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { img: "https://images.pexels.com/photos/159806/pexels-photo-159806.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Glenn Meeting Room", desc: "Our largest meeting space, seating up to 150 theater-style or 100 classroom-style. Full AV setup, staging area, and breakout rooms nearby." },
                { img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Evergreen Hall", desc: "A flexible mid-size meeting space for groups of 40–80. Natural light, configurable seating, and direct access to outdoor spaces." },
                { img: "https://images.pexels.com/photos/1181434/pexels-photo-1181434.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Brown Center Meeting Room", desc: "Intimate meeting room within the Brown Center, perfect for groups of 20–40. Adjacent to the Brown Center Lounge for informal breakouts." },
              ].map((c) => (
                <div key={c.title} className="reveal bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
                  <div className="h-[200px] overflow-hidden"><img src={c.img} alt={c.title} className="w-full h-full object-cover" /></div>
                  <div className="p-6">
                    <h3 className="text-[22px] mb-2">{c.title}</h3>
                    <p className="text-[14px] text-text-muted leading-snug">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-12 reveal">
              <FeatureBadge icon={<Presentation size={16} />} label="Full AV Equipment" />
              <FeatureBadge icon={<Wifi size={16} />} label="Fiber Optic WiFi" />
              <FeatureBadge icon={<ChalkboardTeacher size={16} />} label="Whiteboard & Projector" />
              <FeatureBadge icon={<Armchair size={16} />} label="Flexible Seating" />
            </div>
          </div>
        </section>

        {/* SECTION 7: YOUTH RETREATS */}
        <section id="youth-retreats" className="py-[80px] md:py-[120px] bg-offwhite" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal-left rounded-[20px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src="https://images.pexels.com/photos/9299919/pexels-photo-9299919.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Youth retreat" className="w-full h-[480px] object-cover" />
            </div>
            <div className="reveal-right">
              <div className="eyebrow text-teal mb-4">Youth Groups</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Youth Retreats</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                Ferncliff is a natural fit for youth retreats — we've been hosting young people since 1937. Your group gets access to 1,200 acres of outdoor activities, flexible meeting spaces, cabin or hotel-style lodging, full meal service, and a team that knows how to support youth programming.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: <ShieldCheck size={20} />, label: "ACA-accredited campus" },
                  { icon: <Campfire size={20} />, label: "Campfire & outdoor worship spaces" },
                  { icon: <Boat size={20} />, label: "Pool & lake access" },
                  { icon: <Target size={20} />, label: "Archery, ropes course, hiking" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="text-teal">{f.icon}</span>
                    <span className="text-[15px] text-text-body">{f.label}</span>
                  </div>
                ))}
              </div>
              <blockquote className="pl-5 border-l-[3px] border-gold mb-6">
                <p className="font-serif italic text-dark-warm" style={{ fontSize: "20px", lineHeight: 1.5 }}>"Our youth group has been coming to Ferncliff for years. The staff makes it so easy — we just show up and focus on our kids."</p>
                <cite className="block mt-2 not-italic font-sans text-[12px] text-text-muted font-semibold">— Youth Pastor, Conway</cite>
              </blockquote>
              <a href="mailto:retreats@ferncliff.org" className="btn btn-teal">Inquire Now</a>
            </div>
          </div>
        </section>

        {/* SECTION 8: PAVILIONS */}
        <section id="pavilions" className="py-[80px] md:py-[120px] bg-cream" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1100px] mx-auto px-8 text-center">
            <div className="rounded-[24px] overflow-hidden mb-10 reveal" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src="https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Outdoor pavilion" className="w-full object-cover" style={{ maxHeight: 420 }} />
            </div>
            <div className="reveal max-w-[700px] mx-auto mb-10">
              <div className="eyebrow text-teal mb-4">Outdoor Spaces</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Outdoor Pavilions</h2>
              <p className="text-text-body leading-[1.75]">
                Covered outdoor spaces perfect for worship, large group gatherings, team activities, and meals in nature. Multiple pavilion options across the campus to fit groups of all sizes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: <Sun size={28} />, title: "Open-air worship space" },
                { icon: <Users size={28} />, title: "Group gathering area" },
                { icon: <CloudRain size={28} />, title: "Covered for weather protection" },
              ].map((c) => (
                <div key={c.title} className="reveal bg-white rounded-[16px] p-6 text-center" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
                  <div className="text-teal flex justify-center mb-3">{c.icon}</div>
                  <h3 className="text-[18px]">{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: MEALS */}
        <section id="meals" className="py-[80px] md:py-[120px] bg-offwhite" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal-left order-2 md:order-1">
              <div className="eyebrow text-teal mb-4">Full-Service Dining</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Meals that bring people together</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                Our dining hall serves homestyle meals buffet-style for groups of all sizes. We accommodate dietary restrictions and allergies. Meal plans are customizable to your group's schedule — breakfast, lunch, dinner, and snacks.
              </p>
              <div className="flex flex-wrap gap-2">
                <FeatureBadge icon={<ForkKnife size={16} />} label="Buffet-Style Service" />
                <FeatureBadge icon={<Leaf size={16} />} label="Dietary Accommodations" />
                <FeatureBadge icon={<Clock size={16} />} label="Flexible Meal Times" />
                <FeatureBadge icon={<Coffee size={16} />} label="Coffee & Snacks" />
              </div>
            </div>
            <div className="reveal-right order-1 md:order-2 rounded-[20px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Dining hall" className="w-full h-[480px] object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION 10: SWIMMING */}
        <section id="swimming" className="py-[80px] md:py-[120px] bg-cream" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal-left rounded-[20px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}>
              <img src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Pool" className="w-full h-[480px] object-cover" />
            </div>
            <div className="reveal-right">
              <div className="eyebrow text-teal mb-4">Aquatics</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)" }} className="mb-5">Swimming & Aquatics</h2>
              <p className="text-text-body leading-[1.75] mb-6">
                Ferncliff's pool and lake offer refreshing recreation for retreat groups. The pool is available seasonally with lifeguard supervision. Lake activities include canoeing, kayaking, and fishing.
              </p>
              <div className="flex flex-wrap gap-2">
                <FeatureBadge icon={<Boat size={16} />} label="Seasonal Pool" />
                <FeatureBadge icon={<Boat size={16} />} label="Canoeing & Kayaking" />
                <FeatureBadge icon={<Fish size={16} />} label="Fishing" />
                <FeatureBadge icon={<ShieldCheck size={16} />} label="Lifeguard on Duty" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: ACTIVITIES */}
        <section id="activities" className="py-[80px] md:py-[120px] bg-offwhite" style={{ scrollMarginTop: 130 }}>
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-12 reveal">
              <div className="eyebrow text-teal mb-4">Recreation</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Activities & recreation</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: <Target size={28} />, title: "Archery", desc: "Supervised target shooting range" },
                { icon: <Mountains size={28} />, title: "Hiking Trails", desc: "20+ miles of marked trails" },
                { icon: <TreeStructure size={28} />, title: "Ropes Course", desc: "High and low challenge elements" },
                { icon: <PaintBrush size={28} />, title: "Arts & Crafts", desc: "Creative studio space" },
                { icon: <Campfire size={28} />, title: "Campfire Circles", desc: "Multiple fire pits and worship spaces" },
                { icon: <Plant size={28} />, title: "Farm & Garden", desc: "Visit the Ferncliff Farmstead" },
                { icon: <Compass size={28} />, title: "Nature Walks", desc: "Guided and self-guided options" },
                { icon: <Users size={28} />, title: "Sports Fields", desc: "Open recreation areas" },
              ].map((a) => (
                <div key={a.title} className="reveal bg-white rounded-[16px] p-6" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
                  <div className="text-teal mb-3">{a.icon}</div>
                  <h3 className="text-[18px] mb-1">{a.title}</h3>
                  <p className="text-[13px] text-text-muted leading-snug">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <RetreatInquiryForm />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function RetreatInquiryForm() {
  const { addInquiry } = useContentStore();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ org: "", contact: "", email: "", guests: 20, dates: "", type: "Church Retreat", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      org: form.org, contact: form.contact, email: form.email,
      guests: Number(form.guests) || 0, dates: form.dates, type: form.type, message: form.message,
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ org: "", contact: "", email: "", guests: 20, dates: "", type: "Church Retreat", message: "" });
  };

  return (
    <section id="inquire" className="py-[80px] md:py-[120px] bg-offwhite">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-teal-ghost rounded-[28px] p-10 md:p-16 reveal">
          <div className="text-center mb-8">
            <div className="eyebrow text-teal mb-3">Plan Your Retreat</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }} className="mb-3">Ready to plan your retreat?</h2>
            <p className="text-text-muted max-w-[560px] mx-auto">Tell us about your group and we'll be in touch within one business day.</p>
          </div>
          {submitted && (
            <div className="mb-6 px-5 py-4 rounded-xl text-[14px]" style={{ background: "rgba(43,122,111,0.10)", color: "#236158", border: "1px solid rgba(43,122,111,0.25)" }}>
              Thank you — your inquiry has been received. Our team will reach out shortly.
            </div>
          )}
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Organization" required>
              <input required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="inp" />
            </Field>
            <Field label="Contact Name" required>
              <input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="inp" />
            </Field>
            <Field label="Email" required>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="inp" />
            </Field>
            <Field label="Estimated Guests">
              <input type="number" min={1} value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} className="inp" />
            </Field>
            <Field label="Preferred Dates">
              <input value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} placeholder="e.g. Oct 2026" className="inp" />
            </Field>
            <Field label="Retreat Type">
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="inp">
                <option>Church Retreat</option><option>Youth Retreat</option><option>Corporate</option><option>Family</option><option>Other</option>
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Tell us more">
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="inp resize-none" />
              </Field>
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4 justify-between">
              <p className="text-[13px] text-text-muted">Or reach us at <a href="mailto:retreats@ferncliff.org" className="text-gold font-semibold">retreats@ferncliff.org</a> · (501) 821-3063</p>
              <button type="submit" className="btn btn-teal">Send Inquiry</button>
            </div>
          </form>
        </div>
      </div>
      <style>{`.inp{width:100%;height:42px;padding:0 14px;border-radius:10px;border:1px solid rgba(44,41,38,0.15);background:#FFFDF9;font-size:14px;color:#2c2926;font-family:inherit}.inp:focus{outline:none;border-color:#2B7A6F}textarea.inp{height:auto;padding:12px 14px}`}</style>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">{label}{required && <span className="text-coral"> *</span>}</span>
      {children}
    </label>
  );
}

