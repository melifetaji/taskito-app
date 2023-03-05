import React from "react";
import Image from "next/image";

type Props = {
	children?: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
	return (
		<div className="flex h-screen bg-blue-400">
			<div className="m-auto bg-slate-50 rounded-md h-full md:w-3/5 md:h-5/6 lg:h-3/4 grid lg:grid-cols-2">
				<div className="imgStyle">
					<Image
						src="/assets/img2.png"
						alt="Cartoon Image"
						fill={true}
						style={{
							position: "absolute",
							objectPosition: "65% 100px",
							objectFit: "cover",
							zIndex: 1,
						}}
						priority={true}
					/>
					<Image
						src="/assets/cloud_1.png"
						alt="Cloud one"
						width={180}
						height={100}
						style={{
							position: "absolute",
							top: "65%",
							left: "10%",
							zIndex: 2,
							transform: "translateX(290%)",
						}}
						className="cloud_one"
					/>
					<Image
						src="/assets/cloud_2.png"
						alt="Cloud one"
						width={200}
						height={100}
						style={{
							position: "absolute",
							top: "49%",
							left: "50%",
							zIndex: 0,
							transform: "translateX(290%)",
						}}
						className="cloud_one transformX-[-290%]"
					/>
				</div>
				<div className="right flex flex-col justify-evenly">
					<div className="text-center py-10 bg-slate-50 ">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
