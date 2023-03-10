import Head from "next/head";
import ContactMain from "@/components/landing/contact/AboutContact";
export default function Home() {
	return (
		<>
			<Head>
				<title>Taskito - Contact Us</title>
				<meta name="description" content="Manage your daily tasks." />
				<meta
					name="keywords"
					content="Task Manager, App, Productivity, Schedule, To-Do List, Goals, Organization, Time Management, Prioritization, Deadlines, Collaboration, Cloud-Based, Mobile-Friendly."
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<div className="px-4 md:px-0 mt-[5em]">
					<ContactMain />
				</div>
			</main>
		</>
	);
}
