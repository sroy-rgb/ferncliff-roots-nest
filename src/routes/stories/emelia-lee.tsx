import { createFileRoute } from "@tanstack/react-router";
import {
  StoryPage, Anchor, PullQuote, InlineQuote, ImageGrid, ArticleCTA,
} from "@/components/site/StoryPage";

export const Route = createFileRoute("/stories/emelia-lee")({
  head: () => ({
    meta: [
      { title: "What Stayed With Her: Emelia Lee — Ferncliff" },
      { name: "description", content: "A family's discovery of Ferncliff's Nature Preschool and the lasting impact of forest-based learning." },
      { property: "og:title", content: "What Stayed With Her: Emelia Lee" },
      { property: "og:description", content: "A family's discovery of Ferncliff's Nature Preschool." },
      { property: "og:image", content: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920" },
    ],
  }),
  component: EmeliaStory,
});

function EmeliaStory() {
  return (
    <StoryPage
      title="What Stayed With Her: Emelia Lee"
      heroImage="https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920"
      category="Nature Pre School"
      date="February 8, 2026"
      readTime="3 min"
      authorName="Kimberly Graves"
      authorTitle="Communications Director"
      authorInitials="KG"
      sections={[
        { id: "s-finding", label: "Finding Ferncliff" },
        { id: "s-forest", label: "The Forest Classroom" },
        { id: "s-changed", label: "What Changed" },
        { id: "s-parent", label: "A Parent's Perspective" },
        { id: "s-looking", label: "Looking Back" },
      ]}
      relatedStories={[
        { href: "/stories/rebecca-spooner", image: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Support", tagVariant: "coral", title: "Rev. Rebecca Spooner Barber and the Heart of Mission", excerpt: "A story of dedication, faith, and lasting impact..." },
        { href: "/stories/anyone-can-make-a-difference", image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Giving", tagVariant: "gold", title: "A Preschooler Reminds Us Anyone Can Make a Difference", excerpt: "Sometimes the smallest hands make the biggest impact..." },
        { href: "/stories", image: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Summer Camp", tagVariant: "teal", title: "More Stories from Ferncliff", excerpt: "Read more about the people whose lives have been shaped by this place..." },
      ]}
    >
      <Anchor id="s-finding" />
      <p>When Emelia's family began looking for a preschool, her mom Sarah wasn't searching for the most academic program or the brightest classroom. She was looking for something harder to name — a place that felt different. A place where her daughter could be small, curious, and outdoors.</p>

      <p>After months of touring tidy classrooms with neat carpets and color-coded cubbies, Sarah stumbled across Ferncliff's Nature Preschool almost by accident. A friend at church mentioned it in passing. A few days later, Sarah was standing in a forest clearing watching a group of four-year-olds drag a fallen branch across a meadow, laughing.</p>

      <PullQuote>"I remember thinking — this is what I wanted childhood to feel like. I just didn't know it existed anymore."</PullQuote>

      <Anchor id="s-forest" />
      <p>Ferncliff's Nature Preschool is Arkansas's first forest kindergarten, built around a simple idea: children learn best when they are outside, moving, and in relationship with the natural world. There are no rows of desks. The "classroom" is 1,200 acres of woods, creeks, gardens, and open sky.</p>

      <p>For Emelia, that first week was a revelation. She came home with mud on her boots, leaves in her hair, and stories she couldn't stop telling — about a salamander under a log, about the sound the wind made through the pines, about a friend who shared her snack on a stump.</p>

      <ImageGrid
        cols={3}
        caption="A typical morning at Nature Preschool"
        images={[
          { src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Children exploring outdoors" },
          { src: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Family enjoying nature" },
          { src: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Child in the forest" },
        ]}
      />

      <Anchor id="s-changed" />
      <p>Over the months that followed, Sarah noticed Emelia changing — not in big, dramatic ways, but in small, quiet ones. She was steadier. More patient. She started naming the trees in their backyard. She asked harder questions and waited longer for answers.</p>

      <InlineQuote>"She came home one afternoon, looked at me very seriously, and said, 'Mom, did you know the dirt is alive?' That was the moment I knew this place was changing her."</InlineQuote>

      <Anchor id="s-parent" />
      <p>For Sarah, the experience changed her too. She found herself slowing down on weekends, taking Emelia on longer walks, putting the phone away. The preschool wasn't just shaping her daughter — it was reshaping their family rhythm.</p>

      <PullQuote>"Ferncliff didn't just teach Emelia about nature. It reminded all of us how to pay attention."</PullQuote>

      <Anchor id="s-looking" />
      <p>Emelia has since moved on to elementary school, but her family says the forest stayed with her. She still wants to be outside more than in. She still notices what most of us walk past. And when she talks about Ferncliff, her voice gets quiet in the way people's voices get quiet when they're talking about something they love.</p>

      <p>That, Sarah says, is what she had hoped for all along — not a head start, but a deep root.</p>

      <ArticleCTA
        title="Discover Nature"
        accent="Preschool"
        description="Arkansas's first forest kindergarten welcomes families looking for something different. Half-day and full-day programs available for ages 3 to 5."
        buttonLabel="Learn More"
        buttonHref="/nature-school"
      />
    </StoryPage>
  );
}
