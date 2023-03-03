import Head from "next/head";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

type Props = {};

const Register = (props: Props) => {
	return (
		<div>
			<Head>
				<title>Register</title>
			</Head>
			<AuthLayout>
				<section className="w-3/4 mx-auto flex flex-col gap-10">
					<div className="title">
						<h1 className="text-gray-800 text-4xl font-bold py-4">Register </h1>
						<p className="w-3/4 mx-auto text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							officia?
						</p>
					</div>

					{/* form */}
					<form className="flex flex-col gap-5">
						<div className="input-group">
							<input
								type="text"
								name="username"
								placeholder="Username"
								className="input-text"
							/>
							<span className="icon flex items-center px-4">
								<HiOutlineUser size={25} />
							</span>
						</div>
						<div className="input-group">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="input-text"
							/>
							<span className="icon flex items-center px-4">
								<HiAtSymbol size={25} />
							</span>
						</div>
						<div className="input-group">
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="input-text"
							/>
							<span className="icon flex items-center px-4">
								<HiFingerPrint size={25} />
							</span>
						</div>
						<div className="input-group">
							<input
								type="password"
								name="cpassword"
								placeholder="Confirm Password"
								className="input-text"
							/>
							<span className="icon flex items-center px-4">
								<HiFingerPrint size={25} />
							</span>
						</div>

						{/* login buttons */}
						<div className="input-button">
							<button type="submit" className="button">
								Login
							</button>
						</div>
					</form>

					{/* bottom */}
					<p className="text-center text-gray-400 ">
						Already have an account?
						<Link href={"/login"} className="text-blue-500 underline ml-2">
							Sign In
						</Link>
					</p>
				</section>
			</AuthLayout>
		</div>
	);
};

export default Register;
