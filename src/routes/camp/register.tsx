import { createFileRoute, Link } from "@tanstack/react-router";
import { CampLayout } from "@/components/site/CampLayout";
import { Lock, ShieldCheck, ArrowSquareOut, ArrowRight } from "@phosphor-icons/react";

const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";

export const Route = createFileRoute("/camp/register")({
  head: () => ({
    meta: [
      { title: "Register for Camp — Ferncliff" },
      { name: "description", content: "Secure camp registration through CampBrain." },
      { property: "og:title", content: "Register for Camp — Ferncliff" },
      { property: "og:description", content: "Secure camp registration through CampBrain." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <CampLayout>
      <section className="py-[80px] md:py-[140px] bg-offwhite min-h-[80vh] flex items-center">
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <img src={LOGO} alt="Ferncliff" className="h-[100px] w-auto mx-auto mb-8" />
          <h1 className="mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>You're about to register for camp</h1>
          <p className="text-text-muted text-[16px] mb-10">
            Registration is handled through CampBrain, our secure registration partner. You'll be taken to Ferncliff's dedicated registration portal.
          </p>

          <div className="space-y-4 mb-10 text-left max-w-[340px] mx-auto">
            {[
              { icon: <Lock size={20} />, label: "256-bit encrypted" },
              { icon: <ShieldCheck size={20} />, label: "Secure registration portal" },
              { icon: <ArrowSquareOut size={20} />, label: "Opens in a new tab" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="text-teal shrink-0">{t.icon}</span>
                <span className="text-text-body text-[15px]">{t.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://ferncliff.campbrainregistration.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal"
            style={{ fontSize: "16px", padding: "18px 40px" }}
          >
            Continue to Registration <ArrowRight size={16} weight="bold" />
          </a>

          <div className="mt-10">
            <Link to="/camp" className="link-arrow">← Back to Camp Overview</Link>
          </div>

          <p className="text-text-muted text-[13px] mt-6">
            Need help? Call <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> or email <a href="mailto:summercamp@ferncliff.org" className="text-gold font-semibold">summercamp@ferncliff.org</a>
          </p>

          <p className="text-text-faint text-[11px] mt-10 uppercase tracking-[2px]">Powered by CampBrain</p>
        </div>
      </section>
    </CampLayout>
  );
}
