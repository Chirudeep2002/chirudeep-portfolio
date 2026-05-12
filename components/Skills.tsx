"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const technologies: Record<
  string,
  {
    display: string;
    description: string;
    projects: string[];
    tools: string[];
    level: string;
    learning?: boolean;
  }
> = {

  Python: {
    display: "Python",
    description:
      "Used extensively for machine learning, AI systems, data analytics, automation, and backend development.",
    projects: [
      "Lung Cancer Detection",
      "Restaurant Analytics",
      "Map Coloring AI",
    ],
    tools: ["Pandas", "NumPy", "TensorFlow", "OpenCV"],
    level: "Advanced",
  },

  Java: {
    display: "Java",
    description:
      "Used for Android development and object-oriented software engineering.",
    projects: ["Android Applications"],
    tools: ["Android Studio", "REST APIs"],
    level: "Intermediate",
  },

  C: {
    display: "C",
    description:
      "Used for foundational programming concepts and algorithm implementation.",
    projects: ["Academic Programming"],
    tools: ["Algorithms", "Data Structures"],
    level: "Intermediate",
  },

  SQL: {
    display: "SQL",
    description:
      "Used for database management, analytics, and scalable querying systems.",
    projects: ["Restaurant Monitoring System"],
    tools: ["MySQL", "SQLite"],
    level: "Advanced",
  },

  MachineLearning: {
    display: "Machine Learning",
    description:
      "Focused on predictive analytics, intelligent systems, and AI-powered applications.",
    projects: [
      "Lung Cancer Detection",
      "Map Coloring AI",
    ],
    tools: ["Scikit-learn", "TensorFlow"],
    level: "Intermediate",
  },

  TensorFlow: {
    display: "TensorFlow",
    description:
      "Used for deep learning and AI-powered predictive models.",
    projects: ["Lung Cancer Detection"],
    tools: ["Python", "OpenCV"],
    level: "Intermediate",
  },

  Pandas: {
    display: "Pandas",
    description:
      "Used for large-scale data analysis and preprocessing.",
    projects: ["Restaurant Analytics"],
    tools: ["Python", "NumPy"],
    level: "Advanced",
  },

  NumPy: {
    display: "NumPy",
    description:
      "Used for numerical computing and optimized data processing.",
    projects: ["Lung Cancer Detection"],
    tools: ["Python", "Pandas"],
    level: "Advanced",
  },

  OpenCV: {
    display: "OpenCV",
    description:
      "Used for image preprocessing and computer vision workflows.",
    projects: ["Lung Cancer Detection"],
    tools: ["TensorFlow", "Python"],
    level: "Intermediate",
  },

  ScikitLearn: {
    display: "Scikit-learn",
    description:
      "Used for machine learning workflows and predictive systems.",
    projects: ["AI Projects"],
    tools: ["Python", "Pandas"],
    level: "Intermediate",
  },

  Tableau: {
    display: "Tableau",
    description:
      "Used for dashboards and business intelligence visualizations.",
    projects: ["Analytics Dashboards"],
    tools: ["Data Visualization"],
    level: "Intermediate",
  },

  Matplotlib: {
    display: "Matplotlib",
    description:
      "Used for visual analytics and plotting insights.",
    projects: ["Data Analytics"],
    tools: ["Python", "Pandas"],
    level: "Intermediate",
  },

  HTML: {
    display: "HTML",
    description:
      "Used for structuring responsive frontend interfaces.",
    projects: ["MedConnect", "Portfolio"],
    tools: ["CSS", "JavaScript"],
    level: "Intermediate",
  },

  CSS: {
    display: "CSS",
    description:
      "Used for responsive styling and modern UI layouts.",
    projects: ["Portfolio", "MedConnect"],
    tools: ["Tailwind CSS"],
    level: "Intermediate",
  },

  JavaScript: {
    display: "JavaScript",
    description:
      "Used for dynamic frontend interactions and modern web applications.",
    projects: ["Portfolio"],
    tools: ["React", "Next.js"],
    level: "Intermediate",
  },

  Django: {
    display: "Django",
    description:
      "Used for scalable backend systems and API integration.",
    projects: ["MedConnect"],
    tools: ["REST APIs", "Authentication"],
    level: "Intermediate",
  },

  RESTAPIs: {
    display: "REST APIs",
    description:
      "Integrated scalable APIs between frontend and backend systems.",
    projects: ["Android Applications", "MedConnect"],
    tools: ["Django", "Java"],
    level: "Intermediate",
  },

  React: {
    display: "React",
    description:
      "Currently learning React for interactive frontend development.",
    projects: ["CHIRU.SYSTEM Portfolio"],
    tools: ["Next.js", "Tailwind CSS"],
    level: "Basic",
    learning: true,
  },

  NextJS: {
    display: "Next.js",
    description:
      "Learning Next.js for scalable frontend applications and optimized performance.",
    projects: ["CHIRU.SYSTEM Portfolio"],
    tools: ["React", "Tailwind CSS"],
    level: "Basic",
    learning: true,
  },

  TailwindCSS: {
    display: "Tailwind CSS",
    description:
      "Using Tailwind CSS for futuristic responsive UI design.",
    projects: ["CHIRU.SYSTEM Portfolio"],
    tools: ["React", "Next.js"],
    level: "Basic",
    learning: true,
  },

  GoogleCloud: {
    display: "Google Cloud",
    description:
      "Used for deployment and scalable cloud infrastructure.",
    projects: ["MedConnect"],
    tools: ["GCP", "Cloud Deployment"],
    level: "Intermediate",
  },

  Git: {
    display: "Git",
    description:
      "Used for version control and collaborative development.",
    projects: ["All Projects"],
    tools: ["GitHub"],
    level: "Intermediate",
  },

  GitHub: {
    display: "GitHub",
    description:
      "Used for repository hosting, collaboration, and project showcasing.",
    projects: ["Portfolio", "AI Projects"],
    tools: ["Git"],
    level: "Intermediate",
  },

  AndroidStudio: {
    display: "Android Studio",
    description:
      "Used for Android app development and testing workflows.",
    projects: ["Android Applications"],
    tools: ["Java", "SQLite"],
    level: "Intermediate",
  },

  MySQL: {
    display: "MySQL",
    description:
      "Used for relational databases and analytical querying systems.",
    projects: ["Restaurant Monitoring System"],
    tools: ["SQL"],
    level: "Advanced",
  },

  SQLite: {
    display: "SQLite",
    description:
      "Used for secure lightweight storage in Android systems.",
    projects: ["Android Applications"],
    tools: ["Java"],
    level: "Intermediate",
  },

  Linux: {
    display: "Linux",
    description:
      "Basic experience with Linux environments and terminal workflows.",
    projects: ["Development Environment"],
    tools: ["Terminal"],
    level: "Basic",
    learning: true,
  },

};

const categories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C", "SQL"],
  },

  {
    title: "AI & Data Science",
    skills: [
      "MachineLearning",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "OpenCV",
      "ScikitLearn",
      "Tableau",
      "Matplotlib",
    ],
  },

  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "RESTAPIs",
      "React",
      "NextJS",
      "TailwindCSS",
    ],
  },

  {
    title: "Cloud & Tools",
    skills: [
      "GoogleCloud",
      "Git",
      "GitHub",
      "AndroidStudio",
      "MySQL",
      "SQLite",
      "Linux",
    ],
  },
];

export default function Skills() {

  const [selectedSkill, setSelectedSkill] =
    useState("Python");

  const currentSkill =
    technologies[selectedSkill as keyof typeof technologies];

  return (

    <section
      id="skills"
      className="relative section-padding overflow-hidden"
    >

      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Core Technologies
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Technology
            <span className="gradient-text"> Intelligence</span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-8">

            {categories.map((category, index) => (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >

                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">

                  {category.skills.map((skill) => (

                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`
                        px-5 py-3 rounded-2xl border
                        transition duration-300 hover:scale-105

                        ${
                          selectedSkill === skill
                            ? "bg-cyan-500 text-black border-cyan-400 glow"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400"
                        }
                      `}
                    >

                      <div className="flex items-center gap-2">

                        <span>
                          {
                            technologies[
                              skill as keyof typeof technologies
                            ].display
                          }
                        </span>

                        {
                          technologies[
                            skill as keyof typeof technologies
                          ]?.learning && (
                            <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400">
                              Learning
                            </span>
                          )
                        }

                      </div>

                    </button>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

          {/* RIGHT PANEL */}
          <motion.div
            key={selectedSkill}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 sticky top-32"
          >

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              AI Technology Analysis
            </p>

            <h3 className="text-5xl font-bold gradient-text mb-8">
              {currentSkill.display}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              {currentSkill.description}
            </p>

            {/* EXPERIENCE */}
            <div className="mb-8">

              <h4 className="text-xl font-semibold mb-3 text-white">
                Experience Level
              </h4>

              <div
                className={`
                  inline-block px-5 py-2 rounded-xl border

                  ${
                    currentSkill.level === "Advanced"
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"

                      : currentSkill.level === "Intermediate"
                      ? "bg-purple-500/20 border-purple-400 text-purple-300"

                      : "bg-gray-500/20 border-gray-400 text-gray-300"
                  }
                `}
              >
                {currentSkill.level}
              </div>

            </div>

            {/* TOOLS */}
            <div className="mb-8">

              <h4 className="text-xl font-semibold mb-4 text-white">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-3">

                {currentSkill.tools.map((tool) => (

                  <div
                    key={tool}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tool}
                  </div>

                ))}

              </div>

            </div>

            {/* PROJECTS */}
            <div>

              <h4 className="text-xl font-semibold mb-4 text-white">
                Related Projects
              </h4>

              <div className="space-y-3">

                {currentSkill.projects.map((project) => (

                  <div
                    key={project}
                    className="glass rounded-xl px-5 py-4 hover:border-cyan-400 transition duration-300"
                  >
                    {project}
                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}