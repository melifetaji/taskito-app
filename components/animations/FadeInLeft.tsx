import React from "react";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
};

function FadeInLeft({ children }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
}

export default FadeInLeft;
