import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-fixed"  // bg-fixed = simple parallax
      style={{
        backgroundImage: "url(/seraphi-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />

      {/* navbar on top */}
      <div className="absolute top-0 left-0 right-0 animate-fade-up" style={{ animationDelay: "60ms" }}>
        <Navbar glass />
      </div>

      {/* tagline */}
      <div className="relative h-full flex items-end animate-fade-up" style={{ animationDelay: "160ms" }}>
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-6">
          <p className="text-white/90 text-sm sm:text-base md:text-lg text-glow">
            Immersive Video Venue • Vibroacoustic Music Studio • Soma Rituals
          </p>
        </div>
      </div>
    </section>
  );
}
