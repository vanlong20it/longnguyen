import React, { FC } from "react";

interface Props {
  title: string;
  backgroundTitle: string;
}

const FixedText: FC<Props> = ({ title, backgroundTitle }) => {
  return (
    <div className="relative text-center">
      <div className="relative text-9xl text-gray-300/10 select-none">
        {backgroundTitle}
      </div>
      <div className="absolute left-1/2 text-5xl top-1/2 text-white -translate-x-1/2 -translate-y-1/2">
        {title}
      </div>
    </div>
  );
};

export default FixedText;
