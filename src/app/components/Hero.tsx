
export default function Hero() {
  return (
    <section
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-fixed"
      style={{
        backgroundImage: "url(/seraphi-hero.png)", // ensure this exists in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay must not block mouse */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent pointer-events-none" />

      {/* Tagline */}
      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-6">
          <p className="text-white/90 text-sm sm:text-base md:text-lg text-glow">
            Immersive Video Venue • Vibroacoustic Music Studio • Soma Rituals
          </p>
        </div>
      </div>
    </section>
  );
}
