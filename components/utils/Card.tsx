import React from "react";

type Props = {
	title: string;
	content: string;
	className?: string;
};

const Card = ({ title, content, className }: Props) => {
	return (
		<div
			className={`shadow-md rounded-2xl flex flex-col p-[2em] border-[2px] hover:border-violet-200`}
		>
			<h3 className="mb-4 text-2xl font-semibold">{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default Card;
