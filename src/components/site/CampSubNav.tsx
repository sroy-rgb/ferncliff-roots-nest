import { Link } from "@tanstack/react-router";

const links = [
  { to: "/camp", label: "Overview" },
  { to: "/camp/overnight", label: "Overnight" },
  { to: "/camp/day", label: "Day Camp" },
  { to: "/camp/discovery", label: "Discovery" },
  { to: "/camp/specialty", label: "Specialty" },
  { to: "/camp/family", label: "Family" },
  { to: "/camp/dates", label: "2026 Dates" },
  { to: "/camp/first-time", label: "First-Time" },
  { to: "/camp/gallery", label: "Gallery" },
] as const;

export function CampSubNav() {
  return (
    <div
      className="fixed left-0 right-0 z-[999] bg-offwhite"
      style={{
        top: 72,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto">
        <div className="flex items-center gap-1 h-[48px] whitespace-nowrap">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="px-3 py-2 text-[13px] font-semibold text-text-muted transition-colors relative"
              activeProps={{
                style: {
                  color: "var(--color-teal)",
                  borderBottom: "2px solid var(--color-gold)",
                },
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
