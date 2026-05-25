import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";
import { useContentStore } from "@/components/admin/contentStore";

export function Campaign() {
  const ref = useRef<HTMLDivElement>(null);
  const { homepage } = useContentStore();
  const targetPct = Math.round((homepage.campaignRaised / homepage.campaignGoal) * 100);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setProgress(targetPct);
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [targetPct]);

  // Re-animate if admin updates value
  useEffect(() => { setProgress(targetPct); }, [targetPct]);

  const raisedM = (homepage.campaignRaised / 1_000_000).toFixed(2);
  const goalM = (homepage.campaignGoal / 1_000_000).toFixed(1);

  return (
    <section className="bg-white py-16">
      <div ref={ref} className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row md:items-center gap-12 reveal">
        <div className="flex-1">
          <div className="eyebrow text-coral mb-3">Capital Campaign</div>
          <h3 className="font-serif mb-2" style={{ fontSize: "28px" }}>
            Connect, Inspire, <span className="hw">Transform</span>
          </h3>
          <p className="text-[15px] text-text-muted max-w-[500px]">
            Investing in Ferncliff's next chapter — new facilities, expanded programs, and environmental stewardship.
          </p>
          <div className="h-3 bg-cream rounded-full overflow-hidden mt-4 mb-2.5">
            <div
              className="h-full rounded-full transition-all ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--color-teal), #3da87a)",
                transitionDuration: "2000ms",
              }}
            />
          </div>
          <div className="flex justify-between text-[12px] text-text-muted font-semibold">
            <span>$0</span>
            <span className="text-teal font-bold">${raisedM}M raised · {targetPct}% of ${goalM}M goal</span>
            <span>${goalM}M</span>
          </div>
        </div>
        <div className="shrink-0 md:text-right text-center">
          <Link to="/giving#campaign" className="btn btn-gold-outline block mb-3">Learn About the Campaign</Link>
          <Link to="/giving" className="link-arrow inline-flex">Support This Campaign <ArrowRight size={14} weight="bold" /></Link>
        </div>
      </div>
    </section>
  );
}
