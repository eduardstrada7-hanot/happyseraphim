type Props = {
  /** Paste your Google Calendar embed URL here (public calendar) */
  src: string;
  height?: number;
};

export default function CalendarEmbed({ src, height = 720 }: Props) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <iframe
        title="Calendar"
        src={src}
        width="100%"
        height={height}
        frameBorder={0}
      />
    </div>
  );
}
