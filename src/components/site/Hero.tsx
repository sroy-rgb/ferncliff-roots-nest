import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Campfire, Buildings, Leaf, HandHeart, ArrowRight, ArrowSquareOut,
  PaperPlaneTilt, Heart,
} from "@phosphor-icons/react";

const POSTER = "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920";
const VIDEO = "https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_30fps.mp4";

type SubLink = { label: string; href: string };
type Path = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  subs: SubLink[];
  cta: { label: string; icon: React.ReactNode; href: string; external?: boolean };
};

const paths: Path[] = [
  {
    icon: <Campfire size={22} />,
    title: "Summer Camp",
    desc: "Day & overnight camps, Pre-K – 12th grade",
    subs: [
      { label: "Overnight Camp", href: "/camp#overnight" },
      { label: "Day Camp", href: "/camp#daycamp" },
      { label: "First-Time Campers", href: "/camp#first-time" },
    ],
    cta: { label: "Register Now", icon: <ArrowSquareOut size={14} weight="bold" />, href: "/camp/register" },
  },
  {
    icon: <Buildings size={22} />,
    title: "Retreats & Conferences",
    desc: "Groups up to 150 with full lodging & meals",
    subs: [
      { label: "View Lodging", href: "/retreats#brown-center" },
      { label: "Meeting Spaces", href: "/retreats#meeting-rooms" },
    ],
    cta: { label: "Inquire Now", icon: <PaperPlaneTilt size={14} weight="bold" />, href: "/retreats#inquire" },
  },
  {
    icon: <Leaf size={22} />,
    title: "Nature School",
    desc: "Arkansas's first nature preschool",
    subs: [
      { label: "Nature Preschool", href: "/nature-school#preschool" },
      { label: "Wildcraft Programs", href: "/nature-school#wildcraft" },
    ],
    cta: { label: "Learn More", icon: <ArrowRight size={14} weight="bold" />, href: "/nature-school" },
  },
  {
    icon: <HandHeart size={22} />,
    title: "Support Ferncliff",
    desc: "Give, volunteer, or join our mission",
    subs: [
      { label: "Make a Gift", href: "/giving" },
      { label: "Volunteer", href: "/outreach#volunteer" },
    ],
    cta: { label: "Give Today", icon: <Heart size={14} weight="bold" />, href: "/giving" },
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-[200px] md:pb-[160px]">
      {/* Video bg */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          className="w-full h-full object-cover"
        >
          <source src={VIDEO} type="video/mp4" />
          <img src={POSTER} alt="" className="w-full h-full object-cover" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,16,0.3) 0%, rgba(20,18,16,0.05) 30%, rgba(20,18,16,0.45) 65%, rgba(20,18,16,0.88) 100%), linear-gradient(90deg, rgba(20,18,16,0.5) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[640px] px-6 md:px-12">
        <div className="eyebrow text-gold mb-6">Since 1937 · 1,200 Acres</div>
        <h1
          className="text-white font-light leading-[1.08] mb-8"
          style={{ fontSize: "clamp(42px, 5.5vw, 68px)" }}
        >
          Where faith, nature &{" "}
          <em className="italic font-normal text-gold not-italic" style={{ fontStyle: "italic" }}>community</em>
          <br />
          come together
        </h1>
        <p
          className="font-light max-w-[460px] mb-10"
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px" }}
        >
          A place apart — for summer camp, retreats, nature education, and outreach — just outside Little Rock, Arkansas.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/camp" className="btn btn-teal">Explore Camp</Link>
          <Link to="/retreats" className="btn btn-outline">Plan a Retreat</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-[200px] right-12 z-[5] flex-col items-center gap-4">
        <div className="relative w-px h-12 bg-white/20 overflow-hidden">
          <span
            className="absolute left-0 w-px h-3 bg-gold"
            style={{ animation: "scrollLight 2s ease-in-out infinite" }}
          />
        </div>
        <span
          className="text-[10px] uppercase"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Discover
        </span>
      </div>

      {/* Path selector */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4">
          {paths.map((p, i) => (
            <PathItem key={p.title} path={p} isLast={i === paths.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PathItem({ path, isLast }: { path: Path; isLast: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group relative px-8 py-7 transition-colors duration-300 cursor-pointer"
      style={{
        background: hover ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.35)",
        backdropFilter: "blur(16px)",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold origin-left transition-transform duration-300"
        style={{ transform: hover ? "scaleX(1)" : "scaleX(0)" }}
      />
      <div className="flex items-center gap-2.5">
        <span className="text-gold">{path.icon}</span>
        <h3 className="font-sans text-[15px] font-bold text-white">{path.title}</h3>
      </div>
      <p className="text-[12px] mt-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>{path.desc}</p>

      <div
        className="hidden md:block overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: hover ? 200 : 0,
          opacity: hover ? 1 : 0,
          paddingTop: hover ? 16 : 0,
        }}
      >
        <div className="border-t border-white/10 pt-3 space-y-1.5">
          {path.subs.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="flex items-center gap-2 text-[13px] transition-all"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-gold)";
                e.currentTarget.style.paddingLeft = "4px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              <ArrowRight size={12} /> {s.label}
            </Link>
          ))}
          {path.cta.external ? (
            <a href={path.cta.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-gold text-[13px] font-bold">
              {path.cta.label} {path.cta.icon}
            </a>
          ) : (
            <Link to={path.cta.href} className="mt-3 inline-flex items-center gap-1.5 text-gold text-[13px] font-bold">
              {path.cta.label} {path.cta.icon}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
