import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { u as useContentStore, a as useNavigate, L as Link } from "./router-CcwXCmxT.js";
import { C as CampLayout } from "./CampLayout-ClmzmED5.js";
import { s as s$1 } from "./ArrowRight.es-CKDJ3HIE.js";
import { s } from "./CheckCircle.es-DXy3QOUc.js";
import { n } from "./Lock.es-CdiVOncH.js";
import { h } from "./ShieldCheck.es-DfVBd0KO.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./MobileBottomBar-o_4KanfB.js";
import "./Compass.es-CgNCjn4Q.js";
import "./Leaf.es-DM0Xn-b5.js";
const LOGO = "https://resources.ferncliff.org/hs-fs/hubfs/FRN.01_Logo-Color-wo.png?width=353&height=200";
function RegisterPage() {
  const {
    campSessions,
    addRegistration
  } = useContentStore();
  const [submitted, setSubmitted] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    camperName: "",
    age: "",
    parentName: "",
    email: "",
    phone: "",
    session: campSessions[0]?.week ?? "",
    campType: "Day Camp",
    notes: ""
  });
  const nav = useNavigate();
  const change = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = (e) => {
    e.preventDefault();
    addRegistration({
      camperName: form.camperName.trim(),
      parentName: form.parentName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      session: form.session,
      campType: form.campType,
      age: Number(form.age) || 0,
      notes: form.notes.trim() || void 0
    });
    setSubmitted({
      camper: form.camperName,
      session: form.session
    });
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CampLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[80px] md:py-[120px] bg-offwhite min-h-[70vh] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[560px] mx-auto px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-teal flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: 56, weight: "fill" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-3", style: {
        fontSize: "clamp(28px, 4vw, 40px)"
      }, children: "Registration received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-text-muted text-[16px] mb-8", children: [
        "Thanks! We've recorded a registration for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: submitted.camper }),
        " for the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: submitted.session }),
        " session. Our team will confirm your spot within 2 business days."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-teal", onClick: () => {
          setSubmitted(null);
          setForm((f) => ({
            ...f,
            camperName: "",
            age: "",
            notes: ""
          }));
        }, children: "Register another camper" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => nav({
          to: "/camp"
        }), children: "Back to Camp" })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] md:py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[760px] mx-auto px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LOGO, alt: "Ferncliff", className: "h-[80px] w-auto mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-3", style: {
          fontSize: "clamp(28px, 4vw, 40px)"
        }, children: "Register for Summer Camp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text-muted text-[15px] max-w-[520px] mx-auto", children: "Fill out the form below to reserve a spot. You'll receive a confirmation email within 2 business days." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-5 mt-5 text-[12px] text-text-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 14 }),
            " Encrypted"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(h, { size: 14 }),
            " Secure"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "bg-white rounded-[24px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5", style: {
        boxShadow: "0 12px 40px rgba(44,41,38,0.08)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Camper Name", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.camperName, onChange: change("camperName"), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Camper Age", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "number", min: 5, max: 18, value: form.age, onChange: change("age"), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Parent / Guardian", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.parentName, onChange: change("parentName"), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: change("email"), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", value: form.phone, onChange: change("phone"), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Camp Type", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: form.campType, onChange: change("campType"), className: "input", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Day Camp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Overnight Camp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Discovery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Family Camp" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Session / Week", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { required: true, value: form.session, onChange: change("session"), className: "input", children: campSessions.map((s2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s2.week, children: [
          s2.week,
          " — ",
          s2.dates,
          " (",
          s2.registered,
          "/",
          s2.capacity,
          " registered)"
        ] }, s2.week)) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes (allergies, accommodations, etc.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: form.notes, onChange: change("notes"), className: "input" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/camp", className: "link-arrow", children: "← Back to Camp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn btn-teal", style: {
            fontSize: 15,
            padding: "14px 32px"
          }, children: [
            "Submit Registration ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(s$1, { size: 16, weight: "bold" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-text-muted text-[13px] mt-8 text-center", children: [
        "Need help? Call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:5018213063", className: "text-gold font-semibold", children: "(501) 821-3063" }),
        " or email ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:summercamp@ferncliff.org", className: "text-gold font-semibold", children: "summercamp@ferncliff.org" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{width:100%;background:#FAF8F5;border:1px solid rgba(0,0,0,0.1);border-radius:10px;padding:12px 14px;font-size:14px;font-family:inherit;color:#2c2926;}.input:focus{outline:none;border-color:#2B7A6F;box-shadow:0 0 0 3px rgba(43,122,111,0.12);}` })
  ] });
}
function Field({
  label,
  required,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
      letterSpacing: "1px"
    }, children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral ml-1", children: "*" })
    ] }),
    children
  ] });
}
export {
  RegisterPage as component
};
