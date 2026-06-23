import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { u as useScrollReveal, N as Nav, F as Footer, M as MobileBottomBar } from "./MobileBottomBar-z-szcD1V.js";
import { A as AnchorSubNav } from "./AnchorSubNav-nuFIP1bp.js";
import { C as CampHero, H as HeroEm } from "./CampHero-DAJsON1B.js";
import { S as SectionIntro, H as Hw } from "./SectionIntro-Bb5TgvUD.js";
import { SunDim, Lightning, Leaf, Recycle, MapPin, Phone, EnvelopeSimple, Clock, Minus, Plus } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const subnav = [{
  href: "#mission",
  label: "Our Mission"
}, {
  href: "#sustainability",
  label: "Sustainability"
}, {
  href: "#staff",
  label: "Staff & Board"
}, {
  href: "#trails",
  label: "Trails & Walks"
}, {
  href: "#jobs",
  label: "Jobs"
}, {
  href: "#directions",
  label: "Directions"
}];
const timeline = [["1937", "Founded"], ["1950s", "First summer camps"], ["1970s", "Conference center expansion"], ["2000s", "Nature School launch"], ["2020s", "Connect Inspire Transform campaign"]];
const staff = [{
  name: "David Gill",
  title: "Executive Director",
  bio: "Leading Ferncliff into its next chapter."
}, {
  name: "Sarah Martinez",
  title: "Camp Director",
  bio: "Crafting unforgettable summers since 2015."
}, {
  name: "Michael Roberts",
  title: "Program Director",
  bio: "Building year-round programming."
}, {
  name: "Jenna Park",
  title: "Nature School Director",
  bio: "Forest kindergarten pioneer."
}, {
  name: "Tom Reynolds",
  title: "Facilities Director",
  bio: "Stewarding 1,200 acres."
}, {
  name: "Kimberly Graves",
  title: "Communications Director",
  bio: "Sharing the Ferncliff story."
}, {
  name: "Andrea Williams",
  title: "Development Director",
  bio: "Connecting donors to mission."
}, {
  name: "Rev. Mark Davis",
  title: "Hospitality Director",
  bio: "Welcoming every guest."
}];
const board = [["Elizabeth Carter", "Chair"], ["Robert Allen", "Vice Chair"], ["Patricia Mendoza", "Treasurer"], ["James Wu", "Secretary"], ["Rev. Susan Park", "Member"], ["Daniel Foster", "Member"], ["Maria Gonzalez", "Member"], ["Stephen O'Connor", "Member"], ["Linda Becker", "Member"], ["Rev. John Hartman", "Member"]];
const trails = [{
  name: "Lake Loop",
  distance: "1.2 mi",
  level: "Easy",
  desc: "A gentle walk circling Belden Pond — perfect for families and morning strolls."
}, {
  name: "Forest Cathedral",
  distance: "2.8 mi",
  level: "Moderate",
  desc: "Wooded trail through old-growth hardwoods. Wildflowers in spring."
}, {
  name: "Ridge Ramble",
  distance: "4.5 mi",
  level: "Moderate",
  desc: "Ridgeline route with panoramic views of the surrounding hills."
}, {
  name: "Wilderness Way",
  distance: "6.2 mi",
  level: "Challenging",
  desc: "Backcountry trail along creeks and the property's western boundary."
}, {
  name: "Sunset Spur",
  distance: "0.8 mi",
  level: "Easy",
  desc: "Short climb to a clearing with the best sunset view on the property."
}];
const jobs = [{
  title: "Summer Camp Counselor",
  type: "Seasonal",
  desc: "Live on site for the summer and lead overnight or day-camp groups."
}, {
  title: "Facilities Assistant",
  type: "Full-Time",
  desc: "Maintain buildings, grounds, and equipment across 1,200 acres."
}, {
  title: "Nature School Educator",
  type: "Part-Time",
  desc: "Lead outdoor learning sessions for ages 3–5 in our forest classroom."
}];
const levelColor = {
  Easy: "#3da87a",
  Moderate: "#c9a04a",
  Challenging: "#c46b3a"
};
function AboutPage() {
  useScrollReveal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-offwhite", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(AnchorSubNav, { links: subnav }),
    /* @__PURE__ */ jsxs("main", { style: {
      paddingTop: 72 + 48
    }, children: [
      /* @__PURE__ */ jsxs("section", { id: "mission", children: [
        /* @__PURE__ */ jsx(CampHero, { image: "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920", eyebrow: "Our Mission", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "As an expression of ",
          /* @__PURE__ */ jsx(HeroEm, { children: "God's love" })
        ] }), subtitle: "We welcome people into a life of caring for Creation, caring for others, and caring for themselves." }),
        /* @__PURE__ */ jsx("div", { className: "py-[80px] md:py-[110px] bg-offwhite", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[760px] mx-auto px-8 reveal", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif", style: {
            fontSize: 22,
            lineHeight: 1.55,
            color: "var(--color-dark-warm)"
          }, children: "Ferncliff Camp & Conference Center was established in 1937 as a ministry of the Presbyterian Church (USA). For nearly nine decades, our 1,200 acres just outside Little Rock, Arkansas have welcomed campers, retreat groups, families, and seekers of every age." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-text-body", style: {
            fontSize: 17,
            lineHeight: 1.8
          }, children: "What began as a small summer camp has grown into a year-round center for hospitality, education, and service — without ever losing the rooted, hand-built character that makes Ferncliff feel like home." }),
          /* @__PURE__ */ jsx("div", { className: "my-14 grid grid-cols-2 md:grid-cols-5 gap-6", children: timeline.map(([yr, label]) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "font-serif text-teal leading-none", style: {
              fontSize: 30
            }, children: yr }),
            /* @__PURE__ */ jsx("div", { className: "text-[12px] text-text-muted mt-2 font-semibold", children: label })
          ] }, yr)) }),
          /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "What We Believe", title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Three kinds of ",
            /* @__PURE__ */ jsx(Hw, { children: "care" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [["Care for Creation", "We tend 1,200 acres of forest, lake, and meadow as a gift entrusted to us."], ["Care for Others", "We welcome every guest, every camper, every neighbor — without exception."], ["Care for Self", "We make room for rest, reflection, and the kind of quiet hard to find elsewhere."]].map(([t, d]) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-teal mb-3", style: {
              fontSize: 22
            }, children: t }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] text-text-muted leading-relaxed", children: d })
          ] }, t)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "mt-14 py-7 pl-7 border-l-[4px] border-gold", children: [
            /* @__PURE__ */ jsx("p", { className: "font-serif italic text-dark-warm", style: {
              fontSize: 26,
              lineHeight: 1.4
            }, children: `"You can't go to Ferncliff and walk away not different."` }),
            /* @__PURE__ */ jsx("cite", { className: "block mt-3 not-italic font-sans text-[13px] text-text-muted font-semibold", children: "— Rev. Rebecca Spooner Barber" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "sustainability", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Sustainability", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "1,200 acres of ",
          /* @__PURE__ */ jsx(Hw, { children: "stewardship" })
        ] }), subtitle: "Recognized as Arkansas's Greenest Non-Profit and recipient of a National Energy Efficiency Award." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-[28px] overflow-hidden reveal", style: {
            boxShadow: "0 16px 48px rgba(44,41,38,0.15)"
          }, children: /* @__PURE__ */ jsx("img", { src: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Forest landscape", className: "w-full h-[480px] object-cover" }) }),
          /* @__PURE__ */ jsx("div", { className: "reveal grid grid-cols-1 sm:grid-cols-2 gap-5", children: [[/* @__PURE__ */ jsx(SunDim, { size: 26 }), "Solar Panels", "Powering buildings across campus"], [/* @__PURE__ */ jsx(Lightning, { size: 26 }), "Geothermal Heating", "Energy-efficient climate control"], [/* @__PURE__ */ jsx(Leaf, { size: 26 }), "Conservation Easements", "Permanently protected acreage"], [/* @__PURE__ */ jsx(Recycle, { size: 26 }), "Recycling & Native Planting", "Reducing waste, restoring habitat"]].map(([icon, t, d], i) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[16px] p-6", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "text-teal mb-3", children: icon }),
            /* @__PURE__ */ jsx("h4", { className: "font-sans text-[15px] font-bold text-dark mb-1", children: t }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-relaxed", children: d })
          ] }, i)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "staff", className: "py-[80px] md:py-[120px] bg-offwhite scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Staff & Board", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The ",
          /* @__PURE__ */ jsx(Hw, { children: "people" }),
          " behind Ferncliff"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16", children: staff.map((s) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] p-6 flex items-start gap-4", style: {
          boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full flex items-center justify-center font-serif text-white shrink-0", style: {
            background: "linear-gradient(135deg, var(--color-teal), #3da87a)",
            fontSize: 18
          }, children: s.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-sans font-bold text-dark text-[15px]", children: s.name }),
            /* @__PURE__ */ jsx("div", { className: "text-teal text-[12px] font-semibold uppercase mt-0.5", style: {
              letterSpacing: "1px"
            }, children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted mt-2 leading-relaxed", children: s.bio })
          ] })
        ] }, s.name)) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-[760px] mx-auto reveal", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-center mb-6", style: {
            fontSize: 26
          }, children: "Board of Directors" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[20px] overflow-hidden", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, children: board.map(([name, role], i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center px-6 py-4", style: {
            borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)"
          }, children: [
            /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-dark text-[14px]", children: name }),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] text-text-muted font-semibold", children: role })
          ] }, name)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "trails", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Trails & Walks", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "20+ miles of ",
          /* @__PURE__ */ jsx(Hw, { children: "marked trails" })
        ] }), subtitle: "Ferncliff trails are free and open to the community year-round." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: trails.map((t) => /* @__PURE__ */ jsx(TrailItem, { ...t }, t.name)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "jobs", className: "py-[80px] md:py-[120px] bg-offwhite scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1000px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Jobs", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Join our ",
          /* @__PURE__ */ jsx(Hw, { children: "team" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-10", children: jobs.map((j) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] p-7", style: {
          boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-gold-light text-dark-warm mb-3", children: j.type }),
          /* @__PURE__ */ jsx("h4", { className: "font-sans text-[16px] font-bold text-dark mb-2", children: j.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] text-text-muted leading-relaxed mb-4", children: j.desc }),
          /* @__PURE__ */ jsx("a", { href: "mailto:jobs@ferncliff.org", className: "btn btn-sm btn-teal", children: "Apply" })
        ] }, j.title)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-text-muted text-[14px] reveal", children: [
          "Don't see your role? We're always looking for passionate people. Send your resume to",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:jobs@ferncliff.org", className: "text-teal font-semibold", children: "jobs@ferncliff.org" }),
          "."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "directions", className: "py-[80px] md:py-[120px] bg-cream scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-8", children: [
        /* @__PURE__ */ jsx(SectionIntro, { eyebrow: "Directions & Contact", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Come ",
          /* @__PURE__ */ jsx(Hw, { children: "visit us" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-5 mb-6", children: [[/* @__PURE__ */ jsx(MapPin, { size: 20 }), "1720 Ferncliff Road, Little Rock, AR 72223"], [/* @__PURE__ */ jsx(Phone, { size: 20 }), "(501) 821-3063"], [/* @__PURE__ */ jsx(EnvelopeSimple, { size: 20 }), "info@ferncliff.org"], [/* @__PURE__ */ jsx(Clock, { size: 20 }), "Office: Mon–Fri, 8:30am – 4:30pm"]].map(([icon, line], i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-teal mt-0.5", children: icon }),
              /* @__PURE__ */ jsx("span", { className: "text-[15px] text-dark-warm", children: line })
            ] }, i)) }),
            /* @__PURE__ */ jsx("div", { className: "rounded-[20px] overflow-hidden", style: {
              boxShadow: "0 8px 24px rgba(44,41,38,0.1)"
            }, children: /* @__PURE__ */ jsx("iframe", { title: "Ferncliff Map", src: "https://www.google.com/maps?q=1720+Ferncliff+Road,+Little+Rock,+AR+72223&output=embed", width: "100%", height: "320", loading: "lazy", style: {
              border: 0
            } }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal bg-white rounded-[20px] p-8", style: {
            boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
          }, children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif mb-5", style: {
              fontSize: 24
            }, children: "Send us a message" }),
            /* @__PURE__ */ jsx(ContactForm, {})
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileBottomBar, {})
  ] });
}
function TrailItem({
  name,
  distance,
  level,
  desc
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[16px] overflow-hidden reveal", style: {
    boxShadow: "0 2px 16px rgba(44,41,38,0.06)"
  }, children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
        /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-dark text-[15px]", children: name }),
        /* @__PURE__ */ jsx("span", { className: "text-[12px] text-text-muted font-semibold", children: distance }),
        /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-full text-[11px] font-bold", style: {
          background: levelColor[level] + "22",
          color: levelColor[level]
        }, children: level })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-teal shrink-0", children: open ? /* @__PURE__ */ jsx(Minus, { size: 18 }) : /* @__PURE__ */ jsx(Plus, { size: 18 }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "px-6 pb-5 text-[14px] text-text-muted leading-relaxed", children: desc })
  ] });
}
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return /* @__PURE__ */ jsx("p", { className: "font-serif text-teal", style: {
    fontSize: 20
  }, children: "Thanks! We'll be in touch soon." });
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    setSubmitted(true);
  }, className: "space-y-4", children: [
    [["Name", "name", "text"], ["Email", "email", "email"]].map(([l, n, t]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
        letterSpacing: "1px"
      }, children: l }),
      /* @__PURE__ */ jsx("input", { name: n, type: t, required: true, className: "w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      } })
    ] }, n)),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
        letterSpacing: "1px"
      }, children: "Subject" }),
      /* @__PURE__ */ jsx("select", { className: "w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      }, children: ["General Inquiry", "Camp Question", "Retreat Inquiry", "Donation Question", "Other"].map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-[12px] font-bold uppercase mb-2 text-dark-warm", style: {
        letterSpacing: "1px"
      }, children: "Message" }),
      /* @__PURE__ */ jsx("textarea", { rows: 4, className: "w-full bg-offwhite rounded-[10px] px-4 py-3 text-[14px]", style: {
        border: "1px solid rgba(0,0,0,0.08)"
      } })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-teal w-full", children: "Send Message" })
  ] });
}
export {
  AboutPage as component
};
