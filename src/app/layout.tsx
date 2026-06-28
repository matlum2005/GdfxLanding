import type { Metadata } from "next";
import { Inter, Sora, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


// Fonts are injected as CSS variables. They are safe to keep even if some tooling
// shows a transient TS hint about side-effect imports.

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Keep existing additional fonts registered, but enterprise typography will
// primarily use Manrope (headings/buttons) + Inter (body).
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});




export const metadata: Metadata = {
  title: "GDFX - Enterprise Digital Solutions",
  description:
    "Premium enterprise website for GDFX: mobile apps, web development, and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${manrope.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

