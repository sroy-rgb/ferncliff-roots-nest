import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  House, Files, Article, Images, Campfire, Buildings, Leaf, HandHeart,
  Heart, Envelope, ChatsCircle, UsersThree, UserGear, ChartLine, Sparkle,
  Gear, Globe, List, X, SignOut, ClipboardText,
} from "@phosphor-icons/react";
import { useAdminAuth } from "./adminStore";

type NavItem = { to: string; label: string; Icon: typeof House; exact?: boolean };
type NavSection = { label: string; items: NavItem[] };

const sections: NavSection[] = [
  { label: "Content", items: [
    { to: "/admin", label: "Dashboard", Icon: House, exact: true },
    { to: "/admin/pages", label: "Pages", Icon: Files },
    { to: "/admin/blog", label: "Blog / Stories", Icon: Article },
    { to: "/admin/media", label: "Media Library", Icon: Images },
  ]},
  { label: "Programs", items: [
    { to: "/admin/camp", label: "Camp Sessions", Icon: Campfire },
    { to: "/admin/registrations", label: "Registrations", Icon: ClipboardText },
    { to: "/admin/retreats", label: "Retreats & Bookings", Icon: Buildings },
    { to: "/admin/nature", label: "Nature School", Icon: Leaf },
    { to: "/admin/outreach", label: "Outreach", Icon: HandHeart },
  ]},
  { label: "Engagement", items: [
    { to: "/admin/giving", label: "Donations & Giving", Icon: Heart },
    { to: "/admin/subscribers", label: "Email Subscribers", Icon: Envelope },
    { to: "/admin/inquiries", label: "Inquiries & Forms", Icon: ChatsCircle },
    { to: "/admin/volunteers", label: "Volunteer Applications", Icon: UsersThree },
  ]},
  { label: "System", items: [
    { to: "/admin/users", label: "Users & Roles", Icon: UserGear },
    { to: "/admin/seo", label: "SEO & Analytics", Icon: ChartLine },
    { to: "/admin/roadmap", label: "Phase 2 Roadmap", Icon: Sparkle },
    { to: "/admin/settings", label: "Settings", Icon: Gear },
  ]},
];

const SERIF = "'Cormorant Garamond', Georgia, serif";

function findCrumb(path: string): { section?: string; page: string } {
  for (const s of sections) {
    for (const i of s.items) {
      if (i.exact ? path === i.to : path === i.to || path.startsWith(i.to + "/")) {
        return { section: s.label, page: i.label };
      }
    }
  }
  return { page: "Admin" };
}

export function AdminLayout({ children, title }: { children: ReactNode; title?: string }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useNavigate();
  const { logout } = useAdminAuth();
  const crumb = findCrumb(path);
  const pageTitle = title ?? crumb.page;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2c2926]" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[260px] bg-[#2c2926] text-white flex flex-col transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-[#2B7A6F] flex items-center justify-center text-white text-base font-semibold" style={{ fontFamily: SERIF }}>F</div>
            <div className="leading-tight">
              <div className="text-[15px]" style={{ fontFamily: SERIF, fontWeight: 500 }}>Ferncliff</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50">CMS</div>
              <a href="https://xtsworld.com" target="_blank" rel="noopener noreferrer" className="text-[9px] text-white/35 hover:text-white/60 transition">Powered by XTS</a>
            </div>
          </div>
          <button className="md:hidden text-white/70" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20} /></button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {sections.map((s) => (
            <div key={s.label}>
              <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">{s.label}</div>
              <ul className="space-y-0.5">
                {s.items.map((i) => {
                  const active = i.exact ? path === i.to : path === i.to || path.startsWith(i.to + "/");
                  const isRoadmap = i.to === "/admin/roadmap";
                  const activeColor = isRoadmap ? "#A78BFA" : "#7DD3C4";
                  const activeBorder = isRoadmap ? "#6C3AED" : "#2B7A6F";
                  return (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-3 pl-3 pr-3 py-2 rounded-md text-[13px] border-l-[3px] transition-colors"
                        style={
                          active
                            ? { borderLeftColor: activeBorder, background: `${activeBorder}26`, color: activeColor }
                            : { borderLeftColor: "transparent", color: "rgba(255,255,255,0.7)" }
                        }
                      >
                        <i.Icon size={18} weight="regular" />
                        <span>{i.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2B7A6F] flex items-center justify-center text-white text-xs font-semibold">KG</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Kimberly Graves</div>
              <div className="text-[11px] text-white/50">Admin</div>
            </div>
          </div>
          <button
            onClick={() => { logout(); nav({ to: "/admin/login" }); }}
            className="mt-3 flex items-center gap-2 text-[12px] text-white/60 hover:text-white"
          >
            <SignOut size={14} /> Logout
          </button>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main */}
      <div className="md:pl-[260px]">
        {/* Topbar */}
        <header className="h-14 bg-[#FFFDF9] border-b border-[#E8E2D8] flex items-center px-4 md:px-6 gap-3 sticky top-0 z-20">
          <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu"><List size={22} /></button>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] text-[#8a857c]">
              <Link to="/admin" className="hover:text-[#2B7A6F]">Dashboard</Link>
              {crumb.section && <> <span className="mx-1">›</span> <span>{crumb.section}</span></>}
              <span className="mx-1">›</span> <span className="text-[#2c2926]">{pageTitle}</span>
            </div>
            <div className="text-[15px] leading-tight" style={{ fontFamily: SERIF, fontWeight: 500 }}>{pageTitle}</div>
          </div>
          <a
            href="/?fromAdmin=1"
            className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-full border border-[#2B7A6F] text-[#2B7A6F] text-[12px] font-medium hover:bg-[#2B7A6F] hover:text-white transition"
          >
            <Globe size={14} /> View Site
          </a>
          <div className="w-8 h-8 rounded-full bg-[#2B7A6F] flex items-center justify-center text-white text-xs font-semibold">KG</div>
        </header>

        <main className="p-4 md:p-8 max-w-[1400px]">{children}</main>
      </div>
    </div>
  );
}

// ============ Reusable admin UI bits ============

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-[#FFFDF9] border border-[#E8E2D8] rounded-xl shadow-[0_1px_2px_rgba(44,41,38,0.04)] ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({ value, label, sub, accent = "teal", arrow }: { value: string; label: string; sub?: string; accent?: "teal" | "gold"; arrow?: "up" | "down" }) {
  const color = accent === "teal" ? "#2B7A6F" : "#C49A3C";
  return (
    <Card className="p-5">
      <div className="text-[11px] uppercase tracking-wider text-[#8a857c]">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-[34px] leading-none" style={{ color, fontFamily: SERIF, fontWeight: 500 }}>{value}</div>
      </div>
      {sub && (
        <div className="mt-2 text-[12px] text-[#6b665d] flex items-center gap-1">
          {arrow && <span className={arrow === "up" ? "text-[#2B7A6F]" : "text-[#DC2626]"}>{arrow === "up" ? "↑" : "↓"}</span>}
          {sub}
        </div>
      )}
    </Card>
  );
}

export function Pill({ children, color = "grey" }: { children: ReactNode; color?: "green" | "yellow" | "grey" | "red" | "teal" | "gold" | "purple" }) {
  const map: Record<string, string> = {
    green: "bg-[#2B7A6F]/12 text-[#236158]",
    yellow: "bg-[#C49A3C]/15 text-[#8a6a26]",
    grey: "bg-[#E8E2D8] text-[#6b665d]",
    red: "bg-[#DC2626]/10 text-[#DC2626]",
    teal: "bg-[#2B7A6F]/10 text-[#2B7A6F]",
    gold: "bg-[#C49A3C]/15 text-[#8a6a26]",
    purple: "bg-[#6C3AED]/10 text-[#6C3AED]",
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${map[color]}`}>{children}</span>;
}

export function PageHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
      <h1 className="text-[32px] tracking-tight text-[#2c2926]" style={{ fontFamily: SERIF, fontWeight: 500 }}>{title}</h1>
      {action}
    </div>
  );
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[20px] text-[#2c2926] ${className}`} style={{ fontFamily: SERIF, fontWeight: 500 }}>{children}</h2>
  );
}

export function Button({ children, variant = "primary", onClick, className = "", as = "button", href, type = "button" }: { children: ReactNode; variant?: "primary" | "outline" | "purple"; onClick?: () => void; className?: string; as?: "button" | "a"; href?: string; type?: "button" | "submit" }) {
  const styles = {
    primary: "bg-[#2B7A6F] text-white hover:bg-[#236158]",
    outline: "border border-[#C49A3C] text-[#8a6a26] hover:bg-[#C49A3C]/10",
    purple: "border border-[#6C3AED] text-[#6C3AED] hover:bg-[#6C3AED]/5",
  }[variant];
  const cls = `inline-flex items-center gap-2 px-4 h-9 rounded-md text-[13px] font-medium transition ${styles} ${className}`;
  if (as === "a") return <a href={href} className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const [sort, setSort] = useState<{ i: number; dir: 1 | -1 } | null>(null);
  const sorted = sort
    ? [...rows].sort((a, b) => {
        const av = String((a[sort.i] as any) ?? "");
        const bv = String((b[sort.i] as any) ?? "");
        return av.localeCompare(bv) * sort.dir;
      })
    : rows;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-[#8a857c] border-b border-[#E8E2D8]">
            {headers.map((h, i) => (
              <th
                key={h}
                onClick={() => setSort((s) => (s?.i === i ? { i, dir: (s.dir * -1) as 1 | -1 } : { i, dir: 1 }))}
                className="px-4 py-3 font-medium text-[11px] uppercase tracking-wider cursor-pointer select-none hover:text-[#2B7A6F]"
              >
                {h} {sort?.i === i ? (sort.dir === 1 ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={i} className="border-b border-[#F0EBE3] hover:bg-[#FAF6EE] transition-colors">
              {r.map((c, j) => <td key={j} className="px-4 py-3 align-middle">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
