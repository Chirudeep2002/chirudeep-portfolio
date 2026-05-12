"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maitra Market Research",
    role: "Android Developer & Data Analyst Intern",
    duration: "Jan 2022 — Dec 2024",
    highlights: [
      "Developed Android applications with REST API integration",
      "Automated survey workflows reducing manual processing by 30%",
      "Built analytics dashboards using Tableau and Matplotlib",
      "Processed large datasets using Python, SQL, Pandas, and NumPy",
      "Implemented secure SQLite storage systems",
      "Collaborated in Agile SDLC environments",
    ],
    tech: [
      "Python",
      "SQL",
      "Android Studio",
      "Tableau",
      "Pandas",
      "REST APIs",
    ],
  },
];

export default function Experience() {
  return (

    <section
      id="experience"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full" />

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
            Professional Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Experience
            <span className="gradient-text"> Timeline</span>
          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-purple-500" />

          {/* EXPERIENCE CARDS */}
          <div className="space-y-20">

            {experiences.map((exp, index) => (

              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative pl-20"
              >

                {/* TIMELINE NODE */}
                <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-cyan-400 glow border-4 border-[#050816]" />

                {/* CARD */}
                <div className="glass rounded-3xl p-10 hover:scale-[1.01] transition duration-300">

                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                    <div>

                      <h3 className="text-4xl font-bold gradient-text">
                        {exp.role}
                      </h3>

                      <p className="text-xl text-gray-300 mt-2">
                        {exp.company}
                      </p>

                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                      {exp.duration}
                    </div>

                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="space-y-4 mb-10">

                    {exp.highlights.map((highlight) => (

                      <div
                        key={highlight}
                        className="flex gap-4 items-start"
                      >

                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-3" />

                        <p className="text-gray-300 leading-relaxed">
                          {highlight}
                        </p>

                      </div>

                    ))}

                  </div>

                  {/* TECH STACK */}
                  <div>

                    <h4 className="text-xl font-semibold mb-5 text-white">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-4">

                      {exp.tech.map((tech) => (

                        <div
                          key={tech}
                          className="
                            px-5 py-3 rounded-2xl
                            bg-white/5
                            border border-white/10
                            text-gray-300
                            hover:border-cyan-400
                            hover:text-cyan-300
                            transition duration-300
                          "
                        >
                          {tech}
                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}