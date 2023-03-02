import React from 'react';
type Props = {};

const AboutContact = (props: Props) => {
	return (
		<div>
			<div className="container mx-auto border-[2px] border-blue-200 bg-neutral-50 shadow-lg rounded-2xl flex flex-col md:flex-row my-4 md:my-[8em] ">
				<div className="flex flex-col md:flex-row justify-between ml-0 md:ml-10">
					<div className="md:w-[50%] p-[2em] md:p-[3em]">
						<h3 className="text-3xl font-semibold md:text-5xl text-zinc-700">
							What we can do for your project
						</h3>
						<p className="text-lg mt-1 text-zinc-500">
							Let's explore how Taskito can work for you.
						</p>
						<div className="bg-gradient-to-br from-blue-100 to-red-50 p-3 mt-[2em] rounded-md">
							<p className="border-b-2 border-zinc-300 p-3">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Corporis qui est veniam beatae optio quod architecto! Ex.
							</p>
							<p className="border-b-2 border-zinc-300 p-3">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Corporis qui est veniam beatae optio quod architecto! Ex.
							</p>
							<p className="p-3">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Corporis qui est veniam beatae optio quod architecto! Ex.
							</p>
						</div>

						<p className="text-sm text-zinc-500 mt-[1em]">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Obcaecati nesciunt soluta perspiciatis cumque quibusdam quos quod
							tempora sint unde voluptatibus?
						</p>
					</div>
					<div className=" md:w-[50%] p-[3em]">
						<h1 className="text-3xl font-semibold md:text-5xl text-zinc-700 mb-4">
							Contact our sales team
						</h1>
						<form action="">
							<div className="flex flex-col mt-3">
								<label htmlFor="name" className="text-zinc-700">
									Full Name
								</label>
								<input
									required
									type="text"
									name="name"
									id="name"
									className="border-2 border-zinc-300 p-2 rounded-md focus:border-blue-300"
								/>
							</div>

							<div className="flex flex-col mt-3">
								<label htmlFor="email" className="text-zinc-700">
									Email
								</label>
								<input
									required
									type="email"
									name="email"
									id="email"
									className="border-2 border-zinc-300 p-2 rounded-md focus:border-blue-300"
								/>
							</div>
							<div className="flex flex-col mt-3">
								<label htmlFor="message" className="text-zinc-700">
									Message
								</label>
								<textarea
									required
									name="message"
									id="message"
									cols={30}
									rows={4}
									className="border-2 border-zinc-300 p-2 rounded-md focus:border-blue-300"
								></textarea>
							</div>
							<button className="bg-zinc-700 text-zinc-100 p-2 rounded-md mt-3 min-w-full hover:bg-gradient-to-r from-blue-600 to-violet-800 ">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContact;
