"use client";

import { motion } from "framer-motion";
import {
  Mail,
  BadgeCheck,
  GitBranch,
  Send,
} from "lucide-react";

export default function Contact() {

  return (

    <section
      id="contact"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Communication Terminal
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Establish
            <span className="gradient-text"> Connection</span>
          </h2>

        </motion.div>

        {/* TERMINAL PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] overflow-hidden"
        >

          {/* TERMINAL HEADER */}
          <div className="
            flex items-center gap-3
            px-8 py-5
            border-b border-white/10
            bg-white/5
          ">

            <div className="w-4 h-4 rounded-full bg-red-400" />
            <div className="w-4 h-4 rounded-full bg-yellow-400" />
            <div className="w-4 h-4 rounded-full bg-green-400" />

            <p className="ml-4 text-gray-400">
              secure-terminal.exe
            </p>

          </div>

          {/* TERMINAL BODY */}
          <div className="p-10 md:p-14">

            {/* TERMINAL TEXT */}
            <div className="space-y-5 mb-14 font-mono text-lg">

              <p className="text-green-400">
                &gt; Initializing communication channel...
              </p>

              <p className="text-cyan-400">
                &gt; Connection secured successfully.
              </p>

              <p className="text-gray-300">
                &gt; Open to software engineering,
                AI/ML, and data science opportunities.
              </p>

              <p className="text-purple-300">
                &gt; Ready to collaborate on innovative systems.
              </p>

            </div>

            {/* CONTACT GRID */}
            <div className="grid md:grid-cols-3 gap-6 mb-14">

              {/* EMAIL */}
              <a
                href="mailto:chirudeepba@gmail.com"
                className="
                  glass rounded-3xl p-8
                  hover:scale-105
                  hover:border-cyan-400
                  transition duration-300
                  group
                "
              >

                <Mail
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-bold mb-3">
                  Email
                </h3>

                <p className="text-gray-400 break-all">
                  chirudeepba@gmail.com
                </p>

              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/chirudeepbandapalli/"
                target="_blank"
                className="
                  glass rounded-3xl p-8
                  hover:scale-105
                  hover:border-cyan-400
                  transition duration-300
                "
              >

                <BadgeCheck
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-bold mb-3">
                  LinkedIn
                </h3>

                <p className="text-gray-400">
                  Connect Professionally
                </p>

              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Chirudeep2002"
                target="_blank"
                className="
                  glass rounded-3xl p-8
                  hover:scale-105
                  hover:border-cyan-400
                  transition duration-300
                "
              >

                <GitBranch
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-bold mb-3">
                  GitHub
                </h3>

                <p className="text-gray-400">
                  Explore Repository Network
                </p>

              </a>

            </div>

            {/* CTA BUTTON */}
            <div className="flex justify-center">

              <a
                href="mailto:chirudeepba@gmail.com"
                className="
                  flex items-center gap-4
                  px-10 py-5 rounded-2xl
                  bg-cyan-500 text-black
                  font-bold text-lg
                  glow
                  hover:scale-105
                  transition duration-300
                "
              >

                <Send size={24} />

                Initiate Contact

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}