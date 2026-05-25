import { Link, useRouterState } from "@tanstack/react-router";
import { Gear } from "@phosphor-icons/react";
import { useAdminAuth } from "./adminStore";

export function AdminToggle() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { loggedIn } = useAdminAuth();
  if (path.startsWith("/admin")) return null;
  return (
    <Link
      to={loggedIn ? "/admin" : "/admin/login"}
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[9999] inline-flex items-center gap-1.5 bg-[#2c2926] hover:bg-[#2B7A6F] text-white px-4 py-2 rounded-full text-[12px] font-medium transition-colors shadow-md"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <Gear size={14} weight="regular" /> Admin
    </Link>
  );
}
