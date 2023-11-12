"use client";

import { useState } from "react";
import { useEventListener } from "usehooks-ts";

const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEventListener("mousemove", handleMouseMove);

  return { ...position };
};

export default useMouseMove;
