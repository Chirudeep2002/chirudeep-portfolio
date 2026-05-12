"use client";

import { motion } from "framer-motion";

import {
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Magnetic({
  children,
}: {
  children: React.ReactNode;
}) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX =
    useSpring(x, {
      stiffness: 150,
      damping: 15,
    });

  const springY =
    useSpring(y, {
      stiffness: 150,
      damping: 15,
    });

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

    x.set(mouseX * 0.2);
    y.set(mouseY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (

    <motion.div
      style={{
        x: springX,
        y: springY,
      }}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      className="inline-block"
    >

      {children}

    </motion.div>
  );
}