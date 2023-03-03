import React from "react";

type Props = {
	className?: string;
	children: React.ReactNode;
	type?: "primary" | "dark" | "black";
	size?: "large" | "medium";
};

const Button = ({ children, className, type, size }: Props) => {
	let background = null;

	if (type === "primary") {
		background = "button";
	} else if (type === "black") {
		background = "button-black";
	} else if (type === "dark") {
		background = "button-dark";
	}

	let btnSize = null;

	if (size === "large") {
		btnSize = "px-6 py-3 md:text-lg";
	} else if (size === "medium") {
		btnSize = "ml-3 py-1 px-2 md:p-2";
	}

	return (
		<button
			className={` cursor-pointer max-w-fit inline-block rounded-lg ${background} text-white ${btnSize} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
