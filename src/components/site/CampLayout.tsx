import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { CampSubNav } from "@/components/site/CampSubNav";

export function CampLayout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="bg-offwhite">
      <Nav />
      <CampSubNav />
      <main style={{ paddingTop: 120 }}>{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
