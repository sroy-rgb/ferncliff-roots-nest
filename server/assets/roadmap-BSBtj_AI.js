import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as AdminLayout, b as PageHeader, P as Pill } from "./AdminLayout-CKgi6IRm.js";
import { Sparkle, Question, ImageSquare, MagnifyingGlass, Compass, PencilSimple, ChartBar, UserCircle } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "react";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
const features = [{
  Icon: Sparkle,
  title: "Smart Content Recommendations",
  desc: "Contextually relevant content surfaced as visitors browse — parents on First-Time Campers see Discovery Camps, donors reading stories see the relevant campaign CTA."
}, {
  Icon: Question,
  title: "Intelligent FAQ Routing",
  desc: "Natural language understanding that routes visitors to the right answer. Reduces repetitive phone and email inquiries."
}, {
  Icon: ImageSquare,
  title: "Image Auto-Tagging & Alt-Text",
  desc: "Automatic photo tagging and WCAG-compliant alt-text generation for the media library."
}, {
  Icon: MagnifyingGlass,
  title: "SEO Meta Generation",
  desc: "AI-assisted meta descriptions, page titles, and Open Graph content for every page."
}, {
  Icon: Compass,
  title: "Ferncliff Pathfinder — Camp Finder",
  desc: "A guided flow helping parents find the right camp based on their child's age, preferences, and experience level."
}, {
  Icon: PencilSimple,
  title: "CMS Content Assistant",
  desc: "Draft blog posts from transcripts, generate social captions, create newsletter content directly in the editor."
}, {
  Icon: ChartBar,
  title: "Analytics Intelligence",
  desc: "Plain-language insights replacing raw data — actionable guidance for a non-technical team."
}, {
  Icon: UserCircle,
  title: "Personalized Return Visits",
  desc: "Gentle homepage adaptation for returning visitors based on browsing history."
}];
function RoadmapPage() {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Phase 2 Roadmap", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "", action: /* @__PURE__ */ jsx(Fragment, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsx(Sparkle, { size: 26, className: "text-[#6C3AED]", weight: "fill" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Phase 2 Roadmap" }),
      /* @__PURE__ */ jsx(Pill, { color: "purple", children: "Coming Soon" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[14px] text-[#666] max-w-3xl mb-6", children: "These intelligent features are planned for Phase 2 of the Ferncliff digital platform. They will enhance content management, visitor experience, and operational efficiency — building on the foundation established in Phase 1." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: features.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-xl border border-[#E5E5E5] border-t-2 border-t-[#6C3AED] p-5 opacity-75 hover:opacity-90 transition", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(Pill, { color: "purple", children: "Phase 2" }) }),
      /* @__PURE__ */ jsx(f.Icon, { size: 28, weight: "thin", className: "text-[#6C3AED] mb-3" }),
      /* @__PURE__ */ jsx("div", { className: "text-[14px] font-semibold mb-2", children: f.title }),
      /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#666] leading-relaxed", children: f.desc }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-[12px] text-[#999] cursor-not-allowed", children: "Learn More →" })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#2B7A6F] text-white text-center rounded-xl p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[15px] font-medium", children: "Interested in Phase 2?" }),
      /* @__PURE__ */ jsx("div", { className: "text-[13px] opacity-90 mt-1", children: "Talk to your XTS team about timeline and investment for intelligent features." })
    ] })
  ] });
}
export {
  RoadmapPage as component
};
