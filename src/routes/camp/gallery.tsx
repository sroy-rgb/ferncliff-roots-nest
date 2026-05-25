import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import { CampLayout } from "@/components/site/CampLayout";
import { CampHero, HeroEm } from "@/components/site/CampHero";
import { SectionIntro, Hw } from "@/components/site/SectionIntro";
import { Eye, X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const Route = createFileRoute("/camp/gallery")({
  head: () => ({
    meta: [
      { title: "Camp Gallery — Ferncliff" },
      { name: "description", content: "See Ferncliff through our campers' eyes." },
      { property: "og:title", content: "Camp Gallery — Ferncliff" },
      { property: "og:description", content: "See Ferncliff through our campers' eyes." },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; span?: boolean };
const images: Item[] = [
  { src: "https://images.pexels.com/photos/9303534/pexels-photo-9303534.jpeg?auto=compress&cs=tinysrgb&w=900", span: true },
  { src: "https://images.pexels.com/photos/8035133/pexels-photo-8035133.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=900", span: true },
  { src: "https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/5622127/pexels-photo-5622127.jpeg?auto=compress&cs=tinysrgb&w=900", span: true },
  { src: "https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/5638751/pexels-photo-5638751.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/6838582/pexels-photo-6838582.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { src: "https://images.pexels.com/photos/8034607/pexels-photo-8034607.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

function GalleryPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const navigate = useCallback((dir: 1 | -1) => {
    setFade(false);
    setTimeout(() => {
      setOpenIdx((i) => (i === null ? null : (i + dir + images.length) % images.length));
      setFade(true);
    }, 150);
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, navigate]);

  return (
    <CampLayout>
      <CampHero
        image="https://images.pexels.com/photos/2526040/pexels-photo-2526040.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Gallery"
        title={<>See Ferncliff through our campers' <HeroEm>eyes</HeroEm></>}
        subtitle="A look at the lakes, cabins, faces, and moments that make a week here."
        height="50vh"
      />

      <section className="pt-[80px] pb-4 bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionIntro
            eyebrow="Gallery"
            title={<>See Ferncliff through our campers' <Hw>eyes</Hw></>}
          />
        </div>
      </section>



      <section className="py-[60px] md:py-[80px] bg-offwhite">
        <div className="max-w-[1300px] mx-auto px-6">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gridAutoRows: "200px",
            }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpenIdx(i)}
                className="relative rounded-[16px] overflow-hidden group cursor-pointer"
                style={{ gridRow: img.span ? "span 2" : undefined }}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center">
                    <Eye size={20} weight="regular" className="text-teal" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center animate-fade-in"
          style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(8px)" }}
          onClick={close}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white transition"
            style={{ background: "rgba(255,255,255,0)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0)")}
            aria-label="Close"
          >
            <X size={24} weight="bold" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition"
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0)")}
            aria-label="Previous"
          >
            <ArrowLeft size={24} weight="bold" />
          </button>

          <img
            src={images[openIdx].src}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="rounded-[12px] transition-opacity duration-300"
            style={{
              maxHeight: "85vh",
              maxWidth: "90vw",
              objectFit: "contain",
              opacity: fade ? 1 : 0,
              animation: fade ? "scaleIn 400ms ease-out" : undefined,
            }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition"
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0)")}
            aria-label="Next"
          >
            <ArrowRight size={24} weight="bold" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-[14px]">
            {openIdx + 1} / {images.length}
          </div>

          <style>{`@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
        </div>
      )}
    </CampLayout>
  );
}
