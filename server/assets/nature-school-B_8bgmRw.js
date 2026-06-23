import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { A as AnchorSubNav } from "./AnchorSubNav-nuFIP1bp.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { X, CheckCircle, ArrowRight, Tree, Star, Baby, CalendarBlank, Leaf, Sun, Compass, Backpack, Mountains, Minus, Plus } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const programs$1 = ["Nature Preschool", "Wildcraft", "WILD Passport", "Summer Day Camp", "Overnight Camp"];
function EnrollmentModal({ open, onClose, defaultProgram = "Nature Preschool" }) {
  const { addEnrollment } = useContentStore();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    phone: "",
    program: defaultProgram,
    startDate: "Sep 2026",
    notes: ""
  });
  useEffect(() => {
    if (open) {
      setDone(false);
      setForm((f) => ({ ...f, program: defaultProgram }));
    }
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, defaultProgram]);
  if (!open) return null;
  const change = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    addEnrollment({
      childName: form.childName.trim(),
      childAge: Number(form.childAge) || 0,
      parentName: form.parentName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      program: form.program,
      startDate: form.startDate,
      notes: form.notes.trim() || void 0
    });
    setDone(true);
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), className: "bg-white rounded-[24px] w-full max-w-[600px] max-h-[92vh] overflow-y-auto shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-7 pt-6 pb-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-dark", style: { fontSize: 24 }, children: "Enroll your child" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-text-muted hover:text-dark", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    done ? /* @__PURE__ */ jsxs("div", { className: "px-7 pb-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center my-4", children: /* @__PURE__ */ jsx(CheckCircle, { size: 52, weight: "fill" }) }),
      /* @__PURE__ */ jsx("h4", { className: "font-serif text-dark mb-2", style: { fontSize: 22 }, children: "Enrollment received!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[14px] mb-6", children: [
        "We've recorded the enrollment for ",
        /* @__PURE__ */ jsx("strong", { children: form.childName }),
        " in ",
        /* @__PURE__ */ jsx("strong", { children: form.program }),
        ". Our team will reach out within 2 business days to confirm."
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "btn btn-teal", children: "Close" })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "px-7 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsx(Input, { label: "Child name", required: true, value: form.childName, onChange: change("childName") }),
      /* @__PURE__ */ jsx(Input, { label: "Child age", type: "number", required: true, value: form.childAge, onChange: change("childAge") }),
      /* @__PURE__ */ jsx(Input, { label: "Parent / guardian", required: true, value: form.parentName, onChange: change("parentName") }),
      /* @__PURE__ */ jsx(Input, { label: "Phone", type: "tel", required: true, value: form.phone, onChange: change("phone") }),
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", required: true, value: form.email, onChange: change("email") }) }),
      /* @__PURE__ */ jsx(Select, { label: "Program", required: true, value: form.program, onChange: change("program"), options: programs$1 }),
      /* @__PURE__ */ jsx(Input, { label: "Desired start", required: true, value: form.startDate, onChange: change("startDate") }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase mb-1.5 text-dark-warm", style: { letterSpacing: "1px" }, children: "Notes" }),
        /* @__PURE__ */ jsx("textarea", { rows: 3, value: form.notes, onChange: change("notes"), className: "w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]", style: { border: "1px solid rgba(0,0,0,0.1)" } })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2 mt-2", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-teal w-full", children: "Submit Enrollment" }) })
    ] })
  ] }) });
}
function Input({ label, required, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-[11px] font-bold uppercase mb-1.5 text-dark-warm", style: { letterSpacing: "1px" }, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-coral ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("input", { ...rest, required, className: "w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]", style: { border: "1px solid rgba(0,0,0,0.1)" } })
  ] });
}
function Select({ label, required, options, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-[11px] font-bold uppercase mb-1.5 text-dark-warm", style: { letterSpacing: "1px" }, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-coral ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("select", { ...rest, required, className: "w-full bg-offwhite rounded-[10px] px-4 py-2.5 text-[14px]", style: { border: "1px solid rgba(0,0,0,0.1)" }, children: options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
  ] });
}
const subnav = [{
  href: "#overview",
  label: "Overview"
}, {
  href: "#preschool",
  label: "Nature Preschool"
}, {
  href: "#wildcraft",
  label: "Wildcraft"
}, {
  href: "#wild-passport",
  label: "WILD Passport"
}, {
  href: "#hike-a-thon",
  label: "Hike-A-Thon"
}];
const programs = [{
  icon: /* @__PURE__ */ jsx(Tree, { size: 28 }),
  title: "Nature Preschool",
  desc: "Forest kindergarten for ages 3–5",
  href: "#preschool"
}, {
  icon: /* @__PURE__ */ jsx(Compass, { size: 28 }),
  title: "Wildcraft",
  desc: "Weekly homeschool day program",
  href: "#wildcraft"
}, {
  icon: /* @__PURE__ */ jsx(Backpack, { size: 28 }),
  title: "WILD Passport",
  desc: "Educator training & certification",
  href: "#wild-passport"
}, {
  icon: /* @__PURE__ */ jsx(Mountains, { size: 28 }),
  title: "Hike-A-Thon",
  desc: "Annual fundraising trail event",
  href: "#hike-a-thon"
}];
const schedule = [{
  time: "8:30 AM",
  item: "Morning Circle (outdoors)"
}, {
  time: "9:00 AM",
  item: "Nature Exploration"
}, {
  time: "10:30 AM",
  item: "Snack & Story"
}, {
  time: "11:00 AM",
  item: "Creative Play — art, building, gardening"
}, {
  time: "12:00 PM",
  item: "Lunch"
}, {
  time: "12:45 PM",
  item: "Rest & Reflection"
}, {
  time: "1:30 PM",
  item: "Afternoon Adventure"
}, {
  time: "2:45 PM",
  item: "Closing Circle"
}];
const faqs = [{
  q: "What do they do when it rains?",
  a: "They go outside! With proper layers and rain gear, weather becomes part of the curriculum. Children learn that there is no bad weather, only different opportunities for exploration."
}, {
  q: "What should my child wear?",
  a: "Layers, sturdy closed-toe shoes, rain boots, and a waterproof jacket. We provide a full clothing checklist on enrollment and keep extra layers on site."
}, {
  q: "Is it safe?",
  a: "Yes. Our educators are trained in wilderness first aid, child-to-teacher ratios meet or exceed state guidelines, and our 1,200 acres are continually monitored and maintained."
}, {
  q: "What do they learn?",
  a: "Early literacy, numeracy, social-emotional skills, and natural science — all rooted in hands-on, place-based experiences that meet developmental milestones."
}, {
  q: "How do I enroll?",
  a: "Visit our enrollment page or call us at (501) 821-3063. Spots fill quickly each year; we recommend reaching out as soon as you're considering applying."
}];
function NatureSchoolPage() {
  useScrollReveal();
  const [enrollOpen, setEnrollOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(AnchorSubNav, { links: subnav }),
    /* @__PURE__ */ jsxs("main", { style: {
      paddingTop: 72 + 48
    }, children: [
      /* @__PURE__ */ jsxs("section", { id: "overview", children: [
        /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Nature School", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Where the classroom is the ",
          /* @__PURE__ */ jsx(HeroEm, { children: "forest" })
        ] }), subtitle: "Arkansas's first nature preschool, Wildcraft homeschool programs, and outdoor education — year-round on 1,200 acres.", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setEnrollOpen("Nature Preschool"), className: "btn btn-teal", children: "Enroll Now" }),
          /* @__PURE__ */ jsx("a", { href: "#preschool", className: "btn btn-outline", children: "Explore Programs" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "py-[80px] md:py-[110px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
          /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Programs", title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Four ways to ",
            /* @__PURE__ */ jsx(Hw, { children: "learn outside" })
          ] }), subtitle: "From toddlers to teachers, our programs root learners in the land." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: programs.map((p) => /* @__PURE__ */ jsxs("a", { href: p.href, className: "reveal block bg-white rounded-[20px] p-7 transition-all hover:-translate-y-1.5", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 16px 48px rgba(44,41,38,0.12)", onMouseLeave: (e) => e.currentTarget.style.boxShadow = "0 2px 16px rgba(44,41,38,0.06)", children: [
            /* @__PURE__ */ jsx("div", { className: "text-teal mb-4", children: p.icon }),
            /* @__PURE__ */ jsx("h3", { className: "font-sans text-[17px] font-bold text-dark mb-1.5", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-relaxed", children: p.desc }),
            /* @__PURE__ */ jsxs("div", { className: "link-arrow mt-3", children: [
              "Learn More ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
            ] })
          ] }, p.title)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "preschool", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative reveal-left", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-[28px] overflow-hidden", style: {
              boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
            }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Preschoolers in the forest", className: "w-full h-[520px] object-cover" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 px-5 py-2.5 rounded-full", style: {
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              fontFamily: "var(--font-hand)",
              fontSize: 18,
              color: "var(--color-teal)",
              fontWeight: 600,
              boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
            }, children: "🌿 First in Arkansas" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal-right", children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: "Nature Preschool" }),
            /* @__PURE__ */ jsxs("h2", { className: "mb-5", style: {
              fontSize: "clamp(30px, 4vw, 44px)"
            }, children: [
              "A forest ",
              /* @__PURE__ */ jsx(Hw, { children: "kindergarten" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-text-body mb-6", children: "Ferncliff's Nature Preschool follows the forest kindergarten model. Rain or shine, preschoolers ages 3–5 spend their days outdoors exploring, creating, and building a lifelong connection with the natural world." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-5 mb-7", children: [[/* @__PURE__ */ jsx(Tree, { size: 18 }, "1"), "Forest Kindergarten Model"], [/* @__PURE__ */ jsx(Star, { size: 18 }, "2"), "First in Arkansas"], [/* @__PURE__ */ jsx(Baby, { size: 18 }, "3"), "Ages 3–5"], [/* @__PURE__ */ jsx(CalendarBlank, { size: 18 }, "4"), "Year-Round"]].map(([icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-teal", children: icon }),
              /* @__PURE__ */ jsx("span", { className: "text-[14px] font-semibold text-dark-warm", children: label })
            ] }, i)) }),
            /* @__PURE__ */ jsxs("blockquote", { className: "my-7 py-5 pl-6 border-l-[3px] border-gold", children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: {
                fontSize: 20
              }, children: '"Our daughter learned more in a week at Nature Preschool than a month inside. She comes home muddy, happy, and full of stories about bugs and birds."' }),
              /* @__PURE__ */ jsx("cite", { className: "block mt-2.5 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Nature Preschool Parent" })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setEnrollOpen("Nature Preschool"), className: "btn btn-teal", children: "Enroll Your Child" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 reveal", children: [
          /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "A Day in the Forest", title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "What a ",
            /* @__PURE__ */ jsx(Hw, { children: "typical day" }),
            " looks like"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-[720px] mx-auto bg-white rounded-[20px] overflow-hidden", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, children: schedule.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 px-7 py-4", style: {
            borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)"
          }, children: [
            /* @__PURE__ */ jsx("span", { className: "text-teal font-serif text-[18px] w-[90px] shrink-0", children: s.time }),
            /* @__PURE__ */ jsx("span", { className: "text-[15px] text-dark-warm", children: s.item })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
          /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Parent Questions", title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Frequently ",
            /* @__PURE__ */ jsx(Hw, { children: "asked" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-[760px] mx-auto space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsx(FaqItem, { ...f }, i)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(SimpleSplit, { id: "wildcraft", reverse: true, eyebrow: "Wildcraft", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Homeschool ",
        /* @__PURE__ */ jsx(Hw, { children: "day program" })
      ] }), img: "https://images.pexels.com/photos/9302141/pexels-photo-9302141.jpeg?auto=compress&cs=tinysrgb&w=900", desc: "Weekly nature enrichment for homeschool families. Children participate in guided outdoor learning — naturalist skills, ecology, wilderness craft, and seasonal activities on the Ferncliff campus.", features: [[/* @__PURE__ */ jsx(Leaf, { size: 18 }), "Naturalist Skills"], [/* @__PURE__ */ jsx(Sun, { size: 18 }), "Seasonal Curriculum"], [/* @__PURE__ */ jsx(Compass, { size: 18 }), "Place-Based"]], cta: {
        label: "Inquire About Wildcraft",
        href: "#"
      } }),
      /* @__PURE__ */ jsx(SimpleSplit, { id: "wild-passport", eyebrow: "WILD Passport", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Educator ",
        /* @__PURE__ */ jsx(Hw, { children: "certification" })
      ] }), img: "https://images.pexels.com/photos/8535608/pexels-photo-8535608.jpeg?auto=compress&cs=tinysrgb&w=900", desc: "A professional development and certification program for outdoor educators. Learn to lead nature-based programming using Ferncliff's model — taught by our experienced staff on our 1,200-acre living classroom.", features: [[/* @__PURE__ */ jsx(Star, { size: 18 }), "Professional Development"], [/* @__PURE__ */ jsx(Tree, { size: 18 }), "Field-Based Training"], [/* @__PURE__ */ jsx(Backpack, { size: 18 }), "Certification"]], cta: {
        label: "Learn About Training",
        href: "#"
      }, bg: "bg-offwhite" }),
      /* @__PURE__ */ jsx(SimpleSplit, { id: "hike-a-thon", reverse: true, eyebrow: "Hike-A-Thon", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "A trail event for ",
        /* @__PURE__ */ jsx(Hw, { children: "nature school" })
      ] }), img: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=900", desc: "An annual fundraising event celebrating Ferncliff's 20+ miles of hiking trails. Participants gather pledges and hike to support Nature School programming and scholarships.", features: [[/* @__PURE__ */ jsx(Mountains, { size: 18 }), "20+ Miles of Trails"], [/* @__PURE__ */ jsx(CalendarBlank, { size: 18 }), "Annual Event"]], cta: {
        label: "Join the Hike-A-Thon",
        href: "#"
      }, bg: "bg-cream" }),
      /* @__PURE__ */ jsx("section", { className: "py-[80px] md:py-[110px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[900px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-teal-ghost rounded-[28px] p-10 md:p-16 text-center reveal", children: [
        /* @__PURE__ */ jsxs("h2", { className: "mb-3", style: {
          fontSize: "clamp(28px, 4vw, 40px)"
        }, children: [
          "Ready to ",
          /* @__PURE__ */ jsx(Hw, { children: "explore?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[16px] text-text-muted max-w-[520px] mx-auto mb-7", children: "Reach out to enroll, schedule a tour, or learn more about any of our Nature School programs." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setEnrollOpen("Nature Preschool"), className: "btn btn-teal", children: "Enroll Now" }),
          /* @__PURE__ */ jsx("a", { href: "tel:5018213063", className: "btn btn-gold-outline", children: "Call (501) 821-3063" })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(EnrollmentModal, { open: !!enrollOpen, onClose: () => setEnrollOpen(false), defaultProgram: typeof enrollOpen === "string" ? enrollOpen : "Nature Preschool" }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[16px] overflow-hidden", style: {
    boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
  }, children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left", children: [
      /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-dark text-[15px]", children: q }),
      /* @__PURE__ */ jsx("span", { className: "text-teal shrink-0", children: open ? /* @__PURE__ */ jsx(Minus, { size: 18 }) : /* @__PURE__ */ jsx(Plus, { size: 18 }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-[14px] text-text-muted leading-relaxed", children: a })
  ] });
}
function SimpleSplit({
  id,
  reverse,
  eyebrow,
  title,
  img,
  desc,
  features,
  cta,
  bg = "bg-offwhite"
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `py-[80px] md:py-[120px] ${bg} scroll-mt-32`, children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "reveal", style: {
      direction: "ltr"
    }, children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] overflow-hidden", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
    }, children: /* @__PURE__ */ jsx("img", { src: img, alt: "", className: "w-full h-[460px] object-cover" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "reveal", style: {
      direction: "ltr"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-4", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5", style: {
        fontSize: "clamp(28px, 3.5vw, 40px)"
      }, children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-text-body mb-6", children: desc }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-5 mb-7", children: features.map(([icon, label], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-teal", children: icon }),
        /* @__PURE__ */ jsx("span", { className: "text-[14px] font-semibold text-dark-warm", children: label })
      ] }, i)) }),
      /* @__PURE__ */ jsx("a", { href: cta.href, className: "btn btn-teal", children: cta.label })
    ] })
  ] }) }) });
}
export {
  NatureSchoolPage as component
};
