import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero } from "@/components/site/CampHero";
import {
  CheckCircle, ShieldCheck, FirstAid, Users, Eye, Plus, Minus,
  Play, X, ArrowRight,
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
  "Your child can spend time away from home (a sleepover or grandparent's house)",
  "They're curious about nature, animals, or outdoor activities",
  "They enjoy making new friends",
  "They're excited (even a little nervous — that's normal!)",
];

const packingCategories: { title: string; items: string[] }[] = [
  { title: "Clothing", items: ["5–7 t-shirts", "Shorts", "Socks & underwear", "Swimsuit", "Rain jacket", "Long pants for evening", "Sturdy shoes (closed-toe)", "Flip flops for shower", "Hat"] },
  { title: "Bedding", items: ["Sleeping bag or sheets", "Pillow", "Blanket"] },
  { title: "Toiletries", items: ["Sunscreen", "Bug spray", "Toothbrush & toothpaste", "Soap / shampoo", "Towels (bath + beach)"] },
  { title: "Other", items: ["Water bottle (labeled)", "Flashlight", "Stamped envelopes (for letters home)", "Small backpack / daypack"] },
];

const doNotBring = ["Cell phones", "Electronics", "Expensive items", "Food (allergies)", "Pocket knives"];

const safety = [
  { icon: <ShieldCheck size={28} />, label: "ACA Accredited" },
  { icon: <FirstAid size={28} />, label: "On-site medical staff" },
  { icon: <Users size={28} />, label: "Background-checked staff" },
  { icon: <Eye size={28} />, label: "24/7 supervision" },
];

const faqs = [
  ["What if my child gets homesick?", "Homesickness is normal. Our counselors are trained to recognize and respond with care — keeping campers engaged in activities, encouraging letter writing, and giving extra reassurance. Most homesickness fades within the first day or two."],
  ["Can I call or visit during camp?", "Phone calls and visits aren't part of the camp experience — they often increase homesickness. We encourage letter writing instead, and you'll receive photo updates throughout the week."],
  ["What about food allergies and dietary needs?", "Our dining team accommodates most allergies and dietary needs. Please notify us during registration so we can plan ahead."],
  ["What is the counselor-to-camper ratio?", "We maintain a 1:6 counselor-to-camper ratio for younger campers and 1:8 for older campers, well above ACA standards."],
  ["What happens if it rains?", "Rain doesn't stop camp! We have indoor activities, covered shelters, and lots of fun backup plans. A rainy day at Ferncliff is still a great day."],
  ["Can my child be in the same cabin as a friend?", "Yes — during registration you can submit one buddy request. We do our best to honor it when both families request each other."],
  ["What is the voluntary pricing program?", "Every camp has three pricing tiers (Tier 1 full cost, Tier 2 partial, Tier 3 subsidized). You choose the price that fits your family — the camp experience is the same."],
  ["How do I register?", "Registration is handled through our secure CampBrain portal. Click Register Now on any camp page and you'll be guided through the process."],
];

const staff = [
  { name: "Sarah Mitchell", role: "Camp Director", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { name: "Daniel Brooks", role: "Program Coordinator", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { name: "Maya Chen", role: "Lead Counselor", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300" },
];

function FirstTimePage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggle = (k: string) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="New to Camp"
        title="First Time at Ferncliff?"
        subtitle="You're in the right place. Everything you need to feel confident."
      />

      {/* Is my child ready */}
      <section className="py-[80px] md:py-[120px] bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-10 reveal">
            <div className="eyebrow text-teal mb-3">Getting Started</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 38px)" }}>Is My Child Ready?</h2>
          </div>
          <ul className="space-y-4 mb-6">
            {readiness.map((r) => (
              <li key={r} className="flex items-start gap-3 reveal">
                <CheckCircle size={24} weight="fill" className="text-teal shrink-0 mt-0.5" />
                <span className="text-text-body">{r}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-muted text-[15px] italic">
            If you checked even one, they're probably ready. And our Discovery Camps are designed specifically for easing into camp life.
          </p>
        </div>
      </section>

      {/* Recommended */}
      <section className="py-[80px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-center mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Recommended First-Time Camps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { to: "/camp/discovery", title: "3-Day Discovery", desc: "A short, supported intro to overnight camp for grades 1–3." },
              { to: "/camp/day", title: "Day Camp + Overnight", desc: "Full week of day camp with one Thursday overnight for grades 1–8." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="bg-white rounded-[20px] p-7 block reveal hover:-translate-y-1 transition-transform" style={{ boxShadow: "0 8px 24px rgba(44,41,38,0.06)" }}>
                <h3 className="text-[24px] mb-2">{c.title}</h3>
                <p className="text-text-body mb-4">{c.desc}</p>
                <span className="link-arrow">Learn More <ArrowRight size={14} weight="bold" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packing list */}
      <section className="py-[80px] md:py-[120px] bg-cream">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-center mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>What to Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-[16px] p-6 reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <h3 className="text-[20px] mb-4 text-teal">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => {
                    const key = `${cat.title}:${item}`;
                    const isChecked = !!checked[key];
                    return (
                      <li key={item}>
                        <button onClick={() => toggle(key)} className="flex items-start gap-3 text-left w-full group">
                          <span
                            className="w-5 h-5 rounded-[6px] border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all"
                            style={{
                              borderColor: isChecked ? "var(--color-teal)" : "rgba(0,0,0,0.2)",
                              background: isChecked ? "var(--color-teal)" : "transparent",
                            }}
                          >
                            {isChecked && <CheckCircle size={14} weight="bold" className="text-white" />}
                          </span>
                          <span className="text-[15px]" style={{ textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "var(--color-text-muted)" : "var(--color-text-body)" }}>
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

          <div className="bg-coral-light rounded-[16px] p-6 mt-6 reveal">
            <h3 className="text-[20px] mb-4 text-coral">Do NOT Bring</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {doNotBring.map((item) => (
                <li key={item} className="flex items-center gap-2 text-text-body text-[14px]">
                  <X size={16} weight="bold" className="text-coral shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-[80px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-10 reveal">
            <div className="eyebrow text-teal mb-3">Health & Safety</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Your child is in good hands</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {safety.map((s) => (
              <div key={s.label} className="bg-white rounded-[16px] p-6 text-center reveal" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                <div className="text-teal flex justify-center mb-3">{s.icon}</div>
                <div className="font-semibold text-dark-warm text-[14px]">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-center text-[14px] max-w-[700px] mx-auto">
            A registered nurse is on duty throughout every camp session. All cabin counselors are background-checked and trained in first aid, child protection, and behavior support. We maintain low counselor-to-camper ratios at every age.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] md:py-[120px] bg-cream">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-center mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Parent FAQ</h2>
          <div className="space-y-3">
            {faqs.map(([q, a], i) => {
              const isOpen = openFaq === i;
              return (
                <div key={q} className="bg-white rounded-[12px] overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(44,41,38,0.04)" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-teal font-semibold text-[16px]">{q}</span>
                    <span className="text-teal shrink-0">{isOpen ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}</span>
                  </button>
                  <div className="overflow-hidden transition-all duration-500 ease-out" style={{ maxHeight: isOpen ? 300 : 0 }}>
                    <p className="px-6 pb-5 text-text-body text-[15px]">{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual tour */}
      <section className="py-[80px] bg-cream">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="text-center mb-6 reveal">
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Take a Virtual Tour</h2>
            <p className="text-text-muted mt-2">See where your camper will eat, sleep, play, and grow.</p>
          </div>
          <button
            className="relative w-full rounded-[20px] overflow-hidden group block reveal"
            style={{ aspectRatio: "16/9", boxShadow: "0 16px 48px rgba(44,41,38,0.15)" }}
          >
            <img src="https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Virtual tour" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
              <span className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play size={32} weight="fill" className="text-teal ml-1" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Meet staff */}
      <section className="py-[80px] bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-center mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}>Meet Our Staff</h2>
          <p className="text-center text-text-muted mb-10 max-w-[700px] mx-auto text-[15px]">
            Our summer staff are college-age leaders who are trained, background-checked, and passionate about creating a safe, faith-filled experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {staff.map((s) => (
              <div key={s.name} className="text-center reveal">
                <img src={s.img} alt={s.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
                <h3 className="text-[20px]">{s.name}</h3>
                <p className="text-teal text-[13px] font-bold uppercase tracking-[2px] mt-1">{s.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="link-arrow">Meet the Full Team <ArrowRight size={14} weight="bold" /></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] bg-cream text-center">
        <div className="max-w-[700px] mx-auto px-8 reveal">
          <h2 className="mb-6" style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>Ready to take the next step?</h2>
          <Link to="/camp/register" className="btn btn-teal">Register Now</Link>
          <p className="text-text-muted text-[14px] mt-6">
            Still have questions? Call <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> or email <a href="mailto:summercamp@ferncliff.org" className="text-gold font-semibold">summercamp@ferncliff.org</a>
          </p>
        </div>
      </section>
    </CampLayout>
  );
}
