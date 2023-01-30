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

  const btnSize = size === "large" ? "px-6 py-3 md:text-lg" : "";
  return (
    <button
      className={`cursor-pointer max-w-fit inline-block px-4 py-2 ${background}  rounded-lg text-white ${btnSize} ${
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
