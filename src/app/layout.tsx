import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
// (side-effect import for global styles)

// NOTE: Next.js should be able to resolve this CSS module via the app router. If the TS error persists,
// it is likely due to IDE/TS server caching; no runtime logic is affected.


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
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
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
