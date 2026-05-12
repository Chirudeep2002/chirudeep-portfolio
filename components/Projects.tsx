"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

const featuredProjects = [
  {
    title:
      "SleepSync",
    subtitle:
      "AI-Powered Productivity Prediction Platform",

    description:
      "Developed a machine learning and visual analytics platform focused on productivity prediction, behavioral insights, and intelligent data visualization systems.",

    technologies: [
      "Python",
      "Machine Learning",
      "Analytics",
      "Visualization",
      "Prediction Systems",
    ],

    github:
      "https://github.com/Chirudeep2002/SleepSync-Visual-Analytics-Machine-Learning-for-Productivity-Prediction",

    gradient:
      "from-cyan-500/20 to-purple-500/20",
  },

  {
    title:
      "SDN Intelligent Load Balancer",

    subtitle:
      "Predictive Autoscaling & Network Optimization System",

    description:
      "Built an intelligent SDN-based load balancing system with predictive autoscaling and real-time network optimization capabilities.",

    technologies: [
      "SDN",
      "Networking",
      "Predictive Systems",
      "Analytics",
      "Optimization",
    ],

    github:
      "https://github.com/Chirudeep2002/SDN-Based-Intelligent-Load-Balancer-with-Predictive-Autoscaling",

    gradient:
      "from-purple-500/20 to-cyan-500/20",
  },

  {
    title:
      "Lung Cancer Detection",

    subtitle:
      "AI-Based Medical Imaging Classification System",

    description:
      "Designed a medical imaging AI system using Extreme Learning Machine achieving 98% accuracy for CT scan classification and tumor detection.",

    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
      "Medical AI",
    ],

    github:
      "https://github.com/Chirudeep2002",

    gradient:
      "from-blue-500/20 to-purple-500/20",
  },

  {
    title:
      "Visual Analytics Chatbot",

    subtitle:
      "Conversational Intelligence & Data Visualization",

    description:
      "Built an intelligent chatbot system capable of visual analytics interaction, conversational querying, and data-driven insight generation.",

    technologies: [
      "Chatbot",
      "Visualization",
      "Analytics",
      "Python",
      "AI",
    ],

    github:
      "https://github.com/Chirudeep2002/Visual-Analytics-Chatbot",

    gradient:
      "from-cyan-500/20 to-blue-500/20",
  },
];

const additionalProjects = [
  {
    title:
      "Restaurant Monitoring System",

    github:
      "https://github.com/Chirudeep2002/Multi-Branch-Restaurant-Performance-Monitoring-System",
  },

  {
    title:
      "Map Coloring AI",

    github:
      "https://github.com/Chirudeep2002/Map-Coloring-Problem-Using-Constraint-Satisfaction-Techniques",
  },

  {
    title:
      "SDN Load Balancer Dashboard",

    github:
      "https://github.com/Chirudeep2002/SDN-Load-Balancer-Dashboard",
  },

  {
    title:
      "N-Queens Hill Climbing",

    github:
      "https://github.com/Chirudeep2002/N-queens-hill-climbing",
  },
];

export default function Projects() {

  return (

    <section
      id="projects"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

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
            Innovation Lab
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>

        </motion.div>

        {/* FEATURED PROJECTS */}
        <div className="space-y-14 mb-28">

          {featuredProjects.map((project, index) => (
            <TiltCard key={project.title}>

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative overflow-hidden
                glass rounded-[2rem]
                p-7 md:p-14
                group
                hover:scale-[1.01]
                transition duration-500
              "
            >

              {/* GRADIENT */}
              <div
                className={`
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br ${project.gradient}
                `}
              />

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                  {/* LEFT */}
                  <div className="flex-1">

                    <p className="text-cyan-400 uppercase tracking-[0.2em] mb-5">
                      Featured Project
                    </p>

                    <h3 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                      {project.title}
                    </h3>

                    <p className="text-xl text-gray-300 mb-8">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                      {project.description}
                    </p>

                  </div>

                  {/* RIGHT ACTIONS */}
                  <div className="flex lg:flex-col gap-5">

                    <a
                      href={project.github}
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

                      GitHub

                    </a>

                    <button
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

                      Live Preview

                    </button>

                  </div>

                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-4 mt-12">

                  {project.technologies.map((tech) => (

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

            </motion.div>
            </TiltCard>

          ))}

        </div>

        {/* ADDITIONAL PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h3 className="text-3xl font-bold mb-8 md:mb-12 gradient-text">
            Additional Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {additionalProjects.map((project) => (

              <a
                key={project.title}
                href={project.github}
                target="_blank"
                className="
                  glass rounded-3xl p-8
                  hover:scale-105
                  hover:border-cyan-400
                  transition duration-300
                  group
                "
              >

                <div className="flex justify-between items-start mb-8">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-cyan-500/10
                    flex items-center justify-center
                    group-hover:scale-110
                    transition duration-300
                  ">

                    <GitBranch className="text-cyan-400" />

                  </div>

                  <ExternalLink
                    className="text-gray-400"
                    size={18}
                  />

                </div>

                <h4 className="text-xl font-semibold text-white leading-relaxed">
                  {project.title}
                </h4>

              </a>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}