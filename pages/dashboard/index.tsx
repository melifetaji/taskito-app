import React from "react";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";

type Props = {};

const Dashboard = (props: Props) => {
	const URL =
		process.env.NODE_ENV === "production"
			? "https://taskito-app.vercel.app/"
			: "http://localhost:3000";

	const { data: session } = useSession();

	const handleSignOut = () => {
		signOut({
			callbackUrl: URL,
		});
	};

	return (
		<main className="container mx-auto text-center py-20">
			<h3 className="text-6xl font-bold">Dashboard</h3>
			<div className="details mt-10">
				<h5>{session?.user?.name}</h5>
				<h5>{session?.user?.email}</h5>
			</div>

			<div className="flex justify-center">
				<button
					className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50 w-[200px]"
					onClick={handleSignOut}
				>
					Sign Out
				</button>
			</div>

			<div className="flex justify-center">
				<Link
					href={"/dashboard/profile"}
					className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50 w-[200px]"
				>
					Profile Page
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;

export async function getServerSideProps({ req }: any) {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
}
