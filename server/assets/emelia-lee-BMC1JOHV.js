import { jsxs, jsx } from "react/jsx-runtime";
import { S as StoryPage, A as Anchor, P as PullQuote, a as ImageGrid, I as InlineQuote, c as ArticleCTA } from "./StoryPage-DiewYAc8.js";
import "react";
import "@tanstack/react-router";
import "@phosphor-icons/react";
import "./MobileBottomBar-z-szcD1V.js";
import "./router-DASrCSie.js";
import "@tanstack/react-query";
function EmeliaStory() {
  return /* @__PURE__ */ jsxs(StoryPage, { title: "What Stayed With Her: Emelia Lee", heroImage: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920", category: "Nature Pre School", date: "February 8, 2026", readTime: "3 min", authorName: "Kimberly Graves", authorTitle: "Communications Director", authorInitials: "KG", sections: [{
    id: "s-finding",
    label: "Finding Ferncliff"
  }, {
    id: "s-forest",
    label: "The Forest Classroom"
  }, {
    id: "s-changed",
    label: "What Changed"
  }, {
    id: "s-parent",
    label: "A Parent's Perspective"
  }, {
    id: "s-looking",
    label: "Looking Back"
  }], relatedStories: [{
    href: "/stories/rebecca-spooner",
    image: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Support",
    tagVariant: "coral",
    title: "Rev. Rebecca Spooner Barber and the Heart of Mission",
    excerpt: "A story of dedication, faith, and lasting impact..."
  }, {
    href: "/stories/anyone-can-make-a-difference",
    image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Giving",
    tagVariant: "gold",
    title: "A Preschooler Reminds Us Anyone Can Make a Difference",
    excerpt: "Sometimes the smallest hands make the biggest impact..."
  }, {
    href: "/stories",
    image: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Summer Camp",
    tagVariant: "teal",
    title: "More Stories from Ferncliff",
    excerpt: "Read more about the people whose lives have been shaped by this place..."
  }], children: [
    /* @__PURE__ */ jsx(Anchor, { id: "s-finding" }),
    /* @__PURE__ */ jsx("p", { children: "When Emelia's family began looking for a preschool, her mom Sarah wasn't searching for the most academic program or the brightest classroom. She was looking for something harder to name — a place that felt different. A place where her daughter could be small, curious, and outdoors." }),
    /* @__PURE__ */ jsx("p", { children: "After months of touring tidy classrooms with neat carpets and color-coded cubbies, Sarah stumbled across Ferncliff's Nature Preschool almost by accident. A friend at church mentioned it in passing. A few days later, Sarah was standing in a forest clearing watching a group of four-year-olds drag a fallen branch across a meadow, laughing." }),
    /* @__PURE__ */ jsx(PullQuote, { children: `"I remember thinking — this is what I wanted childhood to feel like. I just didn't know it existed anymore."` }),
    /* @__PURE__ */ jsx(Anchor, { id: "s-forest" }),
    /* @__PURE__ */ jsx("p", { children: `Ferncliff's Nature Preschool is Arkansas's first forest kindergarten, built around a simple idea: children learn best when they are outside, moving, and in relationship with the natural world. There are no rows of desks. The "classroom" is 1,200 acres of woods, creeks, gardens, and open sky.` }),
    /* @__PURE__ */ jsx("p", { children: "For Emelia, that first week was a revelation. She came home with mud on her boots, leaves in her hair, and stories she couldn't stop telling — about a salamander under a log, about the sound the wind made through the pines, about a friend who shared her snack on a stump." }),
    /* @__PURE__ */ jsx(ImageGrid, { cols: 3, caption: "A typical morning at Nature Preschool", images: [{
      src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Children exploring outdoors"
    }, {
      src: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Family enjoying nature"
    }, {
      src: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Child in the forest"
    }] }),
    /* @__PURE__ */ jsx(Anchor, { id: "s-changed" }),
    /* @__PURE__ */ jsx("p", { children: "Over the months that followed, Sarah noticed Emelia changing — not in big, dramatic ways, but in small, quiet ones. She was steadier. More patient. She started naming the trees in their backyard. She asked harder questions and waited longer for answers." }),
    /* @__PURE__ */ jsx(InlineQuote, { children: `"She came home one afternoon, looked at me very seriously, and said, 'Mom, did you know the dirt is alive?' That was the moment I knew this place was changing her."` }),
    /* @__PURE__ */ jsx(Anchor, { id: "s-parent" }),
    /* @__PURE__ */ jsx("p", { children: "For Sarah, the experience changed her too. She found herself slowing down on weekends, taking Emelia on longer walks, putting the phone away. The preschool wasn't just shaping her daughter — it was reshaping their family rhythm." }),
    /* @__PURE__ */ jsx(PullQuote, { children: `"Ferncliff didn't just teach Emelia about nature. It reminded all of us how to pay attention."` }),
    /* @__PURE__ */ jsx(Anchor, { id: "s-looking" }),
    /* @__PURE__ */ jsx("p", { children: "Emelia has since moved on to elementary school, but her family says the forest stayed with her. She still wants to be outside more than in. She still notices what most of us walk past. And when she talks about Ferncliff, her voice gets quiet in the way people's voices get quiet when they're talking about something they love." }),
    /* @__PURE__ */ jsx("p", { children: "That, Sarah says, is what she had hoped for all along — not a head start, but a deep root." }),
    /* @__PURE__ */ jsx(ArticleCTA, { title: "Discover Nature", accent: "Preschool", description: "Arkansas's first forest kindergarten welcomes families looking for something different. Half-day and full-day programs available for ages 3 to 5.", buttonLabel: "Learn More", buttonHref: "/nature-school" })
  ] });
}
export {
  EmeliaStory as component
};
