import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
type Props = {};

const Dashboard = (props: Props) => {
	const [session, setSession] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (session === false) {
			router.push("/login");
		}
	}, [session]);

	return (
		<main className="container mx-auto text-center py-20">
			<h3>Dashboard</h3>
			<div className="details">
				<h5>Unknown</h5>
				<h5>Email</h5>
			</div>

			<div className="flex justify-center">
				<button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
					Sign Out
				</button>
			</div>

			<div className="flex justify-center">
				<Link
					href={"/dashboard/profile"}
					className="mt-5 px-10 py-1 rounded -sm bg-indigo-500"
				>
					Profile Page
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;
