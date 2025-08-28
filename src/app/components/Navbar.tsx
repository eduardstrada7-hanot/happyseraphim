"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = { label: string; href: string };
type Dropdown = { label: string; items: MenuItem[] };

const nav: (MenuItem | Dropdown)[] = [
  { label: "Home", href: "/" },
  { label: "Music Studio", href: "/music-studio" },
  { label: "Video Event Venue", href: "/video-event-venue" },
  { label: "Events", href: "/events" },
  {
    label: "Soma",
    items: [
      { label: "Sound Healing", href: "/soma/sound-healing" },
      { label: "Superfoods & Elixirs", href: "/soma/superfoods-elixirs" },
    ],
  },
  {
    label: "Our Story",
    items: [
      { label: "Overview", href: "/our-story" },
      { label: "FAQ", href: "/our-story/faq" },
      { label: "Team", href: "/our-story/team" },
    ],
  },
];

export default function Navbar({ glass = false }: { glass?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`w-full z-50 ${glass ? "glass rounded-b-2xl" : ""}`}
      onMouseLeave={() => setOpen(null)}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" aria-label="HappySeraphim home" className="flex items-center gap-2">
            <Image
              src="/hs-logo.png"
              alt="HappySeraphim logo"
              width={36}
              height={36}
              priority
              className="rounded-full shadow-md"
            />
            <span className="font-semibold tracking-wide uppercase text-white text-sm sm:text-base text-glow">
              happy<span className="opacity-80">seraphim</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-white/90">
            {nav.map((item) => {
              if ("href" in item) {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`liquid-link hover:text-white ${
                        active ? "text-white font-medium" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                >
                  <button
                    className="liquid-link hover:text-white text-white/90"
                    aria-haspopup="true"
                    aria-expanded={open === item.label}
                  >
                    {item.label}
                  </button>
                  {open === item.label && (
                    <div className="absolute left-0 mt-3 min-w-[220px] glass rounded-xl p-2 shadow-xl">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-3 py-2 rounded-lg hover:bg-white/10 ${
                            pathname === sub.href
                              ? "bg-white/10 text-white"
                              : "text-white/90"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
            <li>
              <Link
                href="/book"
                className="px-4 py-2 rounded-xl bg-white/90 text-purple-800 font-medium hover:bg-white transition"
              >
                Book Now
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 bg-white/10 border border-white/15 hover:bg-white/15 transition"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="glass rounded-2xl p-3 space-y-1">
            {nav.map((item) => {
              if ("href" in item) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="px-2 py-1">
                  <div className="text-white/80 text-sm mb-1">{item.label}</div>
                  <div className="pl-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 rounded-lg hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link
              href="/book"
              className="block px-3 py-2 rounded-lg bg-white/90 text-purple-800 font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
