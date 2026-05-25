type Props = {
  image: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
};

export function CampHero({ image, eyebrow, title, subtitle, height = "60vh", children }: Props) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: height, paddingBottom: 60 }}
    >
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,16,0.2) 0%, rgba(20,18,16,0.1) 30%, rgba(20,18,16,0.5) 65%, rgba(20,18,16,0.85) 100%), linear-gradient(90deg, rgba(20,18,16,0.4) 0%, transparent 55%)",
          }}
        />
      </div>
      <div
        className="relative z-[2] w-full"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}
      >
        <div style={{ maxWidth: 640 }}>
          {eyebrow && <div className="eyebrow text-gold mb-4">{eyebrow}</div>}
          <h1
            className="text-white font-light leading-[1.08] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="font-light mb-7"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, maxWidth: 480 }}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Use inside the <CampHero title> prop to render a gold italic accent word. */
export function HeroEm({ children }: { children: React.ReactNode }) {
  return (
    <em
      style={{
        fontStyle: "italic",
        fontWeight: 400,
        color: "var(--color-gold)",
      }}
    >
      {children}
    </em>
  );
}
