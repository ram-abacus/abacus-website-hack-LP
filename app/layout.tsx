import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordPress Site Hacked? — Abacus Desk can fix it fast",
  description: "Emergency WordPress malware cleanup, blacklist removal, hardening & monitoring by Abacus Desk. 24×7 response. 30‑day clean-site warranty.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "WordPress Site Hacked? — Fix it fast with Abacus Desk",
    description: "Emergency WordPress cleanup & security hardening. 24×7 response, 30‑day warranty.",
    url: "https://www.abacusdesk.com/",
    siteName: "Abacus Desk",
    type: "website",
  },
  metadataBase: new URL("https://www.abacusdesk.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
