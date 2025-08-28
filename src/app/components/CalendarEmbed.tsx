// src/app/components/CalendarEmbed.tsx
type Props = {
  /** Full Google Calendar embed URL (the src from Google's iframe) */
  src: string;
  /** Height in px (optional) */
  height?: number;
  /** View: MONTH | AGENDA | WEEK (optional) */
  view?: "MONTH" | "AGENDA" | "WEEK";
};

export default function CalendarEmbed({ src, height = 740, view = "MONTH" }: Props) {
  // If your src doesn’t already include a mode, append one
  const url = src.includes("mode=")
    ? src
    : `${src}${src.includes("?") ? "&" : "?"}mode=${view}&showPrint=0&showTabs=0`;

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <iframe
        title="Google Calendar"
        src={url}
        width="100%"
        height={height}
        frameBorder={0}
        loading="lazy"
      />
    </div>
  );
}
