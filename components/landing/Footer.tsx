import React from "react";
import { useRouter } from "next/router";
import MiddlewareFade from "../animations/MiddlewareFade";

type Props = {};

const Footer = (props: Props) => {
	const router = useRouter();
	if (
		router.route === "/contact" ||
		router.route === "/login" ||
		router.route === "/register"
	)
		return null;
	return (
		<MiddlewareFade>
			<footer className="bg-black py-2 flex bottom-0">
				<div className="container mx-auto">
					<h6 className="text-zinc-300 text-center">
						🎉 Meli Fetaji &copy;2023
					</h6>
				</div>
			</footer>
		</MiddlewareFade>
	);
};

export default Footer;
