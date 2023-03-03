import Head from "next/head";
import Hero from "@/components/landing/Hero";
import Progress from "@/components/landing/Progress";
import WhyUs from "@/components/landing/WhyUs";
import About from "@/components/landing/About";
import Newsletter from "@/components/landing/Newsletter";
import Build from "@/components/landing/GetStarted";

export default function Home() {
	console.log(process.env.NODE_ENV);
	return (
		<>
			<Head>
				<title>Taskito - Task Manager</title>
				<meta name="description" content="Manage your daily tasks." />
				<meta
					name="keywords"
					content="Task Manager, App, Productivity, Schedule, To-Do List, Goals, Organization, Time Management, Prioritization, Deadlines, Collaboration, Cloud-Based, Mobile-Friendly."
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<div className="px-4 md:px-0 mt-[5em]">
					<Hero />
					<Progress />
					<About />
					<WhyUs />
					<Newsletter />
				</div>
				<Build />
			</main>
		</>
	);
}
