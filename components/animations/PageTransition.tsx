import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
type Props = {
	children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
	const router = useRouter();
	if (router.route === "/login" || router.route === "/register") {
		return <>{children}</>;
	} else {
		return (
			<AnimatePresence mode="wait">
				<motion.div
					key={router.route}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					variants={{
						initialState: {
							y: 100,
							opacity: 0,
							transition: { duration: 0.3 },
						},
						animateState: {
							y: 0,
							opacity: 1,
							transition: { duration: 0.3 },
						},
						exitState: {
							y: -100,
							opacity: 0,
							transition: { duration: 0.3 },
						},
					}}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		);
	}
};

export default PageTransition;
