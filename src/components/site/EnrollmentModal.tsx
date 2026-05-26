import { useEffect, useState } from "react";
import { X, CheckCircle } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

const programs = ["Nature Preschool", "Wildcraft", "WILD Passport", "Summer Day Camp", "Overnight Camp"];

export function EnrollmentModal({ open, onClose, defaultProgram = "Nature Preschool" }: { open: boolean; onClose: () => void; defaultProgram?: string }) {
  const { addEnrollment } = useContentStore();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    childName: "", childAge: "", parentName: "", email: "", phone: "",
    program: defaultProgram, startDate: "Sep 2026", notes: "",
  });

  useEffect(() => {
    if (open) { setDone(false); setForm((f) => ({ ...f, program: defaultProgram })); }
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, defaultProgram]);

  if (!open) return null;

  const change = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnrollment({
      childName: form.childName.trim(),
      childAge: Number(form.childAge) || 0,
      parentName: form.parentName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      program: form.program,
      startDate: form.startDate,
      notes: form.notes.trim() || undefined,
    });
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-[24px] w-full max-w-[600px] max-h-[92vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-7 pt-6 pb-2">
          <h3 className="font-serif text-dark" style={{ fontSize: 24 }}>Enroll your child</h3>
          <button onClick={onClose} className="text-text-muted hover:text-dark" aria-label="Close"><X size={20} /></button>
        </div>

        {done ? (
          <div className="px-7 pb-8 text-center">
            <div className="text-teal flex justify-center my-4"><CheckCircle size={52} weight="fill" /></div>
            <h4 className="font-serif text-dark mb-2" style={{ fontSize: 22 }}>Enrollment received!</h4>
            <p className="text-text-muted text-[14px] mb-6">
              We've recorded the enrollment for <strong>{form.childName}</strong> in <strong>{form.program}</strong>. Our team will reach out within 2 business days to confirm.
            </p>
            <button onClick={onClose} className="btn btn-teal">Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-7 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Child name" required value={form.childName} onChange={change("childName")} />
            <Input label="Child age" type="number" required value={form.childAge} onChange={change("childAge")} />
            <Input label="Parent / guardian" required value={form.parentName} onChange={change("parentName")} />
            <Input label="Phone" type="tel" required value={form.phone} onChange={change("phone")} />
            <div className="sm:col-span-2"><Input label="Email" type="email" required value={form.email} onChange={change("email")} /></div>
            <Select label="Program" required value={form.program} onChange={change("program")} options={programs} />
            <Input label="Desired start" required value={form.startDate} onChange={change("startDate")} />
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold uppercase mb-1.5 text-dark-warm" style={{ letterSpacing: "1px" }}>Notes</label>
              <textarea rows={3} value={form.notes} onChange={change("notes")} className="w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button type="submit" className="btn btn-teal w-full">Submit Enrollment</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Input({ label, required, ...rest }: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase mb-1.5 text-dark-warm" style={{ letterSpacing: "1px" }}>
        {label}{required && <span className="text-coral ml-1">*</span>}
      </label>
      <input {...rest} required={required} className="w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
    </div>
  );
}

function Select({ label, required, options, ...rest }: { label: string; required?: boolean; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase mb-1.5 text-dark-warm" style={{ letterSpacing: "1px" }}>
        {label}{required && <span className="text-coral ml-1">*</span>}
      </label>
      <select {...rest} required={required} className="w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
