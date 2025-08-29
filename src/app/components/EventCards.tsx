
import Link from "next/link";
import { Calendar, Music, Video } from "lucide-react";

// display prices (USD) — change anytime
const PRICE: Record<string, number> = {
  venue2: 200, venue6: 550, venue8: 700, venue12: 950, venue20: 1600,
  record_studio: 120,
  record_soundtrack: 350,
  video_studio: 250,
  video_event: 600,
};

const CARDS: { key: string; title: string; desc: string; icon: "venue"|"record"|"video" }[] = [
  { key: "record_studio",     title: "Recording – In-Studio",  desc: "Come record at HappySeraphim", icon: "record" },
  { key: "venue2",            title: "Book Venue – 3h",        desc: "Recording events",             icon: "venue" },
  { key: "venue6",            title: "Book Venue – 6h",        desc: "Half-day",                     icon: "venue" },
  { key: "venue8",            title: "Book Venue – 9h",        desc: "Full day",                     icon: "venue" },
  { key: "venue12",           title: "Book Venue – 12h",       desc: "Long day",                     icon: "venue" },
  { key: "venue20",           title: "Book Venue – 24h",       desc: "Extended block",               icon: "venue" },
  { key: "record_soundtrack", title: "Recording – Soundtrack", desc: "We compose & record for you",  icon: "record" },
  { key: "video_studio",      title: "Video – In-Studio Shoot",desc: "Content, promos, music videos", icon: "video"  },
  { key: "video_event",       title: "Video – Event Filming",  desc: "We film your event on site",    icon: "video"  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-auto inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-white/15">
      {children}
    </span>
  );
}

export default function EventCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((c) => (
        <Link
          key={c.key}
          href={`/book?type=${encodeURIComponent(c.key)}`}
          className="glass rounded-2xl p-5 hover:scale-[1.02] transition shadow-lg block"
        >
          <div className="flex items-center gap-3">
            {c.icon === "venue"  && <Calendar size={20} aria-hidden />}
            {c.icon === "record" && <Music size={20} aria-hidden />}
            {c.icon === "video"  && <Video size={20} aria-hidden />}
            <div className="text-lg font-semibold">{c.title}</div>
            <Badge>${PRICE[c.key]}</Badge>
          </div>
          <div className="text-white/75 text-sm mt-2">{c.desc}</div>
          <div className="mt-3 text-sm underline">Book now →</div>
        </Link>
      ))}
    </div>
  );
}
