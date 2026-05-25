type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
};

export function CampHero({ image, eyebrow, title, subtitle, height = "50vh", children }: Props) {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: height }}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,16,0.45) 0%, rgba(20,18,16,0.25) 40%, rgba(20,18,16,0.7) 100%)",
          }}
        />
      </div>
      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 py-16 w-full">
        {eyebrow && <div className="eyebrow text-gold mb-5">{eyebrow}</div>}
        <h1
          className="text-white font-light leading-[1.08] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-light max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.75)", fontSize: "17px" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
