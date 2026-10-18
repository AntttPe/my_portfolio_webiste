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
  metadataBase: new URL("https://antekpietraszewski.vercel.app"),
  title: {
    default: "Antek Pietraszewski - ICT Engineering Student, AGH Kraków",
    template: "%s · Antek Pietraszewski",
  },
  description:
    "ICT engineering student at AGH Kraków, graduating February 2028. Previously at Relu BV working on production ML for 3D medical imaging. Python, Java, C++.",
  keywords: [
    "Antek Pietraszewski",
    "Antoni Pietraszewski",
    "software engineer intern",
    "machine learning",
    "PyTorch",
    "Python",
    "Java",
    "Spring Boot",
    "C++",
    "AGH",
    "ICT Engineering",
    "embedded",
    "networking",
  ],
  authors: [{ name: "Antoni (Antek) Pietraszewski" }],
  creator: "Antoni (Antek) Pietraszewski",
  openGraph: {
    title: "Antek Pietraszewski - ICT Engineering Student",
    description:
      "ICT engineering student at AGH Kraków. Production ML at Relu BV, backend in Java, embedded in C++. Open to Summer 2027 internships.",
    url: "https://antekpietraszewski.vercel.app",
    siteName: "Antek Pietraszewski",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antek Pietraszewski - ICT Engineering Student",
    description:
      "ICT engineering student at AGH Kraków. Production ML at Relu BV, backend in Java, embedded in C++.",
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
