"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Origin Story
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            About
            <span className="gradient-text"> Me</span>
          </h2>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 md:p-14"
          >

            <p className="text-gray-300 leading-relaxed text-lg">

              I am a Computer Science graduate student at the
              University of North Carolina at Charlotte specializing in
              software engineering, machine learning, and data analytics.

              <br />
              <br />

              My work focuses on building intelligent applications,
              scalable backend systems, and data-driven solutions that
              solve real-world challenges.

              <br />
              <br />

              With experience in Android development, cloud technologies,
              full-stack web development, and AI-powered analytics,
              I enjoy combining engineering and creativity to design
              impactful digital experiences.

            </p>

          </motion.div>

          {/* RIGHT SIDE STATS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {/* CARD 1 */}
            <div className="glass rounded-3xl p-6 md:p-8 glow">

              <h3 className="text-5xl font-bold gradient-text mb-4">
                3.9
              </h3>

              <p className="text-gray-400">
                GPA at UNC Charlotte
              </p>

            </div>

            {/* CARD 2 */}
            <div className="glass rounded-3xl p-6 md:p-8 glow">

              <h3 className="text-5xl font-bold gradient-text mb-4">
                10+
              </h3>

              <p className="text-gray-400">
                Major Projects Built
              </p>

            </div>

            {/* CARD 3 */}
            <div className="glass rounded-3xl p-6 md:p-8 glow">

              <h3 className="text-5xl font-bold gradient-text mb-4">
                AI
              </h3>

              <p className="text-gray-400">
                Machine Learning Focus
              </p>

            </div>

            {/* CARD 4 */}
            <div className="glass rounded-3xl p-6 md:p-8 glow">

              <h3 className="text-5xl font-bold gradient-text mb-4">
                GCP
              </h3>

              <p className="text-gray-400">
                Cloud & Full Stack Experience
              </p>

            </div>
             <div className="glass rounded-3xl p-6 md:p-8 glow">

              <h3 className="text-4xl font-bold gradient-text mb-4">
                Data Science
              </h3>

              <p className="text-gray-400">
                Data-Driven Problem Solving
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}