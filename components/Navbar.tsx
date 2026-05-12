"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}

  className="
    fixed top-0 left-0 right-0
    z-50

    bg-[#050816]/70
    backdrop-blur-2xl

    border border-white/10

    shadow-[0_0_40px_rgba(0,217,255,0.08)]

    rounded-2xl
    mx-3 md:mx-6
    mt-3 md:mt-4

    transition duration-300
  "
>

  <div className="
    max-w-7xl mx-auto

    px-5 md:px-8
    py-4

    flex justify-between items-center
  ">

    {/* LOGO */}
    <h1 className="
      text-xl md:text-2xl
      font-bold
      gradient-text
    ">
      CHIRU.SYSTEM
    </h1>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex gap-8">

      {links.map((link) => (

        <a
          key={link}
          href={`#${link.toLowerCase()}`}

          className="
            hover:text-cyan-400

            transition duration-300

            relative

            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-cyan-400

            hover:after:w-full

            after:transition-all
            after:duration-300
          "
        >
          {link}
        </a>

      ))}

    </div>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setOpen(!open)}
      className="
        md:hidden

        p-2 rounded-xl

        glass
      "
    >

      {open ? (
        <X className="text-cyan-400" />
      ) : (
        <Menu className="text-cyan-400" />
      )}

    </button>

  </div>

  {/* MOBILE MENU */}
  {open && (

    <div className="
      md:hidden

      px-5 pb-5

      flex flex-col gap-4
    ">

      {links.map((link) => (

        <a
          key={link}
          href={`#${link.toLowerCase()}`}

          onClick={() => setOpen(false)}

          className="
            glass

            px-5 py-4
            rounded-2xl

            hover:border-cyan-400

            transition duration-300
          "
        >
          {link}
        </a>

      ))}

    </div>

  )}

</motion.nav>
  );
}