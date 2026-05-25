import { Link, useRouterState } from "@tanstack/react-router";
import { useAdminAuth } from "./adminStore";
import { useContentStore } from "./contentStore";
import { ArrowLeft, PencilSimple } from "@phosphor-icons/react";

export function AdminViewingBar() {
  const { loggedIn } = useAdminAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { pages } = useContentStore();

  if (!loggedIn || path.startsWith("/admin")) return null;

  const match = pages.find((p) => p.slug === path);
  const editTarget = match
    ? match.slug === "/" || match.slug.startsWith("/camp") ? "/admin/pages" :
      match.slug.startsWith("/stories") ? "/admin/blog" :
      "/admin/pages"
    : "/admin/pages";

  return (
    <div
      className="sticky top-0 z-[60] h-9 flex items-center px-4 md:px-6 text-[12px]"
      style={{ background: "#FFFDF9", borderLeft: "3px solid #C49A3C", borderBottom: "1px solid #E8E2D8", color: "#6b665d" }}
    >
      <span className="hidden sm:inline">
        You're viewing the live site. Content changes made in the admin panel are reflected here.
      </span>
      <span className="sm:hidden">Live preview · admin session</span>
      <div className="ml-auto flex items-center gap-4">
        <Link to={editTarget} className="inline-flex items-center gap-1 text-[#2B7A6F] hover:underline">
          <PencilSimple size={12} /> Edit This Page
        </Link>
        <Link to="/admin" className="inline-flex items-center gap-1 text-[#2c2926] hover:text-[#2B7A6F]">
          <ArrowLeft size={12} /> Back to Admin
        </Link>
      </div>
    </div>
  );
}
