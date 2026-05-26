import { useEffect, useState } from "react";
import { X, Lock, ShieldCheck, CheckCircle } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

const amounts = [25, 50, 100, 250, 500, 1000];

export function DonationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { addDonation } = useContentStore();
  const [freq, setFreq] = useState<"one" | "monthly">("one");
  const [amt, setAmt] = useState(50);
  const [custom, setCustom] = useState("");
  const [donor, setDonor] = useState({ name: "", email: "", campaign: "General" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) { setDone(false); setCustom(""); }
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  const finalAmt = custom ? Math.max(1, Number(custom) || 0) : amt;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addDonation({
      donor: donor.name.trim() || "Anonymous",
      amount: finalAmt,
      type: freq === "one" ? "One-time" : "Monthly",
      campaign: donor.campaign,
    });
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-[24px] w-full max-w-[520px] max-h-[92vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-7 pt-6 pb-2">
          <h3 className="font-serif text-dark" style={{ fontSize: 24 }}>Make your gift</h3>
          <button onClick={onClose} className="text-text-muted hover:text-dark" aria-label="Close"><X size={20} /></button>
        </div>

        {done ? (
          <div className="px-7 pb-8 text-center">
            <div className="text-teal flex justify-center my-4"><CheckCircle size={52} weight="fill" /></div>
            <h4 className="font-serif text-dark mb-2" style={{ fontSize: 22 }}>Thank you, {donor.name || "friend"}!</h4>
            <p className="text-text-muted text-[14px] mb-6">
              We've recorded your {freq === "monthly" ? "monthly" : "one-time"} gift of <strong>${finalAmt.toLocaleString()}</strong> to {donor.campaign}.
            </p>
            <button onClick={onClose} className="btn btn-teal">Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-7 pb-7">
            <p className="text-[13px] text-text-muted mb-5">Secure · You never leave ferncliff.org</p>

            <div className="flex gap-1 p-1 rounded-full mb-5 bg-cream-warm">
              {(["one", "monthly"] as const).map((k) => (
                <button type="button" key={k} onClick={() => setFreq(k)} className="flex-1 py-2.5 rounded-full text-[13px] font-bold transition-colors"
                  style={{ background: freq === k ? "var(--color-teal)" : "transparent", color: freq === k ? "#fff" : "var(--color-text-muted)" }}>
                  {k === "one" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-3">
              {amounts.map((a) => (
                <button type="button" key={a} onClick={() => { setAmt(a); setCustom(""); }} className="py-3 rounded-[12px] font-serif transition-colors"
                  style={{
                    background: !custom && amt === a ? "var(--color-teal)" : "var(--color-offwhite)",
                    color: !custom && amt === a ? "#fff" : "var(--color-dark-warm)",
                    border: `1px solid ${!custom && amt === a ? "var(--color-teal)" : "rgba(0,0,0,0.08)"}`,
                    fontSize: 20,
                  }}>
                  ${a.toLocaleString()}
                </button>
              ))}
            </div>
            <input
              type="number" min={1} placeholder="Custom amount" value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="w-full mb-4 px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            />

            <div className="grid grid-cols-1 gap-2.5 mb-4">
              <input required placeholder="Your name" value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} className="px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
              <input required type="email" placeholder="Email" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} className="px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
              <select value={donor.campaign} onChange={(e) => setDonor({ ...donor, campaign: e.target.value })} className="px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <option>General</option>
                <option>Friends of Ferncliff</option>
                <option>Transform Campaign</option>
                <option>Camp Scholarships</option>
              </select>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-full bg-coral text-white font-sans font-bold hover:-translate-y-0.5 transition-all"
              style={{ fontSize: 15, boxShadow: "0 4px 20px rgba(201,107,60,0.3)" }}>
              Donate ${finalAmt.toLocaleString()}{freq === "monthly" ? "/mo" : ""} →
            </button>

            <div className="flex justify-center gap-5 mt-4">
              <span className="flex items-center gap-1 text-[11px] text-text-muted"><Lock size={12} /> SSL Encrypted</span>
              <span className="flex items-center gap-1 text-[11px] text-text-muted"><ShieldCheck size={12} /> PCI Compliant</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
