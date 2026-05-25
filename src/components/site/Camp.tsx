import { Sun, Users, ShieldCheck, Tree, Backpack, ArrowRight } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function Camp() {
  return (
    <section id="camp" className="py-[80px] md:py-[120px] bg-offwhite">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <div className="relative reveal-left">
            <div
              className="rounded-[28px] overflow-hidden group"
              style={{ boxShadow: "0 16px 48px rgba(44,41,38,0.12)" }}
            >
              <img
                src="https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Kids setting up a tent at camp"
                className="w-full h-[520px] object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            {/* Floating stat */}
            <div
              className="bg-white rounded-[20px] px-7 py-5 flex items-center gap-4 md:absolute md:-bottom-6 md:-right-6 md:z-[2] relative -mt-6 md:mt-0 mx-4 md:mx-0"
              style={{ boxShadow: "0 8px 32px rgba(44,41,38,0.08)" }}
            >
              <Stat n="1,600+" label="Campers each summer" />
              <div className="w-px h-10 bg-cream-warm" />
              <Stat n="40+" label="Summer staff" />
            </div>
          </div>

          {/* Right text */}
          <div className="reveal-right">
            <div className="eyebrow text-teal mb-5">Summer Camp</div>
            <h2 className="mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              The best week of their <span className="hw" style={{ fontSize: "1.15em" }}>summer</span>
            </h2>
            <p className="text-text-body mb-2">
              From Pre-K through 12th grade, Ferncliff camps are where kids unplug, explore, and grow. Rooted in faith and 1,200 acres of nature, our ACA-accredited programs build friendships that last a lifetime.
            </p>

            <blockquote
              className="my-7 py-6 pl-6 border-l-[3px] border-gold"
            >
              <p
                className="font-serif italic text-dark-warm leading-[1.5]"
                style={{ fontSize: "22px" }}
              >
                "My daughter came home a different person — more confident, more kind, more herself. Ferncliff gave her something we couldn't."
              </p>
              <cite className="block mt-2.5 not-italic font-sans text-[13px] text-text-muted font-semibold">
                — Ferncliff Camp Parent, Little Rock
              </cite>
            </blockquote>

            <div className="flex flex-wrap gap-5 my-7 mb-9">
              <Badge icon={<Sun size={18} />} label="Day & Overnight" />
              <Badge icon={<Users size={18} />} label="Pre-K – 12th Grade" />
              <Badge icon={<ShieldCheck size={18} />} label="ACA Accredited" />
              <Badge icon={<Tree size={18} />} label="1,200 Acres" />
            </div>

            <div className="bg-gold-light rounded-[12px] px-6 py-5 mb-8 flex items-start gap-4">
              <Backpack size={24} weight="regular" className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] text-dark-soft">
                  <strong className="font-bold">First time at Ferncliff?</strong> We've got everything you need to feel confident about your child's experience.
                </p>
                <Link to="/camp/first-time" className="link-arrow mt-1.5">
                  First-Time Camper Guide <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>

            <a
              href="https://ferncliff.campbrainregistration.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal"
            >
              Register for Camp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-teal leading-none" style={{ fontSize: "36px", fontWeight: 500 }}>{n}</div>
      <div className="text-[12px] font-semibold text-text-muted mt-1">{label}</div>
    </div>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-teal">{icon}</span>
      <span className="text-[14px] font-semibold text-dark-warm">{label}</span>
    </div>
  );
}
