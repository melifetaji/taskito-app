import Head from "next/head";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { getSession, useSession, signIn } from "next-auth/react";
import { useFormik } from "formik";
import { login_validate } from "@/lib/validate";
import { useRouter } from "next/router";

export default function Login() {
	const URL =
		process.env.NODE_ENV === "production"
			? "https://taskito-app.vercel.app/"
			: "http://localhost:3000";

	const [show, setShow] = useState(false);
	const [match, setMatch] = useState(true);
	const router = useRouter();

	const onSubmit = async (values: any) => {
		const status = await signIn("credentials", {
			redirect: false,
			email: values.email,
			password: values.password,
			callbackUrl: `${URL}/dashboard`,
		});

		if (status?.ok) {
			router.push("/dashboard");
		} else {
			setMatch(false);
		}
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: login_validate,
		onSubmit,
	});

	const handleGoogleSignin = async () => {
		signIn("google", { callbackUrl: `${URL}/dashboard` });
	};

	const handleGithubSignin = async () => {
		signIn("github", { callbackUrl: `${URL}/dashboard` });
	};

	return (
		<AuthLayout>
			<Head>
				<title>Login</title>
			</Head>

			<section className="w-3/4 mx-auto flex flex-col gap-10 h-auto">
				<div className="title">
					<h1 className="text-gray-800 text-4xl font-bold py-4">
						Welcome to Taskito
					</h1>
					<p className="w-3/4 mx-auto text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
						officia?
					</p>
				</div>

				{/* form */}
				<form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
					{match ? (
						<p className="text-sm text-slate-500">Enter Credentials</p>
					) : (
						<p className="text-red-500 text-sm">Invalid Credentials</p>
					)}
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
							type={`${show ? "text" : "password"}`}
							placeholder="password"
							className="input-text"
							{...formik.getFieldProps("password")}
						/>
						<span
							className="icon flex items-center px-4"
							onClick={() => setShow(!show)}
						>
							<HiFingerPrint size={25} />
						</span>
					</div>

					{/* login buttons */}
					<div className="input-button">
						<button type="submit" className="button">
							Login
						</button>
					</div>
					<div className="input-button">
						<button
							type="button"
							className="button-custom"
							onClick={handleGoogleSignin}
						>
							Sign In with Google
							<Image src={"/assets/google.svg"} width="20" height={20} alt="" />
						</button>
					</div>
					<div className="input-button">
						<button
							type="button"
							className="button-custom"
							onClick={handleGithubSignin}
						>
							Sign In with Github
							<Image src={"/assets/github.svg"} width={25} height={25} alt="" />
						</button>
					</div>
				</form>

				{/* bottom */}
				<p className="text-center text-gray-400 ">
					Don't have an account yet?
					<Link href={"/register"} className="text-blue-500 underline ml-2">
						Sign Up
					</Link>
				</p>
			</section>
		</AuthLayout>
	);
}

export async function getServerSideProps({ req }: any) {
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: {
				destination: "/dashboard",
			},
		};
	}

	return {
		props: { session },
	};
}
