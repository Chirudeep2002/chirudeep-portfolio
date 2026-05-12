"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] =
    useState({ x: 0, y: 0 });

  useEffect(() => {

    const updateMouse = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener(
      "mousemove",
      updateMouse
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        updateMouse
      );

  }, []);

  return (

    <div
      className="
        fixed pointer-events-none
        z-[9999]
        w-[350px] h-[350px]
        rounded-full
        blur-[120px]
        opacity-20
        bg-cyan-400
        transition-transform duration-150
      "
      style={{
        left: position.x - 175,
        top: position.y - 175,
      }}
    />

  );
}