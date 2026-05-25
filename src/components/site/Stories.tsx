import { ArrowRight } from "@phosphor-icons/react";

export function Stories() {
  return (
    <section className="py-[80px] md:py-[120px] bg-light">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14 reveal">
          <div>
            <div className="eyebrow text-teal mb-3">Stories of Impact</div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Lives changed at <span className="hw">Ferncliff</span>
            </h2>
          </div>
          <a href="#" className="link-arrow">All Stories <ArrowRight size={14} weight="bold" /></a>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.8fr) minmax(0,1fr)", gridTemplateRows: "auto auto" }}
        >
          {/* Featured */}
          <article
            className="reveal relative bg-white rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-[400ms] hover:-translate-y-1 col-span-3 md:col-span-1 row-span-1 md:row-span-2"
            style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
          >
            <div className="h-full min-h-[400px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Joyful family of five bonding by the lake at sunset"
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              style={{ background: "linear-gradient(transparent, rgba(20,18,16,0.85))" }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-2.5"
                style={{ background: "rgba(43,122,111,0.3)", color: "rgba(255,255,255,0.9)" }}
              >
                Nature Pre School
              </span>
              <h3 className="font-sans text-[22px] font-bold text-white mb-1.5">What Stayed With Her: Emelia Lee</h3>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                When Emelia's family began looking for a preschool, her mom was searching for a place that felt different...
              </p>
            </div>
          </article>

          <StoryCard
            img="https://images.pexels.com/photos/4971042/pexels-photo-4971042.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Parents lifting their daughter joyfully outdoors"
            tag="Support"
            tagBg="bg-coral-light"
            tagColor="text-coral"
            title="Rev. Rebecca Spooner Barber and the Heart of Mission"
            text="A story of dedication, faith, and lasting impact..."
          />
          <div className="hidden md:block" />
          <StoryCard
            img="https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Campsite"
            tag="Giving"
            tagBg="bg-gold-light"
            tagColor=""
            tagColorHex="#96751e"
            title="A Preschooler Reminds Us Anyone Can Make a Difference"
            text="Sometimes the smallest hands make the biggest impact..."
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  img, alt, tag, tagBg, tagColor, tagColorHex, title, text,
}: {
  img: string; alt: string; tag: string; tagBg: string; tagColor: string; tagColorHex?: string; title: string; text: string;
}) {
  return (
    <article
      className="reveal bg-white rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-[400ms] hover:-translate-y-1"
      style={{ boxShadow: "0 2px 16px rgba(44,41,38,0.06)" }}
    >
      <div className="h-[200px] overflow-hidden">
        <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-2.5 ${tagBg} ${tagColor}`}
          style={tagColorHex ? { color: tagColorHex } : undefined}
        >
          {tag}
        </span>
        <h3 className="font-sans text-[16px] font-bold text-dark mb-1.5 leading-snug">{title}</h3>
        <p className="text-[13px] text-text-muted">{text}</p>
      </div>
    </article>
  );
}
