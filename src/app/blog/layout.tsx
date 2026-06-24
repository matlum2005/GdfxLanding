import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | GDFX",
  description:
    "Latest insights, technology trends, development guides, digital transformation strategies, and industry updates from GDFX.",
  keywords: [
    "GDFX Blog",
    "Technology Blog",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Digital Transformation",
  ],
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

