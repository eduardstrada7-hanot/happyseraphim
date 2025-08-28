export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#110035] via-[#1a0452] to-[#230b6f] text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Events Calendar</h1>
        <p className="text-white/80 mb-6">
          Upcoming ceremonies, studio sessions, and community gatherings.
        </p>

        {/* Update src with your public Google Calendar embed URL */}
        <div className="glass rounded-2xl overflow-hidden">
          <iframe
            title="Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=YOUR_PUBLIC_CAL_ID&ctz=America%2FNew_York"
            width="100%"
            height="720"
            frameBorder="0"
          />
        </div>
        <p className="text-white/70 text-sm mt-3">
          Tip: Make your Google Calendar public and copy the <em>Embed code</em> URL.
        </p>
      </section>
    </main>
  );
}
