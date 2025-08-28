export default function Page() {
  const calendly = "https://calendly.com/eduardstrada7";
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#110035] via-[#1a0452] to-[#230b6f] text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Book a Session</h1>
        <p className="text-white/80 mb-6">
          Choose a time that works for you. Sessions for Music Studio, Sound Healing, and Venue tours.
        </p>
        <div className="glass rounded-2xl p-2">
          <iframe title="Calendly" src={calendly} width="100%" height={740} frameBorder={0} />
        </div>
        <p className="text-white/70 text-sm mt-3">
          If the embed doesn’t load, open{" "}
          <a className="underline" href={calendly} target="_blank" rel="noreferrer">Calendly</a>.
        </p>
      </section>
    </main>
  );
}
