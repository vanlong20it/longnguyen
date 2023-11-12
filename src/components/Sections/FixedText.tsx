import React, { FC } from "react";

interface Props {
  title: string;
  backgroundTitle: string;
}

const FixedText: FC<Props> = ({ title, backgroundTitle }) => {
  return (
    <div className="relative text-center">
      <div className="relative select-none text-5xl text-primary/10 lg:text-9xl">
        {backgroundTitle}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white lg:text-5xl">
        {title}
      </div>
    </div>
  );
};

export default FixedText;
