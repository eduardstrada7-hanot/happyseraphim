// src/app/components/Hero.tsx
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-fixed"
      style={{
        backgroundImage: "url(/seraphi-hero.png)", // put your hero image in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* The gradient overlay must NOT intercept the mouse */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent pointer-events-none" />

      {/* Navbar sits ABOVE the overlay so dropdowns & hovers work */}
      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar glass />
      </div>

      {/* Tagline/content can stay below */}
      <div className="relative h-full flex items-end z-0">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-6">
          <p className="text-white/90 text-sm sm:text-base md:text-lg text-glow">
            Immersive Video Venue • Vibroacoustic Music Studio • Soma Rituals
          </p>
        </div>
      </div>
    </section>
  );
}
