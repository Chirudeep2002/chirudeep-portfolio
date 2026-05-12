"use client";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useState } from "react";

export default function TiltCard({
  children,
}: {
  children: React.ReactNode;
}) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX =
    useTransform(y, [-100, 100], [10, -10]);

  const rotateY =
    useTransform(x, [-100, 100], [-10, 10]);

  const [glow, setGlow] =
    useState({ x: 50, y: 50 });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX =
      e.clientX - rect.left - width / 2;

    const mouseY =
      e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);

    setGlow({
      x: (e.clientX - rect.left) / width * 100,
      y: (e.clientY - rect.top) / height * 100,
    });
  }

  function handleMouseLeave() {

    x.set(0);
    y.set(0);

    setGlow({
      x: 50,
      y: 50,
    });
  }

  return (

    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      whileHover={{
        scale: 1.02,
      }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}

      className="
        relative
        rounded-[2rem]
      "
    >

      {/* LIGHT REFLECTION */}
      <div
        className="
          absolute inset-0
          rounded-[2rem]
          pointer-events-none
          opacity-0 hover:opacity-100
          transition duration-300
        "

        style={{
          background: `
            radial-gradient(
              circle at ${glow.x}% ${glow.y}%,
              rgba(255,255,255,0.18),
              transparent 35%
            )
          `,
        }}
      />

      {children}

    </motion.div>
  );
}