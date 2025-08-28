import CalendarEmbed from "../components/CalendarEmbed";

export default function EventsPage() {
  const gcal =
    "https://calendar.google.com/calendar/embed?src=d73d9eda7195bc3d898ba3895797600dbe994095b27cca527d7528850cd31ed2%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA&showPrint=0&showTabs=0";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#110035] via-[#1a0452] to-[#230b6f] text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Events Calendar</h1>
        <p className="text-white/80 mb-6">Upcoming ceremonies, studio sessions, and community gatherings.</p>
        <CalendarEmbed src={gcal} height={740} />
      </section>
    </main>
  );
}
