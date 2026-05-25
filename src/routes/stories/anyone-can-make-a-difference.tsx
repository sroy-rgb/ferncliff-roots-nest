import { createFileRoute } from "@tanstack/react-router";
import {
  StoryPage, Anchor, PullQuote, InlineQuote, FloatRight, ArticleCTA,
} from "@/components/site/StoryPage";

export const Route = createFileRoute("/stories/anyone-can-make-a-difference")({
  head: () => ({
    meta: [
      { title: "A Preschooler Reminds Us That Anyone Can Make a Difference — Ferncliff" },
      { name: "description", content: "A small act of generosity sparked a giving moment across the Ferncliff community." },
      { property: "og:title", content: "A Preschooler Reminds Us That Anyone Can Make a Difference" },
      { property: "og:description", content: "A small act of generosity sparked a giving moment across the Ferncliff community." },
      { property: "og:image", content: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920" },
    ],
  }),
  component: AnyoneStory,
});

function AnyoneStory() {
  return (
    <StoryPage
      title="A Preschooler Reminds Us That Anyone Can Make a Difference"
      heroImage="https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920"
      category="Giving"
      date="March 15, 2026"
      readTime="3 min"
      authorName="Kimberly Graves"
      authorTitle="Communications Director"
      authorInitials="KG"
      sections={[
        { id: "s-gesture", label: "A Small Gesture" },
        { id: "s-ripple", label: "The Ripple Effect" },
        { id: "s-meaning", label: "What Giving Means" },
        { id: "s-matters", label: "Why It Matters" },
      ]}
      relatedStories={[
        { href: "/stories/rebecca-spooner", image: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Support", tagVariant: "coral", title: "Rev. Rebecca Spooner Barber and the Heart of Mission", excerpt: "A story of dedication, faith, and lasting impact..." },
        { href: "/stories/emelia-lee", image: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Nature Pre School", tagVariant: "teal", title: "What Stayed With Her: Emelia Lee", excerpt: "When Emelia's family began looking for a preschool, her mom was searching for a place that felt different..." },
        { href: "/stories", image: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Summer Camp", tagVariant: "gold", title: "More Stories from Ferncliff", excerpt: "Read more about the people whose lives have been shaped by this place..." },
      ]}
    >
      <Anchor id="s-gesture" />
      <p>It started with a piggy bank.</p>

      <FloatRight
        src="https://images.pexels.com/photos/9299919/pexels-photo-9299919.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="A child's piggy bank"
        caption="Sometimes generosity arrives in the smallest hands."
      />

      <p>On a quiet Tuesday morning last fall, a four-year-old named Lila walked into the Nature Preschool office carrying a ceramic pig nearly as big as her own torso. She set it on the counter with both hands, looked up at the director, and said in a very serious voice, "This is for the kids who don't have camp."</p>

      <p>Inside was every coin and crumpled dollar she had saved for almost a year — birthday money, a tooth fairy quarter, the change her grandfather slipped her on Sundays. Eleven dollars and forty-three cents.</p>

      <Anchor id="s-ripple" />
      <p>The staff didn't quite know what to do at first. They thanked her, of course. They took a photo. They told her parents. But the story didn't end at the office door.</p>

      <p>Word spread quickly — first to other preschool families, then to the camp staff, then to the wider Ferncliff community through a single Instagram post. Within a week, parents had begun matching Lila's gift. Then alumni. Then a small group of donors who had never given before. A camp family in Texas mailed a check with a note that simply said, "Tell Lila thank you."</p>

      <PullQuote>"She didn't know she was starting anything. She just thought it was the right thing to do."</PullQuote>

      <p>By the end of the month, Lila's eleven dollars had quietly grown into more than twelve thousand — enough to send dozens of children to camp on full scholarship.</p>

      <Anchor id="s-meaning" />
      <p>For Ferncliff, the story was a reminder of something easy to forget in a world of giving pyramids and major gift strategies. Generosity isn't measured in tax brackets. It's measured in willingness.</p>

      <InlineQuote>"Lila didn't give from her surplus. She gave from her piggy bank. That's the whole gospel of generosity in one small gesture."</InlineQuote>

      <p>Staff began telling the story at orientation. Parents brought it up at dinner tables. One donor wrote that she had been on the fence about giving for years, and Lila's piggy bank was what finally tipped her over.</p>

      <Anchor id="s-matters" />
      <p>Ferncliff's mission has always been about welcoming people into a life of caring — for Creation, for others, for themselves. Most of the time that caring shows up in big, visible ways: scholarships funded, cabins built, refugees housed, healing camps held.</p>

      <p>But sometimes it shows up in the form of a four-year-old who can't yet count to a hundred, dragging a piggy bank across a parking lot because she heard that some kids couldn't come to camp and decided, in her small and certain way, to do something about it.</p>

      <PullQuote centered>"Anyone can make a difference. Even the smallest among us. Especially them."</PullQuote>

      <p>Lila came back to camp the next summer. The pig is still on a shelf in the office. And every now and then, someone walks by, sees it, and remembers why they give.</p>

      <ArticleCTA
        title="Join the"
        accent="circle of giving"
        description="From eleven dollars to eleven thousand, every gift helps a child experience Ferncliff. There is no minimum to make a difference."
        buttonLabel="Give Today"
      />
    </StoryPage>
  );
}
