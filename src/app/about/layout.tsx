import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GDFX",
  description:
    "Learn more about GDFX, our mission, vision, expertise, and commitment to delivering innovative digital solutions.",
  keywords: [
    "GDFX",
    "About GDFX",
    "IT Company",
    "Software Development",
    "Web Development",
    "Mobile App Development",
  ],
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

