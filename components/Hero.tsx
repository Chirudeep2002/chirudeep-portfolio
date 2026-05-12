"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Hero() {

  return (

    <section className="
      relative min-h-[90vh] md:min-h-screen
      flex items-center justify-center
      section-padding
      overflow-hidden
    ">

      {/* BACKGROUND GLOWS */}

      <div className="
        absolute top-20 left-20
        w-72 h-72
        bg-cyan-500/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        absolute bottom-20 right-20
        w-96 h-96
        bg-purple-500/20
        blur-[140px]
        rounded-full
      " />

      {/* HERO CONTENT */}

      <Reveal>

        <div className="
          relative
          grid md:grid-cols-2
          gap-10 md:gap-16 items-center
          max-w-7xl
        ">

          {/* LEFT SIDE */}

          <div className="relative">

            {/* EXTRA GLOW */}
            <div className="
              absolute left-20 top-52
              w-72 h-72
              bg-cyan-500/10
              blur-[120px]
              rounded-full
            " />

            {/* SYSTEM TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-400 mb-4 relative z-10"
            >
              INITIALIZING CHIRU.SYSTEM
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
                text-5xl sm:text-6xl md:text-7xl xl:text-8xl
                font-black
                leading-tight
                tracking-tight
                relative z-10
              "
            >

              Chirudeep

              <br />

              <span className="gradient-text">
                Bandapalli
              </span>

            </motion.h1>

            {/* ROLE ANIMATION */}
            <div className="
              text-xl md:text-2xl mt-6
              text-gray-300
              relative z-10
            ">

              <TypeAnimation
                sequence={[
                  "Data Science Analyst",
                  2000,
                  "Software Engineer",
                  2000,
                  "AI/ML Developer",
                  2000,
                ]}
                repeat={Infinity}
              />

            </div>

            {/* DESCRIPTION */}
            <p className="
              mt-8
              text-gray-400
              text-lg
              leading-relaxed
              max-w-lg
              relative z-10
            ">

              Designing intelligent software systems that combine AI,
              scalable engineering, and data-driven problem solving.

            </p>

            {/* BUTTONS */}
            <div className="
              flex flex-wrap gap-4 md:gap-6
              mt-8 md:mt-10
              relative z-10
            ">
              <Magnetic>

              <a
                href="#projects"
                className="
                  px-7 py-3
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-semibold

                  glow

                  hover:scale-105
                  hover:shadow-cyan-500/50

                  transition duration-300
                "
              >
                Explore Projects
              </a>
              </Magnetic> 
              <Magnetic>
              <a
                href="https://github.com/Chirudeep2002"
                target="_blank"
                className="
                  px-7 py-3
                  rounded-2xl

                  glass

                  hover:border-cyan-400
                  hover:scale-105

                  transition duration-300
                "
              >
                GitHub
              </a>
              </Magnetic>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div
              className="
                w-[260px] h-[260px] md:w-[380px] md:h-[380px]

                float-animation
                glow-animate

                rounded-full

                glass
                glow

                flex items-center justify-center

                border border-white/10

                relative overflow-hidden
              "
            >

              {/* INNER GLOW */}
              <div className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-500/10
                to-purple-500/10
              " />

              <p className="
                text-gray-400
                relative z-10
                text-lg
              ">
                Photo Coming Soon
              </p>

            </div>

          </div>

        </div>

      </Reveal>

    </section>
  );
}