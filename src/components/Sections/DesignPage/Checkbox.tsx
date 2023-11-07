import React, { FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Checkbox: FC<Props> = (props) => {
  const { ...attributes } = props;
  return (
    <input
      type="checkbox"
      {...attributes}
      className="h-10 w-10 checked:accent-primary"
    />
  );
};

export default Checkbox;
