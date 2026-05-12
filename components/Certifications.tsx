"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  Cloud,
  Code2,
} from "lucide-react";

const certifications = [
  {
    title:
      "Google Cloud Career Readiness",

    subtitle:
      "Associate Cloud Engineer Track",

    icon: Cloud,

    description:
      "Completed Google Cloud engineering readiness training focused on deployment, cloud infrastructure, and scalable systems.",

    glow:
      "from-cyan-500/20 to-blue-500/20",
  },

  {
    title:
      "Python for Data Science",

    subtitle:
      "NPTEL Certification",

    icon: Brain,

    description:
      "Focused on Python-based analytics, data processing, visualization, and machine learning foundations.",

    glow:
      "from-purple-500/20 to-cyan-500/20",
  },

  {
    title:
      "AI & Analytics Learning",

    subtitle:
      "Continuous Skill Development",

    icon: Code2,

    description:
      "Actively exploring advanced AI systems, analytics engineering, scalable software systems, and intelligent automation.",

    glow:
      "from-cyan-500/20 to-purple-500/20",
  },
];

const learning = [
  "Advanced React",
  "Next.js",
  "System Design",
  "MLOps",
  "Cloud Architecture",
  "AI Engineering",
];

export default function Certifications() {

  return (

    <section
      id="certifications"
      className="relative section-padding overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="
        absolute left-0 bottom-0
        w-[500px] h-[500px]
        bg-purple-500/10
        blur-[160px]
        rounded-full
      " />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            mb-4
          ">
            Knowledge Matrix
          </p>

          <h2 className="
            text-4xl md:text-6xl
            font-bold
          ">

            Certifications &
            <span className="gradient-text">
              {" "}Learning
            </span>

          </h2>

        </motion.div>

        {/* FEATURED CERT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

          className="
            relative overflow-hidden
            glass rounded-[2rem]
            p-10 md:p-14
            mb-20
          "
        >

          <div className="
            absolute inset-0
            bg-gradient-to-br
            from-cyan-500/10
            to-purple-500/10
          " />

          <div className="
            relative z-10
            flex flex-col lg:flex-row
            gap-10 items-start justify-between
          ">

            {/* LEFT */}
            <div className="max-w-3xl">

              <p className="
                text-cyan-400
                uppercase
                tracking-[0.2em]
                mb-5
              ">
                Featured Certification
              </p>

              <h3 className="
                text-4xl md:text-5xl
                font-bold
                gradient-text
                mb-6
              ">
                Google Cloud Career Readiness
              </h3>

              <p className="
                text-xl text-gray-300
                mb-8
              ">
                Associate Cloud Engineer Track
              </p>

              <p className="
                text-gray-400
                leading-relaxed
                text-lg
              ">
                Focused on cloud deployment,
                scalable infrastructure,
                cloud-native engineering,
                and production-ready systems.
              </p>

            </div>

            {/* RIGHT BADGE */}
            <div className="
              w-32 h-32
              rounded-3xl
              glass
              flex items-center justify-center
              glow
            ">

              <Cloud
                size={60}
                className="text-cyan-400"
              />

            </div>

          </div>

        </motion.div>

        {/* CERT GRID */}
        <div className="
          grid lg:grid-cols-3
          gap-8
          mb-20
        ">

          {certifications.map((cert, index) => {

            const Icon = cert.icon;

            return (

              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}

                className="
                  relative overflow-hidden
                  glass rounded-[2rem]
                  p-8
                  hover:scale-105
                  transition duration-300
                  group
                "
              >

                {/* GLOW */}
                <div
                  className={`
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br ${cert.glow}
                  `}
                />

                <div className="relative z-10">

                  <div className="
                    w-20 h-20
                    rounded-3xl
                    glass
                    flex items-center justify-center
                    mb-8
                  ">

                    <Icon
                      size={40}
                      className="text-cyan-400"
                    />

                  </div>

                  <h3 className="
                    text-2xl font-bold
                    gradient-text
                    mb-4
                  ">
                    {cert.title}
                  </h3>

                  <p className="
                    text-gray-300
                    mb-6
                  ">
                    {cert.subtitle}
                  </p>

                  <p className="
                    text-gray-400
                    leading-relaxed
                  ">
                    {cert.description}
                  </p>

                </div>

              </motion.div>

            );
          })}

        </div>

        {/* CURRENT LEARNING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

          className="
            glass rounded-[2rem]
            p-10
          "
        >

          <div className="
            flex items-center gap-4
            mb-10
          ">

            <BadgeCheck
              className="text-cyan-400"
              size={36}
            />

            <h3 className="
              text-3xl font-bold
              gradient-text
            ">
              Currently Exploring
            </h3>

          </div>

          <div className="
            flex flex-wrap gap-5
          ">

            {learning.map((item) => (

              <div
                key={item}
                className="
                  px-6 py-4
                  rounded-2xl

                  bg-white/5
                  border border-white/10

                  text-gray-300

                  hover:border-cyan-400
                  hover:text-cyan-300

                  transition duration-300
                "
              >
                {item}
              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}