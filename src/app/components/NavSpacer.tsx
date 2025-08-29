// src/app/components/NavSpacer.tsx
"use client";
import { usePathname } from "next/navigation";

export default function NavSpacer() {
  const pathname = usePathname();
  // No spacer on the home page so the nav sits on the hero image.
  const needsPad = pathname !== "/";
  return needsPad ? <div className="h-16 sm:h-20" /> : null;
}
