import React, { FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Checkbox: FC<Props> = (props) => {
  const { ...attributes } = props;
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="peer/checkbox hidden h-0 w-0"
        {...attributes}
      />
      <div className="h-4 w-14 rounded-full bg-gray-400 transition-all duration-300 peer-checked/checkbox:bg-primary"></div>
      <div className="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-secondary transition-all duration-300 peer-checked/checkbox:left-full peer-checked/checkbox:-translate-x-full peer-checked/checkbox:bg-accent"></div>
    </div>
  );
};

export default Checkbox;
