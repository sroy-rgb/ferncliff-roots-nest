export function ImageBreak() {
  return (
    <section className="relative h-[40vh] md:h-[50vh] min-h-[360px] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/5622131/pexels-photo-5622131.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Teenagers warming their hands at a campfire"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 flex items-end p-8 md:p-12"
        style={{ background: "linear-gradient(180deg, rgba(20,18,16,0.1) 0%, rgba(20,18,16,0.6) 100%)" }}
      >
        <h2
          className="hw max-w-[600px] text-white"
          style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#fff", fontWeight: 500 }}
        >
          We believe in community, compassion, and you.
        </h2>
      </div>
    </section>
  );
}
