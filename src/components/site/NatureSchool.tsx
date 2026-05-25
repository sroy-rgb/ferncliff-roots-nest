import { Link } from "@tanstack/react-router";
import { Tree, Star, Baby, ArrowRight } from "@phosphor-icons/react";

export function NatureSchool() {
  return (
    <section className="py-[80px] md:py-[120px] bg-offwhite">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative reveal-left order-1">
            <div
              className="rounded-[28px] overflow-hidden group"
              style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.12)" }}
            >
              <img
                src="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Young girls playing outdoors in a park"
                className="w-full h-[480px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
              />
            </div>
            <div
              className="absolute top-6 right-6 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                fontFamily: "var(--font-hand)",
                fontSize: "18px",
                color: "var(--color-teal)",
                fontWeight: 600,
                boxShadow: "0 2px 16px rgba(44,41,38,0.06)",
              }}
            >
              🌿 First in Arkansas
            </div>
          </div>

          <div className="reveal-right order-2">
            <div className="eyebrow text-teal mb-5">Nature School</div>
            <h2 className="mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Where the classroom<br />is the <span className="hw" style={{ fontSize: "1.15em" }}>forest</span>
            </h2>
            <p className="text-text-body mb-6">
              Ferncliff's Nature Preschool — the first of its kind in Arkansas — follows the forest kindergarten model. Rain or shine, our preschoolers spend their days outdoors, exploring, creating, and building a lifelong connection with the natural world.
            </p>
            <div className="flex flex-wrap gap-5 mb-8">
              {[
                [<Tree size={18} key="1" />, "Forest Kindergarten Model"],
                [<Star size={18} key="2" />, "First in Arkansas"],
                [<Baby size={18} key="3" />, "Ages 3–5"],
              ].map(([icon, label], i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-teal">{icon}</span>
                  <span className="text-[14px] font-semibold text-dark-warm">{label as string}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/nature-school" className="btn btn-teal">Explore Nature School</Link>
              <Link to="/nature-school#wildcraft" className="link-arrow">Wildcraft Programs <ArrowRight size={14} weight="bold" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
