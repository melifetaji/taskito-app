import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "black";
  size?: "large" | "medium";
  hover?: boolean;
};

const Button = ({ children, className, type, size, hover }: Props) => {
  let background = "bg-black";

  if (type === "primary") {
    background = "bg-blue-600";
  }
  let btnSize = null;

  if (size === "large") {
    btnSize = "px-6 py-3 md:text-lg";
  } else if (size === "medium") {
    btnSize = "ml-3 py-1 px-2 md:p-2";
  }

  return (
    <button
      className={`cursor-pointer max-w-fit inline-block ${background}  rounded-lg text-white ${btnSize} ${
        hover
          ? " hover:bg-gradient-to-r from-blue-600 to-violet-800 "
          : "hover:bg-blue-700"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
