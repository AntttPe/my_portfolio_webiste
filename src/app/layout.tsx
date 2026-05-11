import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antek.dev"),
  title: {
    default: "Antek Pietraszewski - ICT Engineering Student",
    template: "%s · Antek Pietraszewski",
  },
  description:
    "ICT engineering student at AGH Kraków. Building full-stack systems, embedded firmware, and the occasional neural network. Java, C++, TypeScript, FreeRTOS.",
  keywords: [
    "Antek Pietraszewski",
    "ICT Engineering",
    "AGH",
    "portfolio",
    "Java",
    "Spring Boot",
    "C++",
    "FreeRTOS",
    "TypeScript",
    "React",
    "embedded",
    "networking",
    "CCNA",
  ],
  authors: [{ name: "Antek Pietraszewski" }],
  creator: "Antek Pietraszewski",
  openGraph: {
    title: "Antek Pietraszewski - ICT Engineering Student",
    description:
      "Full-stack systems, embedded firmware, networking. AGH Kraków.",
    url: "https://antek.dev",
    siteName: "Antek Pietraszewski",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
