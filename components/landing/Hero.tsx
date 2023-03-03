import React from "react";
import Button from "../utils/Button";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../animations/FadeInRight";
import FadeInLeft from "../animations/FadeInLeft";

import { motion } from "framer-motion";
type Props = {};

const Hero = (props: Props) => {
	return (
		<div>
			<div className="container mx-auto md:mt-[8em] border-[2px] border-blue-200 bg-neutral-50 shadow-lg rounded-2xl flex flex-col md:flex-row my-8 p-[2em] bg-gradient-to-br from-red-50 to-blue-100">
				<div className="flex justify-center flex-col ml-0 md:ml-10">
					<FadeInLeft>
						<h1 className="text-6xl font-semibold md:text-8xl text-slate-900">
							Get more done in <br />
							<span className="text-gradient">less time</span>
						</h1>
					</FadeInLeft>
					<FadeInRight>
						<p className="text-lg py-5 max-w-[80%] text-slate-700">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
							nisi rerum quis atque non nam magni dolores ab assumenda nesciunt!
						</p>
					</FadeInRight>
					<motion.div
						className="flex flex-row"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						<Button type="primary" size="large" className="mr-3" hover={true}>
							<Link href="/register">Get Started</Link>
						</Button>
						<Link href="/about">
							<Button size="large">Learn More</Button>
						</Link>
					</motion.div>
				</div>
				<div className="hidden md:block">
					<Image src="/3D.png" width={1000} height={1000} alt="" />
				</div>
			</div>
			<Image
				src="/3D.png"
				width={1000}
				height={1000}
				alt=""
				className="block md:hidden"
			/>
		</div>
	);
};

export default Hero;
