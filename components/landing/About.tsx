import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src="/3D2.png"
					width={700}
					height={700}
					alt="About Us"
					className="hidden md:block rounded-2xl"
				/>
				<div className="flex flex-col justify-center max-w-100% md:max-w-[80%]">
					<h5 className="text-sm uppercase text-blue-600 font-semibold text-gradient">
						About Us
					</h5>

					<h3 className="text-4xl font-bold text-slate-900 my-2">
						Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-zinc-700 my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum molestiae quod ut possimus laboriosam
						ratione? Consequuntur accusamus, quis saepe distinctio ad, magnam
						fuga numquam amet dicta fugiat, reprehenderit quidem.
					</p>
					<p className="text-zinc-700 mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at
						blanditiis molestias voluptates aliquam sed provident numquam
						reiciendis dicta enim?
					</p>
					<Link href="/about" className="uppercase text-blue-600">
						READ MORE &gt;
					</Link>
				</div>
			</div>

			<hr className="my-10 md:my-0" />
			<div className="grid grid-cols-1 md:grid-cols-2 order-last">
				<div className="flex flex-col justify-center  max-w-100% md:max-w-[80%] justify-self-end">
					<h5 className="text-sm uppercase text-blue-600 font-semibold text-gradient">
						Choose For Yourself
					</h5>

					<h3 className="text-4xl font-bold text-slate-900 my-2">
						Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-zinc-700 my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur voluptatum molestiae quod ut possimus laboriosam
						ratione? Consequuntur accusamus, quis saepe distinctio ad, magnam
						fuga numquam amet dicta fugiat, reprehenderit quidem.
					</p>
					<p className="text-zinc-700 mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at
						blanditiis molestias voluptates aliquam sed provident numquam
						reiciendis dicta enim?
					</p>
					<Link href="/about" className="uppercase text-blue-600">
						READ MORE &gt;
					</Link>
				</div>
				<Image src="/3D3.png" width={700} height={700} alt="About Us" />
			</div>
		</div>
	);
};

export default About;
