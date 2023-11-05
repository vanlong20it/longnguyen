import React, { FC } from "react";

interface Props {
  name: string;
  role: string;
  feedback: string;
  rate: number;
}

const FeedbackItem: FC<Props> = ({ name, role, rate, feedback }) => {
  return (
    <div className="rounded bg-gray-700 p-5 text-white">
      <div>
        <h4 className="text-lg">{name}</h4>
        <p className="text-gray-400">{role}</p>
      </div>
      <p className="mt-4">{`"${feedback}"`}</p>
      <div className="mt-10 text-yellow-400">{rate}</div>
    </div>
  );
};

export default FeedbackItem;
