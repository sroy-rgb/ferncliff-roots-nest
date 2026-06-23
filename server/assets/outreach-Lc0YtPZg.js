import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { A as AnchorSubNav } from "./AnchorSubNav-nuFIP1bp.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { FirstAid, UsersThree, Package, BowlFood, Plant, HandHeart } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const subnav = [{
  href: "#overview",
  label: "Overview"
}, {
  href: "#disaster",
  label: "Disaster Assistance"
}, {
  href: "#mission",
  label: "Mission Teams"
}, {
  href: "#sharing",
  label: "Sharing The Goods"
}, {
  href: "#hunger",
  label: "Rise Against Hunger"
}, {
  href: "#farmstead",
  label: "Farmstead"
}, {
  href: "#volunteer",
  label: "Volunteer"
}];
function OutreachPage() {
  useScrollReveal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(AnchorSubNav, { links: subnav }),
    /* @__PURE__ */ jsxs("main", { style: {
      paddingTop: 72 + 48
    }, children: [
      /* @__PURE__ */ jsxs("section", { id: "overview", children: [
        /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Outreach & Mission", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Caring for others, close to home and ",
          /* @__PURE__ */ jsx(HeroEm, { children: "beyond" })
        ] }), subtitle: "Disaster relief, mission teams, food redistribution, and community service — extending Ferncliff's mission far beyond camp season.", children: /* @__PURE__ */ jsx("a", { href: "#volunteer", className: "btn btn-teal", children: "Get Involved" }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-dark py-14", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center", children: [["50+ years", "of disaster response"], ["10,000+", "volunteers served"], ["Millions of lbs", "redistributed through Sharing The Goods"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-serif text-gold leading-none", style: {
            fontSize: "clamp(32px, 4vw, 44px)"
          }, children: n }),
          /* @__PURE__ */ jsx("div", { className: "text-[13px] font-semibold mt-2", style: {
            color: "rgba(255,255,255,0.55)"
          }, children: l })
        ] }, l)) }) })
      ] }),
      /* @__PURE__ */ jsx(Split, { id: "disaster", eyebrow: "Disaster Assistance Center", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "A national ",
        /* @__PURE__ */ jsx(Hw, { children: "relief hub" })
      ] }), imgs: ["https://ferncliff.org/wp-content/uploads/2023/12/camp-noahCDP-800x600.jpg", "https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/6646836/pexels-photo-6646836.jpeg?auto=compress&cs=tinysrgb&w=600"], desc: "Ferncliff serves as a national-level disaster relief hub for the Presbyterian Church (USA). When disasters strike — tornadoes, floods, ice storms — Ferncliff mobilizes volunteers, supplies, and housing to serve affected communities across the region.", quote: {
        text: "When the call came after the storm, we drove through the night. By morning Ferncliff had supplies staged and volunteers ready. That's what this place does — it shows up.",
        cite: "— Rev. Rebecca Spooner Barber"
      }, icon: /* @__PURE__ */ jsx(FirstAid, { size: 28 }) }),
      /* @__PURE__ */ jsx(Split, { id: "mission", eyebrow: "Mission Teams", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Service for ",
        /* @__PURE__ */ jsx(Hw, { children: "groups of all sizes" })
      ] }), reverse: true, bg: "bg-cream", imgs: ["https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=900"], desc: "Year-round service opportunities for groups of all sizes. Mission teams stay at Ferncliff and serve the surrounding community through construction, renovation, environmental stewardship, and community projects.", icon: /* @__PURE__ */ jsx(UsersThree, { size: 28 }) }),
      /* @__PURE__ */ jsx(Split, { id: "sharing", eyebrow: "Sharing The Goods", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Product ",
        /* @__PURE__ */ jsx(Hw, { children: "redistribution" })
      ] }), imgs: ["https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=900"], desc: "A product redistribution ministry. Ferncliff receives donated goods from manufacturers and retailers and makes them available to churches, nonprofits, and communities at 80–90% below retail prices.", icon: /* @__PURE__ */ jsx(Package, { size: 28 }) }),
      /* @__PURE__ */ jsx(Split, { id: "hunger", eyebrow: "Rise Against Hunger", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Meal ",
        /* @__PURE__ */ jsx(Hw, { children: "packaging events" })
      ] }), reverse: true, bg: "bg-cream", imgs: ["https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=900"], desc: "Ferncliff hosts Rise Against Hunger meal packaging events, bringing together volunteers to package nutritious meals for communities facing food insecurity around the world.", icon: /* @__PURE__ */ jsx(BowlFood, { size: 28 }) }),
      /* @__PURE__ */ jsx(Split, { id: "farmstead", eyebrow: "Farmstead", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Growing ",
        /* @__PURE__ */ jsx(Hw, { children: "sustainably" })
      ] }), imgs: ["https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=900"], desc: "The Ferncliff Farmstead grows produce, raises animals, and teaches sustainable agriculture. Produce is used in the dining hall and shared with the community.", icon: /* @__PURE__ */ jsx(Plant, { size: 28 }) }),
      /* @__PURE__ */ jsx("section", { id: "volunteer", className: "py-[80px] md:py-[110px] bg-offwhite scroll-mt-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-[900px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-teal-ghost rounded-[28px] p-10 md:p-16 reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center mb-3", children: /* @__PURE__ */ jsx(HandHeart, { size: 32 }) }),
          /* @__PURE__ */ jsxs("h2", { className: "mb-3", style: {
            fontSize: "clamp(28px, 4vw, 40px)"
          }, children: [
            "Join our community of ",
            /* @__PURE__ */ jsx(Hw, { children: "service" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[16px] text-text-muted max-w-[520px] mx-auto", children: "Tell us how you'd like to get involved and our outreach team will reach out within a few days." })
        ] }),
        /* @__PURE__ */ jsx(VolunteerForm, {})
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function Split({
  id,
  eyebrow,
  title,
  imgs,
  desc,
  reverse,
  quote,
  icon,
  bg = "bg-offwhite"
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `py-[80px] md:py-[120px] ${bg} scroll-mt-32`, children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-8", children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "reveal", style: {
      direction: "ltr"
    }, children: imgs.length === 1 ? /* @__PURE__ */ jsx("div", { className: "rounded-[28px] overflow-hidden", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
    }, children: /* @__PURE__ */ jsx("img", { src: imgs[0], alt: "", className: "w-full h-[460px] object-cover" }) }) : /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 rounded-[20px] overflow-hidden", style: {
        boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
      }, children: /* @__PURE__ */ jsx("img", { src: imgs[0], alt: "", className: "w-full h-[300px] object-cover" }) }),
      imgs.slice(1).map((s, i) => /* @__PURE__ */ jsx("div", { className: "rounded-[14px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s, alt: "", className: "w-full h-[150px] object-cover" }) }, i))
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "reveal", style: {
      direction: "ltr"
    }, children: [
      icon && /* @__PURE__ */ jsx("div", { className: "text-teal mb-4", children: icon }),
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-teal mb-3", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5", style: {
        fontSize: "clamp(28px, 3.5vw, 40px)"
      }, children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-text-body mb-5", children: desc }),
      quote && /* @__PURE__ */ jsxs("blockquote", { className: "my-6 py-5 pl-6 border-l-[3px] border-gold", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-serif italic text-dark-warm leading-[1.5]", style: {
          fontSize: 19
        }, children: [
          '"',
          quote.text,
          '"'
        ] }),
        /* @__PURE__ */ jsx("cite", { className: "block mt-2 not-italic font-sans text-[13px] text-text-muted font-semibold", children: quote.cite })
      ] })
    ] })
  ] }) }) });
}
function VolunteerForm() {
  const {
    addVolunteerRequest
  } = useContentStore();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Disaster Response",
    message: ""
  });
  const change = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const onSubmit = (e) => {
    e.preventDefault();
    addVolunteerRequest({
      name: form.name.trim(),
      email: form.email.trim(),
      interest: form.interest,
      message: form.message.trim() || void 0
    });
    setSubmitted(true);
  };
  return submitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8 bg-white rounded-[16px]", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif text-teal", style: {
      fontSize: 22
    }, children: "Thank you!" }),
    /* @__PURE__ */ jsx("p", { className: "text-text-muted text-[14px] mt-2", children: "Our outreach team will be in touch within a few days." })
  ] }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsx(Input, { label: "Name", name: "name", required: true, value: form.name, onChange: change("name") }),
    /* @__PURE__ */ jsx(Input, { label: "Email", name: "email", type: "email", required: true, value: form.email, onChange: change("email") }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Select, { label: "Interest Area", name: "interest", value: form.interest, onChange: change("interest"), options: ["Disaster Response", "Mission Teams", "Sharing The Goods", "Rise Against Hunger", "Farmstead", "General"] }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
        letterSpacing: "1px"
      }, children: "Message" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, value: form.message, onChange: change("message"), className: "w-full bg-white rounded-[10px] px-4 py-3 text-[14px]", style: {
        border: "1px solid rgba(0,0,0,0.1)"
      } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2 text-center mt-2", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-teal", children: "Send Message" }) })
  ] });
}
function Input({
  label,
  name,
  type = "text",
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
      letterSpacing: "1px"
    }, children: label }),
    /* @__PURE__ */ jsx("input", { name, type, required, value, onChange, className: "w-full bg-white rounded-[10px] px-4 py-3 text-[14px]", style: {
      border: "1px solid rgba(0,0,0,0.1)"
    } })
  ] });
}
function Select({
  label,
  name,
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
      letterSpacing: "1px"
    }, children: label }),
    /* @__PURE__ */ jsx("select", { name, value, onChange, className: "w-full bg-white rounded-[10px] px-4 py-3 text-[14px]", style: {
      border: "1px solid rgba(0,0,0,0.1)"
    }, children: options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
  ] });
}
export {
  OutreachPage as component
};
