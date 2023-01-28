import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary";
  size?: "large" | "medium";
};

const Button = ({ children, className, type, size }: Props) => {
  let background = type === "primary" ? "bg-blue-600" : "bg-gray-600";
  let btnSize = size === "large" ? "px-8 py-4 text-xl" : "";
  return (
    <div
      className={`cursor-pointer max-w-fit inline-block px-4 py-2 ${background} hover:bg-blue-700 rounded-lg text-white ${btnSize} ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
