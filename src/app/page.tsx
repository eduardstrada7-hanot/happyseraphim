import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#110035] via-[#1a0452] to-[#230b6f] text-white">
      <Hero />

      {/* Quick intro cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            h: "Music Studio",
            p: "Vibroacoustic sessions & pro recording with soulful resonance.",
            href: "/music-studio",
          },
          {
            h: "Video Event Venue",
            p: "Projection-mapped ceremonies, live DJ streams & immersive art.",
            href: "/video-event-venue",
          },
          {
            h: "Soma",
            p: "Sound Healing, Superfoods & Elixirs for deep restoration.",
            href: "/soma/sound-healing",
          },
        ].map((c) => (
          <a
            key={c.h}
            href={c.href}
            className="glass rounded-2xl p-6 hover:scale-[1.02] transition shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{c.h}</h3>
            <p className="text-white/80">{c.p}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
