import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://careinnovations.in"),
  title: "Care Innovations | Strategic Business Growth Consulting",
  description:
    "Care Innovations helps organizations identify high-value opportunities, build relationships, and accelerate sustainable business growth.",
  keywords: [
    "Care Innovations",
    "business consulting",
    "strategic business development",
    "lead generation",
    "growth advisory",
    "Bengaluru"
  ],
  openGraph: {
    title: "Care Innovations | Strategic Business Growth Consulting",
    description:
      "Accelerating business growth through strategic opportunity development.",
    type: "website",
    images: ["/images/care-innovations-growth-visual.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plex.variable} bg-white font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
