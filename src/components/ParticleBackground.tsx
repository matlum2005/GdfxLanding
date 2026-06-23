"use client";

import Particles from "@tsparticles/react";
import { useMemo } from "react";

type Props = { className?: string };

export default function ParticleBackground({ className }: Props) {
  const options = useMemo(
    () => ({
      background: { opacity: 0 },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
      },
      particles: {
        color: { value: ["#6E84FF", "#D13FFF"] },
        links: {
          color: "#6E84FF",
          distance: 150,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          outModes: { default: "out" },
          straight: false,
          trail: { enable: false, length: 0 },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
        shadow: {
          enable: true,
          blur: 3,
          color: { value: "#6E84FF" },
          opacity: 0.4,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className={className}>
      <Particles options={options as unknown as Record<string, unknown>} />
    </div>
  );
}

