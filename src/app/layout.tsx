// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import NavSpacer from "./components/NavSpacer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0120] text-white">
        <Navbar />         {/* fixed bar (see Navbar below) */}
        <NavSpacer />      {/* adds padding on all pages except "/" */}
        {children}
      </body>
    </html>
  );
}

