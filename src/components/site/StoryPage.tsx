import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { FacebookLogo, TwitterLogo, Link as LinkIcon } from "@phosphor-icons/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export type RelatedStory = {
  href: string;
  image: string;
  category: string;
  tagVariant?: "teal" | "coral" | "gold";
  title: string;
  excerpt: string;
};

export type StorySection = { id: string; label: string };

export type StoryPageProps = {
  title: string;
  heroImage: string;
  category: string;
  date: string;
  readTime: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string;
  sections: StorySection[];
  children: ReactNode;
  relatedStories?: RelatedStory[];
};

export function StoryPage({
  title, heroImage, category, date, readTime, authorName, authorTitle,
  authorInitials, sections, children, relatedStories = [],
}: StoryPageProps) {
  useScrollReveal();
  const articleRef = useRef<HTMLElement>(null);
  const [barWidth, setBarWidth] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight;
      const scrolled = Math.max(0, Math.min(total, -rect.top));
      setBarWidth(Math.min(100, (scrolled / total) * 100));
      setSidebarVisible(rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.3);
      let idx = 0;
      sections.forEach((s, i) => {
        const sec = document.getElementById(s.id);
        if (sec && sec.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
      });
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-offwhite">
      <Nav />

      <div className="reading-bar"><div className="reading-bar-fill" style={{ width: `${barWidth}%` }} /></div>

      <div className={`reading-progress ${sidebarVisible ? "visible" : ""}`}>
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`rp-item ${i === activeIdx ? "active" : ""} ${i < activeIdx ? "passed" : ""}`}
            type="button"
          >
            <div className="rp-dot-wrap">
              <div className="rp-dot" />
              {i < sections.length - 1 && <div className="rp-line" />}
            </div>
            <div className="rp-label">{s.label}</div>
          </button>
        ))}
      </div>

      <section className="article-hero">
        <img src={heroImage} alt={title} />
        <div className="article-hero-content">
          <div className="container-n">
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>›</span>
              <Link to="/stories">Stories of Impact</Link><span>›</span>
            </div>
            <div className="article-meta">
              <span className="article-tag">{category}</span>
              <span className="article-date">{date} · {readTime} read</span>
            </div>
            <h1>{title}</h1>
            <div className="article-author">
              <div className="article-author-avatar">{authorInitials}</div>
              <div className="article-author-info">
                <span>{authorName}</span>
                <small>{authorTitle}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article ref={articleRef} className="article-body reveal">
        {children}

        <div className="share-bar">
          <span>Share</span>
          <a href="#" className="share-btn" aria-label="Share on Facebook"><FacebookLogo size={18} /></a>
          <a href="#" className="share-btn" aria-label="Share on Twitter"><TwitterLogo size={18} /></a>
          <a href="#" className="share-btn" aria-label="Copy link"><LinkIcon size={18} /></a>
        </div>
      </article>

      {relatedStories.length > 0 && (
        <section className="py-20 bg-light">
          <h2 className="text-center mb-12" style={{ fontSize: 32 }}>
            More Stories of <span className="hw">Impact</span>
          </h2>
          <div className="grid gap-6 max-w-[1200px] mx-auto px-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {relatedStories.map((r, i) => (
              <Link
                key={i}
                to={r.href}
                className="block bg-white rounded-[20px] overflow-hidden group transition-all duration-[400ms] hover:-translate-y-1"
                style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
              >
                <div className="h-[200px] overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <RelTag variant={r.tagVariant ?? "teal"}>{r.category}</RelTag>
                  <h3 className="font-sans text-[16px] font-bold text-dark mt-2.5 mb-1.5 leading-snug">{r.title}</h3>
                  <p className="text-[13px] text-text-muted">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

function RelTag({ variant, children }: { variant: "teal" | "coral" | "gold"; children: ReactNode }) {
  const styles = {
    teal: { background: "var(--color-teal-light)", color: "var(--color-teal)" },
    coral: { background: "var(--color-coral-light)", color: "var(--color-coral)" },
    gold: { background: "var(--color-gold-light)", color: "#96751e" },
  }[variant];
  return <span className="inline-block px-3 py-[3px] rounded-full text-[11px] font-bold" style={styles}>{children}</span>;
}

// ===== Composable body pieces =====
export function Anchor({ id }: { id: string }) { return <div id={id} />; }
export function Lede({ children }: { children: ReactNode }) {
  return <p className="lede">{children}</p>;
}
export function PullQuote({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return <div className={`pull-quote ${centered ? "centered" : ""}`}><p>{children}</p></div>;
}
export function InlineQuote({ children }: { children: ReactNode }) {
  return <div className="inline-quote"><p>{children}</p></div>;
}
export function FloatRight({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="float-right">
      <img src={src} alt={alt} />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}
export function ImageGrid({
  cols = 3, images, caption, portrait = false,
}: { cols?: 2 | 3; images: { src: string; alt: string }[]; caption?: string; portrait?: boolean }) {
  return (
    <div className={`img-grid cols-${cols}`}>
      {images.map((im, i) => (
        <div key={i} className={`img-grid-item ${portrait ? "portrait" : ""}`}>
          <img src={im.src} alt={im.alt} />
        </div>
      ))}
      {caption && <div className="img-grid-caption">{caption}</div>}
    </div>
  );
}
export function ArticleDivider() { return <div className="article-divider" />; }
export function ArticleCTA({
  title, accent, description, buttonLabel = "Support Ferncliff", buttonHref = "/#giving",
}: { title: string; accent?: string; description: string; buttonLabel?: string; buttonHref?: string }) {
  return (
    <div className="article-cta">
      <h3>{title} {accent && <span className="hw">{accent}</span>}</h3>
      <p>{description}</p>
      <a href={buttonHref} className="btn btn-teal">{buttonLabel}</a>
    </div>
  );
}
