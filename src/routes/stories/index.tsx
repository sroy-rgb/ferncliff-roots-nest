import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useContentStore } from "@/components/admin/contentStore";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories of Impact — Ferncliff" },
      { name: "description", content: "Real stories from the people whose lives have been shaped by Ferncliff." },
      { property: "og:title", content: "Stories of Impact — Ferncliff" },
      { property: "og:description", content: "Real stories from the people whose lives have been shaped by Ferncliff." },
    ],
  }),
  component: StoriesIndex,
});

type Story = {
  href: string;
  image: string;
  category: "Support" | "Nature Pre School" | "Summer Camp" | "Giving";
  tagVariant: "teal" | "coral" | "gold";
  title: string;
  excerpt: string;
};

const stories: Story[] = [
  { href: "/stories/rebecca-spooner", image: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-13-scaled.jpg", category: "Support", tagVariant: "coral", title: "Rev. Rebecca Spooner Barber and the Heart of Mission", excerpt: "A story of faith, loss, and new beginnings — and why she gives to Ferncliff." },
  { href: "/stories/emelia-lee", image: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Nature Pre School", tagVariant: "teal", title: "What Stayed With Her: Emelia Lee", excerpt: "A family's discovery of Arkansas's first forest kindergarten — and what it changed." },
  { href: "/stories/anyone-can-make-a-difference", image: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Giving", tagVariant: "gold", title: "A Preschooler Reminds Us That Anyone Can Make a Difference", excerpt: "How an eleven-dollar piggy bank quietly changed a giving year." },
];

const filters = ["All", "Support", "Nature Pre School", "Summer Camp", "Giving"] as const;

function StoriesIndex() {
  useScrollReveal();
  const { blogPosts } = useContentStore();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  // Pull additional published posts from the admin store (those not already in the hardcoded list)
  const tagMap: Record<string, "teal" | "coral" | "gold"> = {
    "Support": "coral", "Nature Pre School": "teal", "Summer Camp": "teal", "Giving": "gold", "Outreach": "teal",
  };
  const extraFromStore: Story[] = blogPosts
    .filter((p) => p.status === "Published")
    .filter((p) => !stories.some((s) => s.title === p.title))
    .map((p) => ({
      href: p.slug ?? "/stories",
      image: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: (p.category as Story["category"]) ?? "Support",
      tagVariant: tagMap[p.category] ?? "teal",
      title: p.title,
      excerpt: p.excerpt || "Read this story…",
    }));
  const all = [...stories, ...extraFromStore];
  const visible = filter === "All" ? all : all.filter((s) => s.category === filter);

  return (
    <div className="bg-offwhite">
      <Nav />

      <section className="relative overflow-hidden" style={{ height: "40vh", minHeight: 320, marginTop: 72 }}>
        <img
          src="https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Stories of impact at Ferncliff"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,18,16,0.25) 30%, rgba(20,18,16,0.75) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1200px] w-full mx-auto px-8 pb-12 text-white">
            <div className="eyebrow text-gold mb-3">Stories of Impact</div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#fff" }}>
              Lives changed at <span className="hw">Ferncliff</span>
            </h1>
            <p className="mt-4 max-w-[600px]" style={{ color: "rgba(255,255,255,0.8)", fontSize: 16 }}>
              Real stories from the people whose lives have been shaped by Ferncliff.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all ${
                  filter === f
                    ? "bg-teal text-white"
                    : "bg-cream text-dark-warm hover:bg-cream-warm"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {visible.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="reveal block bg-white rounded-[20px] overflow-hidden group transition-all duration-[400ms] hover:-translate-y-1"
                style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
              >
                <div className="h-[220px] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <Tag variant={s.tagVariant}>{s.category}</Tag>
                  <h3 className="font-sans text-[18px] font-bold text-dark mt-2.5 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{s.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function Tag({ variant, children }: { variant: "teal" | "coral" | "gold"; children: React.ReactNode }) {
  const styles = {
    teal: { background: "var(--color-teal-light)", color: "var(--color-teal)" },
    coral: { background: "var(--color-coral-light)", color: "var(--color-coral)" },
    gold: { background: "var(--color-gold-light)", color: "#96751e" },
  }[variant];
  return <span className="inline-block px-3 py-[3px] rounded-full text-[11px] font-bold" style={styles}>{children}</span>;
}
