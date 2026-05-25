import { FirstAid, UsersThree, Package, HandHeart } from "@phosphor-icons/react";

const items = [
  { icon: <FirstAid size={32} />, title: "Disaster Assistance", desc: "National-level relief hub for Presbyterian Church USA" },
  { icon: <UsersThree size={32} />, title: "Mission Teams", desc: "Year-round service for groups of all sizes" },
  { icon: <Package size={32} />, title: "Sharing The Goods", desc: "Product redistribution at 80-90% discounts" },
  { icon: <HandHeart size={32} />, title: "Volunteer", desc: "Join our community of service" },
];

export function Outreach() {
  return (
    <section className="py-[80px] md:py-[120px] bg-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow text-teal mb-4">Outreach & Mission</div>
          <h2 className="mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Caring for others,<br />close to home & <span className="hw">beyond</span>
          </h2>
          <p className="text-[17px] text-text-muted max-w-[520px] mx-auto">
            From disaster relief to community food programs, Ferncliff extends its mission far beyond camp season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal relative bg-white rounded-[20px] pt-9 px-6 pb-7 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group"
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(44,41,38,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms]" />
              <div className="flex justify-center text-teal mb-4">{it.icon}</div>
              <h4 className="font-sans text-[16px] font-bold text-dark mb-1.5">{it.title}</h4>
              <p className="text-[13px] text-text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#" className="btn btn-teal">Explore Outreach Programs</a>
        </div>
      </div>
    </section>
  );
}
