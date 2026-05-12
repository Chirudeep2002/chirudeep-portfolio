"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(12px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}
    >

      {children}

    </motion.div>
  );
}