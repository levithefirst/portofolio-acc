import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "levi — jack of all creative trades, master of content",
  description:
    "copywriting, content creation, content strategy and community management for Web3. i fix the copy that's costing you users.",
  openGraph: {
    title: "levi (@levithefirst)",
    description: "jack of all creative trades and master of content.",
    url: "https://levithefirst.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@levithefirst",
  },
};

export const viewport: Viewport = {
  themeColor: "#161616",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink">{children}</body>
    </html>
  );
}
