import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TagCloud } from "@/components/layout/TagCloud";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BHUVAN.ME",
    template: "%s | BHUVAN.ME",
  },
  description: "Personal terminal for Bhuvan — letters, markets, projects, and more.",
  metadataBase: new URL("https://bhuvan.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-mono antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-12">{children}</main>
        <ScrollToTop />
        <TagCloud />
        <Footer />
      </body>
    </html>
  );
}
