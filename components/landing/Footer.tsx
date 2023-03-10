import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Footer = (props: Props) => {
	const router = useRouter();
	if (router.route === "/" || router.route === "/about")
		return (
			<footer className="bg-black py-2 flex bottom-0">
				<div className="container mx-auto">
					<h6 className="text-zinc-300 text-center">
						🎉 Meli Fetaji &copy;2023
					</h6>
				</div>
			</footer>
		);
	return null;
};

export default Footer;
