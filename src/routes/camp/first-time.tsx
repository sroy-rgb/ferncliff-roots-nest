import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import {
  CheckCircle, ShieldCheck, FirstAid, Users, Eye, ShieldStar, Heart,
  Plus, X, TShirt, Bed, Drop, Backpack, XCircle, Play, User, ArrowRight,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/first-time")({
  head: () => ({
    meta: [
      { title: "First-Time Campers — Ferncliff" },
      { name: "description", content: "Everything first-time campers and parents need: packing list, FAQ, safety, virtual tour." },
      { property: "og:title", content: "First-Time Campers — Ferncliff" },
      { property: "og:description", content: "Everything first-time campers and parents need: packing list, FAQ, safety, virtual tour." },
    ],
  }),
  component: FirstTimePage,
});

const readiness = [
  "They can spend time away from home (a sleepover or grandparent's house)",
  "They're curious about nature, animals, or outdoor activities",
  "They enjoy making new friends",
  "They're excited (even a little nervous — that's normal!)",
];

const packing: { title: string; icon: React.ReactNode; items: string[] }[] = [
  { title: "Clothing", icon: <TShirt size={18} />, items: ["5–7 t-shirts", "Shorts", "Socks & underwear", "Swimsuit", "Rain jacket", "Long pants (for evening)", "Sturdy closed-toe shoes", "Flip flops (for shower)", "Hat"] },
  { title: "Bedding & Toiletries", icon: <Bed size={18} />, items: ["Sleeping bag or sheets", "Pillow", "Blanket", "Sunscreen", "Bug spray", "Toothbrush & toothpaste", "Soap / shampoo", "Towels (bath + beach)"] },
  { title: "Other Essentials", icon: <Backpack size={18} />, items: ["Water bottle (labeled)", "Flashlight", "Stamped envelopes", "Small backpack / daypack"] },
];

const doNotBring = ["Cell phones or electronics", "Expensive items or jewelry", "Food (due to allergies)", "Pocket knives"];

const safety = [
  { icon: <ShieldCheck size={28} />, title: "ACA Accredited", desc: "Meeting the highest industry safety standards" },
  { icon: <FirstAid size={28} />, title: "On-Site Medical Staff", desc: "Nurse on duty during all camp sessions" },
  { icon: <Users size={28} />, title: "Background-Checked Staff", desc: "Every staff member screened and trained" },
  { icon: <Eye size={28} />, title: "24/7 Supervision", desc: "Counselors with campers at all times" },
  { icon: <ShieldStar size={28} />, title: "Emergency Protocols", desc: "Comprehensive plans for weather and medical events" },
  { icon: <Heart size={28} />, title: "Trained in Youth Care", desc: "Staff equipped for homesickness, conflict, inclusion" },
];

const faqs: [string, string][] = [
  ["What if my child gets homesick?", "Homesickness is completely normal and our counselors are specifically trained to help. We keep campers busy with activities, encourage letter writing, and create a warm cabin community. Most cases resolve within the first day. We'll contact you if your child needs extra support."],
  ["Can I call or visit during camp?", "To help campers settle in and build independence, we limit phone calls and visits. We encourage letter writing — it's a camp tradition! Our staff will contact you if there's anything you need to know about your child's experience."],
  ["What about food allergies and dietary needs?", "We accommodate food allergies and dietary restrictions. Please note all allergies and needs during registration, and our kitchen team will ensure your child is safely and well fed throughout their stay."],
  ["What is the counselor-to-camper ratio?", "Our ratios meet or exceed ACA standards. Each cabin group typically has 1 counselor for every 5–6 campers for younger age groups, and 1 for every 8–10 for older campers. A cabin counselor sleeps in the same cabin as their group."],
  ["What happens if it rains?", "Rain doesn't stop camp! We have indoor backup activities, covered pavilions, and honestly — some of the best camp memories happen in the rain. We only move indoors for severe weather."],
  ["Can my child be in the same cabin as a friend?", "Yes! You can make a buddy request during registration. We do our best to honor one buddy request per camper. It's also a great opportunity for kids to make new friends."],
  ["What is the voluntary pricing program?", "Ferncliff offers three pricing tiers so camp is accessible to every family. Tier 1 is the full cost, Tier 2 is partially subsidized, and Tier 3 is the most affordable option. The camp experience is identical regardless of which tier you choose."],
  ["How do I register?", "Registration is handled online through CampBrain, our secure registration partner. Click 'Register' on any camp page and you'll be guided through selecting your session, entering camper info, and choosing your pricing tier."],
];

const staff = [
  { title: "Camp Director", desc: "Leading the Ferncliff camp experience" },
  { title: "Program Coordinator", desc: "Planning daily activities and adventures" },
  { title: "Cabin Counselors", desc: "Your child's trusted guide all week" },
];

function FirstTimePage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggle = (k: string) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="First-Time Campers"
        title={<>First time at <HeroEm>Ferncliff?</HeroEm></>}
        subtitle="You're in the right place. Everything you need to feel confident — for kids and parents alike."
      >
        <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
      </CampHero>

      {/* Is my child ready */}
      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            eyebrow="First-Time Campers"
            title={<>First time at <Hw>Ferncliff?</Hw></>}
            subtitle="You're in the right place. Everything you need to feel confident — for kids and parents alike."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h3 style={{ fontSize: 28, marginBottom: 20 }}>Is my child ready for camp?</h3>
              <div className="space-y-3">
                {readiness.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <CheckCircle size={22} weight="fill" className="text-teal shrink-0" />
                    <span className="text-[15px] text-text-body">{r}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[14px] text-text-muted">
                If you checked even one, they're probably ready. Our{" "}
                <Link to="/camp/discovery" className="text-gold font-bold">Discovery Camps</Link>{" "}
                are designed specifically for easing into camp life.
              </p>
            </div>
            <div className="reveal rounded-[28px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.12)" }}>
              <img
                src="https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Family outdoors"
                style={{ width: "100%", height: 380, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packing */}
      <section className="py-[100px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            title={<>What to <Hw>Pack</Hw></>}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packing.map((cat) => (
              <div key={cat.title} className="bg-white rounded-[20px] p-6 reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <h4 className="flex items-center gap-2 font-sans font-bold text-[14px] text-dark mb-3">
                  <span className="text-teal">{cat.icon}</span> {cat.title}
                </h4>
                <ul>
                  {cat.items.map((item) => {
                    const key = `${cat.title}:${item}`;
                    const isC = !!checked[key];
                    return (
                      <li key={item}>
                        <button onClick={() => toggle(key)} className="flex items-center gap-3 w-full text-left py-1.5 px-2 rounded-[8px] hover:bg-teal-ghost transition">
                          <span
                            className="w-[22px] h-[22px] rounded-[6px] border-2 flex items-center justify-center shrink-0"
                            style={{
                              borderColor: isC ? "var(--color-teal)" : "var(--color-cream-warm)",
                              background: isC ? "var(--color-teal)" : "transparent",
                            }}
                          >
                            {isC && <span className="text-white text-[13px] font-bold">✓</span>}
                          </span>
                          <span
                            className="text-[14px]"
                            style={{
                              textDecoration: isC ? "line-through" : "none",
                              color: isC ? "var(--color-text-muted)" : "var(--color-text-body)",
                            }}
                          >
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-coral-light rounded-[20px] p-6 mt-6 reveal">
            <h4 className="flex items-center gap-2 font-sans font-bold text-[14px] text-coral mb-3">
              <XCircle size={18} /> Do NOT Bring
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {doNotBring.map((d) => (
                <div key={d} className="flex items-center gap-3 text-[14px] text-dark-soft">
                  <X size={16} weight="bold" className="text-coral shrink-0" />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro title={<>Health & <Hw>Safety</Hw></>} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {safety.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[20px] p-7 text-center reveal transition-transform hover:-translate-y-1"
                style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}
              >
                <div className="text-teal flex justify-center mb-3">{s.icon}</div>
                <h4 className="font-sans font-bold text-[15px] text-dark mb-1">{s.title}</h4>
                <p className="text-[13px] text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[100px] bg-cream">
        <div className="max-w-[800px] mx-auto px-8">
          <SectionIntro title={<>Parent <Hw>FAQ</Hw></>} />
          <div className="space-y-2">
            {faqs.map(([q, a], i) => {
              const isOpen = openFaq === i;
              return (
                <div key={q} className="bg-white rounded-[20px] overflow-hidden border border-black/5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-teal-ghost transition-colors"
                  >
                    <h3 className="font-sans font-bold text-[15px] text-teal flex-1">{q}</h3>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform"
                      style={{
                        background: "var(--color-teal-light)",
                        color: "var(--color-teal)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      <Plus size={16} weight="bold" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-400 ease-out"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <p className="px-7 pb-5 text-[14px] text-text-body leading-[1.7]">{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual tour */}
      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[1000px] mx-auto px-8 reveal">
          <button
            className="relative w-full rounded-[28px] overflow-hidden group block text-left"
            style={{ aspectRatio: "16/9", boxShadow: "0 16px 48px rgba(44,41,38,0.12)" }}
          >
            <img
              src="https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Virtual tour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }}>
              <span className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center transition-transform group-hover:scale-110 mb-4">
                <Play size={32} weight="fill" className="text-teal ml-1" />
              </span>
              <h3 className="text-white" style={{ fontSize: 28 }}>Take a Virtual Tour of Ferncliff</h3>
              <p className="text-white/80 text-[15px] mt-1">See where your camper will eat, sleep, play, and grow.</p>
            </div>
          </button>
        </div>
      </section>

      {/* Meet staff */}
      <section className="py-[100px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <SectionIntro
            title={<>Meet Our <Hw>Staff</Hw></>}
            subtitle="Our summer staff are college-age leaders who are trained, background-checked, and passionate about creating a safe, faith-filled experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((s) => (
              <div key={s.title} className="bg-white rounded-[20px] p-7 text-center reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "var(--color-cream)" }}
                >
                  <User size={36} className="text-teal" />
                </div>
                <h4 className="font-sans font-bold text-[15px] text-dark mb-1">{s.title}</h4>
                <p className="text-[13px] text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="link-arrow">Meet the Full Team <ArrowRight size={14} weight="bold" /></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8 reveal">
          <div className="rounded-[28px] px-10 py-12 text-center" style={{ background: "var(--color-teal-ghost)" }}>
            <h3 style={{ fontSize: "clamp(26px, 3vw, 34px)", marginBottom: 12 }}>
              Ready to take the next <Hw>step?</Hw>
            </h3>
            <p className="text-text-muted mb-7">2026 camps run June 1 – August 7. Spots fill quickly!</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
              <Link to="/camp/dates" className="btn btn-gold-outline">View All Dates</Link>
            </div>
            <p className="text-text-muted text-[13px] mt-6">
              Questions? Call <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> or email{" "}
              <a href="mailto:summercamp@ferncliff.org" className="text-gold font-semibold">summercamp@ferncliff.org</a>
            </p>
          </div>
        </div>
      </section>
    </CampLayout>
  );
}
