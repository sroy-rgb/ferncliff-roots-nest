type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
};

/** Centered eyebrow + serif heading + subtitle, matching the camp-page reference design. */
export function SectionIntro({ eyebrow, title, subtitle, className = "", align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "text-center mx-auto" : ""} reveal ${className}`}
      style={{ maxWidth: isCenter ? 720 : undefined, marginBottom: 56 }}
    >
      {eyebrow && (
        <div className="eyebrow text-teal mb-4">{eyebrow}</div>
      )}
      <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: subtitle ? 16 : 0, lineHeight: 1.15 }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={isCenter ? "mx-auto" : ""}
          style={{ fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.7 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Inline handwritten gold accent — use inside <SectionIntro title> */
export function Hw({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-hand)",
        color: "var(--color-gold)",
        fontWeight: 500,
        fontSize: "1.1em",
      }}
    >
      {children}
    </span>
  );
}
