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
            className="p-2 rounded-md w-[100%] relative my-3 border-2 "
          />
          <Button type="primary" className="ml-2 w-[100%] p-2">
            Enter
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
