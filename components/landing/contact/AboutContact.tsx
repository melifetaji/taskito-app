import React from "react";
type Props = {};

// #TODO - add map

const AboutContact = (props: Props) => {
	return (
		<div>
			<div className="container mx-auto border-[2px] border-blue-200 bg-neutral-50 shadow-lg rounded-2xl flex flex-col md:flex-row my-4 md:my-[8em] ">
				<div className="flex flex-col md:flex-row justify-between ml-0 md:ml-10">
					<div className="md:w-[50%] p-[2em] md:p-[3em]">
						<h3 className="text-3xl font-semibold md:text-5xl text-zinc-700">
							What we can do for your project
						</h3>
						<p className="text-lg mt-4 text-zinc-500">
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
						<form action="" className="space-y-4 mt-10">
							<div className="input-group">
								<input
									required
									type="text"
									name="name"
									id="name"
									placeholder="Full Name"
									className="input-text"
								/>
							</div>

							<div className="input-group">
								<input
									required
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="input-text"
								/>
							</div>

							<div className="input-group">
								<textarea
									required
									name="message"
									id="message"
									cols={30}
									rows={4}
									className="input-text"
									placeholder="Enter Message"
								/>
							</div>

							<button className="button">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContact;
