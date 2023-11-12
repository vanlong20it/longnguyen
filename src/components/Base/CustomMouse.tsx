"use client";
import useMouseMove from "@/hooks/useMouseMove";
import React, { useEffect, useRef } from "react";
import { useEventListener } from "usehooks-ts";

const CustomMouse = () => {
  const { x, y } = useMouseMove();
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    document.querySelectorAll("a, button").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        if (cursorRef.current) {
          cursorRef.current.style.width = "3rem";
          cursorRef.current.style.height = "3rem";
        }
      });

      element.addEventListener("mouseleave", function () {
        if (cursorRef.current) {
          cursorRef.current.style.width = "2.5rem";
          cursorRef.current.style.height = "2.5rem";
        }
      });
    });
  }, []);

  useEventListener("mouseenter", handleMouseEnter);
  useEventListener("mouseleave", handleMouseLeave);
  return (
    <div
      ref={cursorRef}
      style={{ top: `${y}px`, left: `${x}px` }}
      className="pointer-events-none fixed z-[999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-300 to-yellow-400 opacity-50 mix-blend-difference transition-[width,height] duration-300 ease-linear"
    ></div>
  );
};

export default CustomMouse;
