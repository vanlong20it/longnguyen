import React, { FC } from "react";

interface Props {
  value: number;
}
const ProgressBar: FC<Props> = ({ value }) => {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-primary"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
