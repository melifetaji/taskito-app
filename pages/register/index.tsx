import Head from "next/head";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import {
	HiAtSymbol,
	HiFingerPrint,
	HiOutlineUser,
	HiOutlineBadgeCheck,
} from "react-icons/hi";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { register_validate } from "@/lib/validate";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {};
const Register = (props: Props) => {
	const [exists, setExists] = useState(false);
	const router = useRouter();

	const URL =
		process.env.NODE_ENV === "production"
			? "https://taskito-app.vercel.app/"
			: "http://localhost:3000";

	const onSubmit = async (values: any) => {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		};

		await fetch(`${URL}/api/auth/signup`, options).then((res: any) => {
			if (res.status === 422) {
				setExists(true);
			} else {
				router.push("/login");
			}
		});
	};

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			cpassword: "",
		},
		validate: register_validate,
		onSubmit,
	});
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
					{exists ? (
						<p className="text-red-500 text-sm">User Already Exists</p>
					) : (
						<p className="text-sm text-slate-500">Enter Credentials</p>
					)}
					{/* form */}
					<form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
						<div
							className={`${
								formik.errors.username && formik.touched.username
									? "border-rose-500"
									: ""
							} input-group`}
						>
							<input
								type="text"
								placeholder="Username"
								className="input-text"
								{...formik.getFieldProps("username")}
							/>
							<span className="icon flex items-center px-4">
								<HiOutlineUser size={25} />
							</span>
						</div>

						<div
							className={`${
								formik.errors.email && formik.touched.email
									? "border-rose-500"
									: ""
							} input-group`}
						>
							<input
								type="email"
								placeholder="Email"
								className="input-text"
								{...formik.getFieldProps("email")}
							/>
							<span className="icon flex items-center px-4">
								<HiAtSymbol size={25} />
							</span>
						</div>

						<div
							className={`${
								formik.errors.password && formik.touched.password
									? "border-rose-500"
									: ""
							} input-group`}
						>
							<input
								type="password"
								placeholder="Password"
								className="input-text"
								{...formik.getFieldProps("password")}
							/>
							<span className="icon flex items-center px-4">
								<HiFingerPrint size={25} />
							</span>
						</div>

						<div
							className={`${
								formik.errors.cpassword && formik.touched.cpassword
									? "border-rose-500"
									: ""
							} input-group`}
						>
							<input
								type="password"
								placeholder="Confirm Password"
								className="input-text"
								{...formik.getFieldProps("cpassword")}
							/>
							<span className="icon flex items-center px-4">
								<HiOutlineBadgeCheck size={25} />
							</span>
						</div>

						{/* login buttons */}
						<div className="input-button">
							<button type="submit" className="button">
								Register
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

export async function getServerSideProps({ req }: any) {
	const session = await getSession({ req });
	if (session) {
		return {
			redirect: {
				destination: "/dashboard",
				permanent: false,
			},
		};
	}
	return {
		props: {
			session,
		},
	};
}
