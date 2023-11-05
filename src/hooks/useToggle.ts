import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, toggle };
};
