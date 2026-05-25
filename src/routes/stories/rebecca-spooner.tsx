import { createFileRoute } from "@tanstack/react-router";
import {
  StoryPage, Anchor, PullQuote, InlineQuote, FloatRight, ImageGrid,
  ArticleDivider, ArticleCTA,
} from "@/components/site/StoryPage";

export const Route = createFileRoute("/stories/rebecca-spooner")({
  head: () => ({
    meta: [
      { title: "Rev. Rebecca Spooner Barber and the Heart of Mission — Ferncliff" },
      { name: "description", content: "A story of faith, loss, and new beginnings at Ferncliff." },
      { property: "og:title", content: "Rev. Rebecca Spooner Barber and the Heart of Mission" },
      { property: "og:description", content: "A story of faith, loss, and new beginnings at Ferncliff." },
      { property: "og:image", content: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-13-scaled.jpg" },
    ],
  }),
  component: RebeccaStory,
});

function RebeccaStory() {
  return (
    <StoryPage
      title="Rev. Rebecca Spooner Barber and the Heart of Mission"
      heroImage="https://ferncliff.org/wp-content/uploads/2026/01/rebsea-13-scaled.jpg"
      category="Support"
      date="January 21, 2026"
      readTime="4 min"
      authorName="Kimberly Graves"
      authorTitle="Communications Director"
      authorInitials="KG"
      sections={[
        { id: "s-roots", label: "Her Roots" },
        { id: "s-ministry", label: "In Ministry" },
        { id: "s-beyond", label: "Beyond Camp" },
        { id: "s-healing", label: "Loss & Healing" },
        { id: "s-beginnings", label: "New Beginnings" },
        { id: "s-mission", label: "The Mission" },
        { id: "s-why", label: "Why She Gives" },
      ]}
      relatedStories={[
        { href: "/stories/emelia-lee", image: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Nature Pre School", tagVariant: "teal", title: "What Stayed With Her: Emelia Lee", excerpt: "When Emelia's family began looking for a preschool, her mom was searching for a place that felt different..." },
        { href: "/stories/anyone-can-make-a-difference", image: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Giving", tagVariant: "gold", title: "A Preschooler Reminds Us Anyone Can Make a Difference", excerpt: "Sometimes the smallest hands make the biggest impact..." },
        { href: "/stories", image: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Summer Camp", tagVariant: "coral", title: "From Camper to Counselor: A Ferncliff Journey", excerpt: "Twenty years later, the lessons of cabin life still shape who she is today..." },
      ]}
    >
      <Anchor id="s-roots" />
      <p>Rev. Rebecca Spooner Barber has spent her life shaped by camp ministry, long before she ever became a pastor, counselor, or Ferncliff supporter.</p>

      <FloatRight
        src="https://ferncliff.org/wp-content/uploads/2026/01/Wellspring-2424-2049x1366.jpg"
        alt="Rev. Rebecca Spooner Barber, LPC, NCC"
        caption="Rev. Rebecca Spooner Barber, LPC, NCC"
      />

      <p>She grew up as a preacher's daughter in a busy, often chaotic household, the youngest of five in a family deeply rooted in ministry. As a child and teenager, camp became a place where her faith took shape in ways that everyday life could not.</p>

      <PullQuote>"It was a place where I felt safe, and I felt heard, and I felt known and loved. I felt the grace and love of God in a way I didn't always feel in my day-to-day life."</PullQuote>

      <p>That experience stayed with her.</p>

      <Anchor id="s-ministry" />
      <p>As an adult, Rebecca carried that belief into her own ministry, volunteering as a counselor at Camp of the Pines while serving churches in south Arkansas, then later as a chaplain at Ferncliff. She loved walking alongside children from all kinds of backgrounds, some with a deep church background, others sent to camp by a hopeful grandparent.</p>

      <p>"Some kids were raised in church, and some kids had been sent to Ferncliff because their grandmother wanted them to go," she said. "They didn't know the Bible. They didn't know anything."</p>

      <p>What mattered was that they were welcomed.</p>

      <Anchor id="s-beyond" />
      <p>Rebecca has also seen Ferncliff reach far beyond the traditional summer camp experience. She watched the ministry respond to trauma and community need by creating spaces for healing, learning, and restoration. Through the Center for Healing and Restoration, Ferncliff partners with nonprofit and faith-based organizations for training, team building, and spiritual formation, while also hosting camps for those impacted by school shootings and natural disasters. In addition, Ferncliff worked alongside three local congregations and Catholic Charities to provide temporary housing for Afghan refugee families.</p>

      <InlineQuote>"When there's been a need, they've opened their doors and said, 'Come. We'll find therapists. We'll find pastors. We'll find people who will love on you and help you heal.'"</InlineQuote>

      <ImageGrid
        cols={3}
        caption="Camp Noah — healing camps for children impacted by disasters"
        images={[
          { src: "https://ferncliff.org/wp-content/uploads/2023/12/camp-noahCDP-800x600.jpg", alt: "Camp Noah" },
          { src: "https://ferncliff.org/wp-content/uploads/2023/05/camp-noah-3.jpeg", alt: "Camp Noah" },
          { src: "https://ferncliff.org/wp-content/uploads/2023/05/camp-noah2.jpeg", alt: "Camp Noah" },
        ]}
      />

      <ImageGrid
        cols={3}
        caption="Westside Camps — community outreach and partnership"
        images={[
          { src: "https://ferncliff.org/wp-content/uploads/2023/03/westside13-800x551.jpeg", alt: "Westside Camps" },
          { src: "https://ferncliff.org/wp-content/uploads/2023/03/westside4-800x533.jpeg", alt: "Westside Camps" },
          { src: "https://ferncliff.org/wp-content/uploads/2023/03/westside11-800x551.jpeg", alt: "Westside Camps" },
        ]}
      />

      <Anchor id="s-healing" />
      <p>Those moments weren't just abstract for Rebecca's life. They were also deeply personal.</p>

      <p>About six years ago, Rebecca lost her husband to ALS. In the months and years that followed, Ferncliff became part of her own healing.</p>

      <PullQuote>"If I needed to go to Ferncliff just to walk the woods, I could. To walk the labyrinth. It was a calm, safe place."</PullQuote>

      <p>She even began meeting spiritual direction clients there, choosing Ferncliff because of the peace it offered, not just for herself, but for others.</p>

      <Anchor id="s-beginnings" />
      <p>Later, when Rebecca met Sean, who had lost his wife just months after she lost her husband, Ferncliff became the place where grief and new beginnings met.</p>

      <p>"I couldn't imagine a better place to celebrate our life together and new beginnings than Ferncliff," she said. "It has been the center of new beginnings for so many people."</p>

      <p>They chose to hold their wedding at Ferncliff, surrounded by the very community that had supported them through loss.</p>

      <p>"It was the community that got us through the loss of our spouses," Rebecca said. "And they were able to celebrate with us when we got married. They got to experience the good stuff as well as some of the hard stuff."</p>

      <ImageGrid
        cols={2}
        portrait
        images={[
          { src: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-12-800x1198.jpg", alt: "Rebecca and Sean at Ferncliff" },
          { src: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-10-800x1202.jpg", alt: "Rebecca and Sean's wedding at Ferncliff" },
        ]}
      />

      <ArticleDivider />

      <Anchor id="s-mission" />
      <p>Over the years, Rebecca has watched Ferncliff change — more buildings, more programs, more people served. Each visit brings something new.</p>

      <p>But what matters most to her is what hasn't changed.</p>

      <p>"As it's grown," she said, "it seems to have kept the heart of its mission. And I hope it never, ever loses that."</p>

      <p>Rebecca has seen what can happen when faith-based institutions forget who they are. She believes Ferncliff is doing the harder work — growing boldly while remaining grounded in hospitality, care for Creation, and access for all.</p>

      <PullQuote centered>"It is a welcoming place for all people. For all."</PullQuote>

      <p>When asked to describe Ferncliff's impact in just a few words, her answer came without hesitation.</p>

      <InlineQuote>"Transforms lives. You can't go to Ferncliff and walk away not different."</InlineQuote>

      <Anchor id="s-why" />
      <p>For Rebecca, giving to Ferncliff is deeply connected to the world we're living in now — a world that feels anxious, divided, and overwhelmed.</p>

      <p>"We're all stressed out," she said. "Giving to Ferncliff means being a part of something positive in a world that is very stressed out and divided."</p>

      <p>It's a way, she says, to focus on what is good, true, and healing — to choose community over division, hope over despair.</p>

      <PullQuote>"I want to be a part of what's working. What's right. What's good."</PullQuote>

      <p>And that is why she gives to Ferncliff.</p>

      <ArticleCTA
        title="Be part of something"
        accent="life-giving"
        description="Ferncliff's impact is made possible by a community of people who believe in care for creation, care for others, and care for self. If you are looking for a meaningful way to be part of something hopeful, we welcome you."
      />
    </StoryPage>
  );
}
