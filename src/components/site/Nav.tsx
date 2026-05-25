import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  MoonStars, Sun, Compass, Backpack, Bed, PresentationChart,
  ForkKnife, PaperPlaneTilt, Tree, Heart, Leaf, Users, MapPin, CaretDown,
} from "@phosphor-icons/react";


const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";

type MegaItem = { icon: React.ReactNode; title: string; desc: string; to: string };
type Mega = { items: MegaItem[]; image?: string; width: number };

const campMega: Mega = {
  width: 520,
  items: [
    { icon: <MoonStars size={22} />, title: "Overnight Camp", desc: "Multi-day immersive experiences, grades 1–12", to: "/camp/overnight" },
    { icon: <Sun size={22} />, title: "Day Camp", desc: "Full-day programs for younger campers", to: "/camp/day" },
    { icon: <Compass size={22} />, title: "Specialty Camps", desc: "Adventure, arts, leadership & more", to: "/camp/specialty" },
    { icon: <Backpack size={22} />, title: "First-Time Campers", desc: "Everything you need to feel confident", to: "/camp/first-time" },
  ],
  image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=520",
};
const retreatsMega: Mega = {
  width: 520,
  items: [
    { icon: <Bed size={22} />, title: "Lodging", desc: "Hotel rooms, retreat house, cabins", to: "/retreats" },
    { icon: <PresentationChart size={22} />, title: "Meeting Spaces", desc: "Flexible rooms for groups up to 150", to: "/retreats" },
    { icon: <ForkKnife size={22} />, title: "Meals & Dining", desc: "Fresh, family-style or buffet", to: "/retreats" },
    { icon: <PaperPlaneTilt size={22} />, title: "Plan Your Retreat", desc: "Talk to our hospitality team", to: "/retreats" },
  ],
  image: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=520",
};
const natureMega: Mega = {
  width: 380,
  items: [
    { icon: <Tree size={22} />, title: "Nature Preschool", desc: "Forest kindergarten, ages 3–5", to: "/" },
    { icon: <Compass size={22} />, title: "Wildcraft & Homeschool", desc: "Programs for older learners", to: "/" },
  ],
};
const aboutMega: Mega = {
  width: 380,
  items: [
    { icon: <Heart size={22} />, title: "Our Mission", desc: "Faith, nature, and community since 1937", to: "/" },
    { icon: <Leaf size={22} />, title: "Sustainability", desc: "Arkansas's greenest non-profit", to: "/" },
    { icon: <Users size={22} />, title: "Staff & Board", desc: "The people behind Ferncliff", to: "/" },
    { icon: <MapPin size={22} />, title: "Contact & Directions", desc: "Visit us outside Little Rock", to: "/" },
  ],
};

const navItems = [
  { label: "Camp", mega: campMega, to: "/camp" },
  { label: "Retreats & Conferences", mega: retreatsMega, to: "/retreats" },
  { label: "Nature School", mega: natureMega, to: "/" },
  { label: "Outreach", mega: null as Mega | null, to: "/" },
  { label: "About", mega: aboutMega, to: "/" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-[72px] z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(253,252,250,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center shrink-0">
          <img
            src={LOGO}
            alt="Ferncliff"
            className="h-12 w-auto transition-all"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                className="px-3 py-2 text-[14px] font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
                style={{
                  color: scrolled ? "var(--color-dark-warm)" : "rgba(255,255,255,0.85)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = scrolled ? "var(--color-teal-ghost)" : "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = scrolled ? "var(--color-teal)" : "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = scrolled ? "var(--color-dark-warm)" : "rgba(255,255,255,0.85)";
                }}
              >
                {item.label}
                {item.mega && (
                  <CaretDown
                    size={12}
                    weight="bold"
                    className="transition-transform duration-300 ease-out group-hover:rotate-180"
                    style={{ color: "var(--color-gold)" }}
                  />
                )}
              </Link>
              {item.mega && <MegaMenu mega={item.mega} />}
            </div>

          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://ferncliff.campbrainregistration.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={scrolled ? "btn btn-sm btn-teal" : "btn btn-sm btn-glass"}
          >
            Register
          </a>
          <a href="#giving" className="btn btn-sm btn-coral">Give</a>
        </div>
      </div>
    </nav>
  );
}

function MegaMenu({ mega }: { mega: Mega }) {
  return (
    <div
      className="absolute left-1/2 top-full pt-3 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-x-[-50%] translate-x-[-50%] translate-y-2 group-hover:translate-y-0 transition-all duration-[350ms] ease-out"
      style={{ width: mega.width }}
    >
      <div
        className="bg-white rounded-[20px] p-7 border"
        style={{
          boxShadow: "0 16px 48px rgba(44,41,38,0.12)",
          borderColor: "rgba(0,0,0,0.04)",
        }}
      >
        <div className={`grid gap-2 ${mega.items.length > 2 && mega.width >= 520 ? "grid-cols-2" : "grid-cols-1"}`}>
          {mega.items.map((it) => (
            <Link
              key={it.title}
              to={it.to}
              className="flex items-start gap-3 p-3 rounded-[12px] hover:bg-[var(--color-teal-ghost)] transition-colors"
            >
              <span className="text-teal mt-0.5 shrink-0">{it.icon}</span>
              <span className="block">
                <span className="block font-sans text-[14px] font-bold text-dark">{it.title}</span>
                <span className="block text-[12px] text-text-muted leading-snug mt-0.5">{it.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        {mega.image && (
          <div className="mt-4 h-[120px] rounded-[12px] overflow-hidden">
            <img src={mega.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
