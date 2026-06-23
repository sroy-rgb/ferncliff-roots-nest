import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { C as CampLayout } from "./CampLayout-DpI0zR-Q.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { CheckCircle, XCircle, X, Plus, Play, User, ArrowRight, TShirt, Bed, Backpack, ShieldCheck, FirstAid, Users, Eye, ShieldStar, Heart } from "@phosphor-icons/react";
import "./MobileBottomBar-z-szcD1V.js";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const readiness = ["They can spend time away from home (a sleepover or grandparent's house)", "They're curious about nature, animals, or outdoor activities", "They enjoy making new friends", "They're excited (even a little nervous — that's normal!)"];
const packing = [{
  title: "Clothing",
  icon: /* @__PURE__ */ jsx(TShirt, { size: 18 }),
  items: ["5–7 t-shirts", "Shorts", "Socks & underwear", "Swimsuit", "Rain jacket", "Long pants (for evening)", "Sturdy closed-toe shoes", "Flip flops (for shower)", "Hat"]
}, {
  title: "Bedding & Toiletries",
  icon: /* @__PURE__ */ jsx(Bed, { size: 18 }),
  items: ["Sleeping bag or sheets", "Pillow", "Blanket", "Sunscreen", "Bug spray", "Toothbrush & toothpaste", "Soap / shampoo", "Towels (bath + beach)"]
}, {
  title: "Other Essentials",
  icon: /* @__PURE__ */ jsx(Backpack, { size: 18 }),
  items: ["Water bottle (labeled)", "Flashlight", "Stamped envelopes", "Small backpack / daypack"]
}];
const doNotBring = ["Cell phones or electronics", "Expensive items or jewelry", "Food (due to allergies)", "Pocket knives"];
const safety = [{
  icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 28 }),
  title: "ACA Accredited",
  desc: "Meeting the highest industry safety standards"
}, {
  icon: /* @__PURE__ */ jsx(FirstAid, { size: 28 }),
  title: "On-Site Medical Staff",
  desc: "Nurse on duty during all camp sessions"
}, {
  icon: /* @__PURE__ */ jsx(Users, { size: 28 }),
  title: "Background-Checked Staff",
  desc: "Every staff member screened and trained"
}, {
  icon: /* @__PURE__ */ jsx(Eye, { size: 28 }),
  title: "24/7 Supervision",
  desc: "Counselors with campers at all times"
}, {
  icon: /* @__PURE__ */ jsx(ShieldStar, { size: 28 }),
  title: "Emergency Protocols",
  desc: "Comprehensive plans for weather and medical events"
}, {
  icon: /* @__PURE__ */ jsx(Heart, { size: 28 }),
  title: "Trained in Youth Care",
  desc: "Staff equipped for homesickness, conflict, inclusion"
}];
const faqs = [["What if my child gets homesick?", "Homesickness is completely normal and our counselors are specifically trained to help. We keep campers busy with activities, encourage letter writing, and create a warm cabin community. Most cases resolve within the first day. We'll contact you if your child needs extra support."], ["Can I call or visit during camp?", "To help campers settle in and build independence, we limit phone calls and visits. We encourage letter writing — it's a camp tradition! Our staff will contact you if there's anything you need to know about your child's experience."], ["What about food allergies and dietary needs?", "We accommodate food allergies and dietary restrictions. Please note all allergies and needs during registration, and our kitchen team will ensure your child is safely and well fed throughout their stay."], ["What is the counselor-to-camper ratio?", "Our ratios meet or exceed ACA standards. Each cabin group typically has 1 counselor for every 5–6 campers for younger age groups, and 1 for every 8–10 for older campers. A cabin counselor sleeps in the same cabin as their group."], ["What happens if it rains?", "Rain doesn't stop camp! We have indoor backup activities, covered pavilions, and honestly — some of the best camp memories happen in the rain. We only move indoors for severe weather."], ["Can my child be in the same cabin as a friend?", "Yes! You can make a buddy request during registration. We do our best to honor one buddy request per camper. It's also a great opportunity for kids to make new friends."], ["What is the voluntary pricing program?", "Ferncliff offers three pricing tiers so camp is accessible to every family. Tier 1 is the full cost, Tier 2 is partially subsidized, and Tier 3 is the most affordable option. The camp experience is identical regardless of which tier you choose."], ["How do I register?", "Registration is handled online through CampBrain, our secure registration partner. Click 'Register' on any camp page and you'll be guided through selecting your session, entering camper info, and choosing your pricing tier."]];
const staff = [{
  title: "Camp Director",
  desc: "Leading the Ferncliff camp experience"
}, {
  title: "Program Coordinator",
  desc: "Planning daily activities and adventures"
}, {
  title: "Cabin Counselors",
  desc: "Your child's trusted guide all week"
}];
function FirstTimePage() {
  const [checked, setChecked] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const toggle = (k) => setChecked((p) => ({
    ...p,
    [k]: !p[k]
  }));
  return /* @__PURE__ */ jsxs(CampLayout, { children: [
    /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "First-Time Campers", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "First time at ",
      /* @__PURE__ */ jsx(HeroEm, { children: "Ferncliff?" })
    ] }), subtitle: "You're in the right place. Everything you need to feel confident — for kids and parents alike.", children: /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "First-Time Campers", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "First time at ",
        /* @__PURE__ */ jsx(Hw, { children: "Ferncliff?" })
      ] }), subtitle: "You're in the right place. Everything you need to feel confident — for kids and parents alike." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 28,
            marginBottom: 20
          }, children: "Is my child ready for camp?" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: readiness.map((r) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { size: 22, weight: "fill", className: "text-teal shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-[15px] text-text-body", children: r })
          ] }, r)) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 text-[14px] text-text-muted", children: [
            "If you checked even one, they're probably ready. Our",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/camp/discovery", className: "text-gold font-bold", children: "Discovery Camps" }),
            " ",
            "are designed specifically for easing into camp life."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal rounded-[28px] overflow-hidden", style: {
          boxShadow: "0 16px 48px rgba(44,41,38,0.12)"
        }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Family outdoors", style: {
          width: "100%",
          height: 380,
          objectFit: "cover"
        } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What to ",
        /* @__PURE__ */ jsx(Hw, { children: "Pack" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: packing.map((cat) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[20px] p-6 reveal", style: {
        boxShadow: "0 4px 16px rgba(44,41,38,0.04)"
      }, children: [
        /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 font-sans font-bold text-[14px] text-dark mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal", children: cat.icon }),
          " ",
          cat.title
        ] }),
        /* @__PURE__ */ jsx("ul", { children: cat.items.map((item) => {
          const key = `${cat.title}:${item}`;
          const isC = !!checked[key];
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { onClick: () => toggle(key), className: "flex items-center gap-3 w-full text-left py-1.5 px-2 rounded-[8px] hover:bg-teal-ghost transition", children: [
            /* @__PURE__ */ jsx("span", { className: "w-[22px] h-[22px] rounded-[6px] border-2 flex items-center justify-center shrink-0", style: {
              borderColor: isC ? "var(--color-teal)" : "var(--color-cream-warm)",
              background: isC ? "var(--color-teal)" : "transparent"
            }, children: isC && /* @__PURE__ */ jsx("span", { className: "text-white text-[13px] font-bold", children: "✓" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[14px]", style: {
              textDecoration: isC ? "line-through" : "none",
              color: isC ? "var(--color-text-muted)" : "var(--color-text-body)"
            }, children: item })
          ] }) }, item);
        }) })
      ] }, cat.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-coral-light rounded-[20px] p-6 mt-6 reveal", children: [
        /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 font-sans font-bold text-[14px] text-coral mb-3", children: [
          /* @__PURE__ */ jsx(XCircle, { size: 18 }),
          " Do NOT Bring"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: doNotBring.map((d) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[14px] text-dark-soft", children: [
          /* @__PURE__ */ jsx(X, { size: 16, weight: "bold", className: "text-coral shrink-0" }),
          d
        ] }, d)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Health & ",
        /* @__PURE__ */ jsx(Hw, { children: "Safety" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: safety.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[20px] p-7 text-center reveal transition-transform hover:-translate-y-1", style: {
        boxShadow: "0 4px 16px rgba(44,41,38,0.04)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center mb-3", children: s.icon }),
        /* @__PURE__ */ jsx("h4", { className: "font-sans font-bold text-[15px] text-dark mb-1", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Parent ",
        /* @__PURE__ */ jsx(Hw, { children: "FAQ" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: faqs.map(([q, a], i) => {
        const isOpen = openFaq === i;
        return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[20px] overflow-hidden border border-black/5", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : i), className: "w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-teal-ghost transition-colors", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[15px] text-teal flex-1", children: q }),
            /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform", style: {
              background: "var(--color-teal-light)",
              color: "var(--color-teal)",
              transform: isOpen ? "rotate(45deg)" : "none"
            }, children: /* @__PURE__ */ jsx(Plus, { size: 16, weight: "bold" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden transition-[max-height] duration-400 ease-out", style: {
            maxHeight: isOpen ? 400 : 0
          }, children: /* @__PURE__ */ jsx("p", { className: "px-7 pb-5 text-[14px] text-text-body leading-[1.7]", children: a }) })
        ] }, q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1000px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("button", { className: "relative w-full rounded-[28px] overflow-hidden group block text-left", style: {
      aspectRatio: "16/9",
      boxShadow: "0 16px 48px rgba(44,41,38,0.12)"
    }, children: [
      /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Virtual tour", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-white", style: {
        background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))"
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "w-20 h-20 rounded-full bg-white/95 flex items-center justify-center transition-transform group-hover:scale-110 mb-4", children: /* @__PURE__ */ jsx(Play, { size: 32, weight: "fill", className: "text-teal ml-1" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-white", style: {
          fontSize: 28
        }, children: "Take a Virtual Tour of Ferncliff" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 text-[15px] mt-1", children: "See where your camper will eat, sleep, play, and grow." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
      /* @__PURE__ */ jsx(SectionIntro, { title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Meet Our ",
        /* @__PURE__ */ jsx(Hw, { children: "Staff" })
      ] }), subtitle: "Our summer staff are college-age leaders who are trained, background-checked, and passionate about creating a safe, faith-filled experience." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: staff.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[20px] p-7 text-center reveal", style: {
        boxShadow: "0 4px 16px rgba(44,41,38,0.04)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center", style: {
          background: "var(--color-cream)"
        }, children: /* @__PURE__ */ jsx(User, { size: 36, className: "text-teal" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-sans font-bold text-[15px] text-dark mb-1", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted", children: s.desc })
      ] }, s.title)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "link-arrow", children: [
        "Meet the Full Team ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-[100px] bg-offwhite", children: /* @__PURE__ */ jsx("div", { className: "max-w-[800px] mx-auto px-8 reveal", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] px-10 py-12 text-center", style: {
      background: "var(--color-teal-ghost)"
    }, children: [
      /* @__PURE__ */ jsxs("h3", { style: {
        fontSize: "clamp(26px, 3vw, 34px)",
        marginBottom: 12
      }, children: [
        "Ready to take the next ",
        /* @__PURE__ */ jsx(Hw, { children: "step?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-7", children: "2026 camps run June 1 – August 7. Spots fill quickly!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/camp/register", className: "btn btn-teal", children: "Register Now" }),
        /* @__PURE__ */ jsx(Link, { to: "/camp/dates", className: "btn btn-gold-outline", children: "View All Dates" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[13px] mt-6", children: [
        "Questions? Call ",
        /* @__PURE__ */ jsx("a", { href: "tel:5018213063", className: "text-gold font-semibold", children: "(501) 821-3063" }),
        " or email",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:summercamp@ferncliff.org", className: "text-gold font-semibold", children: "summercamp@ferncliff.org" })
      ] })
    ] }) }) })
  ] });
}
export {
  FirstTimePage as component
};
