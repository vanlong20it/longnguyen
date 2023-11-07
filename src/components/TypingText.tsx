"use client";

import React, { FC, useEffect, useLayoutEffect, useState } from "react";

interface Props {
  text: string;
  duration?: number;
}

const TypingText: FC<Props> = ({ text, duration }) => {
  const [textArr, setTextArr] = useState(text.split(""));
  const [tempText, setTempText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useLayoutEffect(() => {
    if (textArr.length < tempText.length) {
      setTempText("");
      setTextIndex(0);
      return;
    }
    const interval = setInterval(
      () => {
        setTextIndex((prev) => prev + 1);
        setTempText((prev) => (prev += textArr[textIndex]));
      },
      duration ? (textArr.length === tempText.length ? 3000 : duration) : 200,
    );
    return () => clearInterval(interval);
  }, [tempText, textIndex]);

  return (
    <span className="">
      <span className="">{tempText}</span>
      <span className="animate-pulse duration-200">|</span>
    </span>
  );
};

export default TypingText;
