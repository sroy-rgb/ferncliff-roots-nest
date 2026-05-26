import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { Lock, ShieldCheck, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";

export const Route = createFileRoute("/camp/register")({
  head: () => ({
    meta: [
      { title: "Register for Camp — Ferncliff" },
      { name: "description", content: "Secure inline camp registration." },
      { property: "og:title", content: "Register for Camp — Ferncliff" },
      { property: "og:description", content: "Secure inline camp registration." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { campSessions, addRegistration } = useContentStore();
  const [submitted, setSubmitted] = useState<null | { camper: string; session: string }>(null);
  const [form, setForm] = useState({
    camperName: "",
    age: "",
    parentName: "",
    email: "",
    phone: "",
    session: campSessions[0]?.week ?? "",
    campType: "Day Camp",
    notes: "",
  });
  const nav = useNavigate();

  const change = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addRegistration({
      camperName: form.camperName.trim(),
      parentName: form.parentName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      session: form.session,
      campType: form.campType,
      age: Number(form.age) || 0,
      notes: form.notes.trim() || undefined,
    });
    setSubmitted({ camper: form.camperName, session: form.session });
  };

  if (submitted) {
    return (
      <CampLayout>
        <section className="py-[80px] md:py-[120px] bg-offwhite min-h-[70vh] flex items-center">
          <div className="max-w-[560px] mx-auto px-8 text-center">
            <div className="text-teal flex justify-center mb-4"><CheckCircle size={56} weight="fill" /></div>
            <h1 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Registration received</h1>
            <p className="text-text-muted text-[16px] mb-8">
              Thanks! We've recorded a registration for <strong>{submitted.camper}</strong> for the <strong>{submitted.session}</strong> session. Our team will confirm your spot within 2 business days.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button className="btn btn-teal" onClick={() => { setSubmitted(null); setForm((f) => ({ ...f, camperName: "", age: "", notes: "" })); }}>Register another camper</button>
              <button className="btn btn-outline" onClick={() => nav({ to: "/camp" })}>Back to Camp</button>
            </div>
          </div>
        </section>
      </CampLayout>
    );
  }

  return (
    <CampLayout>
      <section className="py-[60px] md:py-[100px] bg-offwhite">
        <div className="max-w-[760px] mx-auto px-8">
          <div className="text-center mb-10">
            <img src={LOGO} alt="Ferncliff" className="h-[80px] w-auto mx-auto mb-6" />
            <h1 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Register for Summer Camp</h1>
            <p className="text-text-muted text-[15px] max-w-[520px] mx-auto">
              Fill out the form below to reserve a spot. You'll receive a confirmation email within 2 business days.
            </p>
            <div className="flex justify-center gap-5 mt-5 text-[12px] text-text-muted">
              <span className="flex items-center gap-1.5"><Lock size={14} /> Encrypted</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Secure</span>
            </div>
          </div>

          <form onSubmit={submit} className="bg-white rounded-[24px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5" style={{ boxShadow: "0 12px 40px rgba(44,41,38,0.08)" }}>
            <Field label="Camper Name" required>
              <input required value={form.camperName} onChange={change("camperName")} className="input" />
            </Field>
            <Field label="Camper Age" required>
              <input required type="number" min={5} max={18} value={form.age} onChange={change("age")} className="input" />
            </Field>
            <Field label="Parent / Guardian" required>
              <input required value={form.parentName} onChange={change("parentName")} className="input" />
            </Field>
            <Field label="Email" required>
              <input required type="email" value={form.email} onChange={change("email")} className="input" />
            </Field>
            <Field label="Phone" required>
              <input required type="tel" value={form.phone} onChange={change("phone")} className="input" />
            </Field>
            <Field label="Camp Type" required>
              <select required value={form.campType} onChange={change("campType")} className="input">
                <option>Day Camp</option>
                <option>Overnight Camp</option>
                <option>Discovery</option>
                <option>Family Camp</option>
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Session / Week" required>
                <select required value={form.session} onChange={change("session")} className="input">
                  {campSessions.map((s) => (
                    <option key={s.week} value={s.week}>{s.week} — {s.dates} ({s.registered}/{s.capacity} registered)</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Notes (allergies, accommodations, etc.)">
                <textarea rows={3} value={form.notes} onChange={change("notes")} className="input" />
              </Field>
            </div>
            <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-2">
              <Link to="/camp" className="link-arrow">← Back to Camp</Link>
              <button type="submit" className="btn btn-teal" style={{ fontSize: 15, padding: "14px 32px" }}>
                Submit Registration <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </form>

          <p className="text-text-muted text-[13px] mt-8 text-center">
            Need help? Call <a href="tel:5018213063" className="text-gold font-semibold">(501) 821-3063</a> or email <a href="mailto:summercamp@ferncliff.org" className="text-gold font-semibold">summercamp@ferncliff.org</a>
          </p>
        </div>
      </section>
      <style>{`.input{width:100%;background:#FAF8F5;border:1px solid rgba(0,0,0,0.1);border-radius:10px;padding:12px 14px;font-size:14px;font-family:inherit;color:#2c2926;}.input:focus{outline:none;border-color:#2B7A6F;box-shadow:0 0 0 3px rgba(43,122,111,0.12);}`}</style>
    </CampLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase mb-2 text-dark-warm" style={{ letterSpacing: "1px" }}>
        {label}{required && <span className="text-coral ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
