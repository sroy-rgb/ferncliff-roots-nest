import { useEffect, useState } from "react";

type Link = { href: string; label: string };

export function AnchorSubNav({ links }: { links: Link[] }) {
  const [active, setActive] = useState<string>(links[0]?.href ?? "");

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - 140 <= 0) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <div
      className="fixed left-0 right-0 z-[999] bg-offwhite"
      style={{ top: 72, borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 overflow-x-auto">
        <div className="flex items-center gap-1 h-[48px] whitespace-nowrap">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-[13px] font-semibold transition-colors"
                style={{
                  color: isActive ? "var(--color-teal)" : "var(--color-text-muted)",
                }}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute left-2 right-2 bottom-0 h-[2px] bg-gold rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
