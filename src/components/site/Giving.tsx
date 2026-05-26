import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Lock, ShieldCheck, EyeSlash } from "@phosphor-icons/react";
import { DonationModal } from "./DonationModal";

const amounts = [25, 50, 100, 250, 500, 1000];

export function Giving() {
  const [freq, setFreq] = useState<"one" | "monthly">("one");
  const [amt, setAmt] = useState(50);
  const [open, setOpen] = useState(false);

  return (
    <section id="giving" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Sunset over lake"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(20,18,16,0.82) 0%, rgba(20,18,16,0.5) 50%, rgba(43,122,111,0.35) 100%)" }}
      />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <div className="reveal-left text-white">
          <div className="eyebrow text-gold mb-5">Support Ferncliff</div>
          <h2 className="text-white font-light mb-5" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Every gift grows<br />something <span className="hw" style={{ fontSize: "1.1em" }}>extraordinary</span>
          </h2>
          <p className="font-light max-w-[440px] mb-8" style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)" }}>
            Your generosity sends kids to camp, protects 1,200 acres of forest, and powers disaster relief that serves communities across the country.
          </p>
          <div className="flex flex-wrap gap-9 mb-10">
            {[["1,600+", "Campers each summer"], ["90+", "Years of service"], ["1,200", "Acres protected"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-gold leading-none" style={{ fontSize: "40px" }}>{n}</div>
                <div className="text-[12px] font-semibold mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setOpen(true)} className="btn btn-coral">Give Today</button>
            <Link to="/giving" className="btn btn-outline">Join Friends of Ferncliff</Link>
          </div>
        </div>

        {/* Donation card */}
        <div
          className="reveal-right rounded-[28px] p-10 text-white"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="font-serif text-white mb-1.5" style={{ fontSize: "28px" }}>Make your gift</h3>
          <p className="text-[14px] mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>Secure · You never leave ferncliff.org</p>

          <div
            className="flex gap-1 p-1 rounded-full mb-6"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {(["one", "monthly"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFreq(k)}
                className="flex-1 text-center py-2.5 rounded-full text-[13px] font-bold transition-colors"
                style={{
                  background: freq === k ? "var(--color-teal)" : "transparent",
                  color: freq === k ? "#fff" : "rgba(255,255,255,0.5)",
                }}
              >
                {k === "one" ? "One-Time" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmt(a)}
                className="py-3.5 rounded-[12px] font-serif text-white transition-colors"
                style={{
                  background: amt === a ? "var(--color-teal)" : "rgba(255,255,255,0.08)",
                  border: `1px solid ${amt === a ? "var(--color-teal)" : "rgba(255,255,255,0.12)"}`,
                  fontSize: "24px",
                }}
              >
                ${a.toLocaleString()}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full py-4 rounded-full bg-coral text-white font-sans font-bold transition-all hover:-translate-y-0.5"
            style={{ fontSize: "16px", boxShadow: "0 4px 20px rgba(201,107,60,0.3)" }}
          >
            Donate Now →
          </button>

          <div className="flex justify-center gap-5 mt-4">
            {[
              [<Lock size={12} key="1" />, "SSL Encrypted"],
              [<ShieldCheck size={12} key="2" />, "PCI Compliant"],
              [<EyeSlash size={12} key="3" />, "Private"],
            ].map(([icon, label], i) => (
              <span key={i} className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                {icon} {label as string}
              </span>
            ))}
          </div>
        </div>
      </div>
      <DonationModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
