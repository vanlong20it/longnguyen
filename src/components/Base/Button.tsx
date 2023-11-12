import classNames from "@/utils/classNames";
import React, { FC, ReactNode } from "react";

interface ButtonType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  htmlType?: "button" | "submit" | "reset";
  children: ReactNode;
  accent?: "primary" | "secondary" | "accent";
}

const Button: FC<ButtonType> = ({ children, accent = "primary", ...props }) => {
  return (
    <button
      {...props}
      type={props.htmlType}
      className={classNames(
        props.className ?? "",
        "inline-flex min-h-[2.5rem] items-center justify-center rounded px-6 py-2.5 transition-all",
        accent === "primary" ? "bg-primary text-black hover:shadow-lg" : "",
        accent === "secondary" ? "bg-secondary text-white hover:shadow-lg" : "",
        accent === "accent" ? "bg-accent hover:shadow-lg" : "",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
