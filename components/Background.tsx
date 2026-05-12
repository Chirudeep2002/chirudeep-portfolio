"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Background() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  const isMobile =
  typeof window !== "undefined" &&
  window.innerWidth < 768;

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#00d9ff",
          },

          links: {
            color: "#7c3aed",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
          value: isMobile ? 20 : 45,
          },

          opacity: {
            value: 0.25,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },

        detectRetina: true,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.35,
              },
            },
          },
        },
      }}
    />
  );
}