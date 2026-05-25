import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAdminAuth } from "@/components/admin/adminStore";

export const Route = createFileRoute("/admin/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Sign In — Ferncliff CMS" }] }),
});

function LoginPage() {
  const nav = useNavigate();
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("kimberly@ferncliff.org");
  const [pw, setPw] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    nav({ to: "/admin" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] px-4" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <div className="w-full max-w-sm">
        <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-sm p-8">
          <div className="text-center mb-6">
            <div className="mx-auto w-12 h-12 rounded-xl bg-[#2B7A6F] flex items-center justify-center text-white text-lg font-bold mb-3">F</div>
            <div className="text-lg font-semibold text-[#1A1A1A]">Ferncliff</div>
            <div className="text-[12px] text-[#666]">Content Management System</div>
          </div>
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#888]">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full h-10 px-3 rounded-md border border-[#E5E5E5] text-[14px] focus:outline-none focus:border-[#2B7A6F]" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#888]">Password</label>
              <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" className="mt-1 w-full h-10 px-3 rounded-md border border-[#E5E5E5] text-[14px] focus:outline-none focus:border-[#2B7A6F]" />
            </div>
            <button type="submit" className="w-full h-10 mt-2 bg-[#2B7A6F] hover:bg-[#236158] text-white rounded-md text-[14px] font-medium">Sign In</button>
          </form>
        </div>
        <div className="text-center mt-6 text-[11px] text-[#999]">
          Powered by XTS · <Link to="/" className="hover:text-[#2B7A6F]">Back to site</Link>
        </div>
      </div>
    </div>
  );
}
