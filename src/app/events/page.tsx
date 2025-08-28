export default function EventsPage() {
  const gcal = "https://calendar.google.com/calendar/u/0?cid=ZDczZDllZGE3MTk1YmMzZDg5OGJhMzg5NTc5NzYwMGRiZTk5NDA5NWIyN2NjYTUyN2Q3NTI4ODUwY2QzMWVkMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#110035] via-[#1a0452] to-[#230b6f] text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Events Calendar</h1>
        <p className="text-white/80 mb-6">Upcoming ceremonies, studio sessions, and community gatherings.</p>
        <div className="glass rounded-2xl overflow-hidden">
          <iframe title="Google Calendar" src={gcal} width="100%" height={740} frameBorder={0} />
        </div>
        <p className="text-white/70 text-sm mt-3">
          Tip: Make your Google Calendar public and copy the <em>Embed code</em> URL.
        </p>
      </section>
    </main>
  );
}
