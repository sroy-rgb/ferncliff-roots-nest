import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-center">
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.04)",
        }}
      />
      <div className="relative max-w-[640px] mx-auto px-8">
        <h2 className="hw text-white mb-2" style={{ fontSize: "44px", color: "#fff" }}>Stay in the loop</h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
          Camp updates, event announcements, and stories — right to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row max-w-[440px] mx-auto mb-4 md:rounded-full md:overflow-hidden gap-3 md:gap-0"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 bg-white text-dark outline-none text-[15px] rounded-full md:rounded-none"
          />
          <button
            type="submit"
            className="px-7 py-4 bg-gold text-dark font-bold text-[14px] whitespace-nowrap hover:bg-gold-warm transition-colors rounded-full md:rounded-none"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
          We respect your privacy. Unsubscribe anytime.
        </p>
        <div className="flex justify-center gap-5 mt-7">
          {[FacebookLogo, InstagramLogo, TwitterLogo].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.16)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
