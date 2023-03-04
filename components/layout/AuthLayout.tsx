import React from "react";

type Props = {
	children?: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
	return (
		<div className="flex h-screen bg-blue-400">
			<div className="m-auto bg-slate-50 rounded-md h-full md:w-3/5 md:h-5/6 lg:h-3/4 grid lg:grid-cols-2">
				<div className="imgStyle">
					<div className="cartoonImg"></div>
					<div className="cloud_one"></div>
					<div className="cloud_two"></div>
				</div>
				<div className="right flex flex-col justify-evenly">
					<div className="text-center py-10 bg-slate-50 ">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
