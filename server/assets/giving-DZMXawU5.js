import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { A as AnchorSubNav } from "./AnchorSubNav-nuFIP1bp.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { Heart, ArrowsClockwise, Handshake, ArrowRight, CheckCircle, Lock, ShieldCheck, EyeSlash } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const subnav = [{
  href: "#ways",
  label: "Ways to Give"
}, {
  href: "#friends",
  label: "Friends of Ferncliff"
}, {
  href: "#planned",
  label: "Planned Giving"
}, {
  href: "#campaign",
  label: "Campaign"
}, {
  href: "#tribute",
  label: "Tribute Donations"
}];
const amounts = [25, 50, 100, 250, 500, 1e3];
function GivingPage() {
  useScrollReveal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(AnchorSubNav, { links: subnav }),
    /* @__PURE__ */ jsxs("main", { style: {
      paddingTop: 72 + 48
    }, children: [
      /* @__PURE__ */ jsxs("section", { id: "ways", children: [
        /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Support Ferncliff", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Every gift grows something ",
          /* @__PURE__ */ jsx(HeroEm, { children: "extraordinary" })
        ] }), subtitle: "Your generosity sends kids to camp, protects 1,200 acres of forest, and powers disaster relief that serves communities across the country.", height: "55vh" }),
        /* @__PURE__ */ jsx("div", { className: "py-[80px] md:py-[110px] bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
          /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Make a Gift", title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Give in a way that ",
            /* @__PURE__ */ jsx(Hw, { children: "fits you" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-[500px] mx-auto reveal", children: /* @__PURE__ */ jsx(DonationCard, {}) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mt-16", children: [{
            icon: /* @__PURE__ */ jsx(Heart, { size: 28 }),
            color: "var(--color-coral)",
            bg: "bg-coral-light",
            title: "One-Time Gift",
            desc: "Support our mission today with a single donation in any amount.",
            cta: "Give Now",
            href: "#ways"
          }, {
            icon: /* @__PURE__ */ jsx(ArrowsClockwise, { size: 28 }),
            color: "var(--color-teal)",
            bg: "bg-teal-ghost",
            title: "Friends of Ferncliff",
            desc: "Become a monthly giver and sustain Ferncliff year-round.",
            cta: "Join Friends",
            href: "#friends"
          }, {
            icon: /* @__PURE__ */ jsx(Handshake, { size: 28 }),
            color: "var(--color-gold)",
            bg: "bg-gold-light",
            title: "Planned Giving",
            desc: "Leave a legacy through estate gifts, bequests, and charitable trusts.",
            cta: "Learn More",
            href: "#planned"
          }].map((o) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] p-7 text-center", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: `inline-flex w-14 h-14 rounded-full items-center justify-center mb-4 ${o.bg}`, style: {
              color: o.color
            }, children: o.icon }),
            /* @__PURE__ */ jsx("h3", { className: "font-sans text-[17px] font-bold text-dark mb-2", children: o.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-relaxed mb-5", children: o.desc }),
            /* @__PURE__ */ jsx("a", { href: o.href, className: "btn btn-sm btn-teal", children: o.cta })
          ] }, o.title)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "friends", className: "py-[80px] md:py-[120px] bg-offwhite scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Friends of Ferncliff", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Join the ",
          /* @__PURE__ */ jsx(Hw, { children: "monthly" }),
          " community"
        ] }), subtitle: "Join a community of monthly givers sustaining Ferncliff's mission year-round." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10", children: [25, 50, 100, 250].map((a) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[16px] p-6 text-center reveal", style: {
          boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: "font-serif text-teal", style: {
            fontSize: 32
          }, children: [
            "$",
            a
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[12px] text-text-muted font-semibold uppercase mt-1", style: {
            letterSpacing: "1px"
          }, children: "per month" })
        ] }, a)) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-cream rounded-[20px] p-8 reveal", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif mb-4", style: {
            fontSize: 22
          }, children: "Member Benefits" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-[15px] text-dark-warm", children: [
            /* @__PURE__ */ jsx("li", { children: "• Quarterly updates and behind-the-scenes stories" }),
            /* @__PURE__ */ jsx("li", { children: "• Invitation to the annual Friends dinner" }),
            /* @__PURE__ */ jsx("li", { children: "• Recognition on the Friends of Ferncliff wall" }),
            /* @__PURE__ */ jsx("li", { children: "• First access to special events and programs" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "btn btn-teal mt-6", children: "Become a Friend" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "planned", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[860px] mx-auto px-8 text-center reveal", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Planned Giving", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Leave a ",
          /* @__PURE__ */ jsx(Hw, { children: "lasting legacy" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-[16px] text-text-body leading-relaxed mb-7", children: "A planned gift through your estate, will, charitable trust, or beneficiary designation ensures that Ferncliff's mission continues for future generations. Whether you're naming Ferncliff in your will, setting up a charitable remainder trust, or designating us as a beneficiary, our team can help you find the right approach." }),
        /* @__PURE__ */ jsx("a", { href: "mailto:development@ferncliff.org", className: "btn btn-teal", children: "Contact Development" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "campaign", className: "py-[80px] md:py-[120px] bg-offwhite scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Capital Campaign", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Connect, Inspire, ",
          /* @__PURE__ */ jsx(Hw, { children: "Transform" })
        ] }), subtitle: "A multi-year campaign investing in Ferncliff's next chapter — new facilities, expanded programs, and environmental stewardship." }),
        /* @__PURE__ */ jsx(CampaignProgress, {}),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mt-12", children: [{
          title: "New Facilities",
          desc: "Expanded lodging, updated meeting spaces, and a new welcome center."
        }, {
          title: "Expanded Programs",
          desc: "More camp scholarships, year-round Nature School growth, and outreach."
        }, {
          title: "Stewardship",
          desc: "Solar expansion, trail restoration, and continued land conservation."
        }].map((p) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] p-7", style: {
          boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("h4", { className: "font-sans text-[16px] font-bold text-dark mb-2", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-relaxed", children: p.desc })
        ] }, p.title)) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-10 reveal", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "btn btn-gold-outline mr-3", children: "Learn About the Campaign" }),
          /* @__PURE__ */ jsxs("a", { href: "#ways", className: "link-arrow inline-flex", children: [
            "Support This Campaign ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, weight: "bold" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "tribute", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[760px] mx-auto px-8 text-center reveal", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Tribute Donations", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Honor someone ",
          /* @__PURE__ */ jsx(Hw, { children: "special" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-[16px] text-text-body leading-relaxed mb-7", children: "Make a gift in memory or in honor of someone who has shaped your life. We'll send a notification to the person or family of your choice, and your tribute will help fuel Ferncliff's mission." }),
        /* @__PURE__ */ jsx("a", { href: "https://ferncliff.donorperfect.org/", target: "_blank", rel: "noopener noreferrer", className: "btn btn-teal", children: "Make a Tribute Gift" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function DonationCard() {
  const {
    addDonation
  } = useContentStore();
  const [freq, setFreq] = useState("one");
  const [amt, setAmt] = useState(50);
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    campaign: "General"
  });
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    addDonation({
      donor: donor.name.trim() || "Anonymous",
      amount: amt,
      type: freq === "one" ? "One-time" : "Monthly",
      campaign: donor.campaign
    });
    setDone(true);
  };
  if (done) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[28px] p-8 md:p-10 text-center", style: {
      boxShadow: "0 16px 48px rgba(44,41,38,0.12)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "text-teal flex justify-center mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { size: 52, weight: "fill" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-dark mb-2", style: {
        fontSize: 24
      }, children: "Thank you!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-[14px] mb-5", children: [
        "Your ",
        freq === "monthly" ? "monthly" : "one-time",
        " gift of ",
        /* @__PURE__ */ jsxs("strong", { children: [
          "$",
          amt.toLocaleString()
        ] }),
        " to ",
        donor.campaign,
        " has been recorded."
      ] }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-teal", onClick: () => {
        setDone(false);
        setDonor({
          name: "",
          email: "",
          campaign: "General"
        });
      }, children: "Give Again" })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "bg-white rounded-[28px] p-8 md:p-10", style: {
    boxShadow: "0 16px 48px rgba(44,41,38,0.12)"
  }, children: [
    /* @__PURE__ */ jsx("h3", { className: "font-serif text-dark mb-1.5", style: {
      fontSize: 26
    }, children: "Make your gift" }),
    /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted mb-6", children: "Secure · You never leave ferncliff.org" }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 p-1 rounded-full mb-5 bg-cream-warm", children: ["one", "monthly"].map((k) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFreq(k), className: "flex-1 py-2.5 rounded-full text-[13px] font-bold transition-colors", style: {
      background: freq === k ? "var(--color-teal)" : "transparent",
      color: freq === k ? "#fff" : "var(--color-text-muted)"
    }, children: k === "one" ? "One-Time" : "Monthly" }, k)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2.5 mb-5", children: amounts.map((a) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setAmt(a), className: "py-3.5 rounded-[12px] font-serif transition-colors", style: {
      background: amt === a ? "var(--color-teal)" : "var(--color-offwhite)",
      color: amt === a ? "#fff" : "var(--color-dark-warm)",
      border: `1px solid ${amt === a ? "var(--color-teal)" : "rgba(0,0,0,0.08)"}`,
      fontSize: 22
    }, children: [
      "$",
      a.toLocaleString()
    ] }, a)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2.5 mb-4", children: [
      /* @__PURE__ */ jsx("input", { required: true, placeholder: "Your name", value: donor.name, onChange: (e) => setDonor({
        ...donor,
        name: e.target.value
      }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      } }),
      /* @__PURE__ */ jsx("input", { required: true, type: "email", placeholder: "Email", value: donor.email, onChange: (e) => setDonor({
        ...donor,
        email: e.target.value
      }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      } }),
      /* @__PURE__ */ jsxs("select", { value: donor.campaign, onChange: (e) => setDonor({
        ...donor,
        campaign: e.target.value
      }), className: "px-4 py-2.5 rounded-[10px] text-[14px] bg-offwhite", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      }, children: [
        /* @__PURE__ */ jsx("option", { children: "General" }),
        /* @__PURE__ */ jsx("option", { children: "Friends of Ferncliff" }),
        /* @__PURE__ */ jsx("option", { children: "Transform Campaign" }),
        /* @__PURE__ */ jsx("option", { children: "Camp Scholarships" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("button", { type: "submit", className: "w-full py-4 rounded-full bg-coral text-white font-sans font-bold transition-all hover:-translate-y-0.5", style: {
      fontSize: 16,
      boxShadow: "0 4px 20px rgba(201,107,60,0.3)"
    }, children: [
      "Donate $",
      amt,
      freq === "monthly" ? "/mo" : "",
      " →"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-5 mt-4", children: [[/* @__PURE__ */ jsx(Lock, { size: 12 }, "1"), "SSL Encrypted"], [/* @__PURE__ */ jsx(ShieldCheck, { size: 12 }, "2"), "PCI Compliant"], [/* @__PURE__ */ jsx(EyeSlash, { size: 12 }, "3"), "Private"]].map(([icon, label], i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-text-muted", children: [
      icon,
      " ",
      label
    ] }, i)) })
  ] });
}
function CampaignProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        setProgress(80);
        io.disconnect();
      }
    }), {
      threshold: 0.4
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref, className: "bg-white rounded-[24px] p-8 md:p-10 reveal", style: {
    boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-cream rounded-full overflow-hidden mb-3", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full transition-all ease-out", style: {
      width: `${progress}%`,
      background: "linear-gradient(90deg, var(--color-teal), #3da87a)",
      transitionDuration: "2000ms"
    } }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[13px] font-semibold text-text-muted", children: [
      /* @__PURE__ */ jsx("span", { children: "$0" }),
      /* @__PURE__ */ jsx("span", { className: "text-teal", children: "80% of $7.6M raised" }),
      /* @__PURE__ */ jsx("span", { children: "$7.6M" })
    ] })
  ] });
}
export {
  GivingPage as component
};
