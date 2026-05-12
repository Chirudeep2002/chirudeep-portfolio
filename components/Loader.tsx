"use client";

import { motion } from "framer-motion";

export default function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.8,
        duration: 0.8,
      }}

      className="
        fixed inset-0 z-[99999]

        bg-[#050816]

        flex items-center justify-center

        pointer-events-none
      "
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        className="text-center"
      >

        {/* LOGO */}
        <h1 className="
          text-5xl md:text-7xl
          font-black
          gradient-text
          mb-10
        ">
          CHIRU.SYSTEM
        </h1>

        {/* TERMINAL TEXT */}
        <div className="
          font-mono
          text-lg md:text-xl
          space-y-4
        ">

          <p className="text-cyan-400">
            &gt; Initializing neural interface...
          </p>

          <p className="text-purple-400">
            &gt; Loading AI systems...
          </p>

          <p className="text-green-400">
            &gt; Authenticating developer identity...
          </p>

          <p className="text-gray-400">
            &gt; System ready.
          </p>

        </div>

      </motion.div>

    </motion.div>
  );
}