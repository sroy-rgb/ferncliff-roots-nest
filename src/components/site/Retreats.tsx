import { ArrowRight, ShieldCheck, Leaf, Lightning, CalendarCheck } from "@phosphor-icons/react";

type Card = { img: string; alt: string; badge: string; title: string; text: string; link: string };
const cards: Card[] = [
  {
    img: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Lake at golden hour",
    badge: "Lodging",
    title: "Brown Center",
    text: "36 hotel-style rooms with private bathrooms, lake views, and WiFi. Perfect for conferences and adult retreats.",
    link: "Tour the Rooms",
  },
  {
    img: "https://images.pexels.com/photos/5887849/pexels-photo-5887849.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Forest golden hour",
    badge: "Retreat House",
    title: "Retreat House",
    text: "5 bedrooms, full kitchen, dining room, and two living areas — ideal for intimate gatherings of up to 25 guests.",
    link: "Explore",
  },
  {
    img: "https://images.pexels.com/photos/1092183/pexels-photo-1092183.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Green trees",
    badge: "Cabins",
    title: "Belden Pond Cabins",
    text: "12 cabins in a wooded setting near the lake — perfect for youth retreats and camp-style group experiences.",
    link: "View Cabins",
  },
];

export function Retreats() {
  return (
    <>
      <section id="retreats" className="py-[80px] md:py-[120px] bg-cream">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow text-teal mb-4">Retreats & Conferences</div>
            <h2 className="mb-4" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
              Space to gather,<br />room to <span className="hw">grow</span>
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] mx-auto">
              Church retreats, corporate offsites, youth events, family reunions — 1,200 acres of hospitality just 15 minutes from Little Rock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {cards.map((c) => (
              <article
                key={c.title}
                className="reveal bg-white rounded-[20px] overflow-hidden transition-all duration-[400ms] hover:-translate-y-1.5 group"
                style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 16px 48px rgba(44,41,38,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(44,41,38,0.06)")}
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                  <span
                    className="absolute top-4 left-4 text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase"
                    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", letterSpacing: "1px" }}
                  >
                    {c.badge}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-sans text-[18px] font-bold text-dark mb-2">{c.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed mb-3.5">{c.text}</p>
                  <a href="#" className="link-arrow">{c.link} <ArrowRight size={14} weight="bold" /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="max-w-[700px] mx-auto mt-14 pt-12 text-center border-t border-black/5 reveal">
            <p className="font-serif italic text-dark-warm leading-[1.5]" style={{ fontSize: "24px" }}>
              "The Ferncliff team handled every detail so we could focus on what mattered — our people and our purpose. We're already planning our next retreat."
            </p>
            <cite className="block mt-3 not-italic text-[13px] text-text-muted font-semibold">
              — Retreat Coordinator, First Presbyterian Church, Little Rock
            </cite>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mt-12 reveal">
            {[
              ["150", "Guest Capacity"],
              ["42", "Hotel Rooms"],
              ["12", "Cabins"],
              ["1,200", "Acres"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="font-serif text-teal leading-none" style={{ fontSize: "48px" }}>{n}</div>
                <div className="text-[12px] font-semibold text-text-muted uppercase mt-1" style={{ letterSpacing: "1px" }}>{l}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <a href="#" className="btn btn-teal">Inquire About Your Retreat</a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-dark py-6">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap justify-center gap-x-14 gap-y-3">
          {[
            [<ShieldCheck size={20} key="1" />, "ACA Accredited"],
            [<Leaf size={20} key="2" />, "Arkansas's Greenest Non-Profit"],
            [<Lightning size={20} key="3" />, "National Energy Efficiency Award"],
            [<CalendarCheck size={20} key="4" />, "Trusted Since 1937"],
          ].map(([icon, label], i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-gold">{icon}</span>
              <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{label as string}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
