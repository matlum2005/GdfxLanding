"use client";

import { useEffect, useState } from "react";

export type NavSectionId =
  | "about"
  | "services"
  | "case-study"
  | "case-studies"
  | "blog"
  | "contact";

export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    for (const el of elements) obs.observe(el);
    return () => obs.disconnect();
  }, [sectionIds]);

  return activeId;
}

