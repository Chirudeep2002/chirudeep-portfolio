"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Activity } from "lucide-react";
import GithubLive from "./GithubLive";

export default function GithubStats() {

  return (

    <section
      id="github"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-20 w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Developer Intelligence
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            GitHub
            <span className="gradient-text"> Analytics</span>
          </h2>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-10"
          >

            <div className="flex items-center gap-4 mb-10">

              <div className="
                w-16 h-16 rounded-2xl
                bg-cyan-500/10
                flex items-center justify-center
              ">

                <Activity
                  className="text-cyan-400"
                  size={32}
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold gradient-text">
                  Developer Profile
                </h3>

                <p className="text-gray-400">
                  AI & Software Engineering Focus
                </p>

              </div>

            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-6">

              <div className="glass rounded-3xl p-8">

                <h4 className="text-5xl font-bold gradient-text mb-3">
                  AI
                </h4>

                <p className="text-gray-400">
                  Machine Learning Projects
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <h4 className="text-5xl font-bold gradient-text mb-3">
                  7+
                </h4>

                <p className="text-gray-400">
                  Major Repositories
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <h4 className="text-5xl font-bold gradient-text mb-3">
                  Full
                </h4>

                <p className="text-gray-400">
                  Stack Development
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <h4 className="text-5xl font-bold gradient-text mb-3">
                  DS
                </h4>

                <p className="text-gray-400">
                  Data Science & Analytics
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-10 flex flex-col justify-between"
          >

            <div>

              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
                Repository Network
              </p>

              <h3 className="text-4xl font-bold gradient-text mb-8">
                GitHub Intelligence
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg mb-10">
                Explore repositories focused on AI systems,
                machine learning, scalable software engineering,
                networking, visual analytics, and modern
                application development.
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-4 mb-12">

                {[
                  "Machine Learning",
                  "Python",
                  "Analytics",
                  "Networking",
                  "Django",
                  "Visualization",
                ].map((tag) => (

                  <div
                    key={tag}
                    className="
                      px-5 py-3 rounded-2xl
                      bg-white/5
                      border border-white/10
                      text-gray-300
                    "
                  >
                    {tag}
                  </div>

                ))}

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <a
                href="https://github.com/Chirudeep2002"
                target="_blank"
                className="
                  flex items-center gap-3
                  px-6 py-4 rounded-2xl
                  bg-cyan-500 text-black
                  font-semibold glow
                  hover:scale-105
                  transition duration-300
                "
              >

                <GitBranch size={20} />

                GitHub Profile

              </a>

              <a
                href="https://github.com/Chirudeep2002?tab=repositories"
                target="_blank"
                className="
                  flex items-center gap-3
                  px-6 py-4 rounded-2xl
                  glass
                  hover:border-cyan-400
                  hover:scale-105
                  transition duration-300
                "
              >

                <ExternalLink size={20} />

                View Repositories

              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}