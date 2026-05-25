const links = [
  { href: "#overview", label: "Overview" },
  { href: "#brown-center", label: "Brown Center" },
  { href: "#belden", label: "Belden Cabins" },
  { href: "#retreat-house", label: "Retreat House" },
  { href: "#yurts", label: "Yurts" },
  { href: "#meeting-rooms", label: "Meeting Rooms" },
  { href: "#youth-retreats", label: "Youth Retreats" },
  { href: "#pavilions", label: "Outdoor Pavilions" },
  { href: "#meals", label: "Meals" },
  { href: "#activities", label: "Activities" },
  { href: "#swimming", label: "Swimming" },
];

export function RetreatsSubNav() {
  return (
    <div
      className="fixed left-0 right-0 z-[999]"
      style={{ top: 72, background: "#FFFDF9", borderBottom: "1px solid #E8E2D8" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto">
        <div className="flex items-center gap-1 h-[48px] whitespace-nowrap">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-[13px] font-semibold hover:text-teal transition-colors"
              style={{ color: "var(--color-dark-warm)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
