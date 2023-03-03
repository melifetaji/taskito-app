import React from "react";
import Button from "../utils/Button";

type Props = {};

const Newsletter = (props: Props) => {
	return (
		<section className="container mx-auto border-2 border-blue-200  bg-gradient-to-br from-blue-100 to-red-50 p-[3em] rounded-2xl my-10 shadow-xl">
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div>
					<h5 className="text-4xl font-bold text-slate-900">
						Don't miss an update
					</h5>
					<p className="max-w-[80%] text-zinc-600 my-3">
						Sign up for our newsletter to get alpha, key insights and killer
						resources.
					</p>
				</div>

				<form action="" className="flex items-center text-slate-900">
					<input
						type="text"
						placeholder="john@gmail.com"
						className="p-2 rounded-md w-[100%] relative my-3 border"
					/>

					<button className="px-4 py-2 rounded-md ml-3 relative my-3 border bg-gradient-to-r from-blue-500 to-indigo-500 text-slate-50">
						Enter
					</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
