"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GitHubData = {
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  html_url: string;
};

export default function GithubLive() {

  const [data, setData] =
    useState<GitHubData | null>(null);

  useEffect(() => {

    async function fetchGitHub() {

      const response = await fetch(
        "https://api.github.com/users/Chirudeep2002"
      );

      const githubData =
        await response.json();

      setData(githubData);
    }

    fetchGitHub();

  }, []);

  if (!data) {

    return (

      <div className="
        glass rounded-[2rem]
        p-10
        text-center
      ">
        Loading GitHub Intelligence...
      </div>

    );
  }

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}

      className="
        glass rounded-[2rem]
        p-10
        overflow-hidden
        relative
      "
    >

      {/* GLOW */}
      <div className="
        absolute top-0 right-0
        w-72 h-72
        bg-cyan-500/10
        blur-[120px]
        rounded-full
      " />

      <div className="relative z-10">

        {/* PROFILE */}
        <div className="
          flex flex-col md:flex-row
          gap-8 items-center
          mb-12
        ">

          <img
            src={data.avatar_url}
            alt="GitHub Profile"
            className="
              w-36 h-36
              rounded-full
              border-4 border-cyan-400
              shadow-[0_0_40px_rgba(0,217,255,0.35)]
            "
          />

          <div>

            <p className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              mb-3
            ">
              Live GitHub Data
            </p>

            <h3 className="
              text-4xl font-bold
              gradient-text
              mb-4
            ">
              {data.name}
            </h3>

            <p className="
              text-gray-300
              max-w-2xl
              leading-relaxed
            ">
              {data.bio}
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-6
          mb-10
        ">

          <div className="glass rounded-3xl p-8 text-center">

            <h4 className="
              text-5xl font-bold
              gradient-text mb-3
            ">
              {data.public_repos}
            </h4>

            <p className="text-gray-400">
              Repositories
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h4 className="
              text-5xl font-bold
              gradient-text mb-3
            ">
              {data.followers}
            </h4>

            <p className="text-gray-400">
              Followers
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h4 className="
              text-5xl font-bold
              gradient-text mb-3
            ">
              {data.following}
            </h4>

            <p className="text-gray-400">
              Following
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h4 className="
              text-5xl font-bold
              gradient-text mb-3
            ">
              AI
            </h4>

            <p className="text-gray-400">
              Engineering Focus
            </p>

          </div>

        </div>

        {/* BUTTON */}
        <a
          href={data.html_url}
          target="_blank"
          className="
            inline-flex items-center gap-4
            px-8 py-4
            rounded-2xl

            bg-cyan-500
            text-black
            font-bold

            glow

            hover:scale-105
            transition duration-300
          "
        >
          View GitHub Profile
        </a>

      </div>

    </motion.div>
  );
}