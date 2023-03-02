import Head from "next/head";
import AboutMain from "@/components/landing/about/AboutMain";
import Card from "@/components/utils/Card";
import Footer from "@/components/landing/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Taskito - About Us</title>
				<meta name="description" content="Manage your daily tasks." />
				<meta
					name="keywords"
					content="Task Manager, App, Productivity, Schedule, To-Do List, Goals, Organization, Time Management, Prioritization, Deadlines, Collaboration, Cloud-Based, Mobile-Friendly."
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<div className="px-4 md:px-0 mt-[5em] container mx-auto">
					<AboutMain />
					<div className="grid md:grid-cols-3 gap-6 mb-[6em]">
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
						<Card
							title="Lorem ipsum dolor sit amet consectetur."
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque, aut quod minus quia dolores repudiandae? Impedit voluptatem, numquam, dolor ex velit hic esse, quam suscipit asperiores iusto quasi accusamus."
						/>
					</div>
				</div>
			</main>
		</>
	);
}
