import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { AnchorSubNav } from "@/components/site/AnchorSubNav";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { Heart, ArrowsClockwise, Handshake, Lock, ShieldCheck, EyeSlash, ArrowRight } from "@phosphor-icons/react";

export const Route = createFileRoute("/giving")({
  head: () => ({
    meta: [
      { title: "Give to Ferncliff" },
      { name: "description", content: "Every gift grows something extraordinary. Support camp scholarships, environmental stewardship, and disaster relief." },
      { property: "og:title", content: "Every gift grows something extraordinary — Ferncliff" },
      { property: "og:description", content: "Ways to give, monthly Friends of Ferncliff, planned giving, and the Connect Inspire Transform campaign." },
    ],
  }),
  component: GivingPage,
});

const subnav = [
  { href: "#ways", label: "Ways to Give" },
  { href: "#friends", label: "Friends of Ferncliff" },
  { href: "#planned", label: "Planned Giving" },
  { href: "#campaign", label: "Campaign" },
  { href: "#tribute", label: "Tribute Donations" },
];

const amounts = [25, 50, 100, 250, 500, 1000];

function GivingPage() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <AnchorSubNav links={subnav} />

      <main style={{ paddingTop: 72 + 48 }}>
        <section id="ways">
          <CampHero
            image="https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1920"
            eyebrow="Support Ferncliff"
            title={<>Every gift grows something <HeroEm>extraordinary</HeroEm></>}
            subtitle="Your generosity sends kids to camp, protects 1,200 acres of forest, and powers disaster relief that serves communities across the country."
            height="55vh"
          />

          <div className="py-[80px] md:py-[110px] bg-cream">
            <div className="max-w-[1200px] mx-auto px-8">
              <SectionIntro eyebrow="Make a Gift" title={<>Give in a way that <Hw>fits you</Hw></>} />

              <div className="max-w-[500px] mx-auto reveal">
                <DonationCard />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                {[
                  { icon: <Heart size={28} />, color: "var(--color-coral)", bg: "bg-coral-light", title: "One-Time Gift", desc: "Support our mission today with a single donation in any amount.", cta: "Give Now", href: "#ways" },
                  { icon: <ArrowsClockwise size={28} />, color: "var(--color-teal)", bg: "bg-teal-ghost", title: "Friends of Ferncliff", desc: "Become a monthly giver and sustain Ferncliff year-round.", cta: "Join Friends", href: "#friends" },
                  { icon: <Handshake size={28} />, color: "var(--color-gold)", bg: "bg-gold-light", title: "Planned Giving", desc: "Leave a legacy through estate gifts, bequests, and charitable trusts.", cta: "Learn More", href: "#planned" },
                ].map((o) => (
                  <div key={o.title} className="reveal bg-white rounded-[20px] p-7 text-center" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                    <div className={`inline-flex w-14 h-14 rounded-full items-center justify-center mb-4 ${o.bg}`} style={{ color: o.color }}>{o.icon}</div>
                    <h3 className="font-sans text-[17px] font-bold text-dark mb-2">{o.title}</h3>
                    <p className="text-[14px] text-text-muted leading-relaxed mb-5">{o.desc}</p>
                    <a href={o.href} className="btn btn-sm btn-teal">{o.cta}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="friends" className="py-[80px] md:py-[120px] bg-offwhite scroll-mt-32">
          <div className="max-w-[900px] mx-auto px-8">
            <SectionIntro eyebrow="Friends of Ferncliff" title={<>Join the <Hw>monthly</Hw> community</>} subtitle="Join a community of monthly givers sustaining Ferncliff's mission year-round." />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[25, 50, 100, 250].map((a) => (
                <div key={a} className="bg-white rounded-[16px] p-6 text-center reveal" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                  <div className="font-serif text-teal" style={{ fontSize: 32 }}>${a}</div>
                  <div className="text-[12px] text-text-muted font-semibold uppercase mt-1" style={{ letterSpacing: "1px" }}>per month</div>
                </div>
              ))}
            </div>
            <div className="bg-cream rounded-[20px] p-8 reveal">
              <h4 className="font-serif mb-4" style={{ fontSize: 22 }}>Member Benefits</h4>
              <ul className="space-y-2 text-[15px] text-dark-warm">
                <li>• Quarterly updates and behind-the-scenes stories</li>
                <li>• Invitation to the annual Friends dinner</li>
                <li>• Recognition on the Friends of Ferncliff wall</li>
                <li>• First access to special events and programs</li>
              </ul>
              <a href="#" className="btn btn-teal mt-6">Become a Friend</a>
            </div>
          </div>
        </section>

        <section id="planned" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[860px] mx-auto px-8 text-center reveal">
            <SectionIntro eyebrow="Planned Giving" title={<>Leave a <Hw>lasting legacy</Hw></>} />
            <p className="text-[16px] text-text-body leading-relaxed mb-7">
              A planned gift through your estate, will, charitable trust, or beneficiary designation ensures that Ferncliff's mission continues for future generations. Whether you're naming Ferncliff in your will, setting up a charitable remainder trust, or designating us as a beneficiary, our team can help you find the right approach.
            </p>
            <a href="mailto:development@ferncliff.org" className="btn btn-teal">Contact Development</a>
          </div>
        </section>

        <section id="campaign" className="py-[80px] md:py-[120px] bg-offwhite scroll-mt-32">
          <div className="max-w-[1100px] mx-auto px-8">
            <SectionIntro eyebrow="Capital Campaign" title={<>Connect, Inspire, <Hw>Transform</Hw></>} subtitle="A multi-year campaign investing in Ferncliff's next chapter — new facilities, expanded programs, and environmental stewardship." />
            <CampaignProgress />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {[
                { title: "New Facilities", desc: "Expanded lodging, updated meeting spaces, and a new welcome center." },
                { title: "Expanded Programs", desc: "More camp scholarships, year-round Nature School growth, and outreach." },
                { title: "Stewardship", desc: "Solar expansion, trail restoration, and continued land conservation." },
              ].map((p) => (
                <div key={p.title} className="reveal bg-white rounded-[20px] p-7" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
                  <h4 className="font-sans text-[16px] font-bold text-dark mb-2">{p.title}</h4>
                  <p className="text-[14px] text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 reveal">
              <a href="#" className="btn btn-gold-outline mr-3">Learn About the Campaign</a>
              <a href="#ways" className="link-arrow inline-flex">Support This Campaign <ArrowRight size={14} weight="bold" /></a>
            </div>
          </div>
        </section>

        <section id="tribute" className="py-[80px] md:py-[120px] bg-cream scroll-mt-32">
          <div className="max-w-[760px] mx-auto px-8 text-center reveal">
            <SectionIntro eyebrow="Tribute Donations" title={<>Honor someone <Hw>special</Hw></>} />
            <p className="text-[16px] text-text-body leading-relaxed mb-7">
              Make a gift in memory or in honor of someone who has shaped your life. We'll send a notification to the person or family of your choice, and your tribute will help fuel Ferncliff's mission.
            </p>
            <a href="https://ferncliff.donorperfect.org/" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Make a Tribute Gift</a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function DonationCard() {
  const [freq, setFreq] = useState<"one" | "monthly">("one");
  const [amt, setAmt] = useState(50);
  return (
    <div className="bg-white rounded-[28px] p-8 md:p-10" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.12)" }}>
      <h3 className="font-serif text-dark mb-1.5" style={{ fontSize: 26 }}>Make your gift</h3>
      <p className="text-[13px] text-text-muted mb-6">Secure · You never leave ferncliff.org</p>

      <div className="flex gap-1 p-1 rounded-full mb-5 bg-cream-warm">
        {(["one", "monthly"] as const).map((k) => (
          <button key={k} onClick={() => setFreq(k)} className="flex-1 py-2.5 rounded-full text-[13px] font-bold transition-colors"
            style={{ background: freq === k ? "var(--color-teal)" : "transparent", color: freq === k ? "#fff" : "var(--color-text-muted)" }}>
            {k === "one" ? "One-Time" : "Monthly"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {amounts.map((a) => (
          <button key={a} onClick={() => setAmt(a)} className="py-3.5 rounded-[12px] font-serif transition-colors"
            style={{
              background: amt === a ? "var(--color-teal)" : "var(--color-offwhite)",
              color: amt === a ? "#fff" : "var(--color-dark-warm)",
              border: `1px solid ${amt === a ? "var(--color-teal)" : "rgba(0,0,0,0.08)"}`,
              fontSize: 22,
            }}>
            ${a.toLocaleString()}
          </button>
        ))}
      </div>

      <button className="w-full py-4 rounded-full bg-coral text-white font-sans font-bold transition-all hover:-translate-y-0.5"
        style={{ fontSize: 16, boxShadow: "0 4px 20px rgba(201,107,60,0.3)" }}>
        Donate ${amt}{freq === "monthly" ? "/mo" : ""} →
      </button>

      <div className="flex justify-center gap-5 mt-4">
        {[[<Lock size={12} key="1" />, "SSL Encrypted"], [<ShieldCheck size={12} key="2" />, "PCI Compliant"], [<EyeSlash size={12} key="3" />, "Private"]].map(([icon, label], i) => (
          <span key={i} className="flex items-center gap-1 text-[11px] text-text-muted">{icon} {label as string}</span>
        ))}
      </div>
    </div>
  );
}

function CampaignProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setProgress(80); io.disconnect(); } }), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="bg-white rounded-[24px] p-8 md:p-10 reveal" style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}>
      <div className="h-4 bg-cream rounded-full overflow-hidden mb-3">
        <div className="h-full rounded-full transition-all ease-out"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--color-teal), #3da87a)", transitionDuration: "2000ms" }} />
      </div>
      <div className="flex justify-between text-[13px] font-semibold text-text-muted">
        <span>$0</span>
        <span className="text-teal">80% of $7.6M raised</span>
        <span>$7.6M</span>
      </div>
    </div>
  );
}
