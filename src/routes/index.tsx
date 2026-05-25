import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Camp } from "@/components/site/Camp";
import { ImageBreak } from "@/components/site/ImageBreak";
import { Retreats } from "@/components/site/Retreats";
import { NatureSchool } from "@/components/site/NatureSchool";
import { Stories } from "@/components/site/Stories";
import { Giving } from "@/components/site/Giving";
import { Campaign } from "@/components/site/Campaign";
import { Outreach } from "@/components/site/Outreach";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <main>
        <Hero />
        <Camp />
        <ImageBreak />
        <Retreats />
        <NatureSchool />
        <Stories />
        <Giving />
        <Campaign />
        <Outreach />
        <Newsletter />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
