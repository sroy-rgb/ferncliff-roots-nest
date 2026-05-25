import { Link } from "@tanstack/react-router";

const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Explore", links: [["Camp", "/camp"], ["Retreats & Conferences", "/retreats"], ["Nature School", "/nature-school"], ["Outreach", "/outreach"], ["Store", "https://www.ferncliffstore.org/"]] },
  { title: "Support", links: [["Ways to Give", "/giving"], ["Friends of Ferncliff", "/giving#friends"], ["Transform Campaign", "/giving#campaign"], ["Volunteer", "/outreach#volunteer"]] },
  { title: "About", links: [["Our Mission", "/about#mission"], ["Staff & Board", "/about#staff"], ["Blog & Stories", "/stories"], ["Jobs", "/about#jobs"], ["Contact", "/about#directions"]] },
];

export function Footer() {
  return (
    <footer className="bg-dark pt-[72px] pb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <img src={LOGO} alt="Ferncliff" className="h-11 w-auto" style={{ filter: "brightness(0) invert(1)", opacity: 0.75 }} />
            <p className="text-[14px] mt-4 max-w-[280px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>
              As an expression of God's love, we welcome people into a life of caring for Creation, others, and themselves.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h5 className="text-gold font-sans text-[12px] font-bold uppercase mb-5" style={{ letterSpacing: "2px" }}>
                {col.title}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => {
                  const external = href.startsWith("http");
                  const baseStyle = "block text-[14px] transition-all";
                  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                    e.currentTarget.style.paddingLeft = "4px";
                  };
                  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.paddingLeft = "0";
                  };
                  return (
                    <li key={label}>
                      {external ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyle}
                          style={{ color: "rgba(255,255,255,0.5)" }}
                          onMouseEnter={onEnter} onMouseLeave={onLeave}>
                          {label}
                        </a>
                      ) : (
                        <Link to={href} className={baseStyle}
                          style={{ color: "rgba(255,255,255,0.5)" }}
                          onMouseEnter={onEnter} onMouseLeave={onLeave}>
                          {label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px mb-7" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 text-center md:text-left">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Ferncliff Camp & Conference Center · 1720 Ferncliff Road, Little Rock, AR 72223
          </p>
          <div className="flex justify-center gap-5">
            <a href="tel:5018213063" className="text-gold text-[13px] opacity-70 hover:opacity-100 transition-opacity">(501) 821-3063</a>
            <a href="mailto:info@ferncliff.org" className="text-gold text-[13px] opacity-70 hover:opacity-100 transition-opacity">info@ferncliff.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
